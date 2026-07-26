import React, { useState } from "react";

const MERNJourney = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const journey = [
    {
      title: "Started Web Development",
      period: "2025",
      desc: "Learned HTML, CSS, and JavaScript fundamentals.",
      tags: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Frontend with React",
      period: "2025 - Present",
      desc: "Built interactive UI using React and component-based architecture.",
      tags: ["React", "Components", "State"],
    },
    {
      title: "Backend with Node & Express",
      period: "Learning ",
      desc: "Learning backend development and REST API creation.",
      tags: ["Node.js", "Express", "API"],
    },
    {
      title: "MongoDB & MERN Practice",
      period: "Ongoing",
      desc: "Practicing full-stack MERN projects with database integration.",
      tags: ["MongoDB", "MERN", "Full Stack"],
    },
  ];

  return (
    <section className="min-h-screen transition-colors duration-500
      bg-green-50 dark:bg-slate-950 p-8">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {journey.map((item, i) => {
          const isActive = activeIndex === i;

          return (
            <div
              key={i}
              onMouseEnter={() => setActiveIndex(i)}
              onMouseLeave={() => setActiveIndex(null)}
              className={`
                relative rounded-2xl p-8 cursor-pointer
                transition-all duration-300 border backdrop-blur
                bg-white/60 dark:bg-slate-900/80
                ${isActive
                  ? `border-indigo-500 shadow-xl shadow-indigo-500/20 scale-[1.03]`
                  : `border-slate-200 dark:border-slate-800 hover:border-indigo-400`
                }`}
            >

              {/* Timeline Dot */}
              <div
                className={`absolute -left-3 top-8 w-5 h-5 rounded-full border-4 transition-all duration-300
                  ${isActive
                    ? `bg-indigo-500 border-indigo-200 dark:border-indigo-900`
                    : `bg-slate-300 dark:bg-slate-700 border-slate-100 dark:border-slate-950`}
                `}
              />

              {/* Content */}
              <h3 className="text-xl font-bold dark:text-green-50 text-black">
                {item.title}
              </h3>

              <p
                className="text-sm mt-1 text-indigo-600 dark:text-indigo-400 font-medium"
              >
                {item.period}
              </p>

              <p
                className="mt-4 leading-relaxed text-slate-600 dark:text-slate-400">
                {item.desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-3 mt-6">
                {item.tags.map((tag, j) => (

                  <span
                    key={j}
                    className="px-3 py-1 rounded-full text-xs font-medium border text-indigo-600 dark:text-indigo-300
                      border-indigo-200 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-950/40
                      transition-all duration-300 hover:bg-indigo-600 hover:text-white hover:scale-105 ">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default MERNJourney;