"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ViewMoreButton from "../components/ViewMoreButton";
import portfolioPageStyles from "./portfolio.module.css";
import ProjectCard from "../components/ProjectCard";

// Sample project data
const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A modern portfolio built with Next.js and TailwindCSS.",
    imageUrl: "/images/portfolioWebsiteScreenshot.png",
    projectLink: "https://myportfolio.com",
    tags: ["Next.js", "TailwindCSS", "Framer Motion"],
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
  {
    id: 13,
    title: "Blog Platform",
    description: "A blog platform with authentication and CMS features.",
    imageUrl: "/images/portfolioWebsiteScreenshot.png",
    projectLink: "https://myblog.com",
    tags: ["Next.js", "Prisma", "PostgreSQL"],
  },
  {
    id: 12,
    title: "E-Commerce Store",
    description: "Full-stack store with payments integration.",
    imageUrl: "/images/portfolioWebsiteScreenshot.png",
    projectLink: "https://mystore.com",
    tags: ["React", "Node.js", "Stripe"],
  },
  {
    id: 11,
    title: "Blog Platform",
    description: "A blog platform with authentication and CMS features.",
    imageUrl: "/images/portfolioWebsiteScreenshot.png",
    projectLink: "https://myblog.com",
    tags: ["Next.js", "Prisma", "PostgreSQL"],
  },
  {
    id: 10,
    title: "E-Commerce Store",
    description: "Full-stack store with payments integration.",
    imageUrl: "/images/portfolioWebsiteScreenshot.png",
    projectLink: "https://mystore.com",
    tags: ["React", "Node.js", "Stripe"],
  },
  {
    id: 17,
    title: "Blog Platform",
    description:
      "A blog platform with authentication and CMS features. A blog platform with authentication and CMS features. A blog platform with authentication and CMS features. A blog platform with authentication and CMS features.",
    imageUrl: "/images/portfolioWebsiteScreenshot.png",
    projectLink: "https://myblog.com",
    tags: ["Next.js", "Prisma", "PostgreSQL"],
  },
];

export default function PortfolioSection() {
  const [visibleCount, setVisibleCount] = useState(4);

  const handleViewMore = () => setVisibleCount((prev) => prev + 4);

  const visibleProjects = projects.slice(0, visibleCount);

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  return (
    <section className="w-full px-8 py-16">
      <h1 className="titleFont text-5xl text-white font-bold text-center">
        Projects
      </h1>
      <h3 className="titleFont relative text-2xl text-[var(--text-muted)] font-semibold text-center pt-3 pb-10">
        All of my personal projects!
      </h3>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <AnimatePresence>
          {visibleProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: -10 }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
                projectLink={project.projectLink}
                tags={project.tags}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <ViewMoreButton
        onClick={handleViewMore}
        isVisible={visibleCount < projects.length}
      />
    </section>
  );
}
