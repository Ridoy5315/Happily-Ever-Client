import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./PremiumCard.css";
const PremiumCard = ({ biodata }) => {
  const [isHovered, setIsHovered] = useState(false);
  const {
    bioDataId,
    bioDataType,
    profileImage,
    permanentDivisionName,
    age,
    occupation,
    name,
    status,
  } = biodata || {};
  return (
    <div
      className={`bg-gold2-color relative rounded-2xl p-6 space-y-6 transform transition-all hover:ring-[8px] hover:ring-gold-color hover:ring-opacity-50 ease-in-out duration-500 hover:scale-105 cursor-pointer `}
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
          <div className="flex gap-3">
            <h4>{name}</h4>
            <span>({age})</span>
          </div>
          <p>{occupation}</p>
        </div>
        <div>
          <p>ID: {bioDataId}</p>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="relative  mx-auto w-56 h-56 rounded-full">
          <img
            src={profileImage}
            alt="Premium member profile"
            className="w-full h-full rounded-full object-cover mx-auto"
          />
        </div>
        <div className=" animate-border-gradient mt-3">
          <p className="z-10 text-maroon-color px-4 uppercase py-0.5 text-xs font-medium">{status} member</p>
        </div>
      </div>
      <div className="flex justify-between">
        <div>
          <p>Gender: {bioDataType}</p>
          <p>Address: {permanentDivisionName}</p>
        </div>
        <div className="mt-3">
          <Link to='biodataDetails'
            className={`absolute bottom-7 right-6 px-4 py-1 bg-maroon-color text-white rounded-lg transition-all duration-500 ${
              isHovered
                ? "opacity-100 -translate-x-0 "
                : "opacity-0 translate-x-10"
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
