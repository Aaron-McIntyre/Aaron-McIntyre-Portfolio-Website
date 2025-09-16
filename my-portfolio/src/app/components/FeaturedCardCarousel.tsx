"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
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
  const [carouselWidth, setCarouselWidth] = useState<number>(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const x = useMotionValue(0);

  useEffect(() => {
    const handleResize = () => {
      if (carouselRef.current) {
        const scrollWidth = carouselRef.current.scrollWidth;
        const offsetWidth = carouselRef.current.offsetWidth;
        const padding = 32;
        setWidth(scrollWidth - offsetWidth + padding);
        setCarouselWidth(offsetWidth);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cardWidth = carouselWidth * 0.4;

  return (
    <motion.div
      ref={carouselRef}
      className="w-full overflow-hidden cursor-grab px-8"
      style={{ perspective: 1000 }}
      whileTap={{ cursor: "grabbing" }}
    >
      <motion.div
        drag="x"
        style={{ x }}
        dragConstraints={{ right: 0, left: -width }}
        className="flex gap-x-4"
        onDragStart={() => (dragging.current = false)}
        onDrag={(e, info) => {
          if (Math.abs(info.offset.x) > 5) dragging.current = true;
        }}
      >
        {projects.map((project, index) => {
          const cardOffset = useTransform(x, (value) => {
            const center = carouselWidth / 2 - cardWidth / 2;
            const cardCenter = index * (cardWidth + 16); // 16px gap
            return cardCenter + value - center;
          });

          const rotateY = useTransform(
            cardOffset,
            [-300, 0, 300],
            [15, 0, -15]
          );
          const scale = useTransform(
            cardOffset,
            [-300, 0, 300],
            [0.85, 1, 0.85]
          );
          const zIndex = useTransform(cardOffset, [-300, 0, 300], [0, 1, 0]);

          return (
            <motion.div
              key={project.id}
              className="w-2/5 flex-shrink-0"
              style={{ rotateY, scale, zIndex }}
            >
              <FeaturedProjectCard {...project} />
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
}
