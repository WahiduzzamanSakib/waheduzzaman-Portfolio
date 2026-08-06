"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaHandshake, FaBookOpen } from "react-icons/fa";

import { SiNextdotjs, SiReact, SiTailwindcss } from "react-icons/si";

export default function About() {

  return (
    <div className="scroll-mt-24 bg-green-50/65">
      <section id="about" className="relative min-h-screen flex items-center justify-center bg-green-50 dark:bg-[#0B1120] text-slate-800 dark:text-slate-200 px-6 py-16 transition-colors duration-300">


        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">


          {/* LEFT SIDE: Content Section */}
          <motion.div
            className="order-2 lg:order-1 lg:col-span-7 flex flex-col justify-center space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            {/* Header Title */}
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="w-10 h-[3px] bg-blue-600 rounded-full" />
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                  About <span className="text-blue-600 dark:text-blue-400">Me</span>
                </h2>
              </div>
            </div>

            {/* Paragraph Text */}
            <div className="space-y-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              <p>
                Hello! I&apos;m{" "}
                <span className="font-semibold font-mono text-blue-600 dark:text-blue-400 mr-1">
                  Md.Waheduzzaman.
                </span>
                My programming journey started through curiosity and self-learning. Without a classroom or bootcamp, I learned by exploring tutorials, experimenting, and solving problems through trial and error. Today, I build modern web experiences with{" "}
                <span className="inline-flex items-center gap-1 font-semibold text-slate-900 dark:text-slate-100 bg-slate-200/80 dark:bg-slate-800 px-2 py-0.5 rounded text-sm">
                  <SiNextdotjs className="text-xs" /> Next.js
                </span>
                ,{" "}
                <span className="inline-flex items-center gap-1 font-semibold text-cyan-500 bg-cyan-500/10 px-2 py-0.5 rounded text-sm">
                  <SiReact className="text-xs" /> React
                </span>
                , and{" "}
                <span className="inline-flex items-center gap-1 font-semibold text-teal-500 bg-teal-500/10 px-2 py-0.5 rounded text-sm">
                  <SiTailwindcss className="text-xs" /> Tailwind CSS
                </span>
                .
              </p>
              <p>
                I enjoy frontend development most turning ideas and designs into interactive experiences people can use. I love refining the small details like spacing, motion, and responsiveness to make interfaces feel polished. I enjoy projects where the UI is an important part of the solution.
              </p>
              <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base flex items-start gap-2">
                <FaBookOpen className="mt-1 flex-shrink-0 text-blue-500 dark:text-blue-400" />
                <span>
                  Outside programming, I enjoy playing sports and staying active. It helps me maintain focus, discipline, and a fresh mindset.
                </span>
              </p>
            </div>

            {/* Experience, Projects & Clients Stats */}
            <div className="grid grid-cols-3 gap-4 pt-2">

              <motion.div
                whileHover={{ y: -5 }}
                className="flex flex-col items-center sm:items-start p-4 rounded-2xl bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 shadow-sm"
              >
                <div className="text-emerald-500 font-extrabold text-2xl sm:text-3xl">
                  10+
                </div>
                <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium mt-1">
                  Completed Projects
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="flex flex-col items-center sm:items-start p-4 rounded-2xl bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 shadow-sm"
              >
                <div className="text-blue-600 dark:text-blue-400 font-extrabold text-2xl sm:text-3xl">
                  1+
                </div>
                <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium mt-1">
                  Years Building
                </div>
              </motion.div>



              <motion.div
                whileHover={{ y: -5 }}
                className="flex flex-col items-center sm:items-start p-4 rounded-2xl bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 shadow-sm"
              >
                <div className="text-purple-500 font-extrabold text-2xl sm:text-3xl">
                  3+
                </div>
                <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium mt-1">
                  Real-world Projects
                </div>
              </motion.div>
            </div>



            {/* CTA Button */}
            <div className="pt-4">
              <a href="#contact">
                <button
                  className="px-8 py-3 flex  justify-center items-center gap-2 rounded-md hover:rounded-full cursor-pointer font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 
              shadow-lg shadow-cyan-500/20 hover:scale-105 transition">
                  Hire Me <FaHandshake />
                </button>
              </a>
            </div>

          </motion.div>


          {/* RIGHT SIDE: Image with Framer Motion float effects */}
          <motion.div
            className="order-1 lg:order-2 lg:col-span-5 flex justify-center relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="relative group w-full max-w-[340px]">
              {/* Background Glow Effect */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-3xl blur-lg opacity-30 group-hover:opacity-60 transition duration-500" />

              {/* Profile Card Container */}
              <div className="relative rounded-2xl p-2 bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-2xl backdrop-blur-md overflow-hidden">
                <div className="relative w-full h-[380px] rounded-xl overflow-hidden">
                  <Image
                    src="/wahid.png"
                    alt="Md. Waheduzzaman"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    priority
                  />
                </div>
              </div>

              {/* Floating Tech Badges */}
              <motion.div
                className="absolute -top-4 -left-4 w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg"
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              >
                <SiReact className="text-xl" />
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -right-4 w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-xl"
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
              >
                <SiNextdotjs className="text-2xl" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}