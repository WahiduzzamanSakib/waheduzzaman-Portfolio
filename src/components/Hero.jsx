"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";

import Link from "next/link";

const Hero = () => {

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-32 pb-20 px-6 md:px-12 lg:px-20   bg-[#050505]
     dark:bg-gray-900 transition-colors duration-500">
      <div
        className=" max-w-7xl mx-auto w-full flex flex-col lg:flex-row
          items-center justify-between gap-16" >
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          whileHover={{ y: -10 }}
          className="relative w-64 h-64 md:w-96 md:h-96"
        >

          <div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/30 to-purple-500/30
              blur-2xl animate-pulse"/>
          <div
            className=" absolute inset-0 rounded-full border-2 border-cyan-500/30 scale-110" />
          <Image
            src="/wahid.png"
            alt="Md Waheduzzaman"
            fill priority
            className="object-cover rounded-full border-4 border-gray-700 dark:border-neutral-800
    shadow-2xl  grayscale-0 transition duration-700"/>
        </motion.div>

        {/* Content */}
        <div className="max-w-3xl text-center lg:text-left">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .5 }}
            className="uppercase tracking-[0.4em] text-sm font-semibold text-cyan-500 mb-6">
            Hello, I'm
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