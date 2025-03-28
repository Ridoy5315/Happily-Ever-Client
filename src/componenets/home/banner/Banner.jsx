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
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "react-medium-image-zoom/dist/styles.css";
const Banner = () => {
  const [zoomKey, setZoomKey] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    // Force re-render of motion component by changing the key
    setZoomKey((prev) => prev + 1);
  }, [currentSlide]); // Run effect every slide change
  return (
    <div className="w-full h-full z-10 font-fontHeading overflow-hidden">
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
          <div className="overflow-hidden w-full relative  lg:h-screen md:h-[700px] h-[450px]">
   
              <div className="absolute z-10 text-gray-300 px-16 md:px-52 lg:px-80 top-[35%] transform -translate-y-1/2">
                <p className="lg:text-5xl md:text-3xl text-lg text-center lg:leading-snug leading-normal font-medium">
                  Find your{" "}
                  <span className="text-gold-color lg:text-6xl md:text-4xl text-xl lg:mx-4 md:mx-2">
                    soulmate and create memories
                  </span>{" "}
                  for a lifetime
                </p>
                <h1 className="text-center lg:mt-8 md:mt-6 mt-2 lg:text-3xl md:text-xl text-xs">
                  Your Happily Ever Awaits!
                </h1>
              </div>

              <motion.img
                key={`slide-0-${zoomKey}`}
                src={banner3}
                alt=""
                className="bsolute top-0 left-0 w-full h-full object-cover"
                initial={{ scale: 1}} // Start zoomed in
                animate={{ scale: 1.5}} // Animate to normal size
                transition={{ duration: 11, ease: "easeInOut" }} // Smooth transition
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/65 to-black/45"></div>
  
          </div>
        </SwiperSlide>
        {/* slider 2 */}
        <SwiperSlide>
          <div className="overflow-hidden w-full relative  lg:h-screen md:h-[700px] h-[450px]">
   
              <div className="absolute z-10 text-gray-300 px-16 md:px-52 lg:px-80 top-[35%] transform -translate-y-1/2">
                <p className="lg:text-5xl md:text-3xl text-lg text-center lg:leading-snug leading-normal font-medium">
                  Find your{" "}
                  <span className="text-gold-color lg:text-6xl md:text-4xl text-xl lg:mx-4 md:mx-2">
                    soulmate and create memories
                  </span>{" "}
                  for a lifetime
                </p>
                <h1 className="text-center lg:mt-8 md:mt-6 mt-2 lg:text-3xl md:text-xl text-xs">
                  Your Happily Ever Awaits!
                </h1>
              </div>

              <motion.img
                key={`slide-0-${zoomKey}`}
                src={banner1}
                alt=""
                className="bsolute top-0 left-0 w-full h-full object-cover"
                initial={{ scale: 1}} // Start zoomed in
                animate={{ scale: 1.5}} // Animate to normal size
                transition={{ duration: 11, ease: "easeInOut" }} // Smooth transition
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/65 to-black/45"></div>
  
          </div>
        </SwiperSlide>
        {/* slider 3 */}
        <SwiperSlide>
          <div className="overflow-hidden w-full relative  lg:h-screen md:h-[700px] h-[450px]">
   
              <div className="absolute z-10 text-gray-300 px-16 md:px-52 lg:px-80 top-[35%] transform -translate-y-1/2">
                <p className="lg:text-5xl md:text-3xl text-lg text-center lg:leading-snug leading-normal font-medium">
                  Find your{" "}
                  <span className="text-gold-color lg:text-6xl md:text-4xl text-xl lg:mx-4 md:mx-2">
                    soulmate and create memories
                  </span>{" "}
                  for a lifetime
                </p>
                <h1 className="text-center lg:mt-8 md:mt-6 mt-2 lg:text-3xl md:text-xl text-xs">
                  Your Happily Ever Awaits!
                </h1>
              </div>

              <motion.img
                key={`slide-0-${zoomKey}`}
                src={banner4}
                alt=""
                className="bsolute top-0 left-0 w-full h-full object-cover"
                initial={{ scale: 1}} // Start zoomed in
                animate={{ scale: 1.5}} // Animate to normal size
                transition={{ duration: 11, ease: "easeInOut" }} // Smooth transition
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/65 to-black/45"></div>
  
          </div>
        </SwiperSlide>
        {/* slider 4 */}
        <SwiperSlide>
          <div className="overflow-hidden w-full relative lg:h-screen md:h-[700px] h-[450px]">
   
              <div className="absolute z-10 text-gray-300 px-16 md:px-52 lg:px-80 top-[35%] transform -translate-y-1/2">
                <p className="lg:text-5xl md:text-3xl text-lg text-center lg:leading-snug leading-normal font-medium">
                  Find your{" "}
                  <span className="text-gold-color lg:text-6xl md:text-4xl text-xl lg:mx-4 md:mx-2">
                    soulmate and create memories
                  </span>{" "}
                  for a lifetime
                </p>
                <h1 className="text-center lg:mt-8 md:mt-6 mt-2 lg:text-3xl md:text-xl text-xs">
                  Your Happily Ever Awaits!
                </h1>
              </div>

              <motion.img
                key={`slide-0-${zoomKey}`}
                src={banner2}
                alt=""
                className="bsolute top-0 left-0 w-full h-full object-cover"
                initial={{ scale: 1}} // Start zoomed in
                animate={{ scale: 1.5}} // Animate to normal size
                transition={{ duration: 11, ease: "easeInOut" }} // Smooth transition
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/65 to-black/45"></div>
  
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
