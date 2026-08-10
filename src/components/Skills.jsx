"use client";

import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGitAlt, FaGithub, FaFigma, FaDatabase, FaCode, FaServer } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiJavascript, SiExpress, SiMongodb, SiPostman, SiStripe, SiNpm, SiVercel, SiNetlify } from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend Development",
    description: "Building modern, responsive user interfaces",
    icon: <FaReact />,
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
      { name: "JWT Authentication", icon: <FaCode />, level: 80 },
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
          <span className="flex items-center gap-1">
            <SiVercel />
            <SiNetlify />
          </span>
        ),
        level: 80,
      },
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
  hidden: {
    opacity: 0,
    y: 40,
  },

  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className=" relative overflow-hidden bg-slate-50 py-10 transition-colors duration-500 dark:bg-slate-900/60 sm:py-12"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Soft Light Glow */}
        <div
          className="absolute left-1/2 top-20 h-[350px] w-[700px] -translate-x-1/2 rounded-full bg-white/40 blur-[120px] dark:bg-white/[0.025]"
        />

        {/* Top Left Soft Glow */}
        <div
          className="absolute -left-32 top-[-160px] h-[420px] w-[420px] rounded-full bg-blue-500/[0.055] blur-[130px] dark:bg-blue-500/30"
        />


        {/* Bottom Right Soft Glow */}
        <div
          className="absolute -bottom-40 -right-32 h-[430px] w-[430px] rounded-full bg-cyan-500/[0.05] blur-[130px] dark:bg-blue-500/30"
        />
        <div
          className="absolute -top-40 -right-32 h-[430px] w-[430px] rounded-full bg-cyan-500/[0.05] blur-[130px] dark:bg-blue-500/30"
        />

        {/* Small Center Glow */}
        <div
          className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.025] blur-[100px] dark:bg-blue-500/30"
        />

        {/* Very Subtle Grid */}
        <div
          className="absolute inset-0 opacity-[0.018] dark:opacity-[0.025] [background-image:linear-gradient(to_right,#64748b_1px,transparent_1px),linear-gradient(to_bottom,#64748b_1px,transparent_1px)] [background-size:48px_48px]"
        />

        {/* Top Fade */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-slate-50 to-transparent dark:from-slate-900" />

        {/* Bottom Fade */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-50 to-transparent dark:from-slate-900" />
      </div>

      {/* CONTENT*/}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 sm:mb-16"
        >
          {/* Small Label */}
          <span
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/80 px-4 py-2 text-sm font-semibold text-blue-600 shadow-sm dark:border-blue-900/50 dark:bg-blue-950/30 dark:text-blue-400"
          >
            <span className="h-2 w-2 rounded-full bg-cyan-500 shadow-sm shadow-cyan-500/50" />
            Technologies & Tools
          </span>

          {/* Heading */}
          <h2 className="text-4xl font-black tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            My{" "}
            <span className="bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-500 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>

          {/* Underline */}
          <div className="mt-4 h-1 w-28 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/20" />

          {/* Description */}
          <p className="mt-3 max-w-xl text-base leading-7 text-slate-600 dark:text-slate-400 sm:text-lg">
            Technologies and tools I use to build modern, scalable and
            user-friendly applications.
          </p>
        </motion.div>

        {/* SKILL CARDS*/}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2, }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              variants={cardAnimation}
              key={index}
              whileHover={{ y: -8, }}
              className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/75 p-6 shadow-sm backdrop-blur-xl transition-all duration-300 hover:border-blue-300/70 hover:shadow-xl hover:shadow-blue-500/10 dark:border-slate-800 dark:bg-slate-950/60 dark:hover:border-blue-900/70 dark:hover:shadow-blue-500/5 sm:p-7"
            >
              {/* Hover Background */}
              <div
                className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/[0.07] via-transparent to-blue-500/[0.05] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />

              {/* Top Glow Line */}
              <div
                className="absolute left-8 right-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />

              {/* Category Icon */}
              <div
                className="relative mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-100 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 text-3xl text-cyan-500 shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:border-cyan-200 group-hover:shadow-lg group-hover:shadow-cyan-500/10 dark:border-cyan-900/40 dark:text-cyan-400 dark:group-hover:border-cyan-800"
                >
                {category.icon}

                {/* Icon Glow */}
                <div className="absolute inset-0 -z-10 rounded-2xl bg-cyan-500/10 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />
              </div>

              {/* Category Title */}
              <h3 className="relative text-xl font-bold tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-blue-600 dark:text-white dark:group-hover:text-cyan-400">
                {category.title}
              </h3>

              {/* Category Description */}
              <p className="relative mt-2 mb-7 text-sm leading-6 text-slate-500 dark:text-slate-400">
                {category.description}
              </p>

              {/* Skills */}
              <div className="relative space-y-5">
                {category.skills.map((skill, i) => (
                  <div key={i}>
                    {/* Skill Name + Percentage */}
                    <div className="mb-2 flex items-center justify-between gap-3">
                      <div className="flex min-w-0 items-center gap-2 text-sm font-medium text-slate-700dark:text-slate-200">
                        <span className="shrink-0 text-cyan-500 transition-transform duration-300 group-hover:scale-110 dark:text-cyan-400">
                          {skill.icon}
                        </span>
                        <span className="truncate">{skill.name}</span>
                      </div>

                      <span className="shrink-0 text-xs font-bold text-cyan-600 dark:text-cyan-400">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Track */}
                    <div className="h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                      {/* Progress */}
                      <motion.div
                        initial={{ width: 0, }}
                        whileInView={{ width: `${skill.level}%`, }}
                        viewport={{ once: true, }}
                        transition={{ duration: 1, delay: i * 0.1, ease: "easeOut", }}
                        className="relative h-full rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500"
                      >
                        {/* Progress Shine */}
                        <div
                          className="absolute inset-y-0 right-0 w-10 bg-white/20 blur-sm"
                        />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Section Divider */}
        <div
          className="mx-auto  h-px  w-3/4  bg-gradient-to-r  from-transparent  via-cyan-500/25  to-transparent  "
        />
      </div>
    </section>
  );
}
