"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Experience from "./Experience";
import Education from "./Education";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

const Qualifications = () => {
  const [activeTab, setActiveTab] = useState("experience");

  const tabs = [
    {
      id: "experience",
      title: "Experience",
      icon: FaBriefcase,
    },
    {
      id: "education",
      title: "Education",
      icon: FaGraduationCap,
    },
  ];

  return (
    <div className="bg-green-50 dark:bg-[#070725]">
      <section
        id="qualification"
        className="py-12 px-6 md:px-20 max-w-7xl mx-auto  text-gray-900 dark:text-white"
      >
        {/* Heading */}
        <div className="text-center mb-10">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold font-mono text-black dark:text-green-50"
          >
            Qualifications
          </motion.h2>

          <p className="mt-2 text-md font-mono text-gray-500 dark:text-gray-400">
            My personal journey
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-10 md:gap-16 mb-6">
          {tabs.map((tab) => {
            const Icon = tab.icon;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-3 pb-2 transition-all duration-300
                ${activeTab === tab.id
                    ? "text-black dark:text-green-50 font-semibold border-b-2 border-blue-600 dark:border-blue-400"
                    : "text-black dark:text-gray-300"
                  }
              `}
              >
                <Icon className="text-xl" />
                {tab.title}
              </button>
            );
          })}
        </div>

        {/* Animated Content */}
        <AnimatePresence mode="wait">
          {activeTab === "experience" ? (
            <motion.div
              key="experience"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 40 }}
              transition={{ duration: 0.35 }}
            >
              <Experience />
            </motion.div>
          ) : (
            <motion.div
              key="education"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.35 }}
            >
              <Education />
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </div>
  );
};

export default Qualifications;