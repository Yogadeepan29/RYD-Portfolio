import { motion } from "framer-motion";
import React from "react";
import { BiSolidDownload, BiLogoGithub, BiLogoLinkedin } from "react-icons/bi";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Lottie from "lottie-react";
import scrollDown from "../assets/animations/scroll.json";
import eye from "../assets/animations/eye.json";
import useTheme from "../hooks/useTheme";

const Hero = () => {
  const [text] = useTypewriter({
    words: [
      "Web Developer",
      "MERN Stack Developer",
      "React Developer",
      "Full Stack Developer",
      "Tech Enthusiast",
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 15,
    delaySpeed: 2000,
  });
  const { darkMode } = useTheme();

  return (
    <section className="mb-10" id="hero">
      <div className="mx-auto pt-20 max-w-7xl lg:mt-20 w-full p-4 lg:p-8 lg:px-28 lg:pt-28 flex items-center justify-center min-h-screen lg:min-h-full">
        <motion.div
          key={darkMode ? "dark" : "light"}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col-reverse items-center justify-center md:flex-row gap-8 md:gap-12 lg:gap-24"
        >
          <motion.div
            key={darkMode ? "dark" : "light"}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col items-center md:items-start justify-center gap-3"
          >
            <h1 className="md:text-4xl lg:text-6xl text-2xl font-bold text-center md:text-left text-gray-800 dark:text-sky-100 transition-colors duration-300">
              Hi👋, I'm
            </h1>
            <h1
              className=" text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-center md:text-left 
          bg-gradient-to-r  from-blue-500 via-cyan-400 to-sky-500 dark:from-blue-600 dark:via-sky-500 dark:to-blue-400 text-transparent bg-clip-text text-nowrap"
            >
              YOGADEEPAN R{" "}
            </h1>

            <h3
              className="text-xl md:text-2xl lg:text-3xl font-light text-center md:text-left 
          bg-gradient-to-r from-blue-400 via-sky-400 to-blue-600 text-transparent bg-clip-text"
            >
              a <span>{text}</span>
              <Cursor cursorColor={darkMode ? "#f8fafc" : "#1e293b"} />
            </h3>
            <p className="text-xs sm:text-sm text-gray-700 dark:text-slate-400 text-center md:text-left text-pretty leading-relaxed">
              I am a web developer specializing in the MERN stack, focused on
              delivering efficient and scalable web applications. I continuously
              enhance my skills to adapt to the evolving technology landscape.
            </p>

            <div className="flex text-sm/4 sm:text-sm md:text-md lg-text-xl py-2 px-2 w-[75%] sm:w-[50%]">
              {/* View CV Button */}
              <a
                href="https://drive.google.com/file/d/1faYDwc1dqJEPB17AgnkQBOWcTQAFNQwc/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[75%]"
              >
                <button className="flex items-center min-h-full justify-center bg-blue-500/80 backdrop-blur-md rounded-l-full text-white hover:bg-blue-600/90 shadow-blue-500 border-2 border-blue-300 dark:border-blue-500 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#33CCC,0_0_15px_#33CCC,0_0_30px_#33CCC] w-full md:px-3 md:py-2 cursor-pointer transition-all duration-500">
                  <Lottie
                    animationData={eye}
                    loop={false}
                    className="size-12 overflow-hidden invert-100 flex-none"
                  />
                  <span className="lg:text-xl tracking-wider text-nowrap">
                    View CV
                  </span>
                </button>
              </a>

              {/* Download CV Button */}
              <a
                href="/YOGADEEPAN_Resume.pdf"
                download="YOGADEEPAN_Resume.pdf"
                className="w-[25%]"
              >
                <button className="flex items-center min-h-full justify-center bg-blue-600/80 backdrop-blur-md rounded-r-xl text-white hover:bg-blue-700/90 shadow-blue-500 border-2 border-blue-300 dark:border-blue-500 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#33CCC,0_0_15px_#33CCC,0_0_30px_#33CCC] w-full md:px-2 md:py-2 cursor-pointer transition-all duration-500">
                  <BiSolidDownload className="size-5" />
                </button>
              </a>
            </div>

            <div className="flex gap-5 mt-3 px-10">
              <a
                href="https://github.com/Yogadeepan29"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BiLogoGithub className="text-2xl md:text-3xl text-gray-800 dark:text-white cursor-pointer hover:scale-110 hover:text-indigo-600 dark:hover:text-indigo-400 hover:rotate-12 transition-all duration-300 ease-in-out" />
              </a>

              <a
                href="https://www.linkedin.com/in/yogadeepan02/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BiLogoLinkedin className="text-2xl md:text-3xl text-gray-800 dark:text-white cursor-pointer hover:scale-110 hover:text-blue-600 dark:hover:text-blue-400 hover:-rotate-12 transition-all duration-300 ease-in-out" />
              </a>
            </div>

            <motion.div
              key={darkMode ? "dark" : "light"}
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 30 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 1.5 }}
              className="flex justify-center items-center size-16 sm:size-20 pt-10 mx-auto cursor-pointer
    dark:invert-100 filter drop-shadow-lg hover:scale-110 transition-all duration-500"
              onClick={() => {
                const aboutSection = document.getElementById("about");
                if (aboutSection) {
                  aboutSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              <Lottie animationData={scrollDown} />
            </motion.div>
          </motion.div>

          <img
            src="/image.webp"
            className="w-[220px] sm:w-[300px] lg:w-[400px] rounded-full dark:shadow-none shadow-2xl shadow-blue-400  hover:shadow-2xl hover:shadow-blue-800 hover:scale-105 hover:rotate-2 transition-all duration-500"
            alt="RYD-Profile"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
