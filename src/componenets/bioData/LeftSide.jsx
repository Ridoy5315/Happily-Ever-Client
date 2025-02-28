import {
  customStyles,
  genderOptions,
  presentDivisionNameOptions,
} from "../../pages/dashboard/editBiodata/selectDatas";
import Select from "react-select";
const LeftSide = ({ setMinAge, setMaxAge, filterData, handleFieldChange }) => {
  return (
    <div>
      <h2 className="lg:text-2xl text-lg text-center text-maroon-color font-fontHeading font-semibold">
        Filter & Discover
      </h2>
      <div className="lg:mt-8 md:mt-6 mt-4 lg:space-y-4 md:space-y-3 space-y-2">
        {/* age */}
        <div className="">
          <label className="block lg:text-lg font-medium text-maroon-color">
            Age
          </label>
          <div className="lg:mt-1 flex items-center lg:gap-2 gap-1">
            <div>
              <span className="text-gray-800 text-sm">From: </span>
              <input
                onKeyUp={(e) => setMinAge(e.target.value)}
                type="number"
                placeholder="Min Age"
                name="expectedPartnerAgeFrom"
                required
                className="block w-full rounded-md bg-white lg:px-3 px-2 lg:py-2 py-1  lg:text-xl text-gray-800 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gold2-color sm:text-sm/6"
              />
            </div>
            <div>
              <span className="text-gray-800 text-sm">To: </span>
              <input
                onKeyUp={(e) => setMaxAge(e.target.value)}
                type="number"
                placeholder="Max Age"
                name="expectedPartnerAgeTo"
                required
                className="block w-full rounded-md bg-white lg:px-3 px-2 lg:py-2 py-1 lg:text-xl text-gray-800 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gold2-color sm:text-sm/6"
              />
            </div>
          </div>
        </div>
        {/* biodata type */}
        <div>
          <div className="relative ">
            <label className="block lg:text-lg font-medium text-maroon-color">
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
            <label className="block lg:text-lg font-medium text-maroon-color">
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
                handleFieldChange(
                  "permanentDivisionName",
                  selectedOption?.value
                )
              }
              required
              styles={customStyles}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
