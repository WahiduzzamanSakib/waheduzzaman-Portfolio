"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaJs, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGithub, } from "react-icons/fa";
import { SiExpress, SiMongodb, SiTailwindcss, } from "react-icons/si";

const TechStack = () => {
  const [isHover, setIsHover] = React.useState(false);

  const techs = [
    { name: "JavaScript", icon: FaJs, color: "text-yellow-400", },
    { name: "React", icon: FaReact, color: "text-cyan-400", },
    { name: "Node.js", icon: FaNodeJs, color: "text-green-400", },
    { name: "Express.js", icon: SiExpress, color: "text-gray-400", },
    { name: "MongoDB", icon: SiMongodb, color: "text-green-500", },
    { name: "HTML5", icon: FaHtml5, color: "text-orange-500", },
    { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500", },
    { name: "Tailwind", icon: SiTailwindcss, color: "text-sky-400", },
    {name: "Github", icon: FaGithub, color: "text-blue-500", },
  ];

  return (
    <div className="bg-green-50/80 dark:bg-[#0c0c2e]">
      <section
        id="tech-stack"
        className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-gray-200 dark:border-gray-800 overflow-hidden"
      >

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-mono text-gray-900 dark:text-white">
            Technologies
          </h2>

          <p className="mt-3 text-sm tracking-widest uppercase text-gray-500 dark:text-gray-400">
            My Tech Stack
          </p>
        </div>


        <div
          className="relative w-full overflow-hidden"
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >

          <motion.div
            className="flex gap-10 w-max p-6"
            animate={
              isHover
                ? { x: "-50%" }
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

            {[...techs, ...techs].map((tech, index) => (
              <div
                key={index}
                className="group flex flex-col items-center gap-4 min-w-[120px]"
              >
                <div
                  className="w-20 h-20 rounded-[30%] flex items-center justify-center bg-gray-100 dark:bg-gray-900 border
    border-gray-300 dark:border-gray-700 shadow-lg transition-allduration-300 group-hover:scale-110 
    group-hover:border-cyan-400"
                >
                  <tech.icon
                    className={`text-4xl ${tech.color}`}
                  />
                </div>

                <p
                  className="text-sm font-medium text-gray-700  dark:text-gray-300 hover:font-bold group-hover:text-blue-800 transition"
                >
                  {tech.name}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TechStack;