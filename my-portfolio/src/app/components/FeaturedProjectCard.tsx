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
      className="h-100 w-full rounded-2xl overflow-hidden shadow-lg bg-neutral-900 border-neutral-900 border cursor-pointer"
      onTap={handleClick}
      dragPropagation={false}
    >
      <img
        className="w-full h-60"
        src={imageUrl}
        alt="Project Image"
        draggable={false}
      />
      <div className="px-3 py-3">
        <p className="font-bold text-2xl text-[var(--text)]">{title}</p>
        <p className="text-[var(--text-muted)] text-xl">{description}</p>
      </div>
      <div className="px-2 pb-2 pt-2">
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
