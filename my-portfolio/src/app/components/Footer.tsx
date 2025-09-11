"use client";
import { motion } from "motion/react";

export default function Footer() {
  return (
    
    <footer className="flex items-center w-full h-16 px-4 top-100vh">

        <div className="w-full flex justify-end space-x-6">
            <a href="https://github.com/Aaron-McIntyre">
              <motion.img
                  src="/icons/github.svg"
                  className="w-6 h-6"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              </a>

            <a href="https://www.linkedin.com/in/aaron-lee-mcintyre">
              <motion.img
                  src="/icons/linkedin.svg"
                  className="w-6 h-6"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.90 }}
                  
                />
              </a>
        </div>


    
    </footer>
    
  );
}

