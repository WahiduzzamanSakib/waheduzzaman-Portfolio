"use client";

import { motion } from "framer-motion";
import {
  FaReact, FaNodeJs, FaGitAlt, FaGithub, FaFigma, FaDatabase, FaCode, FaServer,
} from "react-icons/fa";

import {
  SiNextdotjs, SiTailwindcss, SiJavascript, SiExpress, SiMongodb, SiPostman, SiStripe, SiNpm, SiVercel,
} from "react-icons/si";


const skillCategories = [
  {
    title: "Frontend Development",
    icon: <FaCode />,
    skills: [
      { name: "React.js", icon: <FaReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "JavaScript", icon: <SiJavascript /> },
    ],
  },

  {
    title: "Backend Development",
    icon: <FaServer />,
    skills: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "REST APIs", icon: <FaCode /> },
      { name: "JWT Auth", icon: <FaServer /> },
      { name: "Stripe", icon: <SiStripe /> },
    ],
  },

  {
    title: "Database",
    icon: <FaDatabase />,
    skills: [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "NoSQL Design", icon: <FaDatabase /> },
    ],
  },
  {
    title: "Tools & Workflow",
    icon: <FaGitAlt />,
    skills: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "VS Code", icon: <FaCode /> },
      { name: "Figma", icon: <FaFigma /> },
      { name: "npm", icon: <SiNpm /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "Vercel", icon: <SiVercel /> },
    ],
  },
];


const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};


const item = {
  hidden: { opacity: 0, y: 40, },
  show: {
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: "easeOut", },
  },
};



export default function Skills() {

  return (
    <div className="bg-green-50/80 ">
      <section
        id="skills"
        className="pb-18 pt-12 bg-green-50 dark:bg-[#060622] transition-colors duration-500"
      >
        <div className="max-w-7xl  mx-auto px-6">

          {/* Heading */}
          <div className="mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-mono font-bold text-gray-900 dark:text-white"
            >
              My Skills
            </motion.h2>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 130 }}
              viewport={{ once: true }}
              transition={{ duration: .8 }}
              className="mt-4 h-1 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/40" />
          </div>

          {/* Cards */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: .2 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {
              skillCategories.map((category, index) => (

                <motion.div
                  variants={item}
                  key={index}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className=" group relative overflow-hidden rounded-2xl p-7 bg-white/80 dark:bg-[#070725] 
                  backdrop-blur-xl border border-gray-20 dark:border-white/10 shadow-lg hover:shadow-cyan-400/20
                hover:-translate-y-2 transition-all duration-300"
                >
                  {/* Glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br 
                    from-cyan-400/10 to-transparent transition"/>

                  {/* Icon */}
                  <div
                    className="relative w-14 h-14 flex items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400 text-3xl
                    mb-6 group-hover:scale-110 transition-transform"
                  >
                    {category.icon}
                  </div>

                  {/* Title */}
                  <h3 className=" relative text-xl font-semibold text-gray-900 dark:text-white mb-5">
                    {category.title}
                  </h3>

                  {/* Skills */}
                  <div className="relative flex flex-wrap gap-3">
                    {
                      category.skills.map((skill, i) => (
                        <motion.div
                          key={i}
                          whileHover={{ scale: 1.08 }}
                          className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm bg-gray-100 dark:bg-zinc-800 text-gray-700
                            dark:text-gray-200 border border-gray-200 dark:border-zinc-700 hover:border-cyan-400 transition"
                        >
                          <span className="text-cyan-400">
                            {skill.icon}
                          </span>
                          {skill.name}
                        </motion.div>
                      ))
                    }
                  </div>
                </motion.div>
              ))
            }
          </motion.div>
        </div>
      </section>
    </div>
  );
}