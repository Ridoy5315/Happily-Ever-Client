import { AnimatePresence } from "framer-motion";
import React from "react";
import { motion } from "motion/react";
const MobileMenu = ({ open, links }) => {
  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100}}
          transition={{duration: 0.3}}
          className="absolute top-10 right-0 w-64 z-20"
        >
          <div className="text-xl font-semibold bg-gray-300 text-black py-10 m-6 rounded-3xl">
            <div className="flex flex-col">
              <button>login</button>
              <button>registration</button>
            </div>
            <div>{links}</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
