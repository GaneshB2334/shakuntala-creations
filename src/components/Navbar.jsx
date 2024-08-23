import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed top-0 left-0 z-20">
      <nav className="w-screen text-white p-4">
        <div className="container mx-auto flex justify-between items-center h-14">
          <div className="text-2xl font-bold">Navbar</div>
          <ul className="flex max-md:hidden">
            <li className="mx-2">Home</li>
            <li className="mx-2">About</li>
            <li className="mx-2">Services</li>
            <li className="mx-2">Contact</li>
          </ul>
          <div className="hidden max-md:block">
            <motion.div className="absolute right-10 top-8 z-20">
              {isOpen ? (
                <X
                  className="cursor-pointer"
                  onClick={() => {
                    setIsOpen(false);
                  }}
                />
              ) : (
                <Menu
                  className="cursor-pointer"
                  onClick={() => {
                    setIsOpen(true);
                  }}
                />
              )}
            </motion.div>

            <motion.div
              variants={{
                hidden: {
                  x: 500,
                  transition: {
                    duration: 1,
                  },
                },
                visible: {
                  x: -150,
                  transition: {
                    duration: 0.5,
                    type: "spring",
                    stiffness: 44.2,
                    mass: 1,
                    damping: 10,
                  },
                },
              }}
              initial="hidden"
              animate={isOpen ? "visible" : "hidden"}
              className="flex flex-col h-screen absolute w-[300px] top-0 gap-10 pt-20 pl-5 text-xl tracking-widest backdrop-blur-sm bg-gray-900/10 z-10"
            >
              <li className="mx-2 list-none cursor-pointer">Home</li>
              <li className="mx-2 list-none cursor-pointer">About</li>
              <li className="mx-2 list-none cursor-pointer">Services</li>
              <li className="mx-2 list-none cursor-pointer">Contact</li>
            </motion.div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
