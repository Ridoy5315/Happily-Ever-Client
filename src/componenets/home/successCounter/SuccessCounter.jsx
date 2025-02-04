import React, { useState } from "react";

import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import SectionTitle from "../../shared/SectionTitle/SectionTitle";
import { FaUsersViewfinder } from "react-icons/fa6";
import { SlUserFemale } from "react-icons/sl";
import { GrUserManager } from "react-icons/gr";
import { GiLovers } from "react-icons/gi";
const SuccessCounter = () => {
  const [counter, setCounter] = useState(false);

  return (
    <div className="w-10/12 mx-auto pt-44 pb-20">
      <SectionTitle
        heading="Building Families"
        subHeading="Discover the numbers behind our trusted matrimony platform"
      ></SectionTitle>
      <ScrollTrigger
        onEnter={() => setCounter(true)}
        onExit={() => setCounter(false)}
      >
        <div className="grid grid-cols-4 gap-20 mt-16 text-center">
          <div className="bg-[#f5e7e4] p-6 space-y-3 border-b-8 border-maroon-color rounded-xl">
            <div className="flex justify-center">
              <FaUsersViewfinder className="text-4xl text-[#b97267]"></FaUsersViewfinder>
            </div>
            <h2 className="text-5xl text-maroon-color font-medium">
              {counter && (
                <CountUp start={0} end={4576} duration={2.75}></CountUp>
              )}
              
            </h2>
            <p className="text-[#b97267] font-semibold text-xl">
              Total Biodata
            </p>
          </div>
          <div className="bg-[#f5e7e4] p-6 space-y-3 border-b-8 border-maroon-color rounded-xl">
            <div className="flex justify-center">
              <SlUserFemale className="text-4xl text-[#b97267]"></SlUserFemale>
            </div>
            <h2 className="text-5xl text-maroon-color font-medium">
              {counter && (
                <CountUp start={0} end={1156} duration={2.75}></CountUp>
              )}
              
            </h2>
            <p className="text-[#b97267] font-semibold text-xl">
              Total Girl's Biodata
            </p>
          </div>
          <div className="bg-[#f5e7e4] p-6 space-y-3 border-b-8 border-maroon-color rounded-xl">
          <div className="flex justify-center">
              <GrUserManager className="text-4xl text-[#b97267]"></GrUserManager>
            </div>
            <h2 className="text-5xl text-maroon-color font-medium">
              {counter && (
                <CountUp start={0} end={1299} duration={2.75}></CountUp>
              )}
              
            </h2>
            <p className="text-[#b97267] font-semibold text-xl">
              Total Boy's Biodata
            </p>
          </div>
          <div className="bg-[#f5e7e4] p-6 space-y-3 border-b-8 border-maroon-color rounded-xl">
          <div className="flex justify-center">
              <GiLovers className="text-4xl text-[#b97267]"></GiLovers>
            </div>
            <h2 className="text-5xl text-maroon-color font-medium">
              {counter && (
                <CountUp start={0} end={189} duration={2.75}></CountUp>
              )}
              
            </h2>
            <p className="text-[#b97267] font-semibold text-xl">
              Total Successful Marriages
            </p>
          </div>
        </div>
      </ScrollTrigger>
    </div>
  );
};

export default SuccessCounter;
