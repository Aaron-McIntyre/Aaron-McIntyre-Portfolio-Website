"use client";
import TagList from "./TagList";
import { motion } from "framer-motion";
import { useState } from "react";
import ProjectOverlay from "./ProjectOverlay";

export default function FeaturedProjectCard({
  title,
  description,
  imageUrl,
  projectLink,
  githubProjectLink,
  tags,
  onClick,
}: {
  title: string;
  description: string;
  imageUrl: string;
  projectLink?: string;
  githubProjectLink?: string;
  tags: string[];
  onClick?: () => void;
}) {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const handleClick = () => {
    if (onClick) onClick();
    setIsOverlayOpen(true);
  };

  return (
    <motion.div
      className="h-100 w-full rounded-2xl overflow-hidden shadow-2xl bg-neutral-900 border-neutral-900 border cursor-pointer"
      onTap={handleClick}
      dragPropagation={false}
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    >
      <img
        className="w-full h-60 object-cover"
        src={imageUrl}
        alt="Project Image"
        draggable={false}
      />
      <div className="px-4 py-3">
        <p className="font-bold text-2xl text-[var(--text)]">{title}</p>
        <p className="text-[var(--text-muted)] text-xl mt-1">{description}</p>
      </div>
      <div className="px-4 pb-4 pt-2">
        <TagList tags={tags} maxVisible={4} />
      </div>

      {isOverlayOpen && (
        <ProjectOverlay
          title={title}
          description={description}
          imageUrl={imageUrl}
          projectLink={projectLink}
          githubProjectLink={githubProjectLink}
          tags={tags}
          onClose={() => setIsOverlayOpen(false)}
        />
      )}
    </motion.div>
  );
}
