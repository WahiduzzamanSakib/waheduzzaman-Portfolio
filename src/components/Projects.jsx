import { useState } from 'react';
import { motion } from 'framer-motion';
import { GrGithub } from 'react-icons/gr';
import projects from '../../public/projects.json';

const AllProjects = () => {
  // ===== Pagination Logic =====
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;

  const currentProjects = projects.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <section
      className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto border-t border-surface-bright"
      id="projects"
    >
      {/* HEADER */}
      <div className="flex justify-between items-end mb-16">
        <div>
          <h2 className="font-headline-lg text-headline-lg text-primary">
            Porojects
          </h2>

          <p className="text-on-surface-variant mt-3 text-lg">
            Latest commercial projects and open source work.
          </p>
        </div>
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-3 gap-12">
        {currentProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-surface-container border border-surface-bright rounded-lg overflow-hidden group hover:border-secondary transition-all duration-500"
          >
            {/* IMAGE */}
            <div className="h-56 overflow-hidden relative">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                src={project.image}
                alt={project.title}
              />

              <div className="absolute inset-0 bg-background/40 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>

            {/* CONTENT */}
            <div className="p-8">
              <h4 className="font-headline-md text-xl text-primary mb-3 group-hover:text-secondary transition-colors">
                {project.title}
              </h4>

              <p className="text-on-surface-variant text-sm mb-6 leading-relaxed line-clamp-3">
                {project.desc}
              </p>

              {/* TAGS */}
              <div className="flex flex-wrap gap-2.5 mb-8">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-surface-container-high text-secondary text-[11px] font-label-mono rounded border border-surface-bright"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* BUTTONS */}
              <div className="flex gap-4">
                {/* GitHub Button */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center hover:rounded-full justify-center gap-2 bg-surface-container-high border border-surface-bright text-primary py-3 rounded text-xs font-label-mono hover:border-secondary transition-all"
                >
                  <GrGithub size={20} />
                  GitHub
                </a>

                {/* Live Demo Button */}
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center hover:rounded-full justify-center gap-2 bg-secondary text-on-secondary py-3 rounded text-xs font-label-mono font-bold shadow-lg hover:opacity-90 transition-all"
                >
                  <span className="material-symbols-outlined text-sm">
                    open_in_new
                  </span>

                  Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* PAGINATION */}
      <div className="flex justify-center mt-16 gap-3">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-5 py-2 rounded border transition-all ${currentPage === i + 1
              ? 'bg-secondary text-on-secondary border-secondary'
              : 'border-surface-bright text-primary hover:border-secondary'
              }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </section>
  );
};

export default AllProjects;