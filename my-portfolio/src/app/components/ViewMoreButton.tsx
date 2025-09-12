"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ViewMoreButtonProps {
  onClick: () => void;
  isVisible?: boolean;
  text?: string;       
}

const ViewMoreButton: React.FC<ViewMoreButtonProps> = ({
  onClick,
  isVisible = true,
  text = "View More...",
}) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="view-more-button"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
          exit={{ opacity: 0, y: 10, transition: { duration: 0.2 } }}
          className="flex justify-center mt-8"
        >
          <button
            onClick={onClick}
            className="bg-neutral-900 border-neutral-800 shadow-lg hover:bg-neutral-800 text-[var(--text)] hover:text-[var(--text-muted)] px-6 py-3 rounded-lg "
          >
            {text}
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ViewMoreButton;
