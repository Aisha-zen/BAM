import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";
import mab from "/public/mab.jpg";
import pergola from "/public/pergola.jpg";
import work3 from "/public/work3.png";

const slides = [
  {
    image: mab,
    title: "Designing Timeless Architecture",
    subtitle:
      "Crafting spaces that inspire, endure, and enrich everyday living.",
  },
  {
    image: pergola,
    title: "Creating Spaces With Purpose",
    subtitle:
      "From luxury residences to commercial developments, every detail matters.",
  },
  {
    image: work3,
    title: "Architecture Beyond Buildings",
    subtitle:
      "We create environments where people connect, work, and thrive.",
  },
];

function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.img
          key={current}
          src={slides[current].image}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
        />
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="w-[92%] max-w-7xl mx-auto text-white">
        

          <motion.h1
            key={`title-${current}`}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .5 }}
            className="head text-5xl md:text-7xl lg:text-8xl max-w-5xl mt-6 leading-none"
          >
            {slides[current].title}
          </motion.h1>

          <motion.p
            key={`desc-${current}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .9 }}
            className="mt-8 max-w-xl text-lg leading-8 text-gray-200"
          >
            {slides[current].subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-12"
          >
            <NavLink
              to="/Project"
              className="inline-flex items-center gap-3 bg-[#94D82D] px-8 py-4 rounded-full hover:bg-white hover:text-black transition"
            >
              View Projects →
            </NavLink>
          </motion.div>
        </div>
      </div>

      {/* Progress Bars */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-4">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`h-[2px] transition-all duration-500 ${
              index === current
                ? "w-16 bg-[#94D82D]"
                : "w-8 bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

export default HeroCarousel;