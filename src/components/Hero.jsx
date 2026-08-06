"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";

import Link from "next/link";
import { FiDownload, FiArrowRight } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaXTwitter, FaFacebook } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/WahiduzzamanSakib",
    icon: FaGithub,
    hoverColor: "hover:text-white hover:border-white/40 hover:bg-white/10",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/waheduzzaman-md",
    icon: FaLinkedin,
    hoverColor: "hover:text-blue-400 hover:border-blue-400/40 hover:bg-blue-500/10",
  },
  {
    name: "G-mail",
    href: "mailto:wahidzamanpg@gmail.com",
    icon: CgMail,
    hoverColor: "hover:text-cyan-400 hover:border-cyan-400/40 hover:bg-cyan-500/10",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/md.waheduzzaman.613163",
    icon: FaFacebook,
    hoverColor: "hover:text-indigo-400 hover:border-indigo-400/40 hover:bg-indigo-500/10",
  },
];

const Hero = () => {

  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-screen flex items-center pt-32 pb-20 px-6 md:px-12 lg:px-20
  bg-gray-200 dark:bg-gray-900 transition-colors duration-500"
    >

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
            Hello, I'm Md.
          </motion.p>


          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .5, delay: .1 }}
            className=" text-5xl md:text-7xl font-mono font-extrabold tracking-tight text-black/80 dark:text-white mb-6">
            Waheduzzaman
          </motion.h1>


          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .5, delay: .2 }}
            className=" text-xl md:text-3xl font-semibold text-gray-300 dark:text-gray-300 mb-8">
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
            className=" text-lg leading-relaxed text-black/80 dark:text-gray-400 mb-10">
            I build modern, responsive web applications using React, Next.js, and JavaScript technologies. Passionate about creating
            fast, accessible and beautiful digital experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .5, delay: .4 }}
            className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">

            <div className="pt-4">
              <motion.a
                href="/Waheduzzaman_Resume.pdf"
                download
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600
                 hover:from-blue-500 hover:to-indigo-500 text-white font-medium px-7 py-3.5 rounded-xl shadow-lg shadow-blue-500/25 transition-all duration-300 group cursor-pointer"
              >
                <span>Download Resume</span>
                <FiDownload className="text-lg group-hover:translate-y-0.5 transition-transform" />
              </motion.a>
            </div>

            <div className="pt-4">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-medium
                  border border-slate-600 text-black/80 dark:text-white
                  hover:border-cyan-400 hover:text-cyan-400 hover:bg-cyan-500/5
                  dark:border-gray-700 dark:hover:border-cyan-400
                  transition-all duration-300 cursor-pointer group"
              >
                <span>View Projects</span>
                <FiArrowRight className="text-lg group-hover:translate-x-0.5 transition-transform" />
              </motion.a>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .5, delay: .55 }}
            className="flex items-center gap-4 justify-center lg:justify-start mt-8"
          >
            {socials.map((social, index) => {
              const Icon = social?.icon;
              return (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.92 }}
                  className={`group relative flex items-center justify-center w-11 h-11 rounded-xl
                    border border-gray-300 text-gray-700 bg-white/80 dark:border-slate-700
                  dark:text-slate-400 dark:bg-slate-900/40 backdrop-blur-sm
                    transition-all duration-300 ${social.hoverColor}`}
                >
                  <Icon className="text-lg" />

                  {/* Tooltip */}
                  <span
                    className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2
                      px-2.5 py-1 rounded-md bg-slate-800 text-xs font-medium text-white
                      opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap"
                  >
                    {social.name}
                  </span>
                </motion.a>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;