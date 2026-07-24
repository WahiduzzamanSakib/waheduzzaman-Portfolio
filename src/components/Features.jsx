import React from 'react';
import { motion } from 'framer-motion';

const Features = () => {
  const features = [
    {
      icon: 'speed',
      title: 'Fast',
      desc: 'Fast load times and lag free interaction, my highest priority.',
    },
    {
      icon: 'devices',
      title: 'Responsive',
      desc: 'My layouts will work on any device, big or small.',
    },
    {
      icon: 'lightbulb',
      title: 'Intuitive',
      desc: 'Strong preference for easy to use, intuitive UX/UI.',
    },
    {
      icon: 'rocket_launch',
      title: 'Dynamic',
      desc: "Websites don't have to be static. I love making pages come to life.",
    },
  ];

  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto border-y border-surface-bright">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
        {features.map((feature, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center group"
          >
            <div className="w-20 h-20 mb-6 flex items-center justify-center bg-surface-container-high rounded border border-surface-bright group-hover:border-secondary transition-all duration-300">
              <span className="material-symbols-outlined text-secondary text-4xl" data-weight="fill">
                {feature.icon}
              </span>
            </div>
            <h3 className="font-headline-md text-xl text-primary mb-3">{feature.title}</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
      {/* <div className="mt-16 text-center">
        <a className="text-secondary font-label-mono hover:underline inline-flex items-center gap-3 py-2 px-4 rounded hover:bg-secondary/5 transition-all" href="#">
          Download my resume (PDF)
          <span className="material-symbols-outlined text-sm">download</span>
        </a>
      </div> */}
    </section>
  );
};

export default Features;
