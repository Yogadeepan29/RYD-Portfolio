import React, { useState, useEffect } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import { BiMenu } from "react-icons/bi";
import useTheme from "../../hooks/useTheme";

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#education", label: "Education" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#certificates", label: "Certificates" },
    { href: "#contact", label: "Contact" },
  ];

  const NavItem = ({ href, label, onClick }) => {
    const handleClick = (e) => {
      e.preventDefault(); // Prevent URL hash change

      const targetId = href.replace("#", "");
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
      if (onClick) onClick();
    };

    return (
      <li
        className={`opacity-70 hover:opacity-100 transition-opacity duration-300
        ${
          activeLink === href
            ? "text-blue-600 dark:text-blue-400 font-bold"
            : "text-gray-700 dark:text-gray-300"
        }`}
      >
        <a href={href} onClick={handleClick} className="tracking-wide">
          {label}
        </a>
      </li>
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.25;

      let foundActive = false;
      for (const link of navLinks) {
        const section = document.querySelector(link.href);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActiveLink(link.href);
            foundActive = true;
            break;
          }
        }
      }
      // If no section matched, clear the active link
      if (!foundActive) {
        setActiveLink("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 w-full backdrop-blur-md bg-white/80 dark:bg-black/50 border-b border-gray-300 dark:border-gray-700  z-50
      transition-transform duration-300`}
    >
      <nav className="max-w-7xl mx-auto py-4 px-6 flex items-center justify-between text-gray-900 dark:text-white">
        <div className="flex items-center text-sm md:text-xl lg:text-2xl font-semibold bg-gradient-to-r from-blue-600 via-sky-500 to-blue-400 text-transparent bg-clip-text hover:scale-110 transition-all duration-300">
          {/* Logo and Brand Name */}
          <div className="relative flex items-center justify-center">
            {/* Animated Background Circles */}
            {[
              {
                width: "30%",
                height: "105%",
                animation: "animate-spin",
              },
              {
                width: "50%",
                height: "110%",
                animation: "animate-pulse",
                marginLeft: "ml-7",
              },
              {
                width: "30%",
                height: "115%",
                animation: "animate-pulse",
                marginLeft: "ml-20",
              },
              {
                width: "35%",
                height: "100%",
                animation: "animate-spin",
                marginLeft: "ml-auto",
              },
            ].map((circle, index) => (
              <div
                key={index}
                className={`absolute inset-0 scale-105 bg-gradient-to-r  from-blue-600 via-sky-500 to-blue-400 ${
                  circle.animation
                } rounded-full ${circle.marginLeft || ""}`}
                style={{
                  width: circle.width,
                  height: circle.height,
                  filter: "blur(10px)",
                }}
              />
            ))}

            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="relative z-10 flex items-center justify-center px-4 py-2 rounded-full bg-gray-100 dark:bg-black/80 whitespace-nowrap  hover:bg-gray-200 dark:hover:bg-gray-900  transition-colors duration-300"
            >
              <span className="flex gap-1 bg-gradient-to-r from-blue-700 via-sky-500 to-blue-400 bg-clip-text text-transparent">
                <span className="font-extrabold">RYD</span>-
                <span className="font-normal">Projects</span>
              </span>
            </a>
          </div>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex md:text-sm lg:text-md xl:text-lg md:gap-4 lg:gap-6 items-center">
          {navLinks.map((link) => (
            <NavItem key={link.href} href={link.href} label={link.label} />
          ))}
          <li>
            <button
              onClick={toggleDarkMode}
              className="w-10 h-10 flex justify-center items-center rounded-full bg-gray-300 dark:bg-yellow-400  text-gray-800 dark:text-yellow-900  shadow-lg transition-all duration-300 hover:scale-105"
            >
              <AnimatePresence mode="wait" initial={false}>
                {darkMode ? (
                  <motion.span
                    key="sun"
                    initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
                    transition={{ duration: 0.4 }}
                  >
                    <MdLightMode className="text-xl" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="moon"
                    initial={{ rotate: 90, opacity: 0, scale: 0.6 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: -90, opacity: 0, scale: 0.6 }}
                    transition={{ duration: 0.4 }}
                  >
                    <MdDarkMode className="text-xl" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <BiMenu className="text-3xl"></BiMenu>
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <ul className="md:hidden absolute top-17 left-0 right-0  bg-white/80 dark:bg-black/90 border-b space-y-5 border-gray-300 dark:border-gray-800  py-16 text-center">
            {navLinks.map((link) => (
              <NavItem
                key={link.href}
                href={link.href}
                label={<span className="text-lg">{link.label}</span>}
                onClick={() => setIsMenuOpen(false)}
              />
            ))}
            <li className="group px-20 opacity-80 hover:opacity-100 transition-opacity flex justify-end ">
              <button
                onClick={toggleDarkMode}
                className="w-9 h-9 flex justify-center items-center rounded-full 
                             bg-blue-500 dark:bg-yellow-400 
                             text-white dark:text-yellow-900 
                               shadow-lg hover:bg-blue-600 transition-colors"
              >
                {darkMode ? <MdLightMode /> : <MdDarkMode />}
              </button>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
