import React, { useState } from "react";

import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import SectionTitle from "../../shared/SectionTitle/SectionTitle";
import { FaUsersViewfinder } from "react-icons/fa6";
import { SlUserFemale } from "react-icons/sl";
import { GrUserManager } from "react-icons/gr";
import { GiLovers } from "react-icons/gi";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
const SuccessCounter = () => {
  const axiosPublic = useAxiosPublic();
  const [counter, setCounter] = useState(false);

  const { data } = useQuery({
    queryKey: [ "count"],
    queryFn: async () => {
      const { data } = await axiosPublic("/user-count");
      return data;
    },
  });

  return (
    <div className="lg:w-10/12 w-11/12 mx-auto lg:pt-44 md:pt-28 pt-20">
      <SectionTitle
        heading="Building Families"
        subHeading="Discover the numbers behind our trusted matrimony platform"
      ></SectionTitle>
      <ScrollTrigger
        onEnter={() => setCounter(true)}
        onExit={() => setCounter(false)}
      >
        <div className="grid lg:grid-cols-4 md:grid-cols-4 grid-cols-2 lg:gap-20 md:gap-6 gap-3 lg:mt-16 md:mt-10 mt-6 text-center font-fontBody">
          <div className="bg-[#f5e7e4] p-6 lg:space-y-3 space-y-2 border-b-8 border-maroon-color rounded-xl">
            <div className="flex justify-center">
              <FaUsersViewfinder className="lg:text-4xl text-2xl text-[#b97267]"></FaUsersViewfinder>
            </div>
            <h2 className="lg:text-5xl text-3xl text-maroon-color font-medium">
              {counter && (
                <CountUp
                  start={0}
                  end={data?.totalUsers}
                  duration={2.75}
                ></CountUp>
              )}
            </h2>
            <p className="text-[#b97267] font-semibold lg:text-xl">
              Total Biodata
            </p>
          </div>
          <div className="bg-[#f5e7e4] p-6 lg:space-y-3 space-y-2 border-b-8 border-maroon-color rounded-xl">
            <div className="flex justify-center">
              <SlUserFemale className="lg:text-4xl text-2xl text-[#b97267]"></SlUserFemale>
            </div>
            <h2 className="lg:text-5xl text-3xl text-maroon-color font-medium">
              {counter && (
                <CountUp
                  start={0}
                  end={data?.femaleUsers}
                  duration={2.75}
                ></CountUp>
              )}
            </h2>
            <p className="text-[#b97267] font-semibold lg:text-xl text-sm">
              Total Female Biodata
            </p>
          </div>
          <div className="bg-[#f5e7e4] p-6 lg:space-y-3 space-y-2 border-b-8 border-maroon-color rounded-xl">
            <div className="flex justify-center">
              <GrUserManager className="lg:text-4xl text-2xl text-[#b97267]"></GrUserManager>
            </div>
            <h2 className="lg:text-5xl text-3xl text-maroon-color font-medium">
              {counter && (
                <CountUp
                  start={0}
                  end={data?.maleUsers}
                  duration={2.75}
                ></CountUp>
              )}
            </h2>
            <p className="text-[#b97267] font-semibold lg:text-xl text-sm">
              Total Male Biodata
            </p>
          </div>
          <div className="bg-[#f5e7e4] p-6 lg:space-y-3 space-y-2 border-b-8 border-maroon-color rounded-xl">
            <div className="flex justify-center">
              <GiLovers className="lg:text-4xl text-2xl text-[#b97267]"></GiLovers>
            </div>
            <h2 className="lg:text-5xl text-3xl text-maroon-color font-medium">
              {counter && <CountUp start={0} end={14} duration={2.75}></CountUp>}
            </h2>
            <p className="text-[#b97267] font-semibold lg:text-xl text-xs">
              Total Successful Marriages
            </p>
          </div>
        </div>
      </ScrollTrigger>
    </div>
  );
};

export default SuccessCounter;
