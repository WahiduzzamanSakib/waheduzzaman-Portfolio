"use client";

import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-20 left-0 right-0 h-[3px] z-[9999]
      bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 origin-[0%]"
      style={{ scaleX: scrollYProgress }}
    />
  );
}