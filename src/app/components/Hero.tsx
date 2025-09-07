"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react"; 

const images = ["/SHOE.png", "/SHOE2.png", "/SHOE3.png"] ; 
export default function Hero() {
  const [[index, direction], setIndex] = useState<[number, number]>([0, 0]);

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) =>
    Math.abs(offset) * velocity;

  const paginate = (newDirection: number) => {
    setIndex(([prevIndex]) => {
      const newIndex =
        (prevIndex + newDirection + images.length) % images.length;
      return [newIndex, newDirection];
    });
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.6 },
    }),
  };

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen text-center overflow-hidden bg-black">
    
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="absolute -top-4 text-[9rem] sm:text-[12rem] font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white/10 via-gray-300/30 to-white/10 backdrop-blur-sm drop-shadow-[0_10px_40px_rgba(255,255,255,0.15)] z-0"
      >
        VELLANO
      </motion.h1>

      {/* Swipable Shoe Image */}
      <div className="relative w-[400px] h-[400px] flex items-center justify-center z-10">
        <AnimatePresence custom={direction} initial={false}>
          <motion.img
            key={index}
            src={images[index]}
            alt="Vellano Shoe"
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);
              if (swipe < -swipeConfidenceThreshold) {
                paginate(1); 
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
            className="absolute w-[400px] drop-shadow-[0_35px_35px_rgba(255,255,255,0.15)]"
          />
        </AnimatePresence>

     
        <button
          onClick={() => paginate(-1)}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 
                     p-3 rounded-full text-white z-20"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

       
        <button
          onClick={() => paginate(1)}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 
                     p-3 rounded-full text-white z-20"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="mt-6 text-lg text-gray-300 z-20"
      >
        Vellano, where every step is crafted for those who walk with purpose.
      </motion.p>

      {/* Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="bg-white/5 backdrop-blur-md border-min-w-mt-6 px-10 py-4 border-white text-white font-bold rounded-full shadow-lg z-20 hover:bg-gray-800 transition-colors"
      >
        BUY NOW
      </motion.button>
    </section>
  );
}
