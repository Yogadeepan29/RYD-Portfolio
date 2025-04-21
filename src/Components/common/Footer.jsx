import React, { useEffect, useRef, useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Footer = () => {
  const footerRef = useRef(null);
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowScrollButton(entry.isIntersecting);
      },
      {
        threshold: 0.5,
      }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <motion.footer
        ref={footerRef}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="w-full px-6 py-5 mt-6 text-center "
      >
        <div className="flex flex-col items-center gap-4">
          {/* Social Icons */}
          <div className="flex gap-6 text-xl text-gray-600 dark:text-gray-400">
            <a
              href="https://github.com/Yogadeepan29"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black dark:hover:text-white transition-colors duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/yogadeepan02/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:yogudeepan.r@gmail.com"
              className="hover:text-red-600 dark:hover:text-red-400 transition-colors duration-300"
            >
              <FaEnvelope />
            </a>
          </div>

          {/* Footer Text */}
          <p className="text-sm text-gray-500 dark:text-gray-500 tracking-wide">
            © {new Date().getFullYear()} RYD-Projects | All rights reserved.
          </p>
        </div>
      </motion.footer>

      <AnimatePresence>
        {showScrollButton && (
          <motion.button
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            onClick={scrollToTop}
            className="fixed bottom-2 right-2 sm:bottom-8 sm:right-8 p-3 rounded-full shadow-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300 cursor-pointer"
            aria-label="Scroll to top"
          >
            <FaArrowUp />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default Footer;
