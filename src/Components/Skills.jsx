import { motion } from "framer-motion";
import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiRedux,
  SiFirebase,
  SiMongodb,
  SiPostman,
  SiNetlify,
  SiExpress,
  SiFramer,
  SiRender,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { GiFlowerTwirl } from "react-icons/gi";
import { TbBrandOauth } from "react-icons/tb";
import { GrMysql } from "react-icons/gr";
import { skills } from "../constants/portfolioData";
import useTheme from "../hooks/useTheme";

const Skills = () => {
  const { darkMode } = useTheme();
  const iconMap = {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaBootstrap,
    FaReact,
    FaGitAlt,
    FaGithub,
    FaNodeJs,
    SiTailwindcss,
    SiRedux,
    SiFirebase,
    SiMongodb,
    SiPostman,
    SiNetlify,
    SiExpress,
    SiFramer,
    GrMysql,
    VscVscode,
    GiFlowerTwirl,
    TbBrandOauth,
    SiRender,
  };

  const sectionVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.35, duration: 0.3 },
    }),
  };

  return (
    <section
      className="mx-auto max-w-6xl p-4 sm:p-10 dark:text-white transition-all duration-300 "
      id="skills"
    >
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="heading text-3xl mt-16 mb-5 sm:text-4xl font-extrabold md:text-5xl text-center drop-shadow-md tracking-wider"
      >
        Developer Skillset
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-center text-sm sm:text-base md:text-lg max-w-4xl mx-auto text-gray-600 dark:text-gray-300 mb-12"
      >
        Throughout my journey as a developer, I’ve immersed myself in a wide
        range of tools and technologies that empower me to build robust,
        responsive, and dynamic web applications. From crafting seamless user
        interfaces to designing scalable backend systems, these skills reflect
        my dedication to mastering the modern tech stack and staying adaptable
        in a rapidly evolving digital landscape.
      </motion.p>

      <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
        {Object.entries(skills).map(([category, tools], i, arr) => (
          <motion.div
            key={category}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariant}
            className={`bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow 
        ${i === arr.length - 1 ? "sm:col-span-2  lg:col-span-1 md:mx-0" : ""}`}
          >
            <h3 className=" text-xl sm:text-2xl font-bold mb-8 capitalize text-center text-blue-600 dark:text-blue-400 drop-shadow-md">
              {category.replace(/_/g, " ")}
            </h3>
            <div
              className={`grid gap-5 md:gap-10 justify-center ${
                i === arr.length - 1
                  ? "grid-cols-3 sm:grid-cols-6 lg:grid-cols-3"
                  : "grid-cols-3"
              }`}
            >
              {tools.map(({ name, icon, color }) => {
                const IconComponent = iconMap[icon];
                return (
                  <motion.div
                    key={name}
                    className="flex flex-col items-center text-center min-h-[100px]"
                    whileHover={{
                      scale: 1.15,
                      rotate: -3,
                      transition: { type: "spring", stiffness: 300 },
                    }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white dark:bg-gray-900 shadow-lg hover:shadow-2xl transition-shadow duration-300 border dark:border-gray-700 border-gray-200">
                      <IconComponent
                        size={36}
                        style={{
                          color:
                            darkMode && color === "#333333" ? "#ffffff" : color,
                        }}
                        className={
                          !darkMode && color === "#ffffff"
                            ? "text-gray-800"
                            : ""
                        }
                      />
                    </div>
                    <span className="text-sm pt-2 font-medium dark:text-white/90 text-gray-800 text-wrap text-center leading-tight">
                      {name}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
