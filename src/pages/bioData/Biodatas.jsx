import React, { useState } from "react";
import LeftSide from "../../componenets/bioData/LeftSide";
import RightSide from "../../componenets/bioData/RightSide";
import useBiodatas from "../../hooks/useBiodatas";
const Biodatas = () => {
  const [minAge, setMinAge] = useState("");
  const [maxAge, setMaxAge] = useState("");
  const [filterData, setFilterData] = useState({
    bioDataType: "",
    permanentDivisionName: "",
  });

  const gender = filterData?.bioDataType;
  const divisionName = filterData?.permanentDivisionName;

  // Handle input changes
  const handleFieldChange = (name, value) => {
    handleChange(name, value);
  };

  const handleChange = (name, value) => {
    setFilterData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const [biodatas] = useBiodatas(minAge, maxAge, gender, divisionName);
  console.log(biodatas);

  const allBiodatas = biodatas.allBiodatasResult;

  const premiumBiodatas = biodatas?.premiumBiodatasResult;

  // const premiumBiodatas = allBiodatas.filter(item => item.contactEmail === premiumBiodatas)

  return (
    <div className="lg:pt-20 pt-14 lg:mb-20 mb-8 lg:grid md:grid lg:grid-cols-4 md:grid-cols-4 grid-cols-1 min-h-screen lg:gap-6 md:gap-4">
      <div className="col-span-1 lg:px-8 md:px-4 px-10 lg:pt-20 md:pt-14 pt-6 pb-4 bg-gold2-color shadow-[4px_0_12px_2px_rgba(55,65,81,0.150)]">
        <LeftSide
          setMinAge={setMinAge}
          setMaxAge={setMaxAge}
          filterData={filterData}
          handleFieldChange={handleFieldChange} 
        ></LeftSide>
      </div>
      <div className="col-span-3 lg:pt-12 md::pt-8 pt-6">
        <RightSide
          allBiodatas={allBiodatas}
          premiumBiodatas={premiumBiodatas}
        ></RightSide>
      </div>
    </div>
  );
};

export default Biodatas;
