import React, { useEffect, useState } from "react";
import SectionTitle from "../shared/SectionTitle/SectionTitle";
import CardForRightSide from "./CardForRightSide";

import LoadingSpinner from "../shared/loadingSpinner/LoadingSpinner";

const RightSide = ({allBiodatas, premiumBiodatas}) => {

  console.log(allBiodatas);
  
  return (
    <div>
      <SectionTitle heading="Find Your Perfect Match"></SectionTitle>
      <div className="mt-10 w-11/12 mx-auto grid grid-cols-3 gap-6">
        {allBiodatas && allBiodatas.length > 0 ? allBiodatas.map((biodata, index) => (
          <CardForRightSide key={index} biodata={biodata} premiumBiodatas={premiumBiodatas}></CardForRightSide>
        )) : <LoadingSpinner></LoadingSpinner>}
      </div>
    </div>
  );
};

export default RightSide;
