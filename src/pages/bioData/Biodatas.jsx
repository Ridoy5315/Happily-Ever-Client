import React, { useEffect, useState } from "react";
import LeftSide from "../../componenets/bioData/LeftSide";
import RightSide from "../../componenets/bioData/RightSide";
import useBiodatas from "../../hooks/useBiodatas";
const Biodatas = () => {
  const [biodata, setBiodata] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalBiodata, setTotalBiodata] = useState(0);
  const [totalPremiumBiodata, setTotalPremiumBiodata] = useState(0);
  const biodataPerPage = 6;
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

  const [biodatas] = useBiodatas(minAge, maxAge, gender, divisionName, currentPage);
   

  useEffect(() => {
    setBiodata(biodatas.allBiodatasResult);
    setTotalBiodata(biodatas.totalBiodatas);
    setTotalPremiumBiodata(biodatas.premiumBiodatasResult);
  }, [biodatas, currentPage]);

  const totalPages = Math.ceil(totalBiodata / biodataPerPage);

  return (
    <div className="lg:pt-20 pt-14 lg:pb-20 pb-8 lg:grid md:grid lg:grid-cols-4 md:grid-cols-4 grid-cols-1 min-h-screen lg:gap-6 md:gap-4">
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
          biodata={biodata}
          premiumBiodatas={totalPremiumBiodata} 
          currentPage={currentPage} 
          setCurrentPage={setCurrentPage}
          totalPages={totalPages} 
          biodataPerPage={biodataPerPage} 
          totalBiodata={totalBiodata}
        ></RightSide>
      </div>
    </div>
  );
};

export default Biodatas;
