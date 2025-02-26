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
    <div className="pt-32 mb-20 grid grid-cols-4 min-h-screen gap-6">
      <div className="col-span-1 px-8">
        <LeftSide
          setMinAge={setMinAge}
          setMaxAge={setMaxAge}
          filterData={filterData}
          handleFieldChange={handleFieldChange} 
        ></LeftSide>
      </div>
      <div className="col-span-3">
        <RightSide
          allBiodatas={allBiodatas}
          premiumBiodatas={premiumBiodatas}
        ></RightSide>
      </div>
    </div>
  );
};

export default Biodatas;
