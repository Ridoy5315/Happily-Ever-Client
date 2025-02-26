import React, { useEffect, useState } from "react";
import SectionTitle from "../../shared/SectionTitle/SectionTitle";
import PremiumCard from "./PremiumCard";
import flower from "../../../assets/flower/f6-removebg-preview.png";
import useBiodatas from "../../../hooks/useBiodatas";
import LoadingSpinner from "../../shared/loadingSpinner/LoadingSpinner";

const PremiumCards = () => {
  const [biodatas] = useBiodatas();

  const premiumBiodatas = biodatas?.premiumBiodatasResult;

  console.log(premiumBiodatas);

  // const premiumBiodatas = biodatas.filter(item => item.status === 'premium')

  return (
    <div className="relative bg-black pt-28 pb-20">
      <img className="absolute -top-4 transform " src={flower} alt="" />
      <SectionTitle
        heading="✨ Love Begins with Premium!"
        subHeading="Elevate your search with high-quality, serious relationship seekers"
      ></SectionTitle>
      <div className="grid grid-cols-3 gap-8 w-10/12 mx-auto mt-16">
        {premiumBiodatas && premiumBiodatas.length > 0 ? (
          premiumBiodatas
            .slice(0, 6)
            .map((biodata) => (
              <PremiumCard key={biodata._id} biodata={biodata}></PremiumCard>
            ))
        ) : (
          <LoadingSpinner></LoadingSpinner>
        )}
      </div>
    </div>
  );
};

export default PremiumCards;
