import React, { useEffect, useState } from "react";
import "../home/premiumCards/PremiumCard.css";
import { Link } from "react-router-dom";
import { findUserAge } from "../../api/utils";
const CardForRightSide = ({ data , premiumBiodatas}) => {
  // const [age, setAge] = useState(null);
  const {
    bioDataId,
    bioDataType,
    profileImage,
    permanentDivisionName,
    dateOfBirth,
    occupation,
    contactEmail,
    age,
  } = data || {};

  const isPremium = premiumBiodatas.some(item => item.email === contactEmail);

  return (
    <div className="rounded-xl relative">
      <div className="bg-gold-color lg:h-28 h-20"></div>
      {/* badges */}
      <span className="absolute lg:-left-2 lg:-top-2 md:-left-2 md:-top-2 -left-1 -top-1 inline-flex items-center justify-center gap-1 rounded-full bg-maroon-color text-xs lg:text-base md:text-base lg:px-2 md:px-2 px-1 text-white ring-2 ring-white">
        {bioDataId}
      </span>

      <div className="lg:w-36 lg:h-36 w-32 h-32 lg:ring-8 ring-4 ring-gold2-color rounded-full absolute left-1/2 top-1/4 transform -translate-x-1/2 lg:-translate-y-1/3 md:-translate-y-1/3 -translate-y-2/4">
        <img
          src={profileImage}
          alt="User profile"
          className="w-full h-full rounded-full object-cover"
        />
      </div>
      { isPremium && (
        <div className="inline-flex absolute ">
          <div className="animate-border-gradient">
            <p className="z-10 text-maroon-color lg:px-4 px-2 lg:text-xs text-[8px] uppercase py-0.5 font-medium">
              premium member
            </p>
          </div>
        </div>
      ) }

      {/* biodata details */}
      <div className="lg:mt-14 md:mt-14 mt-5">
        <div className="text-center lg:pt-12 pt-14 pb-8">
          <p className="text-maroon-color font-fontHeading font-semibold">{occupation}</p>
        </div>
        <div className="grid grid-cols-9 gap-1 lg:px-2 px-1">
          <div className="col-span-3 flex flex-col items-center ">
            <h5 className="md:text-xs text-[10px] lg:text-sm">Biodata Type</h5>
            <p className="">{bioDataType}</p>
          </div>
          <div className="col-span-1 border-r border-gray-300 mr-2"></div>

          <div className="col-span-1 flex flex-col items-center">
            <h5 className="text-xs lg:text-sm">Age</h5>
            <p>{age}</p>
          </div>
          <div className="col-span-1 border-r border-gray-300 mr-2"></div>
          <div className="col-span-3 flex flex-col items-center ">
            <h5 className="text-[10px] lg:text-sm">Permanent Add.</h5>
            <p className="lg:text-base md:text-base text-sm">{permanentDivisionName}</p>
          </div>
        </div>
        {/* view profile button */}
        <div className="lg:pt-9 spb-9 md:pt-7 pt-5 pb-9 rounded">
          <Link
            to={`/bioDataDetails/${bioDataId}`}
            className="bg-maroon-color lg:px-6 px-4 lg:py-1 py-0.5 lg:text-base text-sm rounded-2xl text-white"
          >
            View Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardForRightSide;
