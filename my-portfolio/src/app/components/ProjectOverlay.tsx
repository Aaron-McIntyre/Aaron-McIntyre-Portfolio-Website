"use client";

import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import StarBackground from "./StarBackground";

type OverlayProps = {
  title: string;
  description: string;
  imageUrl: string;
  projectLink: string;
  tags: string[];
  onClose: () => void;
};

export default function ProjectOverlay({
  title,
  description,
  imageUrl,
  projectLink,
  tags,
  onClose,
}: OverlayProps) {
  return createPortal(
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-[var(--background)] flex items-center justify-center z-50"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <StarBackground />
        <motion.div
          className="bg-white dark:bg-neutral-900 rounded-2xl p-6 max-w-lg w-full shadow-lg"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <h2 className="text-2xl font-bold mb-2">{title}</h2>
          <p className="text-[var(--text-muted)] mb-4">{description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="inline-block bg-[var(--background)] rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-300"
              >
                {tag}
              </span>
            ))}
          </div>

          {projectLink && (
            <a
              href={projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline mb-4 inline-block"
            >
              View Project
            </a>
          )}

          <button
            onClick={onClose}
            className="mt-2 bg-neutral-800 border-neutral-800 shadow-lg hover:bg-neutral-700 text-[var(--text)] hover:text-[var(--text-muted)] px-6 py-3 rounded-lg"
          >
            Close
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.body
  );
}
