import { motion } from "framer-motion";
import React, { useEffect, useState, useRef } from "react";
import {
  capstoneProject,
  miniProjects,
  capstoneImages,
} from "../constants/portfolioData";
import {
  FaArrowLeft,
  FaArrowRight,
  FaGithub,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import { SiNetlify, SiPostman } from "react-icons/si";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Pagination,
  Autoplay,
  Navigation,
  EffectCoverflow,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import useTheme from "../hooks/useTheme";

const Projects = () => {
  const { darkMode } = useTheme();
  const image = darkMode ? capstoneImages.dark : capstoneImages.light;
  const [hoveredId, setHoveredId] = useState(null);
  const [showGif, setShowGif] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);
  const [isMobile, setIsMobile] = useState(false);
  const swiperRefs = useRef([]);
  const timeoutRef = useRef(null);
  const handleMouseEnter = (id) => {
    setHoveredId(id);
    timeoutRef.current = setTimeout(() => {
      setShowGif(true);
    }, 300);
  };

  const handleMouseLeave = () => {
    setHoveredId(null);
    setShowGif(false);
    clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="projects"
      className="mx-auto max-w-7xl p-4 sm:p-10 dark:text-white select-none overflow-x-hidden"
    >
      {/* Main Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="heading text-3xl mt-16 mb-5 sm:text-4xl font-extrabold md:text-5xl text-center drop-shadow-md tracking-wider"
      >
        Project Showcase
      </motion.h2>

      {/*Intro Paragraph */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-center text-sm sm:text-base md:text-lg max-w-2xl mx-auto text-gray-600 dark:text-gray-300 mb-12"
      >
        A collection of my featured and experimental web development projects.
      </motion.p>

      {/* --- Capstone Project Section --- */}
      <motion.h3
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-2xl sm:text-3xl font-bold text-center mb-3 tracking-wide text-blue-600 dark:text-blue-400"
      >
        Capstone Project
      </motion.h3>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center text-sm sm:text-base md:text-lg max-w-4xl mx-auto text-gray-600 dark:text-gray-300 mb-8"
      >
        My featured full-stack project demonstrates my ability to build
        scalable, end-to-end applications using modern web technologies and best
        practices in design, security, and user experience.
      </motion.p>

      {/* Capstone Project */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
        }}
        className="flex h-full items-center flex-col lg:flex-row gap-8 bg-gray-300 transition-all duration-300
         dark:bg-gray-950 rounded-xl overflow-hidden p-5 border-1  dark:border-white 
         shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#33CCC,0_0_15px_#33CCC,0_0_30px_#33CCC]
        shadow-blue-300 border-blue-300  dark:shadow-white/50 ease-in-out "
      >
        {/* Left - Image Carousel or Image */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full  dark:bg-gray-950 h-full"
        >
          <img
            src={image}
            alt={capstoneProject.title}
            loading="lazy"
            className="flex md:h-75 lg:h-full justify-center scale-105 min-w-full min-h-full mx-auto object-fit bg-gray-900 items-center border-0 "
          />
        </motion.div>

        {/* Right - Project Info */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full flex flex-col justify-between bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-md dark:shadow-lg"
        >
          {(() => {
            const [mainTitle, subTitleRaw] = capstoneProject.title.split("_");
            const subTitle = subTitleRaw?.trim();

            return (
              <>
                <h4 className="text-3xl font-extrabold mb-1 tracking-wider text-center bg-gradient-to-r from-sky-500 to-blue-700 text-transparent bg-clip-text dark:from-sky-400 dark:to-blue-600">
                  {" "}
                  {mainTitle.trim()}
                </h4>
                {subTitle && (
                  <p className="text-sm text-gray-600 font-semibold dark:text-white dark:text-opacity-70 text-center mb-2">
                    {subTitle}
                  </p>
                )}
              </>
            );
          })()}
          <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
            {capstoneProject.description}
          </p>
          <div className="flex flex-wrap gap-3 text-sm mb-4">
            {capstoneProject.technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-indigo-100 text-indigo-800 dark:bg-indigo-800 text-xs dark:text-white px-2 py-1 rounded-xl"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 mt-4 justify-center ">
            {/* GitHub Frontend */}
            <a
              href={capstoneProject.sourceLinkFE}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-900 hover:bg-gray-950 text-white px-4 py-2 rounded-lg text-xs"
            >
              <FaGithub />
              FE - Code
            </a>

            {/* GitHub Backend */}
            <a
              href={capstoneProject.sourceLinkBE}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-900 hover:bg-gray-950 text-white px-4 py-2 rounded-lg text-xs"
            >
              <FaGithub />
              BE - Code
            </a>

            {/* Postman API Doc */}
            <a
              href={capstoneProject.APIdocument}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-xs"
            >
              <SiPostman />
              API Docs
            </a>

            {/* Live Demo - Netlify */}
            <a
              href={capstoneProject.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-xs"
            >
              <SiNetlify className="text-white" />
              Live Demo
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* --- Mini Projects Section --- */}
      <motion.h3
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-2xl sm:text-3xl font-bold text-center mt-20 mb-3 tracking-wide  text-blue-600 dark:text-blue-400"
      >
        Practical Builds & Mini Projects
      </motion.h3>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center text-sm sm:text-base md:text-lg max-w-4xl mx-auto text-gray-600 dark:text-gray-300 mb-8"
      >
        These projects reflect my learning curve focused experiments and utility
        apps created while exploring new concepts, frameworks, and APIs. Each
        one added a new layer to my development journey.
      </motion.p>

      {/* Mini Projects */}
      <motion.div
        key={darkMode ? "dark" : "light"}
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="w-full"
      >
        {isMobile ? (
          // Mobile layout: vertical stack with Show More
          <div className="flex flex-col gap-6 px-2">
            {miniProjects.slice(0, visibleCount).map((project) => (
              <div
                key={project.id}
                onMouseEnter={() => handleMouseEnter(project.id)}
                onMouseLeave={handleMouseLeave}
                className="flex flex-col rounded-xl overflow-hidden bg-white border dark:border-none dark:bg-gray-800 hover:shadow-2xl transition-all duration-300"
              >
                <img
                  src={
                    hoveredId === project.id && showGif
                      ? project.gif
                      : project.image
                  }
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-48 object-fill object-top transition-all duration-300"
                />
                <div className="p-5 flex flex-col gap-3 h-full border-t dark:border-none rounded-lg bg-sky-50 dark:bg-gray-800">
                  <h3 className="text-xl font-semibold tracking-wider text-gray-900 dark:text-white text-center">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-slate-400">
                    {project.description}
                  </p>
                  <div className="flex gap-2 flex-wrap mt-auto">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-indigo-200 dark:bg-indigo-900 text-indigo-900 dark:text-white rounded-xl text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-4 mt-auto pt-4 justify-end">
                    <a
                      href={project.sourceLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-gray-700 hover:bg-gray-950 text-white px-4 py-2 rounded-lg text-xs"
                    >
                      <FaGithub />
                      Source Code
                    </a>
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-xs"
                    >
                      <SiNetlify className="text-white" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}

            {miniProjects.length > 3 && (
              <button
                onClick={() => {
                  if (visibleCount >= miniProjects.length) {
                    setVisibleCount(3); // Reset
                  } else {
                    setVisibleCount((prev) => prev + 3); // Show more
                  }
                }}
                className={`mx-auto mt-6 flex items-center gap-2 font-semibold px-6 py-3 rounded-full text-sm shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300
      ${
        visibleCount >= miniProjects.length
          ? "bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white"
          : "bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white"
      }`}
              >
                {visibleCount >= miniProjects.length ? (
                  <>
                    Show Less <FaChevronUp className="text-white text-sm" />
                  </>
                ) : (
                  <>
                    Show More <FaChevronDown className="text-white text-sm" />
                  </>
                )}
              </button>
            )}
          </div>
        ) : (
          // Desktop and Tablet: Swiper Grid
          <div className="flex flex-col gap-12 ">
            {[0, 1].map((rowIndex) => {
              const half = Math.ceil(miniProjects.length / 2);
              const start = rowIndex * half;
              const end = (rowIndex + 1) * half;
              const projectsSlice = miniProjects.slice(start, end);
              const initialX = rowIndex === 0 ? -100 : 200;

              return (
                <motion.div
                  key={rowIndex}
                  initial={{ opacity: 0, x: initialX }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="relative w-full flex items-center gap-2"
                >
                  {/* Left Navigation Button (5%) */}
                  <div className="w-[5%] flex justify-center">
                    <button
                      className={`swiper-button-prev-custom-${rowIndex} p-2 bg-gray-700 hover:bg-gray-900 text-white rounded-full cursor-pointer`}
                    >
                      <FaArrowLeft />
                    </button>
                  </div>

                  {/* Swiper Container (90%) */}
                  <div className="w-[90%]">
                    <Swiper
                      effect={"coverflow"}
                      coverflowEffect={{
                        rotate: 5,
                        stretch: 0,
                        depth: 50,
                        modifier: 3,
                        slideShadows: true,
                      }}
                      centeredSlides={true}
                      navigation={{
                        nextEl: `.swiper-button-next-custom-${rowIndex}`,
                        prevEl: `.swiper-button-prev-custom-${rowIndex}`,
                      }}
                      slidesPerView={3}
                      grabCursor={true}
                      spaceBetween={30}
                      loop={true}
                      onSwiper={(swiper) => {
                        swiperRefs.current[rowIndex] = swiper;
                      }}
                      autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                      breakpoints={{
                        640: {
                          slidesPerView: 2,
                          spaceBetween: 20,
                        },
                        1024: {
                          slidesPerView: 3,
                          spaceBetween: 30,
                        },
                      }}
                      modules={[
                        Autoplay,
                        Pagination,
                        Navigation,
                        EffectCoverflow,
                      ]}
                      className="mySwiper w-full"
                    >
                      {projectsSlice.map((project) => (
                        <SwiperSlide
                          key={project.id}
                          className="!h-auto overflow-visible"
                        >
                          <div
                            onMouseEnter={() => {
                              handleMouseEnter(project.id);
                              swiperRefs.current[rowIndex]?.autoplay?.stop();
                            }}
                            onMouseLeave={() => {
                              handleMouseLeave();
                              swiperRefs.current[rowIndex]?.autoplay?.start();
                            }}
                            className="flex flex-col rounded-xl overflow-hidden  bg-white dark:bg-gray-800  hover:shadow-xl transition-all duration-300 h-full min-h-[400px] cursor-grab"
                          >
                            <img
                              src={
                                hoveredId === project.id && showGif
                                  ? project.gif
                                  : project.image
                              }
                              alt={project.title}
                              loading="lazy"
                              className="w-full h-55 object-fill object-top transition-all duration-300"
                            />
                            <div className="p-5 flex flex-col gap-3 h-full  bg-blue-50 dark:bg-gray-800 border-b-10 border-gray-300 dark:border-gray-700  rounded-b-2xl ">
                              <h3 className="text-xl font-semibold text-gray-900 dark:text-white text-center tracking-wide">
                                {project.title}
                              </h3>
                              <p className="text-sm text-gray-600 dark:text-slate-400">
                                {project.description}
                              </p>
                              <div className="flex gap-2 flex-wrap ">
                                {project.technologies.map((tech, index) => (
                                  <span
                                    key={index}
                                    className="px-2 py-1 bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-white rounded-xl text-sm"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                              <div className="flex mx-auto items-center w-full justify-center mt-auto  gap-x-4 md:justify-end">
                                <a
                                  href={project.sourceLink}
                                  target="_blank"
                                  className="flex items-center tracking-tighter text-nowrap gap-2 bg-gray-600 hover:bg-gray-950 text-white px-4 py-2 rounded-lg text-xs"
                                >
                                  <FaGithub />
                                  Source
                                </a>
                                <a
                                  href={project.liveLink}
                                  target="_blank"
                                  className="flex items-center text-nowrap gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-xs"
                                >
                                  <SiNetlify className="text-white" />
                                  Live
                                </a>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                  {/* Right Navigation Button (5%) */}
                  <div className="w-[5%] flex justify-center">
                    <button
                      className={`swiper-button-next-custom-${rowIndex} p-2 bg-gray-700 hover:bg-gray-900 text-white rounded-full cursor-pointer`}
                    >
                      <FaArrowRight />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default Projects;
