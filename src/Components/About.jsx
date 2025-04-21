import { motion } from "framer-motion";
import React from "react";

const About = () => {
  return (
    <section
      className="mx-auto max-w-7xl p-4 sm:p-10 transition-all duration-300 md:mt-10 lg:pt-10 lg:mt-20"
      id="about"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="heading text-3xl sm:mt-16 mb-5 sm:text-4xl pr-2 font-extrabold md:text-5xl text-center tracking-wider text-gray-900 dark:text-white transition-colors"
      >
        About Me
      </motion.h2>

      {/* Main Flex Container */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-col md:flex-row gap-10 lg:gap-20 justify-center items-center"
      >
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-shrink-0"
        >
          <img
            src="/about.webp"
            alt="About me"
            className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px] xl:w-[400px] rounded-full border-4 border-blue-600 dark:border-blue-400 shadow-lg shadow-blue-500/30 dark:shadow-blue-400/40 hover:scale-105 transition-transform duration-300 object-cover"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
          className="bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-gray-900 p-4 lg:p-8 rounded-2xl shadow-xl transition-colors duration-300"
        >
          <p className="text-sm lg:text-lg leading-7 text-gray-700 dark:text-gray-300">
            I'm a{" "}
            <span className="text-blue-600 dark:text-blue-400 font-semibold">
              MERN stack web developer
            </span>{" "}
            focused on developing efficient, scalable, and user-friendly
            applications. My journey with technology began early and has grown
            into a practical approach to solving modern problems using code.
          </p>

          <p className="text-sm mt-3 lg:text-lg leading-7 text-gray-700 dark:text-gray-300">
            One of my key projects is{" "}
            <strong className="text-blue-600 dark:text-blue-400">CleanEase</strong>,
            a full-featured multi-user application built to streamline the
            booking of cleaning services. It includes robust user management,
            real-time scheduling, and secure payment processing.
          </p>

          <p className="text-sm mt-3 lg:text-lg leading-7 text-gray-700 dark:text-gray-300">
            I'm currently seeking my first professional opportunity where I
            can contribute to innovative teams, sharpen my technical skills,
            and collaborate on impactful solutions. I value clean code,
            attention to detail, and continuous learning to stay aligned with
            evolving tech standards.
          </p>

          <p className="text-sm mt-3 lg:text-lg leading-7 text-gray-700 dark:text-gray-300">
            Outside of coding, I enjoy long-distance cycling, PC building, and
            mobile photography. As an{" "}
            <span className="font-semibold">X-NCC Cadet</span>, I led over
            100+ cadets building leadership and coordination skills. I’ve also
            explored experimental tech projects such as building a{" "}
            <span className="font-medium">NAS</span> system and automating
            home devices for smarter living.
          </p>

          {/* Closing Note */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 1 }}
            viewport={{ once: true }}
            className="text-sm mt-5 lg:text-lg leading-relaxed text-gray-800 dark:text-gray-100 font-medium text-center space-y-1"
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut", delay: 1.2 }}
              viewport={{ once: true }}
              className="block"
            >
              Thank you for exploring my portfolio.
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut", delay: 1.4 }}
              viewport={{ once: true }}
              className="block"
            >
              I look forward to collaborating on exciting opportunities.
            </motion.span>
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
