import { AnimatePresence, delay, motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";

const variants = {
  enter: (direction) => {
    return {
      y: direction > 0 ? 300 : -300,
      opacity: 0,
    };
  },
  center: {
    y: 0,
    opacity: 1,
    zIndex: 1,
  },
  exit: (direction) => {
    return {
      opacity: 0,
      y: direction > 0 ? -100 : 100,
      zIndex: 0,
      transition: {
        duration: 0.3,
      },
    };
  },
};

const textVariants = {
  enter: (direction) => {
    return {
      y: direction > 0 ? 35 : -35,
      delay: 0.5,
    };
  },
  center: {
    y: 0,
  },
  exit: (direction) => {
    return {
      y: direction > 0 ? -35 : 35,
    };
  },
};

const miniTextVariants = {
  enter: (direction) => {
    return {
      opacity: 0,
      zIndex: 1,
    };
  },
  center: {
    opacity: 1,
    zIndex: 1,
  },
  exit: (direction) => {
    return {
      opacity: 0,
      zIndex: 0,
    };
  },
};

const text = ["Hello World", "Hello World 2", "Hello World 3", "Hello World 4"];
const text1 = [
  "Hello World",
  "Hello World 2",
  "Hello World 3",
  "Hello World 4",
];
const text2 = ["Hello World", "Hello World 2", "Hello World 3"];
const images = [
  "/download.jpg",
  "/download1.jpg",
  "/download2.jpg",
  "/download3.jpg",
];

const Hero = ({ handleNext, handlePrev, page }) => {
  const [direction, setDirection] = useState(0);

  return (
    <>
      <div className="w-screen h-screen absolute z-10 flex max-lg:flex-col justify-center items-center">
        <div className="h-screen w-[50%] flex flex-col justify-center items-center max-lg:w-screen max-lg:h-[50%]">
          <div className="w-[300px]">
            <div className="relative">
              <AnimatePresence custom={direction} initial={false}>
                <motion.h1
                  key={page}
                  className="font-semibold absolute text-gray-600 -top-8 max-md:text-2xl whitespace-nowrap "
                  variants={miniTextVariants}
                  custom={direction}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    duration: 2,
                    type: "spring",
                    stiffness: 44.2,
                    mass: 1,
                    damping: 6.74,
                  }}
                >
                  {text1[page]}
                </motion.h1>
              </AnimatePresence>
            </div>
            <div className="relative h-10 overflow-hidden">
              <AnimatePresence custom={direction} initial={false}>
                <motion.h1
                  key={page}
                  className="font-semibold absolute text-4xl max-md:text-2xl"
                  variants={textVariants}
                  custom={direction}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    duration: 2,
                    type: "spring",
                    stiffness: 44.2,
                    mass: 1,
                    damping: 6.74,
                  }}
                >
                  {text[page]}
                </motion.h1>
              </AnimatePresence>
            </div>
            <div className="relative">
              <AnimatePresence custom={direction} initial={false}>
                <motion.h1
                  key={page}
                  className="font-semibold absolute text-gray-900 -bottom-8 max-md:text-2xl whitespace-nowrap "
                  variants={miniTextVariants}
                  custom={direction}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    duration: 2,
                    type: "spring",
                    stiffness: 44.2,
                    mass: 1,
                    damping: 6.74,
                  }}
                >
                  {text1[page]}
                </motion.h1>
              </AnimatePresence>
            </div>
          </div>
        </div>
        <div className="h-screen w-[50%] flex flex-col justify-center items-center max-lg:w-screen max-lg:h-[50%]">
          <div className="w-[400px] h-[270px] max-md:w-[300px] max-md:h-[200px] object-cover rounded-lg relative">
            <AnimatePresence custom={direction} initial={false}>
              <motion.img
                key={page}
                className="w-full h-full absolute object-cover rounded-lg"
                src={images[page]}
                variants={variants}
                custom={direction}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  duration: 2,
                  type: "spring",
                  stiffness: 44.2,
                  mass: 1,
                  damping: 6.74,
                }}
                alt=""
              />
            </AnimatePresence>
          </div>
        </div>
        <div className="absolute right-20 flex flex-col gap-4 max-md:right-2">
          <ChevronUp
            className="bg-white/50 rounded-full h-10 w-10 max-md:h-7 max-md:w-7 cursor-pointer hover:bg-white/90"
            onClick={() => {
              setDirection(-1);
              handlePrev();
            }}
          />
          <ChevronDown
            className="bg-white/50 rounded-full h-10 w-10 max-md:h-7 max-md:w-7 cursor-pointer hover:bg-white/90"
            onClick={() => {
              setDirection(1);
              handleNext();
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
