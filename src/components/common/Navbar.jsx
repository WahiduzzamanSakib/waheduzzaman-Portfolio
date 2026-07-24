"use client"
import  { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import Image from "next/image";

const Navbar = () => {
  const navLinks = [
    { name: "Home", href: "home" },
    { name: "About", href: "about" },
    { name: "Skills", href: "skills" },
    { name: "Qualification", href: "qualification" },
    { name: "Projects", href: "projects" },
    { name: "Contact", href: "contact" },
  ];

  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  // Always set Home on reload
  useEffect(() => {
    window.scrollTo(0, 0);
    setActive("home");
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
    setMenuOpen(false); // close mobile menu on click

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-white/10"
    >
      <div className="flex items-center justify-between h-20 px-6 md:px-16 max-w-7xl mx-auto">

        {/* Logo */}
        <Image src="/portogo.png" alt="logo" width={40} height={40} className="rounded-full object-cover" />
     

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className={`relative text-sm font-medium transition-all duration-300 ${
                active === link.href
                  ? "text-cyan-400"
                  : "text-gray-400 hover:text-cyan-400"
              }`}
            >
              {link.name}

              {/* underline animation */}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-cyan-400 transition-all duration-300 ${
                  active === link.href ? "w-full" : "w-0"
                }`}
              />
            </button>
          ))}
        </div>


        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>

        

        {/* Hire Me Button (desktop only) */}
        <button className="hidden md:block bg-cyan-400 text-black font-semibold px-4 py-2 rounded hover:rounded-full hover:scale-105 active:scale-95 transition">
          Hire Me
        </button>
      </div>

     

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-black/90 backdrop-blur-md flex flex-col items-center gap-6 py-6 border-b border-white/10">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className={`text-sm font-medium ${
                active === link.href ? "text-cyan-400" : "text-gray-400"
              }`}
            >
              {link.name}
            </button>
          ))}

          {/* Hire Me button in mobile menu */}
          <button className="bg-cyan-400 text-black hover:rounded-full font-semibold px-4 py-2 rounded">
            Hire Me
          </button>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;