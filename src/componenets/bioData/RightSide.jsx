import React, { useEffect, useState } from "react";
import SectionTitle from "../shared/SectionTitle/SectionTitle";
import CardForRightSide from "./CardForRightSide";

import LoadingSpinner from "../shared/loadingSpinner/LoadingSpinner";

const RightSide = ({allBiodatas, premiumBiodatas}) => {

  console.log(allBiodatas);
  
  return (
    <div>
      <SectionTitle heading="Find Your Perfect Match"></SectionTitle>
      <div className="lg:mt-10 mt-8 w-11/12 mx-auto grid lg:grid-cols-3 grid-cols-2 lg:gap-6 gap-4">
        {allBiodatas && allBiodatas.length > 0 ? allBiodatas.map((biodata, index) => (
          <CardForRightSide key={index} biodata={biodata} premiumBiodatas={premiumBiodatas}></CardForRightSide>
        )) : <LoadingSpinner></LoadingSpinner>}
      </div>
    </div>
  );
};

export default RightSide;
