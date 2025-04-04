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
import { Fade } from "react-awesome-reveal";
const Banner = () => {
  const axiosPublic = useAxiosPublic();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFirstLoad, setIsFirstLoad] = useState(true); // Track initial load

  // Store completed text
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    // Disable fade animation after first render
    setTimeout(() => {
      setIsFirstLoad(false);
    }, 1000); // Ensures fade animation only runs once
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
                  <p className="lg:text-5xl md:text-3xl text-lg text-center lg:leading-snug leading-normal font-medium">
                    <Typewriter
                      words={["Find your "]}
                      typeSpeed={80}
                      onTypingDone={() => setTypedText("Find your")}
                    ></Typewriter>
                    {typedText.includes("Find your") && (
                      <span className="text-gold-color lg:text-6xl md:text-4xl text-xl lg:mx-4 md:mx-2">
                        <Typewriter
                          words={[" soulmate and create memories"]}
                          typeSpeed={80}
                          onTypingDone={() =>
                            setTypedText(
                              (prev) => prev + " soulmate and create memories"
                            )
                          }
                        ></Typewriter>
                      </span>
                    )}

                    {typedText.includes("soulmate and create memories") && (
                      <Typewriter
                        words={[" for a lifetime"]}
                        typeSpeed={80}
                        onTypingDone={() =>
                          setTypedText((prev) => prev + " for a lifetime")
                        }
                      ></Typewriter>
                    )}
                  </p>
                ) : (
                  <p className="lg:text-5xl md:text-3xl text-lg text-center lg:leading-snug leading-normal font-medium">
                    Find your{" "}
                    <span className="text-gold-color lg:text-6xl md:text-4xl text-xl lg:mx-4 md:mx-2">
                      soulmate and create memories
                    </span>{" "}
                    for a lifetime
                  </p>
                )}

                <h1 className="text-center lg:mt-8 md:mt-6 mt-2 lg:text-3xl md:text-xl text-xs">
                  Your Happily Ever Awaits!
                </h1>
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
