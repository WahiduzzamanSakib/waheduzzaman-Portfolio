import React from "react";
import { motion } from "framer-motion";

const TechStack = () => {
  const techs = [
    { name: "JavaScript", icon: "JS", color: "text-yellow-400" },
    { name: "React", icon: "deployed_code", color: "text-cyan-400", isMaterial: true },
    { name: "Node.js", icon: "javascript", color: "text-green-400", isMaterial: true },
    { name: "Express.js", icon: "ex", color: "text-gray-300", italic: true },
    { name: "MongoDB", icon: "database", color: "text-green-500", isMaterial: true },
    { name: "HTML5", icon: "H5", color: "text-orange-500" },
    { name: "CSS3", icon: "C3", color: "text-blue-500" },
    { name: "Tailwind", icon: "TW", color: "text-sky-400" },
  ];

  return (
    <section
      className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto border-t border-surface-bright"
      id="tech-stack"
    >
      {/* Heading */}
      <div className="text-center mb-20">
        <h2 className="font-headline-lg text-headline-lg text-primary">
          Technologies
        </h2>
        <p className="text-secondary font-label-mono text-sm mt-2">
          My Tech Stack
        </p>
      </div>

      {/* Tech Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 gap-10 justify-items-center">
        {techs.map((tech, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-4 group"
          >
            {/* Icon Circle */}
            <div className="w-16 h-16 rounded-full bg-surface-container border border-surface-bright flex items-center justify-center group-hover:border-secondary group-hover:scale-110 transition-all shadow-lg overflow-hidden relative">
              {tech.isMaterial ? (
                <span className={`material-symbols-outlined ${tech.color} text-3xl`}>
                  {tech.icon}
                </span>
              ) : (
                <span
                  className={`${tech.color} font-bold text-xl ${tech.italic ? "italic text-xs" : ""
                    }`}
                >
                  {tech.icon}
                </span>
              )}
            </div>

            {/* Name */}
            <span className="text-xs font-label-mono text-on-surface-variant group-hover:text-secondary transition-colors">
              {tech.name}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;