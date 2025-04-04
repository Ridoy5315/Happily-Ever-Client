import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./PremiumCard.css";
import { IoLocationOutline } from "react-icons/io5";
const PremiumCard = ({ biodata }) => {
  // const [age, setAge] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const {
    bioDataId,
    bioDataType,
    profileImage,
    permanentDivisionName,
    occupation,
    name,
    age,
  } = biodata || {};

  return (
    <div
      className={`bg-gold2-color text-gray-700 font-fontBody relative lg:rounded-2xl rounded-xl lg:p-6 md:p-4 p-2 lg:space-y-6 space-y-4 transform transition-all lg:hover:ring-[8px] hover:ring-[6px] hover:ring-gold-color hover:ring-opacity-50 ease-in-out duration-500 hover:scale-105 cursor-pointer `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`absolute transition-all duration-500 inset-0 bg-black/10${
          isHovered ? "brightness-[1]" : ""
        }`}
      ></div>
      <div className="flex justify-between">
        <div>
          <p className="lg:text-xl md:text-base text-sm font-medium text-maroon-color">{occupation}</p>
          <div className="flex  lg:gap-5 md:gap-3 gap-2 items-center lg:text-sm md:text-xs text-[8px]">
            <span>Age: {age}</span>
            <span className="flex items-center lg:gap-0.5 md:gap-0.5"><IoLocationOutline className="text-maroon-color"></IoLocationOutline>{permanentDivisionName}</span>
            <span>{bioDataType}</span>
          </div>
        </div>
        <div>
          <p className="text-maroon-color lg:text-base md:text-xs text-[10px] font-semibold">ID: {bioDataId}</p>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="relative mx-auto lg:w-60 lg:h-60 md:w-44 md:h-44 w-28 h-28 rounded-full border-4 border-gold-color">
          <img
            src={profileImage}
            alt="Premium member profile"
            className="w-full h-full rounded-full object-cover mx-auto"
          />
        </div>
        <div className=" animate-border-gradient my-3">
          <p className="z-10 text-maroon-color lg:px-6 px-4 uppercase py-1 lg:text-sm md:text-xs text-[10px] font-medium">
            Premium member
          </p>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="mt-3">
          <Link
            to={`/bioDataDetails/${bioDataId}`}
            className={`absolute bottom-4 lg:bottom-6 lg:right-1/3 md:right-2/3 px-4 py-1 bg-maroon-color lg:text-base md:text-sm text-xs text-white rounded-lg transition-all duration-500 ${
              isHovered
                ? "opacity-100 lg:-translate-x-0 translate-x-5"
                : "opacity-0 lg:translate-x-5 -translate-x-0"
            }`}
          >
            View Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PremiumCard;
