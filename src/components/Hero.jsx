"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";

import Link from "next/link";

const Hero = () => {

  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-screen flex items-center pt-32 pb-20 px-6 md:px-12 lg:px-20   bg-[#050505]
     dark:bg-gray-900 transition-colors duration-500">


      {/* Background Animation and Grid */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Cyan Glow */}
        <motion.div
          animate={{ x: [0, 80, 0], y: [0, -40, 0], }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", }}
          className="absolute top-20 left-20 w-72 h-72 rounded-full bg-cyan-500/10 blur-3xl"
        />

        {/* Blue Glow */}
        <motion.div
          animate={{ x: [0, -60, 0], y: [0, 50, 0], }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", }}
          className="absolute bottom-10 right-20 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl"
        />

        {/* Grid */}
        <div
          className=" absolute inset-0 opacity-[0.06]
         bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),
       linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:70px_70px]"
        />
      </div>


      <div
        className=" max-w-7xl mx-auto w-full flex flex-col lg:flex-row
          items-center justify-between gap-16" >

        {/* Profile Image section*/}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          whileHover={{ y: -5 }}
          className="relative w-72 h-72 md:w-[420px] md:h-[420px] flex items-center justify-center"
        >
          {/* Background Glow */}
          <div className="absolute inset-4 rounded-full bg-blue-600/20 blur-3xl animate-pulse" />

          {/* Top-Right Floating Shape (উপরের ডানপাশের স্কয়ার) */}
          <motion.div
            animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 right-4 w-12 h-12 md:w-16 md:h-16 bg-[#4a4d33]/80 backdrop-blur-md rounded-2xl border border-white/10 shadow-lg z-0"
          />

          {/* Bottom-Left Floating Shape (নিচের বামপাশের স্কয়ার) */}
          <motion.div
            // animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
            // transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 left-4 w-16 h-12 md:w-16 md:h-16 bg-[#2b4162]/80 backdrop-blur-md rounded-2xl border border-white/10 shadow-lg z-0"
          />

          {/* Main Outer Circle Frame */}
          <div className="relative w-full h-full rounded-full border-4 border-slate-700/60 p-2 shadow-2xl flex items-center justify-center bg-slate-900/40 backdrop-blur-sm z-20">

            {/* Inner Image Container */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-slate-500/30">
              <Image
                src="/wahid.png"
                alt="Md Waheduzzaman"
                fill
                priority
                className="object-cover transition duration-700 hover:scale-105"
              />
            </div>

            {/* Floating Tag: Next.js (বামপাশে বাইরে বের করার জন্য -left-6 / -left-10 দেওয়া হয়েছে) */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-6 md:-left-14 top-1/3 bg-white/95 text-slate-900 font-semibold text-xs md:text-sm px-4 py-2 rounded-2xl shadow-xl z-30 backdrop-blur-md whitespace-nowrap"
            >
              Next.js
            </motion.div>

            {/* Floating Tag: React.js (ডানপাশে বাইরে বের করার জন্য -right-6 / -right-10 দেওয়া হয়েছে) */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-6 md:-right-14 bottom-1/3 bg-white/95 text-slate-900 font-semibold text-xs md:text-sm px-4 py-2 rounded-2xl shadow-xl z-30 backdrop-blur-md whitespace-nowrap"
            >
              React.js
            </motion.div>

          </div>
        </motion.div>

        {/* Content */}
        <div className="max-w-3xl text-center lg:text-left">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .5 }}
            className="uppercase tracking-[0.4em] text-sm font-semibold text-cyan-500 mb-6">
            Hello, I'm Md.
          </motion.p>


          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .5, delay: .1 }}
            className=" text-5xl md:text-7xl font-mono font-extrabold tracking-tight text-white dark:text-white mb-6">
            Waheduzzaman
          </motion.h1>


          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .5, delay: .2 }}
            className=" text-xl md:text-3xl font-semibold text-gray-300 dark:text-gray-300 mb-8">
            {/* <span>I am  </span> */}
            <span
              className="text-transparent bg-clip-text font-mono bg-gradient-to-r from-cyan-400 to-blue-500">
              <TypeAnimation
                sequence={[
                  "MERN Stack Developer",
                  2000,
                  "Frontend Developer",
                  2000,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .5, delay: .3 }}
            className=" text-lg leading-relaxed text-gray-300 dark:text-gray-400 mb-10">
            I build modern, scalable and user-focused web applications
            using JavaScript technologies. Passionate about creating
            fast, accessible and beautiful digital experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .5, delay: .4 }}
            className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">

            <a href="#contact">
              <button
                className="px-8 py-3 rounded-full cursor-pointer font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 
              shadow-lg shadow-cyan-500/20 hover:scale-105 transition">
                Hire Me
              </button>
            </a>

            <button
              className="px-8 py-3 rounded-full font-semibold border border-gray-500 dark:border-gray-700 text-white
dark:text-white hover:bg-gray-800 cursor-pointer dark:hover:bg-neutral-900 transition">
              View Projects
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;