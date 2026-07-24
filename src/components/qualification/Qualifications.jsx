import  { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Experience from "./Experience";
import Education from "./Education";

const Qualifications = () => {
  const [activeTab, setActiveTab] = useState("experience");

  return (
    <section
      className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto"
      id="qualification"
    >
      {/* Heading */}
      <div className="text-center mb-20">
        <h2 className="font-headline-lg text-headline-lg text-primary">
          Qualification
        </h2>
        <p className="text-secondary font-label-mono text-sm mt-2">
          My personal journey
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center gap-16 mb-16">
        <button
          onClick={() => setActiveTab("experience")}
          className={`flex items-center gap-3 transition ${
            activeTab === "experience"
              ? "text-secondary border-b-2 border-secondary"
              : "text-primary"
          }`}
        >
          <span className="material-symbols-outlined">work</span>
          Experience
        </button>

        <button
          onClick={() => setActiveTab("education")}
          className={`flex items-center gap-3 transition ${
            activeTab === "education"
              ? "text-secondary border-b-2 border-secondary"
              : "text-primary"
          }`}
        >
          <span className="material-symbols-outlined">school</span>
          Education
        </button>
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        {activeTab === "experience" ? (
          <motion.div
            key="experience"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 30 }}
            transition={{ duration: 0.3 }}
          >
            <Experience />
          </motion.div>
        ) : (
          <motion.div
            key="education"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.3 }}
          >
            <Education />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Qualifications;