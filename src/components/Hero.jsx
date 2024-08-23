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

const text1 = ["Hello World Lorem ipsum dolor sit amet.", "Hello World 2 Lorem ipsum dolor sit amet.", "Hello World 3 Lorem ipsum dolor sit amet.", "Hello World 4 Lorem ipsum dolor sit amet."];
const text = [
  "Shakuntala Creations",
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
          <div className="w-[500px] h-auto max-md:w-[350px]">
            <div className="relative flex justify-center items-center">
              <AnimatePresence custom={direction} initial={false}>
                <motion.p
                  key={page}
                  className="font-semibold md:w-[300px] w-[250px] absolute text-gray-600 bottom-2 "
                  variants={miniTextVariants}
                  custom={direction}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    duration: 1,
                  }}
                >
                  {text1[page]}
                </motion.p>
              </AnimatePresence>
            </div>
            <div className="relative min-h-10 max-md:min-h-8 overflow-hidden flex justify-center items-center">
              <AnimatePresence custom={direction} initial={false}>
                <motion.p
                  key={page}
                  className="font-semibold absolute text-4xl max-md:text-2xl whitespace-nowrap"
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
                </motion.p>
              </AnimatePresence>
            </div>
            <div className="relative flex justify-center items-center">
              <AnimatePresence custom={direction} initial={false}>
                <motion.p
                  key={page}
                  className="font-semibold absolute w-[250px] text-gray-900 top-2 md:w-[300px] "
                  variants={miniTextVariants}
                  custom={direction}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    duration: 1,
                  }}
                >
                  {text1[page]}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>
        </div>
        <div className="h-screen w-[50%] flex flex-col justify-center items-center max-lg:w-screen max-lg:h-[50%]">
          <div className="w-[400px] h-[270px] max-md:w-[300px] max-md:h-[200px] object-cover rounded-lg relative">
            <AnimatePresence custom={direction} initial={false}>
              <motion.img
                key={page}
                className="w-full h-full absolute object-cover rounded-lg select-none"
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
        <div className="absolute right-10 z-50 max-lg:right-8 flex flex-col gap-4 max-md:right-2">
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
