"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaServer, FaArrowLeft } from "react-icons/fa";
import Link from "next/link";


const ViewDetails = ({ project }) => {

    if (!project) {
        return (
            <section className="min-h-screen flex items-center justify-center px-6 bg-gray-100 dark:bg-[#080821]">

                <motion.div
                    initial={{ opacity: 0, scale: .8 }}
                    animate={{ opacity: 1, scale: 1 }}

                    className="text-center p-10 rounded-3xl bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 shadow-xl">

                    <h1 className="text-4xl font-bold text-primary">Project Not Found</h1>

                    <Link
                        href="/projects" className="inline-flex items-center gap-2 mt-8 px-7 py-3 rounded-xl bg-secondary text-white hover:scale-105 transition">
                        <FaArrowLeft /> Back Projects
                    </Link>
                </motion.div>
            </section>
        );
    }

    return (
        <section className="min-h-screen pt-30 pb-10 px-6 bg-gray-100 dark:bg-[#080821] overflow-hidden">

            {/* Container */}
            <div className="max-w-6xl mx-auto">

                {/* Back Button */}
                <button
                    onClick={() => {
                        window.location.href = "/projects";
                    }}
                    className="mb-6 inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-white/5 text-gray-700 dark:text-gray-300 shadow-md hover:shadow-xl hover:border-cyan-500 hover:text-cyan-500 hover:bg-cyan-500/5 hover:-translate-x-1 transition-all duration-300 group"
                >
                    <FaArrowLeft className="transition-transform duration-300 group-hover:-translate-x-1" />
                    <span>View All Projects</span>
                </button>




                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: .7 }}
                    whileHover={{ y: -8 }}

                    className="relative group max-w-6xl mx-auto overflow-hidden rounded-[2rem] bg-white/60 dark:bg-white/[0.06] backdrop-blur-2xl border border-white/20 shadow-2xl hover:shadow-secondary/30 transition-all duration-500">

                    {/* Glow Effect */}

                    <div className="absolute -inset-1 bg-gradient-to-r from-secondary to-primary opacity-0 blur-3xl group-hover:opacity-20 transition duration-700" />

                    {/* IMAGE */}
                    {
                        project?.image && (
                            <div
                                className="relative object-cover h-[200px] md:h-[500px] overflow-hidden hover:scale-105">

                                <Image
                                    src={project?.image}
                                    alt={project?.title || "Project image"}
                                    fill priority
                                    className="object-cover transition-all duration-[1200ms] ease-out "
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                <div className="absolute bottom-0 h-32 w-full bg-gradient-to-t from-secondary/30 to-transparent" />
                            </div>)}

                    <div className="relative p-6 md:p-8">

                        {/* TITLE */}
                        <motion.h1
                            initial={{ opacity: 0, x: -40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: .2 }}

                            className=" text-3xl md:text-4xl font-black font-mono text-black dark:text-white ">
                            {project?.title}
                        </motion.h1>

                        {/* DESCRIPTION */}
                        <p className="mt-4 text-md md:text-lg  leading-relaxed text-gray-700 dark:text-gray-400 max-w-3xl">
                            {project?.desc}
                        </p>

                        {/* TAGS */}
                        {
                            project?.tags?.length > 0 && (
                                <div
                                    className="flex flex-wrap gap-4 mt-6">
                                    {
                                        project.tags.map(
                                            (tag, index) => (
                                                <motion.span
                                                    key={`${tag}-${index}`}
                                                    whileHover={{ scale: 1.15, y: -5 }}
                                                    transition={{ type: "spring", stiffness: 300 }}

                                                    className="px-5 py-2 rounded-full bg-secondary/10 dark:bg-secondary/20 border border-secondary/40 text-secondary font-semibold shadow-md cursor-pointer">
                                                    {tag}
                                                </motion.span>
                                            ))
                                    }
                                </div>
                            )
                        }

                        {/* BUTTONS */}
                        <div
                            className="flex flex-wrap gap-6 mt-10">
                            {
                                project?.clientRepo && (
                                    <a
                                        href={project?.clientRepo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group/button flex items-center gap-3 px-7 py-3.5 rounded-2xl border border-primary/40 text-primary font-semibold  hover:bg-primary hover:text-black dark:hover:text-white hover:scale-105 transition-all">
                                        <FaGithub className="group-hover/button:rotate-12 transition" />
                                        Client Repo
                                    </a>
                                )
                            }

                            {
                                project?.serverRepo && (
                                    <a
                                        href={project?.serverRepo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group/button flex items-center gap-3 px-7 py-3.5 rounded-2xl border border-primary/40 text-primary font-semibold hover:bg-primary hover:text-black dark:hover:text-white hover:scale-105 transition-allduration-300"
                                    >
                                        <FaServer className="group-hover/button:rotate-12 transition" />
                                        Server Repo
                                    </a>
                                )
                            }

                            {
                                project?.live && (
                                    <a
                                        href={project?.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className=" group/button flex items-center justify-center gap-3 px-8 py-4 rounded-2xl border border-primary/40 text-primary font-semibold hover:bg-primary hover:text-black dark:hover:text-white hover:scale-105 transition-all">
                                        <FaExternalLinkAlt
                                            className="group-hover/button: translate-x-1 group-hover/button: -translate-y-1 transition" />
                                        Live Link
                                    </a>
                                )
                            }
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ViewDetails;