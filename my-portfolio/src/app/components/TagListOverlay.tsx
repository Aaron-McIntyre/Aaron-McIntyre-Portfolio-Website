"use client";

import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import StarBackground from "./StarBackground";

type OverlayProps = {
  tags: string[];
  onClose: () => void;
};

export default function TagListOverlay({ tags, onClose }: OverlayProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!mounted) return null;

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
          <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
            All Tags
          </h2>

          <div className="flex flex-wrap">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="inline-block bg-[var(--background)] rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-300 mr-2 mb-2"
              >
                {tag}
              </span>
            ))}
          </div>

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
