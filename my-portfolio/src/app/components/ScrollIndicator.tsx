"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollIndicator() {
  const [isVisible, setIsVisible] = useState(true);
  const [isFinalAnimation, setIsFinalAnimation] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1 && isVisible) {
        setIsVisible(false);
        setIsFinalAnimation(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isVisible]);

  return (
    <AnimatePresence>
      {(isVisible || isFinalAnimation) && (
        <motion.div
          className="absolute top-[90vh] left-1/2 transform -translate-x-1/2"
          animate={
            isFinalAnimation
              ? { y: [0, 10, 0, 0], opacity: [1, 1, 0.7, 0] }
              : { y: [0, 10, 0], opacity: [0.7, 1, 0.7] }
          }
          transition={
            isFinalAnimation
              ? { duration: 1, ease: "easeInOut" }
              : { duration: 1, repeat: Infinity, ease: "easeInOut" }
          }
          onAnimationComplete={() => {
            if (isFinalAnimation) setIsFinalAnimation(false);
          }}
        >
          <svg
            className="w-6 h-6 text-gray-500"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
