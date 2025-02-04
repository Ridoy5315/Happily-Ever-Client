import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { EffectCoverflow } from "swiper/modules";
import banner1 from "../../../assets/banner/collage2.jpg";
import banner2 from "../../../assets/banner/banner3.jpg";
import banner3 from "../../../assets/banner/banner4.jpg";
import banner4 from "../../../assets/banner/banner8.jpg";

import { motion } from "framer-motion";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import Zoom from "react-medium-image-zoom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "react-medium-image-zoom/dist/styles.css";
const Banner = () => {
  const [fadeKey, setFadeKey] = useState(0);
  const [zoomKey, setZoomKey] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    // Force re-render of motion component by changing the key
    setZoomKey((prev) => prev + 1);
  }, [currentSlide]); // Run effect every slide change
  return (
    <div className="w-full h-full z-10">
      <Swiper
        spaceBetween={30}
        enteredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, EffectFade]}
        pagination={{ clickable: true }}
        effect="fade"
        loop={true}
        onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
        className="mySwiper"
      >
        {/* slider 1 */}
        <SwiperSlide>
          <div className="overflow-hidden w-full relative bg-cover bg-center lg:h-screen md:h-screen h-[500px]">
            <div className="relative">
              <div className="absolute z-10 text-gray-300 flex flex-col lg:h-screen md:h-screen lg:justify-center md:justify-center md:w-[65%] lg:w-[55%] text-center lg:text-start md:text-start pt-8 lg:pt-0 md:pt-0 ">
                <h1>Your Happily Ever Awaits!</h1>
                <p className="lg:text-5xl md:text-3xl text-xl lg:leading-snug leading-normal font-medium">
                  Find your soulmate and create memories for a lifetime.
                </p>
              </div>

              <motion.img
                key={`slide-0-${zoomKey}`}
                src={banner3}
                alt=""
                className="w-full h-full object-cover rounded-lg shadow-lg"
                initial={{ scale: 1 }} // Start zoomed in
                animate={{ scale: 1.5 }} // Animate to normal size
                transition={{ duration: 11, ease: "easeInOut" }} // Smooth transition
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/65 to-black/45"></div>
            </div>
          </div>
        </SwiperSlide>
        {/* slider 2 */}
        <SwiperSlide>
          <div className="overflow-hidden w-full relative bg-cover bg-center lg:h-screen md:h-screen h-[500px]">
            
            <div className="relative">
              <div className="absolute z-10 text-gray-300 flex flex-col lg:h-screen md:h-screen lg:justify-center md:justify-center md:w-[65%] lg:w-[55%] text-center lg:text-start md:text-start pt-8 lg:pt-0 md:pt-0 ">
                <h1>Your Happily Ever Awaits!</h1>
                <p className="lg:text-5xl md:text-3xl text-xl lg:leading-snug leading-normal font-medium">
                  Find your soulmate and create memories for a lifetime.
                </p>
              </div>
              <motion.img
                key={`slide-1-${zoomKey}`}
                src={banner1}
                alt=""
                className="w-full h-full object-cover"
                initial={{ scale: 1, filter: "blur(0px)" }} // Start zoomed in
                animate={{ scale: 1.5, filter: "blur(5px)" }} // Animate to normal size
                transition={{ duration: 11, ease: "easeInOut" }} // Smooth transition
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/65 to-black/45"></div>
            </div>
          </div>
        </SwiperSlide>
        {/* slider 3 */}
        <SwiperSlide>
          <div className="overflow-hidden w-full relative bg-cover bg-center lg:h-screen md:h-screen h-[500px]">
            <div className="relative">
              <div className="absolute z-10 text-gray-300 flex flex-col lg:h-screen md:h-screen lg:justify-center md:justify-center md:w-[65%] lg:w-[55%] text-center lg:text-start md:text-start pt-8 lg:pt-0 md:pt-0 ">
                <h1>Your Happily Ever Awaits!</h1>
                <p className="lg:text-5xl md:text-3xl text-xl lg:leading-snug leading-normal font-medium">
                  Find your soulmate and create memories for a lifetime.
                </p>
              </div>
              <motion.img
                key={`slide-2-${zoomKey}`}
                src={banner4}
                alt=""
                className="w-full h-full object-cover rounded-lg shadow-lg"
                initial={{ scale: 1 }} // Start zoomed in
                animate={{ scale: 1.5 }} // Animate to normal size
                transition={{ duration: 11, ease: "easeInOut" }} // Smooth transition
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/65 to-black/45"></div>
            </div>
          </div>
        </SwiperSlide>
        {/* slider 4 */}
        <SwiperSlide>
          <div className="overflow-hidden w-full relative bg-cover bg-center lg:h-screen md:h-screen h-[500px]">
            <div className="relative">
              <div className="absolute z-10 text-gray-300 flex flex-col lg:h-screen md:h-screen lg:justify-center md:justify-center md:w-[65%] lg:w-[55%] text-center lg:text-start md:text-start pt-8 lg:pt-0 md:pt-0 ">
                <h1>Your Happily Ever Awaits!</h1>
                <p className="lg:text-5xl md:text-3xl text-xl lg:leading-snug leading-normal font-medium">
                  Find your soulmate and create memories for a lifetime.
                </p>
              </div>
              <motion.img
                key={`slide-3-${zoomKey}`}
                src={banner2}
                alt=""
                className="w-full h-full object-cover rounded-lg shadow-lg"
                initial={{ scale: 1 }} // Start zoomed in
                animate={{ scale: 1.5 }} // Animate to normal size
                transition={{ duration: 11, ease: "easeInOut" }} // Smooth transition
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/65 to-black/45"></div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
