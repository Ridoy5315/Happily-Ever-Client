import React, { useEffect, useState } from "react";
import { findUserAge } from "../../api/utils";

const SimilarProfiles = ({ item }) => {
     const [age, setAge] = useState(null);
     const [isHovered, setIsHovered] = useState(false);
     useEffect(() => {
          
          setAge(findUserAge(item.dateOfBirth));

     }, [])
     
  return (
    <div onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)} className="mt-3">
      <div className="relative rounded-xl h-64 w-48">
        <img
          className="rounded-lg h-full w-full"
          src={item.profileImage}
          alt=""
        />
        <p className={`absolute bottom-2 z-10 left-2 text-white ${isHovered ? 'hidden' : 'block'}`}>{age} years old</p>
        <div className="absolute transition-all duration-500 inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/50"></div>
        {isHovered && <div className="absolute transition-all duration-500 inset-0 bg-gold-color/30"></div>}
        <div className="">
          <div 
            className={`absolute bottom-7 right-6 px-4 py-1 text-center bg-gold-color text-white rounded-lg transition-all duration-500 ${
              isHovered
                ? "opacity-100 -translate-y-0 "
                : "opacity-0 translate-y-10"
            }`}
          >
            <p>{item.name}</p>
            <p>Addr : {item.presentDivisionName}</p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default SimilarProfiles;
