"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import StarBackground from "./StarBackground";

type OverlayProps = {
  title: string;
  description: string;
  imageUrl: string;
  projectLink?: string;
  githubProjectLink?: string;
  tags: string[];
  onClose: () => void;
};

export default function ProjectOverlay({
  title,
  description,
  imageUrl,
  projectLink,
  githubProjectLink,
  tags,
  onClose,
}: OverlayProps) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return createPortal(
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <StarBackground />

        <motion.div
          className="bg-neutral-900 rounded-2xl p-8 max-w-3xl w-full max-h-[90vh] shadow-xl relative flex flex-col"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.button
            onClick={onClose}
            className="absolute top-2 right-2 p-1 rounded-full"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Close modal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </motion.button>

          <div className="overflow-y-auto pr-2 mb-4 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-transparent rounded-lg">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-64 object-cover mb-4 rounded-3xl"
            />
            <h2 className="text-2xl font-bold mb-2">{title}</h2>
            <p className="text-[var(--text-muted)] mb-4">{description}</p>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-block bg-[var(--background)] rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-x-4 justify-end mt-auto">
            {projectLink && (
              <a
                href={projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-neutral-800 border-neutral-700 shadow-lg hover:bg-neutral-700 text-[var(--text)] hover:text-[var(--text-muted)] px-6 py-3 rounded-lg"
              >
                View Project
              </a>
            )}

            {githubProjectLink && (
              <a
                href={githubProjectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-neutral-800 border-neutral-700 shadow-lg hover:bg-neutral-700 text-[var(--text)] hover:text-[var(--text-muted)] px-6 py-3 rounded-lg"
              >
                View GitHub
              </a>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.body
  );
}
