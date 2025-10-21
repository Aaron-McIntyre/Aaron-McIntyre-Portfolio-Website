"use client";

import { motion, useMotionValue } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import CarouselCard from "./CarouselCard";

const projects = [
  {
    id: 1,
    title: "My Portfolio Website",
    description: "A modern portfolio built with Next.js and TailwindCSS.",
    imageUrl: "/images/portfolioWebsiteScreenshot.png",
    projectLink: "https://www.aaronmcintyre.co.uk/",
    githubProjectLink: "https://github.com/Aaron-McIntyre/Aaron-McIntyre-Portfolio-Website",
    tags: [
      "Next.js",
      "TailwindCSS",
      "Framer Motion",
      "Three.js",
      "TypeScript",
      "EmailJS",
      "Vercel",
    ],
  },
  // {
  //   id: 2,
  //   title: "(In Progress) Nathan McLaughlin Portfolio Website",
  //   description: "Nathan McLaughlin's portfolio built with Next.js and TailwindCSS using CMS features for easy data entry!",
  //   imageUrl: "",
  //   projectLink: "",
  //   githubProjectLink: "https://github.com/Aaron-McIntyre/Nathan-McLaughlin-Portfolio-Website",
  //   tags: [
  //     "Next.js",
  //     "TailwindCSS",
  //     "Framer Motion",
  //     "Three.js",
  //     "TypeScript",
  //     "EmailJS",
  //     "Vercel",
  //   ],
  // },
  {
    id: 2,
    title: "Off Axis Gigs Website",
    description: "A custom made website for Off Axis Gigs, built during my university team project, using Django to adapt the original WordPress website",
    imageUrl: "/images/OffAxisPhoto.png",
    githubProjectLink: "https://github.com/Aaron-McIntyre/Off-Axis-Gigs-Team-Project",
    tags: [
      "Django",
      "Python",
      "HTML",
      "CSS",
      "JavaScript",
      "SQLite",
    ],
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
        {projects.map((project, index) => (
          <CarouselCard
            key={project.id}
            project={project}
            index={index}
            x={x}
            carouselWidth={carouselWidth}
            cardWidth={cardWidth}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}
