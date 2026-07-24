
import { motion } from "framer-motion";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "desktop_windows",
      skills: ["React.js", "Next.js", "Tailwind CSS", "JavaScript (ES6+)"],
    },
    {
      title: "Backend Development",
      icon: "dns",
      skills: ["Node.js", "Express.js", "Stripe", "REST APIs", "Authentication (JWT)"],
    },
    {
      title: "Database",
      icon: "database",
      skills: ["MongoDB", "NoSQL Design"],
    },
    {
      title: "Tools & Version Control",
      icon: "build",
      skills: ["Tailwind CSS", "GitHub", "VS Code", "Figma", "npm package ", "Postman", "HeroUI", "Stripe Integration"],
    }
  ];

  return (
    <section
      className="py-32 bg-surface-container-low border-y border-surface-bright"
      id="skills"
    >
      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">

        {/* Heading */}
        <div className="relative mb-16">
          <h2 className="font-headline-lg text-headline-lg text-primary">
            Skills
          </h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 140 }}
            viewport={{ once: true }}
            className="absolute -bottom-3 left-0 h-1.5 bg-secondary shadow-[0_0_15px_rgba(0,255,209,0.5)]"
          />
        </div>

        {/* Skill Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-surface-container border border-surface-bright p-8 rounded-lg hover:border-secondary transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 flex items-center justify-center bg-secondary/10 rounded mb-6">
                <span className="material-symbols-outlined text-secondary text-3xl">
                  {category.icon}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-headline-md text-xl text-primary mb-6">
                {category.title}
              </h3>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-background text-secondary text-xs font-label-mono rounded border border-surface-bright hover:border-secondary transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;