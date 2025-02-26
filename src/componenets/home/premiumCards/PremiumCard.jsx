import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./PremiumCard.css";
import { IoLocationOutline } from "react-icons/io5";
const PremiumCard = ({ biodata }) => {
  // const [age, setAge] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  console.log(biodata);
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
      className={`bg-gold2-color text-gray-700 font-fontBody relative rounded-2xl p-6 space-y-6 transform transition-all hover:ring-[8px] hover:ring-gold-color hover:ring-opacity-50 ease-in-out duration-500 hover:scale-105 cursor-pointer `}
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
          <p className="text-xl font-medium text-maroon-color">{occupation}</p>
          <div className="flex gap-5 items-center text-sm">
            <span>Age: {age}</span>
            <span className="flex items-center gap-1"><IoLocationOutline className="text-maroon-color"></IoLocationOutline>{permanentDivisionName}</span>
            <span>{bioDataType}</span>
          </div>
        </div>
        <div>
          <p className="text-maroon-color font-semibold">ID: {bioDataId}</p>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="relative  mx-auto w-60 h-60 rounded-full border-4 border-gold-color">
          <img
            src={profileImage}
            alt="Premium member profile"
            className="w-full h-full rounded-full object-cover mx-auto"
          />
        </div>
        <div className=" animate-border-gradient my-3">
          <p className="z-10 text-maroon-color px-6 uppercase py-1 text-sm font-medium">
            Premium member
          </p>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="mt-3">
          <Link
            to={`/bioDataDetails/${bioDataId}`}
            className={`absolute bottom-6 right-1/3 px-4 py-1 bg-maroon-color text-white rounded-lg transition-all duration-500 ${
              isHovered
                ? "opacity-100 -translate-x-0 "
                : "opacity-0 translate-x-5"
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
