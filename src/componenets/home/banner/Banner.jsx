import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { EffectCoverflow } from "swiper/modules";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "react-medium-image-zoom/dist/styles.css";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import "animate.css";
const Banner = () => {
  const axiosPublic = useAxiosPublic();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [startTyping, setStartTyping] = useState(false);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [startTypingTagline, setStartTypingTagline] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsFirstLoad(false);
    }, 2000);
  }, []);

  useEffect(() => {
    // Wait until the main text is fully animated, then show the tagline typewriter
    if (!isFirstLoad) {
      const timer = setTimeout(() => {
        setStartTypingTagline(true);
      }, 100); // Adjust timing to match your animation duration
      return () => clearTimeout(timer);
    }
  }, [isFirstLoad]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartTyping(true);
    }, 2500);

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []);

  

  const { data: banners = [] } = useQuery({
    queryKey: ["banner"],
    queryFn: async () => {
      const { data } = await axiosPublic("/banner");
      console.log(data);
      return data;
    },
  });
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
        {banners.map((banner) => (
          <SwiperSlide key={banner._id}>
            <div className="overflow-hidden w-full relative  lg:h-screen md:h-[700px] h-[450px]">
              <div className="absolute z-10 text-gray-300 px-16 md:px-52 lg:px-80 top-[35%] transform -translate-y-1/2">
                {isFirstLoad ? (
                  <p className="animate__animated animate__slideInUp lg:text-5xl md:text-3xl text-lg text-center lg:leading-snug leading-normal font-medium">
                    Find your
                    <span className="text-gold-color lg:text-6xl md:text-4xl text-xl lg:mx-4 md:mx-2">
                      soulmate and create memories
                    </span>
                    for a lifetime
                  </p>
                ) : (
                  <p className="lg:text-5xl md:text-3xl text-lg text-center lg:leading-snug leading-normal font-medium">
                    Find your
                    <span className="text-gold-color lg:text-6xl md:text-4xl text-xl lg:mx-4 md:mx-2">
                      soulmate and create memories
                    </span>
                    for a lifetime
                  </p>
                )}

                <div className="flex gap-2 overflow-hidden justify-center lg:mt-8 md:mt-6 mt-2 lg:text-3xl md:text-xl text-xs">
                  {startTypingTagline && (
                    <>
                      <h1 className="">
                        <Typewriter
                          words={["Your"]}
                          loop={1}
                          typeSpeed={70}
                        ></Typewriter>
                      </h1>
                      {startTyping && (
                        <h1 className="text-gold-color">
                          <Typewriter
                            words={[
                              "Happily Ever Awaits!",
                              "Forever Begins Here!",
                              "Perfect Match Awaits!",
                              "Dream Chapter Begins!",
                            ]}
                            loop={false}
                            cursor
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                          ></Typewriter>
                        </h1>
                      )}
                    </>
                  )}
                </div>
              </div>

              <motion.img
                key={`slide-${banner._id}-${currentSlide}`}
                src={banner?.image}
                alt=""
                className="absolute top-0 left-0 w-full h-full object-cover"
                initial={{ scale: 1 }} // Start zoomed in
                animate={{ scale: 1.5 }} // Animate to normal size
                transition={{ duration: 11, ease: "easeInOut" }} // Smooth transition
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/65 to-black/45"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
