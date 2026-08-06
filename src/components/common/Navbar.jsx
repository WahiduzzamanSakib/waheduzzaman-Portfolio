"use client"
import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import Image from "next/image";
import { ThemeToggle } from "../theme-toggle";
import Link from "next/link";
import { usePathname } from "next/navigation";



const Navbar = () => {
  const navLinks = [
    { name: "Home", href: "home" },
    { name: "About", href: "about" },
    { name: "Skills", href: "skills" },
    { name: "Projects", href: "projects" },
    // { name: "Qualification", href: "qualification" },
    { name: "Education", href: "education" },
    { name: "Contact", href: "contact" },
  ];

  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const pathname = usePathname();

  // Always set Home on reload
  useEffect(() => {
    window.scrollTo(0, 0);
    setActive("home");
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;

      navLinks.forEach((link) => {
        const section = document.getElementById(link.href);
        if (!section) return;

        if (
          scrollPosition >= section.offsetTop &&
          scrollPosition < section.offsetTop + section.offsetHeight
        ) {
          setActive(link.href);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll
 const handleClick = (id) => {
  setActive(id);
  setMenuOpen(false);

  if (pathname !== "/") {
    window.location.href = `/#${id}`;
    return;
  }

  const section = document.getElementById(id);

  if (section) {
    window.scrollTo({
      top: section.offsetTop - 90,
      behavior: "smooth",
    });
  }
};

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
${scrolled
          ? "bg-black/90 backdrop-blur-xl shadow-lg"
          : "dark:bg-black/70 bg-gray-600 backdrop-blur-md"
        }
dark:text-white border-b border-white/10`}
    >
      <div className="flex items-center justify-between h-20 px-6 md:px-16 max-w-7xl mx-auto ">

        <div >
          <Link href="/" className="flex items-center">
            {/* Logo  */}
            <Image src="/wahid.png"
              alt="Waheduzzaman portfolio logo"
              width={48} height={36}
              className="rounded-[20%] object-cover mr-2" />

            <span
              className="hidden sm:inline  text-2xl font-bold bg-gradient-to-r  from-blue-400 via-cyan-500 to-indigo-900
                       dark:from-cyan-300 dark:via-blue-400 dark:to-indigo-400
                        bg-clip-text text-transparent"
            >
              Waheduzzaman
            </span>
          </Link>
        </div>


        {/* Desktop Links */}

        <div className="hidden md:flex items-center gap-6 px-8 py-3 rounded-full border
         border-slate-700/60 bg-[#0f172a]/80 backdrop-blur-md shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={`#${link.href}`}
              onClick={(e) => {
                e.preventDefault();
                handleClick(link.href);
              }}
              className={`relative text-sm font-semibold transition-colors duration-300 ${active === link.href
                ? "text-cyan-400"
                : "text-slate-300 hover:text-white"
                }`}
            >
              {link.name}
              {active === link.href && (
                <motion.span
                  layoutId="underline"
                  className="absolute left-0 -bottom-2 w-full h-[2px] bg-cyan-400"
                />
              )}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />

          <button
            className="md:hidden dark:text-white text-3xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>

          {/* Hire Me Button (desktop only) */}

          <button onClick={() => handleClick("contact")} className="hidden md:block bg-cyan-400 text-black cursor-pointer font-semibold px-4 py-2 rounded hover:rounded-full hover:scale-105 active:scale-95 transition">
            Hire Me
          </button>
        </div>
      </div>



      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden absolute top-20 left-0 w-full bg-black/90 backdrop-blur-md flex flex-col items-center gap-6 py-6 border-b border-white/10"
        >
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className={`text-sm font-medium cursor-pointer transition-colors duration-300 ${active === link.href
                ? "text-cyan-400"
                : "text-gray-400 hover:text-white"
                }`}
            >
              {link.name}
            </button>
          ))}

          {/* Hire Me button in mobile menu */}
          <button
            onClick={() => handleClick("contact")}
            className="bg-cyan-400 text-black font-semibold px-4 py-2 rounded hover:rounded-full hover:scale-105 active:scale-95 transition-all"
          >
            Hire Me
          </button>
        </motion.div>
      )}

      <motion.div
        className="absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 origin-left"
        style={{ scaleX: scrollYProgress, width: "100%" }}
      />

    </motion.nav>
  );
};

export default Navbar;