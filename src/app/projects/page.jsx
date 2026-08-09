"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import { LuLoaderCircle } from "react-icons/lu";

const ITEMS_PER_PAGE = 9;

const AllProjectsPage = () => {

  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  // Fetch Projects
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("/projects.json", {
          cache: "no-store",
        });;
        if (!res.ok) {
          throw new Error("Failed to load projects");
        }
        const data = await res.json();
        setProjects(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  const totalPages = Math.ceil(
    projects.length / ITEMS_PER_PAGE
  );

  const currentProjects = useMemo(() => {
    const start =
      (currentPage - 1) * ITEMS_PER_PAGE;

    return projects.slice(
      start,
      start + ITEMS_PER_PAGE
    );
  }, [projects, currentPage]);

  if (loading) {
    return (
      <section className="bg-gray-500 text-white py-20 text-center">
        <p className="text-primary animate-pulse">
          <LuLoaderCircle className="animate-spin-slow inline-block w-6 h-6" />
        </p>
      </section>
    );
  }

  return (
    <div id="projects" className="scroll-mt-24 pb-12 pt-24 px-6 md:px-12 border-t bg-gray-300 dark:bg-[#0b0b31] ">
      <section
        
        className=" max-w-7xl mx-auto  border-surface-bright"
      >
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 flex  flex-col text-center"
        >
          <h2 className="text-4xl font-mono md:text-5xl font-bold text-primary">
            My Projects
          </h2>
          <p className="mt-2 text-lg text-on-surface-variant">
            Latest commercial projects and open source work.
          </p>
        </motion.div>

        {/* PROJECT GRID */}
        <div className=" -mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {currentProjects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}

              className="group overflow-hidden rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur-xl
          border border-gray-200 dark:border-white/10 shadow-lg shadow-black/5 dark:shadow-black/30
          hover:border-secondary/70 hover:shadow-xl hover:shadow-secondary/10 transition-all duration-500"
            >
              {/* IMAGE */}
              <div className="relative h-56 overflow-hidden">

                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover saturate-50 group-hover:saturate-100 group-hover:scale-110 transition-all duration-700"
                  priority
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent
              group-hover:from-black/20 transition duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="p-7">
                <h3 className="text-xl font-semibold text-primary group-hover:text-secondary transition">
                  {project.title}
                </h3>

                <p className="mt-4 text-sm text-on-surface-variant dark:text-gray-400 leading-relaxed line-clamp-3">
                  {project.desc}
                </p>

                {/* TAGS */}
                 <div className="flex flex-wrap gap-2 mt-6">

                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-sm bg-secondary/10 dark:bg-secondary/20 border-2 border-cyan-800
                   text-secondary hover:bg-secondary hover:text-on-secondary hover:scale-110 transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}

                  {project.tags.length > 4 && (
                    <span
                      className="px-3 py-1 rounded-full text-sm bg-gray-200 dark:bg-white/10 border-2 border-gray-400 dark:border-cyan-400 text-gray-700 dark:text-gray-300 hover:scale-110 transition-all duration-300 cursor-pointer"
                    >
                      +{project.tags.length - 4} More
                    </span>
                  )}

                </div>

                {/* BUTTONS */}
                <div className="flex gap-4 mt-8">

                  {/*    <a 
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex justify-center items-center gap-2 py-3 rounded-lg border-2 border-black dark:border-cyan-400
                    text-primary hover:bg-primary/5 hover:border-secondary hover:rounded-full transition text-sm"
                  >
                    <FaExternalLinkAlt /> Live Link
                  </a> */}

                  <Link
                    href={`/projects/${project.id}`}
                    className="flex-1 flex justify-center items-center gap-2 py-3 rounded-lg border-2 border-gray-300 dark:border-white/20 bg-white dark:bg-[#1a1a49] text-gray-900 dark:text-white shadow-sm
                   hover:bg-cyan-50 dark:hover:bg-cyan-400/10 hover:border-cyan-400 dark:hover:border-cyan-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:shadow-lg hover:shadow-cyan-400/20 hover:rounded-full
                   hover:scale-105 active:scale-95 transition-all duration-300 text-sm font-medium"
                  >
                    View Details
                  </Link>

                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* PAGINATION */}
        {
          totalPages > 1 && (
            <div className="flex justify-center items-center cursor-pointer gap-3 mt-16">

              <button
                disabled={currentPage === 1}
                onClick={() =>
                  setCurrentPage(prev => prev - 1)
                }
                className="p-3 rounded-full border cursor-pointer border-surface-bright disabled:opacity-40">
                <FaChevronLeft />
              </button>

              {
                Array.from({
                  length: totalPages
                }).map((_, index) => (

                  <button
                    key={index}
                    onClick={() =>
                      setCurrentPage(index + 1)
                    }
                    className={`w-10 h-10 cursor-pointer rounded-full border transition
                ${currentPage === index + 1
                        ? "bg-secondary text-on-secondary border-secondary"
                        : "border-surface-bright text-primary hover:border-secondary"
                      }`}
                  >
                    {index + 1}
                  </button>
                ))
              }

              <button
                disabled={currentPage === totalPages}
                onClick={() =>
                  setCurrentPage(prev => prev + 1)
                }
                className="p-3 rounded-full border cursor-pointer border-surface-bright disabled:opacity-40">
                <FaChevronRight />
              </button>
            </div>
          )
        }
      </section>
    </div>
  );
};

export default AllProjectsPage;