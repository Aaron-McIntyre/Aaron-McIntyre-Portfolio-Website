import Image from "next/image";
import StarBackground from "./components/StarBackground";
import Navbar from "./components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <StarBackground />
    <Navbar />
    
    <div className="w-full h-screen">
      <h1 className="text-6xl text-white font-bold text-center pt-40">Aaron McIntyre</h1>
    </div>
    </>
  );
}
