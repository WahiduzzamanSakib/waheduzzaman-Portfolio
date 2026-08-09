"use client";
import { FaArrowUp, FaEnvelope, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Footer = () => {
    const [showTop, setShowTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const projects = document.getElementById("projects");
            if (!projects) return;
            const projectTop = projects.offsetTop;

            if (window.scrollY >= projectTop) {
                setShowTop(true);
            } else {
                setShowTop(false);
            }
        };
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleClick = (id) => {
        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth",
        });
    };


    const links = [
        ["About", "about"],
        ["Skills", "skills"],
        ["Projects", "projects"],
        ["Contact", "contact"],
    ];

    const container = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 40 },
        show: {
            opacity: 1, y: 0,
            transition: {
                duration: 0.7, ease: "easeOut",
            },
        },
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <footer
            className="w-full bg-gray-600 dark:bg-[#131331] dark:text-white border-t border-cyan-600 dark:border-cyan-800 transition-colors duration-500"
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-8">

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24"
                >

                    {/* Brand */}
                    <motion.div variants={item}>
                        <h3 className="text-3xl font-extrabold tracking-tight">
                            <span
                                className="bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600
                                dark:from-cyan-300 dark:via-blue-400 dark:to-indigo-400
                                bg-clip-text text-transparent"
                            >
                                Waheduzzaman
                            </span>
                        </h3>

                        <p className="mt-3 text-sm font-medium text-white/90 dark:text-cyan-300">
                            MERN Stack Developer
                        </p>

                        <p className="mt-6 max-w-md leading-relaxed text-white/90 dark:text-gray-300">
                            I build scalable full-stack web applications using MongoDB,
                            Express.js, React.js, and Node.js with modern interfaces,
                            clean architecture, and optimized performance.
                        </p>
                    </motion.div>



                    {/* Navigation */}
                    <motion.div variants={item}>
                        <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
                            Quick Links
                        </h3>

                        <ul className="flex flex-col gap-4">
                            {links.map(([name, link]) => (
                                <li key={name}>
                                    <button
                                        onClick={() => handleClick(link)}
                                        className="group flex items-center gap-2 
                text-white/90 dark:text-gray-300
                hover:text-blue-600 dark:hover:text-cyan-300 
                transition-all duration-300 cursor-pointer"
                                    >
                                        <span
                                            className="opacity-0 -translate-x-2 
                    group-hover:opacity-100
                    group-hover:translate-x-0 
                    transition-all"
                                        >
                                            →
                                        </span>

                                        {name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </motion.div>


                    {/* Social */}
                    <motion.div variants={item}>
                        <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
                            Connect
                        </h3>

                        <p className="mb-6 text-gray-400 dark:text-gray-300">
                            Let's collaborate and create something impactful together.
                        </p>

                        <div className="flex gap-4">
                            <SocialIcon
                                href="https://github.com/WahiduzzamanSakib"
                                label="Github"
                                hover="hover:bg-black"
                            >
                                <FaGithub size={30} />
                            </SocialIcon>


                            <SocialIcon
                                href="https://www.linkedin.com/in/waheduzzaman-md"
                                label="LinkedIn"
                                hover="hover:bg-blue-600"
                            >
                                <FaLinkedin size={30} />
                            </SocialIcon>


                            <SocialIcon
                                href="mailto:wahidzamanpg@gmail.com"
                                label="Email"
                                hover="hover:bg-red-500"
                            >
                                <FaEnvelope size={30} />
                            </SocialIcon>
                            <SocialIcon
                                href="https://www.facebook.com/md.waheduzzaman.613163"
                                label="Facebook"
                                hover="hover:bg-blue-700"
                            >
                                <FaFacebook size={30} />
                            </SocialIcon>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Bottom */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="mt-12 pt-8 border-t border-gray-200 dark:border-cyan-800
                    flex flex-col md:flex-row justify-between items-center gap-4"
                >
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        © 2026 Waheduzzaman. All rights reserved.
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        Built with ❤️  Next.js
                    </p>
                    {/* <p className="text-sm text-gray-500 dark:text-gray-400">
                        Built with ❤️ using React.js, Node.js & MongoDB
                    </p> */}

                </motion.div>
            </div>

            {showTop && (
                <motion.button
                    onClick={scrollToTop}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{
                        y: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
                    }}

                    className="fixed bottom-6 right-6 w-14 h-14 rounded-full flex  items-center justify-center bg-cyan-600
                     hover:bg-cyan-500 text-white shadow-xl z-[999] border border-cyan-300 cursor-pointer"
                >
                    <FaArrowUp size={22} />
                </motion.button>
            )}
        </footer>
    );
};

const SocialIcon = ({ href, label, children, hover }) => {
    return (
        <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            whileHover={{
                y: -6,
                scale: 1.1,
            }}
            whileTap={{
                scale: 0.9,
            }}
            className={`p-3 rounded-xl bg-gray-100 dark:bg-white/10
            text-gray-700 dark:text-gray-200 border border-gray-200
            dark:border-white/10 ${hover}
            hover:text-white transition-all duration-300`}
        >
            {children}
        </motion.a>
    );
};

export default Footer;