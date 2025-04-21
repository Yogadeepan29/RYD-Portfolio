import React from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight, FaExternalLinkAlt } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import useTheme from "../hooks/useTheme";
import { certificatesData } from "../constants/portfolioData";

const Certificates = () => {
  const { darkMode } = useTheme();

  return (
    <section
      id="certificates"
      className="mx-auto max-w-7xl p-4 sm:p-10 dark:text-white select-none overflow-x-hidden"
    >
      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="heading text-2xl mt-16 mb-5 sm:text-4xl font-extrabold md:text-5xl text-center drop-shadow-md tracking-wider"
      >
        Certifications & Credentials
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center text-gray-600 dark:text-gray-300 text-base md:text-lg max-w-3xl mx-auto mb-10"
      >
        Verified certifications that validate my skills and commitment to
        continuous learning in web development and modern technologies.
      </motion.p>

      {/* Swiper Certificates */}
      <motion.div
        key={darkMode ? "dark-certs" : "light-certs"}
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="w-full"
      >
        <div className="relative w-full max-w-6xl mx-auto flex justify-center items-center gap-2 sm:gap-4  px-8 sm:px-4">
          {/* Prev Button */}
          <div className="flex justify-center">
            <button className="swiper-button-prev-cert cursor-pointer p-2 bg-gray-700 hover:bg-gray-900 text-white rounded-full">
              <FaArrowLeft />
            </button>
          </div>

          {/* Swiper Section */}
          <div className="w-full justify-center mx-auto">
            <Swiper
              grabCursor
              loop
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              navigation={{
                nextEl: `.swiper-button-next-cert`,
                prevEl: `.swiper-button-prev-cert`,
              }}
              spaceBetween={15}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              modules={[Autoplay, Navigation]}
            >
              {certificatesData.map((cert) => (
                <SwiperSlide
                  key={cert.id}
                  className="!h-auto flex justify-center"
                >
                  <div className="max-w-3xl rounded-xl overflow-hidden   transition-all duration-300">
                    {/* Certificate Image */}
                    <img
                      src={cert.image}
                      alt={cert.title}
                      loading="lazy"
                      className="w-full aspect-[3/2] object-cover object-top"
                    />

                    {/* Title and Link Row */}
                    <div className="flex items-center justify-between bg-emerald-800 px-5 py-4 ">
                      <h3 className="text-xl font-bold text-white tracking-wider">
                        {cert.title}
                      </h3>
                      <a
                        href={cert.certificateLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm lg:text-md tracking-tighter cursor-pointer text-blue-400 font-semibold hover:underline z-50 whitespace-nowrap"
                      >
                        Certificate <FaExternalLinkAlt />
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Next Button */}
          <div className="flex justify-center">
            <button className="swiper-button-next-cert cursor-pointer p-2 bg-gray-700 hover:bg-gray-900 text-white rounded-full">
              <FaArrowRight />
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Certificates;
