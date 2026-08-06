"use client";

import { useEffect } from "react";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import TechStack from "@/components/TechStack";
import AllProjectsPage from "./projects/page.jsx";


export default function Home() {

  useEffect(() => {
    const id = window.location.hash.replace("#", "");

    if (id) {
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({
          behavior: "smooth",
        });
      }, 200);
    }
  }, []);


  return (
    <div>
      <Hero />
      <About />
      <Features />

      <TechStack />
      <Skills />

      <AllProjectsPage />

      <Education />
      <Contact />
    </div>
  );
}