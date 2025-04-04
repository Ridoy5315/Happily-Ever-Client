import React, { useEffect, useState } from "react";
import SectionTitle from "../shared/SectionTitle/SectionTitle";
import CardForRightSide from "./CardForRightSide";

import LoadingSpinner from "../shared/loadingSpinner/LoadingSpinner";

const RightSide = ({
  biodata,
  premiumBiodatas,
  currentPage,
  setCurrentPage,
  totalPages,
  biodataPerPage,
  totalBiodata,
}) => {

  return (
    <div>
      <SectionTitle heading="Find Your Perfect Match"></SectionTitle>
      <div>
        {biodata ? <div className="lg:mt-10 mt-8 w-11/12 mx-auto grid lg:grid-cols-3 grid-cols-2 lg:gap-6 gap-4">
        {biodata.length > 0 && (
          biodata.map((data, index) => (
            <CardForRightSide
              key={index}
              data={data}
              premiumBiodatas={premiumBiodatas}
            ></CardForRightSide>
          ))
        )}
        </div> : <div className="h-svh grid place-items-center"><LoadingSpinner></LoadingSpinner></div>}
      {/* <div className="lg:mt-10 mt-8 w-11/12 mx-auto grid lg:grid-cols-3 grid-cols-2 lg:gap-6 gap-4">
        {biodata && biodata.length > 0 ? (
          biodata.map((data, index) => (
            <CardForRightSide
              key={index}
              data={data}
              premiumBiodatas={premiumBiodatas}
            ></CardForRightSide>
          ))
        ) : (
          <LoadingSpinner></LoadingSpinner>
        )}
      </div> */}
      </div>
      {/* Pagination Info */}
      <div className="w-11/12 mx-auto  flex justify-between items-center lg:mt-6 mt-4">
        <p className="">
          <span className="font-semibold text-gray-700 text-lg">Showing :</span> <span className="bg-gold-color px-3 py-0.5 text-white rounded-lg">{(currentPage - 1) * biodataPerPage + 1}-
          {Math.min(currentPage * biodataPerPage, totalBiodata)}</span> of{" "}
          <span className="bg-maroon-color px-3 py-0.5 text-white rounded-lg">{totalBiodata}</span>
        </p>

        {/* Pagination Buttons */}
        <div className="flex space-x-2">
          <button
            className="px-3 py-1 bg-gray-200 rounded"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Prev
          </button>

          {/* First Page Always Visible */}
          <button
            className={`px-3 py-1 rounded ${
              currentPage === 1 ? "bg-maroon-color text-white" : "bg-gray-200"
            }`}
            onClick={() => setCurrentPage(1)}
          >
            1
          </button>

          {/* Dots if currentPage > 3 */}
          {currentPage > 3 && <span className="px-3 py-1">...</span>}

          {/* Middle Pages */}
          {totalPages > 4 &&
            [currentPage - 1, currentPage, currentPage + 1]
              .filter((page) => page > 1 && page < totalPages)
              .map((page) => (
                <button
                  key={page}
                  className={`px-3 py-1 rounded ${
                    currentPage === page
                      ? "bg-maroon-color text-white"
                      : "bg-gray-200"
                  }`}
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </button>
              ))}

          {/* Dots if currentPage < totalPages - 2 */}
          {currentPage < totalPages - 2 && (
            <span className="px-3 py-1">...</span>
          )}

          {/* Last Page Always Visible */}
          {totalPages > 1 && (
            <button
              className={`px-3 py-1 rounded ${
                currentPage === totalPages
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => setCurrentPage(totalPages)}
            >
              {totalPages}
            </button>
          )}

          <button
            className="px-3 py-1 bg-gray-200 rounded"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightSide;
