import React from "react";
import { motion } from "framer-motion";
import { IoMdSchool } from "react-icons/io";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { educationData } from "../constants/portfolioData";
import { RiArrowUpDoubleFill } from "react-icons/ri";
import { FaBookOpen } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";
import useTheme from "../hooks/useTheme";

const Education = () => {
  const { darkMode } = useTheme();
  const isSmallScreen = useMediaQuery({ query: "(max-width: 539px)" });
  // Icon map
  const iconMap = {
    IoMdSchool: <IoMdSchool />,
  };

  const getTimelineStyles = (type) => {
    if (darkMode) {
      return type === "PG"
        ? {
            contentBg: "#0B192C",
            arrowColor: "#0B192C",
            iconBg: "#192332",
          }
        : {
            contentBg: "#192332",
            arrowColor: "#192332",
            iconBg: "#135179",
          };
    } else {
      return type === "PG"
        ? {
            contentBg: "#F0F4FF",
            arrowColor: "#F0F4FF",
            iconBg: "#3B82F6",
          }
        : {
            contentBg: "#EAF3FF",
            arrowColor: "#EAF3FF",
            iconBg: "#2563EB",
          };
    }
  };

  const renderBoldQuotes = (text) => {
    return text.match(/["“”]/) ? (
      <>
        {text.split(/["“”]/).map((part, i) =>
          i % 2 === 1 ? (
            <strong key={i} className="font-semiboldtext-white drop-shadow-sm">
              &quot;{part}&quot;
            </strong>
          ) : (
            <span key={i}>{part}</span>
          )
        )}
      </>
    ) : (
      text
    );
  };

  const scroll = () => {
    const element = document.getElementById("education");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="mx-auto max-w-6xl p-4 sm:p-10 dark:text-white transition-all duration-300"
      id="education"
    >
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="heading text-3xl mt-16 mb-5 sm:text-4xl font-extrabold md:text-5xl text-center drop-shadow-md tracking-wider"
      >
        Education Timeline
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-center text-sm sm:text-base md:text-lg max-w-4xl mx-auto text-gray-600 dark:text-gray-300 mb-12"
      >
        My academic journey has played a vital role in shaping my skills and
        mindset. Here’s a glimpse of the institutions and experiences that have
        contributed to my growth as a developer and lifelong learner.
      </motion.p>

      <motion.div
        key={darkMode ? "dark" : "light"}
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <VerticalTimeline
          lineColor={darkMode ? "#ffffff" : "#000000"}
          animate={!isSmallScreen}
        >
          <VerticalTimelineElement
            iconStyle={{
              background: darkMode ? "#ffffff" : "#000000",
              color: darkMode ? "#000000" : "#ffffff",
            }}
            icon={<FaBookOpen />}
            contentStyle={{ display: "none" }}
            contentArrowStyle={{ display: "none" }}
            className="vertical-timeline-element--start bottom-10 "
          />
          {educationData.map((edu, index) => {
            const { contentBg, arrowColor, iconBg } = getTimelineStyles(
              edu.type
            );

            return (
              <VerticalTimelineElement
                key={edu.id}
                position={index % 2 === 0 ? "left" : "right"}
                contentStyle={{
                  background: contentBg,
                  color: "#fff",
                  boxShadow: "0 6px 18px rgba(0,0,0,0.3)",
                  borderRadius: "15px",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                contentArrowStyle={{
                  borderRight: `7px solid ${arrowColor}`,
                }}
                date={edu.date}
                dateClassName="lg:text-black dark:text-white font-semibold drop-shadow-sm"
                iconStyle={{
                  background: iconBg,
                  color: "#fff",
                  boxShadow: "0 0 12px rgba(0,0,0,0.4)",
                  border: "3px solid white",
                }}
                icon={iconMap[edu.icon]}
                className="hover:scale-105 transition-transform delay-300 duration-400 cursor-default ease-in-out"
              >
                <div className=" transition-all duration-300">
                  {/* College Info */}
                  <div className="flex gap-3 mb-5 items-center">
                    <img
                      src={edu.logo}
                      alt={`${edu.college} logo`}
                      className="size-10 md:size-14 bg-white rounded-full object-fill shadow-md"
                    />
                    <div>
                      <h3 className="font-bold text-sm md:text-xl bg-gradient-to-r from-yellow-500 to-orange-400 dark:from-yellow-300 dark:to-orange-500 text-transparent bg-clip-text drop-shadow-md">
                        {" "}
                        {edu.college}
                      </h3>
                      <h4 className="text-xs md:text-lg italic drop-shadow-sm text-gray-700 dark:text-white/90">
                        {edu.location}
                      </h4>
                    </div>
                  </div>

                  {/* Degree */}
                  <h1 className="text-lg md:text-2xl font-extrabold drop-shadow-md mb-1 bg-gradient-to-r from-blue-500 to-indigo-600 text-transparent bg-clip-text dark:from-sky-400 dark:to-blue-600">
                    {edu.degree}
                  </h1>
                  <h6 className="text-xs md:text-sm font-semibold text-violet-700 dark:text-violet-200 drop-shadow-sm mb-3">
                    {edu.date} | {edu.cgpa}
                  </h6>

                  {/* Descriptions */}
                  <ul className="list-disc pl-5 space-y-2 text-xs md:text-sm text-gray-800 dark:text-white/90 drop-shadow-sm">
                    {edu.details.map((item, index) => (
                      <li key={index}>{renderBoldQuotes(item)}</li>
                    ))}
                  </ul>
                </div>
              </VerticalTimelineElement>
            );
          })}
          <VerticalTimelineElement
            iconStyle={{
              background: "#000000",
              color: "#ffffff",
            }}
            icon={<RiArrowUpDoubleFill />}
            contentStyle={{ display: "none" }}
            contentArrowStyle={{ display: "none" }}
            className="vertical-timeline-element--end cursor-pointer"
            iconOnClick={scroll}
          />
        </VerticalTimeline>
      </motion.div>
    </section>
  );
};

export default Education;
