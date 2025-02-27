import { AnimatePresence } from "framer-motion";
import React from "react";
import { motion } from "motion/react";
import { NavLink } from "react-router-dom";
const MobileMenu = ({ open, links }) => {
  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className="absolute top-10 right-0 md:w-56 w-44 z-20"
        >
          <div className="md:text-xl px-3 md:px-0 font-semibold bg-gray-200 bg-opacity-70 text-gray-700 md:py-6 py-4 md:m-6 my-4 mx-2 lg:rounded-2xl rounded-xl">
            <div className="flex flex-col gap-2 border-b border-gray-700 pb-2 md:hidden">
              <NavLink
                to="logIn"
                className=" bg-gold-color text-center  text-white hover:bg-[#cbab41] hover:text-white rounded-lg px-4 py-1 duration-300 "
              >
                Login
              </NavLink>
              <NavLink
                to="signUp"
                className=" bg-maroon-color text-center text-white hover:bg-[#800000b1] hover:text-white rounded-lg px-4 py-1 duration-300"
              >
                Registration
              </NavLink>
            </div>
            <div className="mt-3 md:mt-0">{links}</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
