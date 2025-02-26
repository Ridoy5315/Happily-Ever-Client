import React, { useEffect, useState } from "react";
import "../home/premiumCards/PremiumCard.css";
import { Link } from "react-router-dom";
import { findUserAge } from "../../api/utils";
const CardForRightSide = ({ biodata , premiumBiodatas}) => {
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
  } = biodata || {};

  const isPremium = premiumBiodatas.some(item => item.email === contactEmail);

  // useEffect(() => {
  //   setAge(findUserAge(dateOfBirth));
  // }, []);
  return (
    <div className="rounded-xl relative">
      <div className="bg-gold-color h-28"></div>
      {/* badges */}
      <span className="absolute -left-2 -top-2 inline-flex items-center justify-center gap-1 rounded-full bg-maroon-color px-2 text-white ring-2 ring-white">
        {bioDataId}
      </span>

      <div className="w-36 h-36 ring-8 ring-gold2-color rounded-full absolute left-1/2 top-1/4 transform -translate-x-1/2 -translate-y-1/3">
        <img
          src={profileImage}
          alt="User profile"
          className="w-full h-full rounded-full object-cover"
        />
      </div>
      { isPremium && (
        <div className="inline-flex">
          <div className="animate-border-gradient">
            <p className="z-10 text-maroon-color px-4 text-xs uppercase py-0.5 font-medium">
              premium member
            </p>
          </div>
        </div>
      ) }

      {/* biodata details */}
      <div className="mt-24">
        <div className="text-center pt-4">
          <p>{occupation}</p>
        </div>
        <div className="grid grid-cols-9 gap-1 px-2">
          <div className="col-span-3 flex flex-col items-center ">
            <h5 className="text-sm">Biodata Type</h5>
            <p>{bioDataType}</p>
          </div>
          <div className="col-span-1 border-r border-gray-300 mr-2"></div>

          <div className="col-span-1 flex flex-col items-center">
            <h5 className="text-sm">Age</h5>
            <p>{age}</p>
          </div>
          <div className="col-span-1 border-r border-gray-300 mr-2"></div>
          <div className="col-span-3 flex flex-col items-center ">
            <h5 className="text-xs">Permanent Add.</h5>
            <p>{permanentDivisionName}</p>
          </div>
        </div>
        {/* view profile button */}
        <div className=" py-2 rounded">
          <Link
            to={`/bioDataDetails/${bioDataId}`}
            className="bg-maroon-color  text-white"
          >
            View Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardForRightSide;
