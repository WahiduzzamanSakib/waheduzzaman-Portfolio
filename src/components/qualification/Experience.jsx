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
      period: "Learning Stage",
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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {journey.map((item, i) => {
        const isActive = activeIndex === i;

        return (
          <div
            key={i}
            onMouseEnter={() => setActiveIndex(i)}
            onMouseLeave={() => setActiveIndex(null)}
            className={`relative bg-surface-container border p-8 rounded transition-all duration-300 cursor-pointer
              ${isActive
                ? "border-secondary shadow-lg scale-[1.02]"
                : "border-surface-bright"
              }
            `}
          >
            {/* Dot */}
            <div
              className={`absolute -left-2 top-6 w-4 h-4 rounded-full transition-all duration-300
                ${isActive ? "bg-secondary" : "bg-surface-bright"}
              `}
            />

            <h3 className="text-xl font-bold text-primary">{item.title}</h3>
            <p className="text-secondary text-sm">{item.period}</p>
            <p className="text-gray-400 mt-4">{item.desc}</p>

            {/* Tags */}
            <div className="flex gap-2 mt-4 flex-wrap">
              {item.tags.map((tag, j) => (
                <span
                  key={j}
                  className="
                    text-xs px-3 py-1 rounded border border-secondary/30
                    text-secondary transition-all duration-300
                    hover:bg-secondary hover:text-black
                    hover:scale-105
                  "
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MERNJourney;