import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import { FaUser, FaEnvelope, FaInbox, FaPaperPlane } from "react-icons/fa";
import { MdSubject } from "react-icons/md";
import Lottie from "lottie-react";
import contact from "../assets/animations/contact.json";
import useEmail from "../hooks/useEmail";
import useTheme from "../hooks/useTheme";

const Contact = () => {
  const messageRef = useRef(null);
  const formRef = useRef(null);
  const [message, setMessage] = useState("");
  const { sendEmail } = useEmail();
  const { darkMode } = useTheme();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formRef.current) return;

    sendEmail(formRef.current);
    setMessage("");
    messageRef.current.style.height = "auto";
    formRef.current.reset();
  };

  const inputVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" },
    }),
  };

  return (
    <section
      id="contact"
      className="mt-10 px-4 py-10 w-full max-w-6xl mx-auto dark:text-white overflow-x-hidden"
    >
      <motion.h2
        key={darkMode ? "dark" : "light"}
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="heading text-3xl mt-16 mb-10 sm:text-4xl font-extrabold md:text-5xl text-center drop-shadow-md tracking-wider"
      >
        Contact Me
      </motion.h2>

      <div className="flex flex-col-reverse md:flex-row gap-12 items-center">
        {/* Left Side - Form Section */}
        <motion.div
          key={darkMode ? "dark" : "light"}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="md:w-1/2 w-full space-y-10"
        >
          <motion.div variants={inputVariant}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl py-5 font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-500 to-blue-400">
              Let's work together.
            </h2>
            <p className="text-sm sm:text-base md:text-lg max-w-2xl mx-auto text-gray-600 dark:text-gray-300 mb-10">
              Or reach me via:{" "}
              <a
                href="mailto:yogudeepan.r@gmail.com"
                className="text-blue-600 dark:text-blue-400 "
              >
                yogudeepan.r@gmail.com
              </a>
            </p>
          </motion.div>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            {/* Name Input */}
            <motion.div
              variants={inputVariant}
              custom={1}
              className="relative w-full"
            >
              <input
                type="text"
                id="name"
                name="user_name"
                placeholder=" "
                required
                className="peer w-full px-4 pl-6 pt-6 pb-4 pr-12 rounded-3xl border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-transparent transition-all"
              />
              <label
                htmlFor="name"
                className="absolute left-6 top-1 text-gray-500 dark:text-gray-400 text-sm transition-all
                peer-placeholder-shown:top-6 peer-placeholder-shown:text-base
                peer-focus:top-1 peer-focus:text-sm peer-focus:text-blue-500"
              >
                Name
              </label>
              <FaUser className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-400 peer-focus:text-blue-500 transition-colors" />
            </motion.div>

            {/* Email Input */}
            <motion.div
              variants={inputVariant}
              custom={2}
              className="relative w-full"
            >
              <input
                type="email"
                id="email"
                name="user_email"
                placeholder=" "
                required
                className="peer w-full px-4 pl-6 pt-6 pb-4 pr-12 rounded-3xl border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-transparent transition-all"
              />
              <label
                htmlFor="email"
                className="absolute left-6 top-1 text-gray-500 dark:text-gray-400 text-sm transition-all
                peer-placeholder-shown:top-6 peer-placeholder-shown:text-base
                peer-focus:top-1 peer-focus:text-sm peer-focus:text-blue-500"
              >
                Email
              </label>
              <FaEnvelope className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-400 peer-focus:text-blue-500 transition-colors" />
            </motion.div>

            {/* Subject Input */}
            <motion.div
              variants={inputVariant}
              custom={3}
              className="relative w-full"
            >
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder=" "
                required
                className="peer w-full px-4 pl-6 pt-6 pb-4 pr-12 rounded-3xl border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-transparent transition-all"
              />
              <label
                htmlFor="subject"
                className="absolute left-6 top-1 text-gray-500 dark:text-gray-400 text-sm transition-all
                peer-placeholder-shown:top-6 peer-placeholder-shown:text-base
                peer-focus:top-1 peer-focus:text-sm peer-focus:text-blue-500"
              >
                Subject
              </label>
              <MdSubject className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-400 peer-focus:text-blue-500 transition-colors" />
            </motion.div>

            {/* Message Input */}
            <motion.div
              variants={inputVariant}
              custom={4}
              className="relative w-full"
            >
              <textarea
                id="message"
                name="message"
                ref={messageRef}
                placeholder=" "
                required
                rows="1"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                  const el = messageRef.current;
                  if (el) {
                    el.style.height = "auto";
                    el.style.height = `${el.scrollHeight}px`;
                  }
                }}
                className="peer custom-scroll resize-none min-h-[150px] w-full px-4 pl-6 pt-7 pb-4 pr-12 rounded-3xl border border-gray-300 dark:border-gray-700 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-transparent transition-all"
              />
              <label
                htmlFor="message"
                className="absolute left-6 top-1 text-gray-500 dark:text-gray-400 text-sm transition-all
                peer-placeholder-shown:top-6 peer-placeholder-shown:text-base
                peer-focus:top-1 peer-focus:text-sm peer-focus:text-blue-500"
              >
                Message
              </label>
              <FaInbox className="absolute right-6 top-6 text-gray-400 peer-focus:text-blue-500 transition-colors" />
            </motion.div>

            {/* Buttons */}
            <motion.div
              variants={inputVariant}
              custom={5}
              className="flex justify-center items-center mt-4"
            >
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="shadow-blue-500 border-2 border-blue-400 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#33CCC,0_0_15px_#33CCC,0_0_30px_#33CCC] flex items-center justify-center px-8 py-3 text-base font-semibold text-white bg-gradient-to-r from-blue-500 via-sky-500 to-blue-400 hover:from-blue-600 hover:via-sky-600 hover:to-blue-500 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
              >
                <FaPaperPlane className="mr-2" /> Send Message
              </motion.button>
            </motion.div>
          </form>
        </motion.div>

        {/* Right Side - Animation */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="md:w-1/2 w-full"
        >
          <div className="w-full h-full rounded-lg overflow-hidden flex items-center justify-center">
            <Lottie
              animationData={contact}
              loop
              className="max-w-[90%] md:max-w-[100%]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
