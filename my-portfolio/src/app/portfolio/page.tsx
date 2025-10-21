"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ViewMoreButton from "../components/ViewMoreButton";
import ProjectCard from "../components/ProjectCard";

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
            className="absolute top-0 right-0 w-64 p-2 rounded-lg bg-neutral-800 text-[var(--text)] placeholder-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-neutral-700 text-sm sm:left-auto sm:right-0 sm:translate-x-0 left-1/2 -translate-x-1/2"
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
