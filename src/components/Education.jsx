"use client";

import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const education = [
  {
    degree: "Bachelor of Social Science (BSS) in Economics",
    institute: "National University, Bangladesh",
    startYear: 2023,
    period: "2023 — Present",
    status: "In Progress",
    description:
      "Currently pursuing undergraduate studies in Economics. Developing analytical skills, critical thinking, and problem-solving abilities.",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institute: "Moqubular Rahman Govt. College, Panchagarh",
    startYear: 2021,
    period: "2021 — 2022",
    status: "Completed",
    description:
      "Completed higher secondary education, building a strong foundation in academic knowledge, communication skills, and critical thinking."
  }
];

const PROGRAM_LENGTH_YEARS = 6;

function getProgress(startYear) {
  const now = new Date();
  const elapsed = now.getFullYear() - startYear + now.getMonth() / 12;
  return Math.min(1, Math.max(0.04, elapsed / PROGRAM_LENGTH_YEARS));
}

export default function Education() {
  return (
    <div className="bg-green-50/65">
      <section
        id="education"
        className="relative bg-green-50 dark:bg-[#0B1120] text-slate-800 dark:text-slate-200 px-6 py-20 transition-colors duration-300"
      >
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="w-10 h-[3px] bg-blue-600 rounded-full" />
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                Educational{" "}
                <span className="text-blue-600 dark:text-blue-400">
                  Qualification
                </span>
              </h2>
            </div>
            <p className="mt-3 text-slate-500 dark:text-slate-400 text-sm sm:text-base max-w-lg">
              My academic journey and educational background.
            </p>
          </motion.div>

          {/* Entries */}
          <div className="space-y-6">
            {education.map((item, index) => {
              const progress = getProgress(item.startYear);
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="relative group"
                >
                  {/* Background glow, matching the About image treatment */}
                  <div className="absolute -inset-1 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-3xl blur-lg opacity-10 group-hover:opacity-25 transition duration-500" />

                  <div className="relative p-6 sm:p-8 rounded-2xl bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 shadow-sm backdrop-blur-md">
                    <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                      {/* Icon badge */}
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg shadow-cyan-500/20 flex items-center justify-center text-white">
                          <FaGraduationCap size={22} />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-3 mb-1">
                          <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                            {item.degree}
                          </h3>
                          {item.status && (
                            <span className="inline-flex items-center text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full">
                              {item.status}
                            </span>
                          )}
                        </div>

                        <p className="font-mono text-sm font-semibold text-blue-600 dark:text-blue-400">
                          {item.institute}
                        </p>

                        <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300">
                          {item.description}
                        </p>

                        {/* Progress bar */}
                        {item.status === "In Progress" && (
                          <div className="mt-6">

                            <div className="flex justify-between text-xs font-medium text-slate-500 dark:text-slate-400 mb-2">
                              <span>{item.period}</span>
                            </div>

                            <div className="relative h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">

                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${progress * 100}%` }}
                                viewport={{ once: true }}
                                transition={{
                                  duration: 1,
                                  ease: "easeOut",
                                  delay: 0.2
                                }}
                                className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
                              />

                            </div>

                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}