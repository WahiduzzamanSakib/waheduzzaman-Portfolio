"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiSmartphone, FiTarget, FiZap } from "react-icons/fi";
import { TfiRocket } from "react-icons/tfi";

const features = [
  {
    icon: FiZap,
    title: "Fast",
    desc: "Optimized performance with fast loading times and smooth interactions.",
  },
  {
    icon: FiSmartphone,
    title: "Responsive",
    desc: "Beautiful layouts that adapt perfectly to every screen size.",
  },
  {
    icon: FiTarget,
    title: "Intuitive",
    desc: "Clean user experiences focused on simplicity and usability.",
  },
  {
    icon: TfiRocket,
    title: "Dynamic",
    desc: "Interactive interfaces that bring websites to life with modern motion.",
  },
];

export default function Features() {
  return (
    <div className="relative bg-gray-300 dark:bg-[#06061f] overflow-hidden">
      <section
        className="relative overflow-hidden py-16 px-6 md:px-12 max-w-7xl mx-auto"
      >

        {/* Background Glow */}
        <div
          className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-cyan-500/20 
          blur-[140px] pointer-events-none -z-0"
        />

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="text-center mb-20"
        >
          <span
            className="inline-block mb-2 px-4 py-2 rounded-full text-sm font-medium
          bg-gray-400 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
            What I Do Best
          </span>

          <p
            className="mt-3 mx-auto max-w-2xl text-lg leading-8 text-black/80 dark:text-gray-400">
            Creating modern, fast and user-friendly digital experiences
            with clean design and powerful technology.
          </p>
        </motion.div>

        {/* Cards */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">

          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}

                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: .5, delay: index * .12 }}
                whileHover={{ y: -12 }}

                className="group relative p-8 rounded-3xl bg-gray-400 dark:bg-zinc-900/80 backdrop-blur-xl border
               border-gray-200 dark:border-zinc-900 
              shadow-sm hover:shadow-2xl transition-all duration-300">

                {/* Gradient Hover Border */}
                <div
                  className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500 to-purple-500
                 opacity-0 group-hover:opacity-10 transition"
                />

                {/* Icon */}
                <div className="group flex flex-col items-center text-center p-4 rounded-xl">

                  <div
                    className="relative w-16 h-16 flex items-center justify-center rounded-2xl 
    bg-gradient-to-br from-blue-500/10 to-purple-500/10 
    text-blue-600 dark:text-blue-400 mb-7
    group-hover:scale-110 group-hover:rotate-3 
    transition-all duration-300">
                    <Icon size={34} />
                  </div>

                  <h3 className="text-xl text-white font-semibold">
                    {feature.title}
                  </h3>

                  <p className="dark:text-gray-400 text-black mt-2">
                    {feature.desc}
                  </p>

                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
}