import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
const LeftSide = () => {
  const [bioData, setBioData] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [divisionValue, setDivisionValue] = useState(null);
  console.log(divisionValue);
  const gender = ["Male", "Female"];

  const divisions = [
    "Dhaka",
    "Chattagram",
    "Rangpur",
    "Barisal",
    "Khulna",
    "Mymensingh",
    "Sylhet",
  ];

  const handleDivision = (value) => {
    setDivisionValue(value);
    setIsOpen(false);
  };

  return (
    <div>
      {/* age */}
      <div>
        <div className="sm:col-span-3">
          <label className="block font-medium text-gray-900">Age</label>
          <div className="mt-2 grid grid-cols-7">
            <input
              type="number"
              name=""
              id=""
              className="col-span-3 focus:outline-none"
            />
            <span className="col-span-1 inline-flex justify-center">to</span>
            <input type="number" name="" id="" className="col-span-3" />
          </div>
        </div>
      </div>
      {/* biodata type */}
      <div>
        <div className="p-4 space-y-2">
          <p>Biodata Type</p>
          <div>{bioData && <label>You selected: {bioData}</label>}</div>
          {gender.map((data, index) => (
            <label
              key={index}
              className={`flex items-center cursor-pointer px-4 py-2 border rounded-lg transition-all
          ${
            bioData === data
              ? "bg-blue-500 text-white border-blue-600"
              : "bg-gray-100 text-gray-800 border-gray-300"
          }`}
            >
              <input
                type="radio"
                name="single-select"
                value={data}
                checked={bioData === data}
                onChange={() => setBioData(data)}
                className="hidden"
              />
              {data}
            </label>
          ))}
        </div>
      </div>
      {/* division */}
      <div>
        <div className="min-h-fit flex-row justify-start p-4">
          <div className="">
            <button
              className="inline-flex justify-center items-center gap-2 w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
              onClick={() => setIsOpen(!isOpen)}
            >
              Permanent Division name{" "}
              {isOpen ? (
                <IoIosArrowUp className="text-xl"></IoIosArrowUp>
              ) : (
                <IoIosArrowDown className="text-xl"></IoIosArrowDown>
              )}
            </button>
            <span className="">{divisionValue}</span>
          </div>
          {isOpen && (
            <div className="origin-top-right left-0 mt-2 w-full shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
              <div className="py-1">
                {divisions.map((division, index) => (
                  <NavLink
                    key={index}
                    onClick={() => handleDivision(division)}
                    className="group flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-indigo-500 hover:text-white"
                  >
                    {division}
                  </NavLink>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
