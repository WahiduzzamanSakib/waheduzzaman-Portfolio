"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaServer, FaArrowLeft, FaCheckCircle } from "react-icons/fa";

/* Reusable action button */
const ActionButton = ({ href, icon, label, variant = "outline" }) => {
    if (!href) return null;

    const base =
        "group/button flex items-center justify-center gap-3 px-7 py-3.5 rounded-2xl font-semibold hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary";

    const variants = {
        outline:
            "border border-primary/40 text-primary hover:bg-primary hover:text-black dark:hover:text-white",
        solid: "bg-secondary text-white",
    };

    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`${base} ${variants[variant]}`}
        >
            <span className="group-hover/button:rotate-12 group-hover/button:translate-x-1 group-hover/button:-translate-y-1 transition">
                {icon}
            </span>
            {label}
        </a>
    );
};

const ViewDetails = ({ project }) => {

    if (!project) {
        return (
            <section className="min-h-screen flex items-center justify-center px-6 bg-gray-100 dark:bg-[#080821]">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center p-10 rounded-3xl bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 shadow-xl"
                >
                    <h1 className="text-4xl font-bold text-primary">Project Not Found</h1>
                    <Link
                        href="/projects"
                        className="inline-flex items-center gap-2 mt-8 px-7 py-3 rounded-xl bg-secondary text-white hover:scale-105 transition"
                    >
                        <FaArrowLeft /> Back To Projects
                    </Link>
                </motion.div>
            </section>
        );
    }

    return (
        <article className="min-h-screen pt-28 pb-10 px-6 bg-gray-100 dark:bg-[#080821] overflow-hidden">
            {/* Container */}
            <div className="max-w-6xl mx-auto">

                {/* Fixed Back Link using Next.js Link */}
                <Link
                    href="/projects"
                    className="mb-6 inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-white/5 text-gray-700 dark:text-gray-300 shadow-md hover:shadow-xl hover:border-cyan-500 hover:text-cyan-500 hover:bg-cyan-500/5 hover:-translate-x-1 transition-all duration-300 group"
                >
                    <FaArrowLeft className="transition-transform duration-300 group-hover:-translate-x-1" />
                    <span>View All Projects</span>
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="relative group max-w-6xl mx-auto overflow-hidden rounded-[2rem] bg-white/60 dark:bg-white/[0.06] backdrop-blur-2xl border border-white/20 shadow-2xl transition-all duration-500"
                >
                    {/* Glow Effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-secondary to-primary opacity-0 blur-3xl group-hover:opacity-20 transition duration-700 pointer-events-none" />

                    {/* IMAGE */}
                    {project?.image && (
                        <div className="relative h-[200px] md:h-[500px] overflow-hidden bg-gray-200 dark:bg-white/5">
                            <Image
                                src={project.image}
                                alt={project?.title ? `${project.title}` : "Project screenshot"}
                                fill
                                priority
                                className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                            <div className="absolute bottom-0 h-32 w-full bg-gradient-to-t from-secondary/30 to-transparent" />
                        </div>
                    )}

                    <div className="relative p-6 md:p-8">

                        {/* TITLE */}
                        <motion.h1
                            initial={{ opacity: 0, x: -40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-3xl md:text-4xl font-black font-mono text-black dark:text-white"
                        >
                            {project?.title}
                        </motion.h1>

                        {/* DESCRIPTION */}
                        <p className="mt-4 text-md md:text-lg leading-relaxed text-gray-700 dark:text-gray-300 max-w-3xl">
                            {project?.desc}
                        </p>

                        {/* TECH STACK TAGS */}
                        {project?.tags?.length > 0 && (
                            <div className="flex flex-wrap gap-3 mt-6">
                                {project.tags.map((tag, index) => (
                                    <motion.span
                                        key={`${tag}-${index}`}
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                        className="px-4 py-1.5 rounded-full bg-secondary/10 dark:bg-secondary/20 border border-secondary/40 text-secondary font-semibold text-sm shadow-sm cursor-default"
                                    >
                                        {tag}
                                    </motion.span>
                                ))}
                            </div>
                        )}


                        {/* Buttons */}
                        <div
                            className="flex flex-wrap gap-6 mt-10">

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

                            
                        </div>


                        {/* KEY FEATURES */}
                        {project?.features?.length > 0 && (
                            <div className="mt-12">
                                <h2 className="text-2xl md:text-3xl font-bold font-mono text-black dark:text-white mb-6">
                                    Key Features & Implementation
                                </h2>

                                <div className="grid sm:grid-cols-2 gap-5">
                                    {project.features.map((feature, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.08 }}
                                            className="flex gap-4 p-5 rounded-2xl bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-md hover:shadow-xl transition"
                                        >
                                            <FaCheckCircle className="text-green-500 text-xl mt-1 shrink-0" />
                                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm md:text-base">
                                                {feature}
                                            </p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </motion.div>
            </div>
        </article>
    );
};

export default ViewDetails;