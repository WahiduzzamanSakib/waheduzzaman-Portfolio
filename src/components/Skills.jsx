"use client";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGitAlt, FaGithub, FaFigma, FaDatabase, FaCode, FaServer } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiJavascript, SiExpress, SiMongodb, SiPostman, SiStripe, SiNpm, SiVercel, SiNetlify, SiRender } from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend Development",
    description: "Building modern, responsive user interfaces",
    icon: <FaCode />,
    skills: [
      { name: "React.js", icon: <FaReact />, level: 90 },
      { name: "Next.js", icon: <SiNextdotjs />, level: 85 },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 95 },
      { name: "JavaScript", icon: <SiJavascript />, level: 90 },
    ],
  },
  {
    title: "Backend Development",
    description: "Creating scalable server-side applications",
    icon: <FaServer />,
    skills: [
      { name: "Node.js", icon: <FaNodeJs />, level: 85 },
      { name: "Express.js", icon: <SiExpress />, level: 85 },
      { name: "REST APIs", icon: <FaCode />, level: 90 },
      { name: "JWT Authentication", icon: <FaServer />, level: 80 },
      { name: "Stripe Integration", icon: <SiStripe />, level: 75 },
    ],
  },
  {
    title: "Database",
    description: "Managing structured and scalable data",
    icon: <FaDatabase />,
    skills: [
      { name: "MongoDB", icon: <SiMongodb />, level: 85 },
      // { name: "NoSQL Design", icon: <FaDatabase />, level: 80 },
    ],
  },
  {
    title: "Tools & Workflow",
    description: "Development tools and collaboration",
    icon: <FaGitAlt />,
    skills: [
      { name: "Git & GitHub", icon: <FaGithub />, level: 90 },
      { name: "Figma", icon: <FaFigma />, level: 75 },
      { name: "Postman", icon: <SiPostman />, level: 70 },
      { name: "npm", icon: <SiNpm />, level: 85 },
      {
        name: "Vercel / Netlify",
        icon: (
          <div className="flex gap-2"> <SiVercel /> <SiNetlify /></div>
        ),
        level: 80
      }
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

const cardAnimation = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1, y: 0,
    transition: {
      duration: .6,
      ease: "easeOut"
    }
  }
};

export default function Skills() {

  return (
    <section
      id="skills" className="scroll-mt-24 py-12 bg-green-50  dark:bg-[#060622] transition-colors duration-500">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-mono text-gray-900 dark:text-white"  >
            My Skills
          </h2>
          <div className="mt-4 h-1 w-32 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50" />

          <p className="mt-5 text-gray-600 dark:text-gray-300 max-w-xl">
            Technologies and tools I use to build
            modern, scalable and user-friendly applications.
          </p>
        </motion.div>

        {/* Skill Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: .2 }}

          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {
            skillCategories.map((category, index) => (
              <motion.div
                variants={cardAnimation}
                key={index}
                whileHover={{ y: -10 }}
                className="group relative  overflow-hidden rounded-3xl p-7 bg-white/80 dark:bg-[#09092b] border border-gray-200 dark:border-white/10 shadow-xl transition-all duration-300 ">

                {/* Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-cyan-400/20 to-transparent transition" />

                {/* Category Icon */}
                <div
                  className="relative w-16 h-16 flex items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-400 text-4xl mb-6 group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>

                <h3 className="relative text-xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>

                <p className="relative text-sm mt-2 mb-6 text-gray-500 dark:text-gray-400">
                  {category.description}
                </p>

                {/* Skills */}
                <div className="relative space-y-5">
                  {
                    category.skills.map((skill, i) => (
                      <div key={i}>
                        <div className="flex justify-between items-center mb-2">
                          <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-200">
                            <span className="text-cyan-400">
                              {skill.icon}
                            </span>
                            {skill.name}
                          </div>

                          <span className="text-xs text-cyan-400 font-semibold">
                            {skill.level}%
                          </span>
                        </div>

                        <div className="h-2 rounded-full bg-gray-200 dark:bg-zinc-800 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: i * .1 }}
                            className="h-full bg-cyan-400 rounded-full" />
                        </div>
                      </div>
                    ))}
                </div>
              </motion.div>
            ))}
        </motion.div>
      </div>
    </section>
  );
}