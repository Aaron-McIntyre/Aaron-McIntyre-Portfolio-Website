import { NextRequest, NextResponse } from "next/server";


const rateLimitMap = new Map<string, { count: number; last: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; 
const MAX_REQUESTS = 5;

function rateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip) || { count: 0, last: now };

  if (now - entry.last > RATE_LIMIT_WINDOW) {
    rateLimitMap.set(ip, { count: 1, last: now });
    return false;
  }

  if (entry.count >= MAX_REQUESTS) return true;

  entry.count++;
  rateLimitMap.set(ip, entry);
  return false;
}


function sanitizeInput(str: string, maxLength = 500) {
  return str.replace(/<[^>]*>?/gm, "").trim().slice(0, maxLength);
}

export async function POST(req: NextRequest) {
  try {
    
    const ip = req.headers.get("x-forwarded-for") || "unknown";
    if (rateLimit(ip)) {
      return NextResponse.json(
        { success: false, error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const requestBody = await req.json();

  
    const name = sanitizeInput(requestBody.name || "", 100);
    const email = (requestBody.email || "").trim();
    const title = sanitizeInput(requestBody.title || "", 150);
    const message = sanitizeInput(requestBody.message || "", 1000);

    
    if (!name || !email || !title || !message) {
      return NextResponse.json(
        { success: false, error: "All fields are required." },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { success: false, error: "Invalid email address." },
        { status: 400 }
      );
    }

   
    const serviceID = process.env.EMAILJS_SERVICE_ID;
    const templateID = process.env.EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.EMAILJS_PUBLIC_KEY;
    const privateKey = process.env.EMAILJS_PRIVATE_KEY;

    if (!serviceID || !templateID || !publicKey || !privateKey) {
      console.error("EmailJS env vars missing.");
      return NextResponse.json(
        { success: false, error: "Server misconfiguration." },
        { status: 500 }
      );
    }

    const emailJsPayload = {
      service_id: serviceID,
      template_id: templateID,
      user_id: publicKey,
      accessToken: privateKey,
      template_params: {
        name,
        email,
        title,
        message,
      },
    };

    const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(emailJsPayload),
    });

    const responseText = await res.text();

    if (!res.ok) {
      console.error(`EmailJS API failed with status ${res.status}`);
      throw new Error(`EmailJS Error: ${responseText}`);
    }

    console.log(`Email successfully sent for ${email}`);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send email." },
      { status: 500 }
    );
  }
}
