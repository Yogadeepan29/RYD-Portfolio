import React from "react";
import Navbar from "./Components/common/Navbar";
import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Education from "./Components/Education"; 
import Skills from "./Components/Skills"; 
import Footer from "./Components/common/Footer";
import Certificates from "./Components/Certificates";

const App = () => {
  return (
    <>
    <div className="flex flex-col min-h-screen">
    <div className="flex-grow"> 
    <div
  className="fixed top-0 -z-10 min-h-screen w-full 
    bg-neutral-50 
    bg-[radial-gradient(ellipse_80%_80%_at_50%_20%,rgba(245,245,255,0.9),rgba(200,220,255,0.2))] 
    dark:bg-neutral-950 
    dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(79,100,229,0.3),rgba(0,0,0,0))] 
    transition-all duration-300"
/>

        <Navbar />
        <Hero />
        <About/>
        <Education/>
        <Skills/>
        <Projects />
        <Certificates/>
        <Contact />
      </div>
      <Footer/>
      </div>
    </>
  );
};

export default App;
