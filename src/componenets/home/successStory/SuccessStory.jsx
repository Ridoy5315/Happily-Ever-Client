import React, { useEffect } from "react";
import SectionTitle from "../../shared/SectionTitle/SectionTitle";
import Glide from "@glidejs/glide";
import { FaQuoteLeft } from "react-icons/fa6";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { format } from "date-fns";
import { useQuery } from "@tanstack/react-query";
const SuccessStory = () => {
  const axiosPublic = useAxiosPublic();

  const {data: success_couple = []} = useQuery({
    queryKey: ["success_couple"],
    queryFn: async() => {
      const {data} = await axiosPublic("/user-married");
      return data;
    }
  })
  console.log(success_couple);
  useEffect(() => {
    if (success_couple.length === 0) return;
    const slider = new Glide(".glide-08", {
      type: "carousel",
      focusAt: 1,
      animationDuration: 4000,
      autoplay: 4500,
      autoplay: true,
      rewind: true,
      perView: 2,
      gap: 48,
      classes: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
      breakpoints: {
        1024: {
          perView: 2,
        },
        640: {
          perView: 1,
        },
      },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, [success_couple]);
  return (
    <div className="w-10/12 mx-auto pt-44 pb-20">
      <SectionTitle
        heading="Happy Beginnings"
        subHeading="Inspiring tales of lifelong partnerships"
      ></SectionTitle>
      <div className="overflow-hidden">
        <>
          {/*<!-- Component: Testimonial carousel --> */}
          <div className="glide-08 relative w-full">
            {/*    <!-- Slides --> */}
            <div data-glide-el="track">
              <ul className="pt-64 relative whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0 pb-12">
                
                {success_couple.map( couple => <li key={couple._id}>
                  <div className="h-full w-full">
                    {/*                    <!-- Start Testimonial --> */}
                    <div className=" h-full overflow-hidden rounded text-slate-700 shadow-lg shadow-[#eacfca]">
                      <div className="absolute top-[12%] translate-y-[5%] translate-x-[25%] mx-auto ">
                        <div className="w-96 h-72 mx-auto">
                          <img
                            src={couple?.coupleImage}
                            alt="user name"
                            className="w-full h-full rounded-2xl object-cover"
                          />
                        </div>
                      </div>
                      <div className="relative p-6 pt-44">
                        <figure className="">
                          <blockquote className="p-6 text-lg leading-relaxed">
                            <p>
                              {couple?.successStoryReview}
                            </p>
                          </blockquote>
                          <figcaption className="flex flex-col items-start gap-2 p-6 pt-0 text-sm ">
                            {/* review */}
                            <div className="flex items-center gap-4 pt-4 text-sm text-maroon-color">
                              <div className="flex flex-col gap-1">
                                <span className="font-bold uppercase">
                                Marriage Date
                                </span>
                                <p>{format(new Date(couple?.marriageDate), "PP")}</p>
                              </div>
                            </div>
                          </figcaption>
                        </figure>
                        {/* quatetion */}
                        <FaQuoteLeft className="absolute left-4 top-36 -z-10 text-8xl text-[#eacfca]"></FaQuoteLeft>
                        
                      </div>
                    </div>
                    {/*                    <!-- End Testimonial --> */}
                  </div>
                </li>)}
              </ul>
            </div>
            {/*    <!-- Indicators --> */}
            <div
              className="-mt-6 flex w-full items-center justify-center gap-2"
              data-glide-el="controls[nav]"
            >
              <button
                className="group p-4"
                data-glide-dir="=0"
                aria-label="goto slide 1"
              >
                <span className="block h-2 w-2 rounded-full bg-white/20 opacity-70 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
              </button>
              <button
                className="group p-4"
                data-glide-dir="=1"
                aria-label="goto slide 2"
              >
                <span className="block h-2 w-2 rounded-full bg-white/20 opacity-70 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
              </button>
              <button
                className="group p-4"
                data-glide-dir="=2"
                aria-label="goto slide 3"
              >
                <span className="block h-2 w-2 rounded-full bg-white/20 opacity-70 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
              </button>
            </div>
          </div>
          {/*<!-- End Testimonial carousel --> */}
        </>
      </div>
    </div>
  );
};

export default SuccessStory;
