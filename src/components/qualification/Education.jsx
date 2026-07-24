import { motion } from "framer-motion";

const Education = () => {
  const education = [
  {
    title: "B.S.S in Economics",
    institute: "National University",
    period: "2023 - Present",
    side: "left",
  },
  {
    title: "HSC",
    institute: "Moqubular Rahman Govt. College, Panchagarh",
    period: "2021 - 2023",
    side: "right",
  },
  {
    title: "SSC",
    institute: "Magura Prodhan Para B.L. High School",
    period: "2015 - 2021",
    side: "left",
  },
];
  return (
    <div className="max-w-2xl mx-auto relative">

      {/* center line */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-surface-bright"></div>

      {education.map((edu, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="relative grid grid-cols-2 gap-12 mb-16 items-center"
        >
          {edu.side === "left" ? (
            <>
              {/* Left side */}
              <div className="text-right pr-10">
                <h3 className="font-bold text-primary text-lg">
                  {edu.title}
                </h3>
                <p className="text-sm text-on-surface-variant">
                  {edu.institute}
                </p>
                <p className="text-xs text-secondary mt-1">
                  {edu.period}
                </p>
              </div>

              {/* Dot */}
              <div className="absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-secondary rounded-full ring-4 ring-secondary/20"></div>

              <div></div>
            </>
          ) : (
            <>
              <div></div>

              {/* Dot */}
              <div className="absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-secondary rounded-full ring-4 ring-secondary/20"></div>

              {/* Right side */}
              <div className="pl-10">
                <h3 className="font-bold text-primary text-lg">
                  {edu.title}
                </h3>
                <p className="text-sm text-on-surface-variant">
                  {edu.institute}
                </p>
                <p className="text-xs text-secondary mt-1">
                  {edu.period}
                </p>
              </div>
            </>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default Education;