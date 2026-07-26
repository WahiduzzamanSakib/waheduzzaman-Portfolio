"use client";

import { motion } from "framer-motion";


const education = [
  {
    degree: "Bachelor of Social Science(BSS) in Economics",
    institute: "National University",
    period: "2023 - Present",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institute:
      "Moqubular Rahman Govt. College, Panchagarh",
    period: "2021 - 2023",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institute:
      "Magura Prodhan Para B.L. High School",
    period: "2015 - 2021",
  },
];


export default function Education() {

  return (

    <section
      className="py-20 bg-white dark:bg-zinc-950 transition-colors duration-300">

      <div className="max-w-5xl mx-auto px-6">
        {/* <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-16">
          Education
        </h2> */}

        <div className="relative">

          {/* Timeline Line */}
          <div
            className="absolute left-1/2 top-0 bottom-0 hidden md:block w-[3px] bg-gradient-to-b from-indigo-500
             via-purple-500 to-pink-500"/>

          {
            education.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: .5, delay: index * .15 }}
                className="relative grid md:grid-cols-2 gap-8 mb-14">


                {/* Left */}
                <div className={`${index % 2 === 0 ? "md:text-right" : "md:col-start-2"}`}>

                  <div className="p-6 rounded-2xl bg-gray-50 dark:bg-zinc-900 border
 border-gray-200 dark:border-zinc-800 shadow-sm hover:shadow-xl  dark:hover:bg-zinc-800 
  dark:hover:border-indigo-500/50  dark:hover:shadow-indigo-500/20 
  hover:-translate-y-2 transition-all duration-300">

                    <h3 className=" text-xl font-bold text-indigo-600 dark:text-indigo-400">
                      {item.degree}
                    </h3>

                    <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
                      {item.institute}
                    </p>


                    <span className="inline-block mt-3 text-sm font-medium text-purple-600 dark:text-purple-400">
                      {item.period}
                    </span>
                  </div>
                </div>

                {/* Center Dot */}
                <div
                  className="absolute left-1/2 top-10 -translate-x-1/2 hidden md:block w-5 h-5
                   rounded-full bg-indigo-600 ring- ring-indigo-500/20"/>
              </motion.div>
            ))
          }
        </div>
      </div>
    </section>
  )
}