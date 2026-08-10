"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import { FiDownload, FiArrowRight } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/WahiduzzamanSakib",
    icon: FaGithub,
    hoverColor:
      "hover:text-white hover:border-white/40 hover:bg-white/10",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/waheduzzaman-md",
    icon: FaLinkedin,
    hoverColor:
      "hover:text-blue-400 hover:border-blue-400/40 hover:bg-blue-500/10",
  },
  {
    name: "G-mail",
    href: "mailto:wahidzamanpg@gmail.com",
    icon: CgMail,
    hoverColor:
      "hover:text-cyan-400 hover:border-cyan-400/40 hover:bg-cyan-500/10",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/md.waheduzzaman.613163",
    icon: FaFacebook,
    hoverColor:
      "hover:text-indigo-400 hover:border-indigo-400/40 hover:bg-indigo-500/10",
  },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-white px-6 pb-20 pt-32 transition-colors duration-500 dark:bg-slate-950 md:px-12 lg:px-20"
    >

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Cyan Glow */}
        <motion.div
          animate={{ x: [0, 80, 0], y: [0, -40, 0], }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", }}
          className="absolute left-[-10%] top-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl"
        />

        {/* Blue Glow */}
        <motion.div
          animate={{ x: [0, -60, 0], y: [0, 50, 0], }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", }}
          className="absolute bottom-0 right-[-10%] h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl"
        />

        {/* Soft center glow */}
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl" />


        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {/* Left Glow */}
          <div
            className=" absolute -left-40 bottom-0 h-[420px] w-[420px] rounded-full bg-blue-500/[0.045] blur-[130px] dark:bg-cyan-500/20"
          />

          {/* Right Glow */}
          <div
            className=" absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-cyan-500/[0.04] blur-[140px] dark:bg-cyan-500/20 "
          />
        </div>


        {/* Premium Grid */}
        <div
          className="absolute inset-0 opacity-[0.025] dark:opacity-[0.035] [background-image:linear-gradient(to_right,#64748b_1px,transparent_1px),linear-gradient(to_bottom,#64748b_1px,transparent_1px)] [background-size:48px_48px]"
        />

        {/* Top fade */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/80 to-transparent dark:from-slate-950/80" />

        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent dark:from-slate-950" />
      </div>


      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-16 lg:flex-row lg:gap-20">

        {/* LEFT SIDE - Profile */}
        <div className="max-w-3xl text-center lg:text-left">
          {/* Small Intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 flex items-center justify-center gap-3 lg:justify-start"
          >
            <span className="h-px w-8 bg-cyan-500" />

            <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-400 sm:text-sm">
              Hello, I&apos;m Md.
            </p>
            <span className="hidden h-px w-8 bg-cyan-500 sm:block lg:hidden" />
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{
              y: -5,
              scale: 1.02,
            }}
            className="mb-5 cursor-default text-4xl font-black tracking-tight text-slate-900 transition-all duration-300 hover:text-cyan-500 dark:text-white dark:hover:text-cyan-400 sm:text-6xl md:text-7xl"
          >
            Waheduzzaman
            <span className="ml-2 text-cyan-500">.</span>
          </motion.h1>

          {/* Profession */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-5 text-xl font-semibold text-slate-600 dark:text-slate-300 sm:text-2xl md:text-3xl"
          >
            <span className="mr-2">I&apos;m a</span>
            <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 bg-clip-text font-mono font-bold text-transparent">
              <TypeAnimation
                sequence={[
                  "Frontend Developer",
                  2000,
                  "React & Next.js Developer",
                  2000,
                  "MERN Stack Developer",
                  2000,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mx-auto mb-9 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-400 lg:mx-0 sm:text-lg"
          >
            I build responsive, accessible, and high-performance web
            applications using{" "}
            <span className="font-semibold text-slate-900 dark:text-slate-200">
              React.js, Next.js, JavaScript
            </span>
            , and{" "}
            <span className="font-semibold text-slate-900 dark:text-slate-200">
              Tailwind CSS
            </span>
            . I also have a MERN Stack background with experience in Node.js,
            Express.js, MongoDB, and REST APIs.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start"
          >
            {/* Resume */}
            <motion.a
              href="/Waheduzzaman_Resume.pdf"
              download
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="
                group
                inline-flex
                items-center
                justify-center
                gap-3
                rounded-xl
                bg-gradient-to-r
                from-blue-600
                to-indigo-600
                px-7
                py-3.5
                font-semibold
                text-white
                shadow-lg
                shadow-blue-600/20
                transition-all
                duration-300
                hover:from-blue-500
                hover:to-cyan-500
                hover:shadow-xl
                hover:shadow-blue-500/25
              "
            >
              <span>Download Resume</span>

              <FiDownload className="text-lg transition-transform duration-300 group-hover:translate-y-0.5" />
            </motion.a>

            {/* Projects */}
            <motion.a
              href="#projects"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center justify-cente gap-2 rounded-xl border border-slate-300 bg-white/70 px-7 py-3.5 font-semibold text-slate-800 backdrop-blur-sm transition-all duration-300 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-900/50 dark:text-white dark:hover:border-cyan-400 dark:hover:bg-cyan-500/5 dark:hover:text-cyan-400"
            >
              <span>View Projects</span>
              <FiArrowRight className="text-lg transition-transform duration-300 group-hover:translate-x-1" />
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="mt-9 flex items-center justify-center gap-3 lg:justify-start"
          >
            {socials.map((social) => {
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
                  className={`group relative flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white/70 text-slate-500 shadow-sm backdrop-blur-sm transition-all duration-300 dark:border-slate-800 dark:bg-slate-900/50 dark:text-slate-400
                    ${social.hoverColor}
                  `}
                >
                  <Icon className="text-lg transition-transform duration-300 group-hover:scale-110" />

                  {/* Tooltip */}
                  <span
                    className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 rounded-lg bg-slate-900 px-2.5 py-1.5 text-xs font-medium text-white opacity-0 shadow-lg transition-all duration-200 group-hover:-translate-y-1 group-hover:opacity-100 dark:bg-white dark:text-slate-900"
                  >
                    {social.name}
                  </span>
                </motion.a>
              );
            })}
          </motion.div>
        </div>

        {/* RIGHT SIDE — Profile */}
        <div className="relative h-72 w-72 shrink-0 sm:h-80 sm:w-80 md:h-96 md:w-96">
          {/* Available Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="absolute -top-10 left-1/2 z-50 -translate-x-1/2 whitespace-nowrap rounded-full border border-cyan-400/30 bg-white/90 px-4 py-2 shadow-lg shadow-cyan-500/10 backdrop-blur-md dark:bg-slate-900/90 sm:-top-8 md:left-auto md:right-2 md:translate-x-0"
          >
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400" />
              </span>

              <span className="text-xs font-semibold text-cyan-600 dark:text-cyan-300 sm:text-sm">
                Available for Frontend Developer
              </span>
            </div>
          </motion.div>

          {/* Profile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            whileHover={{ y: -8 }}
            className="relative h-full w-full"
          >
            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 blur-3xl" />

            {/* Outer ring */}
            <div className="absolute inset-0 scale-110 rounded-full border border-blue-500/20 dark:border-cyan-500/20" />

            {/* Inner ring */}
            <div className="absolute inset-0 scale-[1.04] rounded-full border-2 border-cyan-500/50 " />

            {/* Image wrapper */}
            <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-white bg-slate-100 shadow-2xl shadow-blue-900/10 dark:border-slate-900 dark:bg-slate-800 dark:shadow-black/30">
              <Image
                src="/wahid.png"
                alt="Md Waheduzzaman"
                fill
                priority
                className="object-cover transition-transform duration-700 hover:scale-105"
              />

              {/* Image overlay */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-blue-950/20 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Section Bottom Divider */}
      <div className="absolute bottom-0 left-1/2 h-1 w-full -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
    </section>
  );
};

export default Hero;

