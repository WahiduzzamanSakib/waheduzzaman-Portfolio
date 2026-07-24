import React from 'react';
import { motion } from 'framer-motion';

/* ---------------- Stats ---------------- */
const stats = [
  { id: 1, icon: 'code', label: 'Projects', value: '5+ Projects' },
  { id: 2, icon: 'terminal', label: 'Tech Stack', value: 'MERN & Tailwind' },
  { id: 3, icon: 'schedule', label: 'Availability', value: 'Open to Work' },
];

/* ---------------- Tech Stack ---------------- */
const techStack = [
  { name: "JavaScript", color: "text-yellow-400" },
  { name: "React", color: "text-cyan-400" },
  { name: "Node.js", color: "text-green-400" },
  { name: "Express.js", color: "text-gray-300" },
  { name: "MongoDB", color: "text-green-500" },
  { name: "HTML5", color: "text-orange-500" },
  { name: "CSS3", color: "text-blue-500" },
  { name: "Tailwind CSS", color: "text-sky-400" },
];

/* ---------------- Animation ---------------- */
const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0 },
};

/* ---------------- Tech Ticker ---------------- */
const TechTicker = ({ items }) => {
  return (
    <div className="overflow-hidden whitespace-nowrap border border-surface-bright rounded-xl py-3 bg-surface-container">
      <motion.div
        className="flex gap-10 w-max"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: 'linear',
        }}
      >
        {[...items, ...items].map((tech, index) => (
          <span
            key={index}
            className={`font-medium px-4 ${tech.color}`}
          >
            {tech.name} •
          </span>
        ))}
      </motion.div>
    </div>
  );
};

/* ---------------- Main Component ---------------- */
const About = () => {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto"
    >
      {/* Header */}
      <div className="text-center mb-16">
        <motion.h2
          id="about-heading"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-headline-lg text-headline-lg text-primary"
        >
          About Me
        </motion.h2>

        <p className="text-secondary font-label-mono text-sm mt-2 tracking-wide">
          My Introduction
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-12">
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="bg-surface-container border border-surface-bright p-6 rounded-2xl text-center hover:border-secondary transition-all duration-300 shadow-lg hover:shadow-2xl"
            >
              <span
                className="material-symbols-outlined text-secondary text-3xl mb-3 block"
              >
                {stat.icon}
              </span>

              <h3 className="text-sm font-bold text-primary">
                {stat.label}
              </h3>

              <p className="text-xs text-on-surface-variant mt-1">
                {stat.value}
              </p>
            </motion.div>
          ))}
        </div>

        {/* About Text */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-body-lg text-on-surface-variant leading-8 text-center lg:text-left"
        >
          I'm a passionate{' '}
          <strong className="text-primary">
            MERN Stack Developer
          </strong>{' '}
          focused on building modern, scalable, and responsive web applications.
          <br />
          <br />
          I enjoy turning ideas into real-world products using clean code and modern tools.
        </motion.p>

        {/* 🔥 Tech Ticker */}
        <TechTicker items={techStack} />

        {/* Resume Button */}
        <div className="flex justify-center lg:justify-start">
          <motion.a
            href="/resume.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group bg-surface-container-high text-primary px-8 py-4 rounded-xl font-bold flex items-center gap-3 border border-surface-bright hover:border-secondary hover:bg-surface-container transition-all duration-300 shadow-xl"
          >
            Download Resume

            <span className="material-symbols-outlined text-xl transition-transform group-hover:translate-x-1">
              description
            </span>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default About;