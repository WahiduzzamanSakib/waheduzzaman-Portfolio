"use client";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import TechStack from "@/components/TechStack";
import FeaturedProjectsPage from "@/components/FeaturedProject";
// import AllProjectsPage from "./projects/page.jsx";


export default function Home() {

  return (
    <div>
      <Hero />
      <About />
      <Features />

      <TechStack />
      <Skills />

      <FeaturedProjectsPage />
      {/* <AllProjectsPage /> */}

      <Education />
      <Contact />
    </div>
  );
}