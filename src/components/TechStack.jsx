"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaJs, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGithub } from "react-icons/fa";
import { SiExpress, SiMongodb, SiTailwindcss } from "react-icons/si";

const TechStack = () => {
  const [isHover, setIsHover] = React.useState(false);

  const techs = [
    {
      name: "JavaScript",
      icon: FaJs,
      color: "text-yellow-400",
    },
    {
      name: "React",
      icon: FaReact,
      color: "text-cyan-400",
    },
    {
      name: "Node.js",
      icon: FaNodeJs,
      color: "text-green-400",
    },
    {
      name: "Express.js",
      icon: SiExpress,
      color: "text-gray-400",
    },
    {
      name: "MongoDB",
      icon: SiMongodb,
      color: "text-green-500",
    },
    {
      name: "HTML5",
      icon: FaHtml5,
      color: "text-orange-500",
    },
    {
      name: "CSS3",
      icon: FaCss3Alt,
      color: "text-blue-500",
    },
    {
      name: "Tailwind",
      icon: SiTailwindcss,
      color: "text-sky-400",
    },
    {
      name: "Github",
      icon: FaGithub,
      color: "text-blue-500",
    },
  ];

  return (
    <section className=" relative isolate overflow-hidden bg-white dark:bg-slate-950 py-12 md:py-16 " >
      {/*  BACKGROUND */}

      {/* Animated Left Glow */}
      <motion.div
        animate={{ x: [0, 80, 0], y: [0, -40, 0], }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", }}
        className=" pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-500/20"
      />

      {/* Animated Right Glow */}
      <motion.div
        animate={{ x: [0, -60, 0], y: [0, 50, 0], }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", }}
        className=" pointer-events-none absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-3xl dark:bg-cyan-500/20"
      />

      {/* Soft Center Glow */}
      <div
        className=" pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl"
      />

      {/* Extra Left Bottom Glow */}
      <div className=" pointer-events-none absolute -left-40 bottom-0 h-[420px] w-[420px] rounded-full bg-blue-500/[0.045] blur-[130px] dark:bg-cyan-500/10" />

      {/* Extra Right Bottom Glow */}
      <div className=" pointer-events-none absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-cyan-500/[0.04] blur-[140px] dark:bg-cyan-500/10" />


      {/* Premium Grid */}
      <div
        className=" pointer-events-none absolute inset-0 opacity-[0.025] dark:opacity-[0.035] [background-image:linear-gradient(to_right,#64748b_1px,transparent_1px),linear-gradient(to_bottom,#64748b_1px,transparent_1px)] [background-size:48px_48px]"
      />

      {/* Top Fade */}
      <div className=" pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/90 to-transparent dark:from-slate-950/90" />

      {/* Bottom Fade */}
      <div className=" pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent dark:from-slate-950" />

      {/*CONTENT */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* HEADER */}
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30, }}
            whileInView={{ opacity: 1, y: 0, }}
            viewport={{ once: true, }}
            transition={{ duration: 0.5, }}
            className=" text-4xl font-bold font-mono text-gray-900 dark:text-white md:text-5xl"
          >
            Technologies
          </motion.h2>

          {/* Header Line */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0, }}
            whileInView={{ opacity: 1, scaleX: 1, }}
            viewport={{ once: true, }}
            transition={{ duration: 0.6, delay: 0.15, }}
            className=" mx-auto mt-4 h-1 w-28 origin-center rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 shadow-lg shadow-cyan-500/20"
          />

          <motion.p
            initial={{ opacity: 0, y: 15, }}
            whileInView={{ opacity: 1, y: 0, }}
            viewport={{ once: true, }}
            transition={{ duration: 0.5, delay: 0.2, }}
            className=" mt-4 text-sm uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400"
          >
            My Tech Stack
          </motion.p>
        </div>

        {/* TECH SCROLLER */}
        <div
          className="
            relative w-full
            overflow-hidden
            rounded-3xl
          "
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          {/* Left Fade */}
          <div
            className="
              pointer-events-none
              absolute left-0 top-0
              z-20 h-full w-24
              bg-gradient-to-r
              from-white
              to-transparent
              dark:from-slate-950
            "
          />

          {/* Right Fade */}
          <div
            className="
              pointer-events-none
              absolute right-0 top-0
              z-20 h-full w-24
              bg-gradient-to-l
              from-white
              to-transparent
              dark:from-slate-950
            "
          />

          <motion.div
            className="flex w-max gap-10 p-6"
            animate={
              isHover
                ? {
                  x: "-50%",
                }
                : {
                  x: ["0%", "-50%"],
                }
            }
            transition={{
              duration: 90,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {[...techs, ...techs].map((tech, index) => {
              const Icon = tech.icon;

              return (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -6,
                  }}
                  className="
                    group
                    flex
                    min-w-[120px]
                    flex-col
                    items-center
                    gap-4
                  "
                >
                  {/* ICON CARD */}
                  <div
                    className="
                      relative
                      flex
                      h-20
                      w-20
                      items-center
                      justify-center
                      rounded-[30%]
                      border
                      border-gray-300
                      bg-white/70
                      shadow-lg
                      backdrop-blur-xl
                      transition-all
                      duration-300
                      group-hover:scale-110
                      group-hover:border-cyan-400
                      group-hover:shadow-xl
                      group-hover:shadow-cyan-500/10
                      dark:border-gray-700
                      dark:bg-gray-900/70
                      dark:group-hover:border-cyan-400
                    "
                  >
                    {/* Icon Glow */}
                    <div
                      className="
                        pointer-events-none
                        absolute
                        inset-0
                        rounded-[30%]
                        bg-cyan-400/0
                        blur-xl
                        transition-all
                        duration-300
                        group-hover:bg-cyan-400/10
                      "
                    />

                    <Icon
                      className={`
                        relative
                        z-10
                        text-4xl
                        ${tech.color}
                        transition-transform
                        duration-300
                        group-hover:scale-110
                      `}
                    />
                  </div>

                  {/* TECH NAME */}
                  <p
                    className="
                      text-sm
                      font-medium
                      text-gray-700
                      transition-all
                      duration-300
                      group-hover:font-bold
                      group-hover:text-blue-800
                      dark:text-gray-300
                      dark:group-hover:text-cyan-400
                    "
                  >
                    {tech.name}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Section Bottom Divider */}
      <div
        className=" pointer-events-none absolute bottom-0 left-1/2 h-px w-full -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"
      />
    </section>
  );
};

export default TechStack;

