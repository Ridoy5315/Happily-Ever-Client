import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import useBiodatas from "../../hooks/useBiodatas";
import {
  customStyles,
  genderOptions,
  presentDivisionNameOptions,
} from "../../pages/dashboard/editBiodata/selectDatas";
import Select from "react-select";
const LeftSide = ({ setMinAge, setMaxAge, filterData, handleFieldChange }) => {
  return (
    <div>
      {/* age */}
      <div>
        <label className="block text-lg font-medium text-maroon-color">
          Age
        </label>
        <div className="mt-2 flex items-center gap-2">
          <span className="text-gray-800">From: </span>
          <input
            onKeyUp={(e) => setMinAge(e.target.value)}
            type="number"
            placeholder="Min Age"
            name="expectedPartnerAgeFrom"
            // value={formData.expectedPartnerAgeFrom}

            required
            className="block w-full rounded-md bg-white px-3 py-2 text-xl text-gray-800 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gold2-color sm:text-sm/6"
          />
          <span className="text-gray-800">To: </span>
          <input
            onKeyUp={(e) => setMaxAge(e.target.value)}
            type="number"
            placeholder="Max Age"
            name="expectedPartnerAgeTo"
            // value={formData.expectedPartnerAgeTo}

            required
            className="block w-full rounded-md bg-white px-3 py-2 text-xl text-gray-800 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gold2-color sm:text-sm/6"
          />
        </div>
      </div>
      {/* biodata type */}
      <div>
        <div className="relative ">
          <label className="block text-lg font-medium text-maroon-color">
            Gender
          </label>
          <Select
            options={genderOptions}
            value={
              filterData.bioDataType
                ? {
                    label: filterData.bioDataType,
                    value: filterData.bioDataType,
                  }
                : ""
            }
            onChange={(selectedOption) =>
              handleFieldChange("bioDataType", selectedOption?.value)
            }
            required
            styles={customStyles}
            placeholder="select..."
          />
        </div>
      </div>
      {/* division */}
      <div>
        <div className="relative ">
          <label className="block text-lg font-medium text-maroon-color">
            Present Division Name
          </label>
          <Select
            options={presentDivisionNameOptions}
            value={
              filterData.permanentDivisionName
                ? {
                    label: filterData.permanentDivisionName,
                    value: filterData.permanentDivisionName,
                  }
                : ""
            }
            onChange={(selectedOption) =>
              handleFieldChange("permanentDivisionName", selectedOption?.value)
            }
            required
            styles={customStyles}
          />
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
