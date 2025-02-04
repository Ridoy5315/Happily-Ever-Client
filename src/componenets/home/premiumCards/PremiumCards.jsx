import React, { useEffect, useState } from "react";
import SectionTitle from "../../shared/SectionTitle/SectionTitle";
import PremiumCard from "./PremiumCard";
import { motion } from "framer-motion";
import flower from '../../../assets/flower/f6-removebg-preview.png'
const PremiumCards = () => {
  const [bioData, setBioData] = useState([]);
   

  useEffect(() => {
    fetch("./bioData.json")
      .then((res) => res.json())
      .then((data) => setBioData(data));
  }, []);
  return (
    <div className="relative bg-black pt-28 pb-20">
      <img className="absolute -top-4 transform " src={flower} alt="" />
      <SectionTitle
        heading="✨ Love Begins with Premium!"
        subHeading="Elevate your search with high-quality, serious relationship seekers"
      ></SectionTitle>
      <div className="grid grid-cols-3 gap-8 w-10/12 mx-auto mt-16">
        {bioData.map((item, index) => (
          <PremiumCard key={index} item={item} ></PremiumCard>
        ))}
      </div>
      
    </div>
  );
};

export default PremiumCards;
