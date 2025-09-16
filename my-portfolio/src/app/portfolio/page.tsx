"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ViewMoreButton from "../components/ViewMoreButton";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "A modern portfolio built with Next.js and TailwindCSS. A modern portfolio built with Next.js and TailwindCSS. A modern portfolio built with Next.js and TailwindCSS. A modern portfolio built with Next.js and A modern portfolio built with Next.js and TailwindCSS. A modern portfolio built with Next.js and TailwindCSS. A modern portfolio built with Next.js and TailwindCSS. A modern portfolio built with Next.js and Tai A modern portfolio built with Next.js and TailwindCSS. A modern portfolio built with Next.js and TailwindCSS. A modern portfolio built with Next.js and TailwindCSS. A modern portfolio built with Next.js and Tai A modern portfolio built with Next.js and TailwindCSS. A modern portfolio built with Next.js and TailwindCSS. A modern portfolio built with Next.js and TailwindCSS. A modern portfolio built with Next.js and TaiA modern portfolio built with Next.js and TailwindCSS. A modern portfolio built with Next.js and TailwindCSS. A modern portfolio built with Next.js and TailwindCSS. A modern portfolio built with Next.js and Tai TailwindCSS. A modern portfolio built with Next.js and TailwindCSS. A modern portfolio built with Next.js and TailwindCSS. A modern portfolio built with Next.js and TailwindCSS. A modern portfolio built with Next.js and TailwindCSS. A modern portfolio built with Next.js and TailwindCSS. A modern portfolio built with Next.js and TailwindCSS. A modern portfolio built with Next.js and TailwindCSS. A modern portfolio built with Next.js and TailwindCSS.A modern portfolio built with Next.js and TailwindCSS. ",
    imageUrl: "/images/portfolioWebsiteScreenshot.png",
    githubProjectLink: "https://www.linkedin.com/in/aaron-lee-mcintyre",
    projectLink: "https://www.linkedin.com/in/aaron-lee-mcintyre",
    tags: [
      "Next.js",
      "TailwindCSS",
      "Framer Motion",
      "Framer Motion",
      "Framer Motion",
      "Framer Motion",
      "Framer Motion",
      "Framer Motion",
      "Framer Motion",
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
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(4);

  const filteredProjects = projects.filter((project) => {
    const query = searchQuery.toLowerCase();
    return (
      project.title.toLowerCase().includes(query) ||
      project.description.toLowerCase().includes(query) ||
      project.tags.some((tag) => tag.toLowerCase().includes(query))
    );
  });

  useEffect(() => {
    setVisibleCount(4);
  }, [searchQuery]);

  const handleViewMore = () => setVisibleCount((prev) => prev + 4);
  const visibleProjects = filteredProjects.slice(0, visibleCount);

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

      <div className="relative">
        <div className="relative pt-5 top-0 right-0">
          <input
            type="text"
            placeholder="Search projects..."
            className="absolute top-0 right-0 w-64 p-2 rounded-lg bg-neutral-800 text-[var(--text)] placeholder-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-neutral-700 text-sm"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12"
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
                  githubProjectLink={project.githubProjectLink}
                  tags={project.tags}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <ViewMoreButton
        onClick={handleViewMore}
        isVisible={visibleCount < projects.length}
      />
    </section>
  );
}
