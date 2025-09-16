"use client";

import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import FeaturedProjectCard from "./FeaturedProjectCard";

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A modern portfolio built with Next.js and TailwindCSS.",
    imageUrl: "/images/portfolioWebsiteScreenshot.png",
    projectLink: "https://myportfolio.com",
    githubProjectLink: "https://myportfolio.com",
    tags: [
      "Next.js",
      "TailwindCSS",
      "Framer Motion",
      "Test1",
      "Test2",
      "Test3",
      "Test4",
      "Test5",
      "Test6",
    ],
  },
  {
    id: 2,
    title: "E-Commerce Store",
    description: "Full-stack store with payments integration.",
    imageUrl: "/images/portfolioWebsiteScreenshot.png",
    projectLink: "https://mystore.com",
    tags: ["React", "Node.js", "Stripe"],
  },
  {
    id: 3,
    title: "Blog Platform",
    description: "A blog platform with authentication and CMS features.",
    imageUrl: "/images/portfolioWebsiteScreenshot.png",
    projectLink: "https://myblog.com",
    tags: ["Next.js", "Prisma", "PostgreSQL"],
  },
  {
    id: 4,
    title: "E-Commerce Store",
    description: "Full-stack store with payments integration.",
    imageUrl: "/images/portfolioWebsiteScreenshot.png",
    projectLink: "https://mystore.com",
    tags: ["React", "Node.js", "Stripe"],
  },
  {
    id: 5,
    title: "Blog Platform",
    description: "A blog platform with authentication and CMS features.",
    imageUrl: "/images/portfolioWebsiteScreenshot.png",
    projectLink: "https://myblog.com",
    tags: ["Next.js", "Prisma", "PostgreSQL"],
  },
  {
    id: 6,
    title: "E-Commerce Store",
    description: "Full-stack store with payments integration.",
    imageUrl: "/images/portfolioWebsiteScreenshot.png",
    projectLink: "https://mystore.com",
    tags: ["React", "Node.js", "Stripe"],
  },
  {
    id: 7,
    title: "Blog Platform",
    description: "A blog platform with authentication and CMS features.",
    imageUrl: "/images/portfolioWebsiteScreenshot.png",
    projectLink: "https://myblog.com",
    tags: ["Next.js", "Prisma", "PostgreSQL"],
  },
];

export default function FeaturedCardCarousel() {
  const [width, setWidth] = useState<number>(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  useEffect(() => {
    const handleResize = () => {
      if (carouselRef.current) {
        const scrollWidth = carouselRef.current.scrollWidth;
        const offsetWidth = carouselRef.current.offsetWidth;
        const padding = 32;
        setWidth(scrollWidth - offsetWidth + padding);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.div
      ref={carouselRef}
      className="w-full overflow-hidden cursor-grab px-8"
      whileTap={{ cursor: "grabbing" }}
    >
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        className="flex gap-x-4"
        onDragStart={() => (dragging.current = false)}
        onDrag={(e, info) => {
          if (Math.abs(info.offset.x) > 5) dragging.current = true;
        }}
      >
        {projects.map((project) => (
          <motion.div key={project.id} className="w-2/5 flex-shrink-0">
            <FeaturedProjectCard
              {...project}
              onClick={() => {
                if (!dragging.current) return;
              }}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
