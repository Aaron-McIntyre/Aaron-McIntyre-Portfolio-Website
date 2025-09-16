"use client";

import { motion } from "framer-motion";
import TagList from "./TagList";

export default function ProjectCard({
  title,
  description,
  imageUrl,
  projectLink,
  tags,
}: {
  title: string;
  description: string;
  imageUrl: string;
  projectLink: string;
  tags: string[];
}) {
  return (
    <motion.div
      className="w-full h-full rounded-2xl overflow-hidden shadow-lg bg-neutral-900 border border-neutral-900 flex flex-col"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <img
        className="w-full h-48 object-cover"
        src={imageUrl}
        alt="Project Image"
        draggable={false}
      />
      <div className="px-3 py-3 flex-1">
        <p className="font-bold text-xl text-[var(--text)]">{title}</p>
        <p className="text-[var(--text-muted)] mt-2 overflow-ellipsis overflow-hidden whitespace-nowrap">
          {description}
        </p>
      </div>
      <TagList tags={tags} maxVisible={2} />
    </motion.div>
  );
}
