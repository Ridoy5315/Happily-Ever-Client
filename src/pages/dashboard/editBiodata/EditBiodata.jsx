import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import DatePicker from "react-datepicker";
import { GrCaretNext, GrCaretPrevious } from "react-icons/gr";
import { SlCalender } from "react-icons/sl";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";
import {
  customStyles,
  genderOptions,
  heightFeetOptions,
  heightInchesOptions,
  occupationOptions,
  permanentDivisionNameOptions,
  presentDivisionNameOptions,
  raceOptions,
  weightOptions,
} from "./selectDatas";
import { findUserAge, imageUpload } from "../../../api/utils";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
const EditBiodata = () => {
  const { user, updateUserProfile } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [step, setStep] = useState(1);

  const [ageValue, setAgeValue] = useState("");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    image: "",
    bioDataType: "",
    dateOfBirth: "",
    race: "",
    occupation: "",
    heightFeet: "",
    heightInches: "",
    weight: "",
    fathersName: "",
    mothersName: "",
    permanentDivisionName: "",
    presentDivisionName: "",
    expectedPartnerHeightFromFeet: "",
    expectedPartnerHeightFromInches: "",
    expectedPartnerHeightToFeet: "",
    expectedPartnerHeightToInches: "",
    expectedPartnerWeightFrom: "",
    expectedPartnerWeightTo: "",
    expectedPartnerAgeFrom: "",
    expectedPartnerAgeTo: "",
    contactEmail: user?.email,
    mobileNumber: "",
  });

  useEffect(() => {
    setAgeValue(findUserAge(formData?.dateOfBirth));
  }, [formData?.dateOfBirth]);

  // Handle input changes
  const handleFieldChange = (name, value) => {
    handleChange(name, value);
  };

  const handleChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = async (e) => {
    const imageFile = e.target.files[0];
    console.log(imageFile);
    if (imageFile) {
      setFormData((prevData) => ({
        ...prevData,
        image: imageFile,
      }));
    }
  };

  //get form data
  const handleSaveUserData = async (e) => {
    e.preventDefault();

    //biodata object
    const bioDataInfo = {
      bioDataType: formData?.bioDataType,
      name: formData?.firstName + " " + formData?.lastName,
      dateOfBirth: formData?.dateOfBirth,
      height:
        formData?.heightFeet.split(" ")[0] +
        "'" +
        formData?.heightInches.split(" ")[0],
      weight: formData?.weight,
      occupation: formData?.occupation,
      race: formData?.race,
      fathersName: formData?.fathersName,
      mothersName: formData?.mothersName,
      permanentDivisionName: formData?.permanentDivisionName,
      presentDivisionName: formData?.presentDivisionName,
      expectedPartnerAge:
        formData?.expectedPartnerAgeFrom +
        " - " +
        formData?.expectedPartnerAgeTo,
      expectedPartnerHeight:
        formData?.expectedPartnerHeightFromFeet.split(" ")[0] +
        "'" +
        formData?.expectedPartnerHeightFromInches.split(" ")[0] +
        " - " +
        formData?.expectedPartnerHeightToFeet.split(" ")[0] +
        "'" +
        formData?.expectedPartnerHeightToInches.split(" ")[0],
      expectedPartnerWeight:
        formData?.expectedPartnerWeightFrom +
        " - " +
        formData?.expectedPartnerWeightTo,
      contactEmail: formData?.contactEmail,
      mobileNumber: formData?.mobileNumber,
      status: "normal_user",
    };
    if (formData?.image) {
      const { data } = await imageUpload(formData.image);
      bioDataInfo.profileImage = data?.display_url;
    } else {
      bioDataInfo.profileImage = user?.photoURL;
    }
    console.log(bioDataInfo);
    
    const userData = {
      name: bioDataInfo.name,
      image: bioDataInfo.profileImage
    }
    
    updateUserProfile(bioDataInfo.name, bioDataInfo.profileImage)
    .then(async() => {
      try {
        const { data } = await axiosSecure.post("/bioData", bioDataInfo);
        console.log(data);
        if(data.insertedId){
          const {data} = await axiosSecure.patch(`/userInfo/${user?.email}`, userData);
          if(data.modifiedCount > 0){
            Swal.fire({
              title: `${bioDataInfo.name} updated his/her Biodata!`,
              icon: "success",
              showConfirmButton: false,
              timer: 2500,
            });
          }
        }
      } catch (err) {
        console.log(err);
      }
    })
    
  };

  //for next nad previous button
  const handleNextStep = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };
  const handlePreviousStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className="w-10/12 mx-auto mt-24">
      <p className="text-5xl mb-14 text-gold-color font-semibold text-center">
        Your biodata is the first step towards a meaningful relationship
      </p>
      <form onSubmit={handleSaveUserData} className="space-y-8">
        {step === 1 && (
          <>
            {/* row-1, 2, 3 with profile image */}
            <div className="grid grid-cols-2 gap-10">
              <div className="space-y-4">
                {/* row 1 */}
                {/* First name */}
                <div>
                  <label className="block text-lg font-medium text-maroon-color">
                    First Name
                  </label>
                  <div className="mt-2">
                    <input
                      name="firstName"
                      type="text"
                      value={formData?.firstName}
                      onChange={(e) =>
                        handleFieldChange("firstName", e.target.value)
                      }
                      placeholder="First Name"
                      required
                      className="block w-full rounded-md bg-white px-3 py-2 text-xl text-gray-800 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gold2-color sm:text-sm/6"
                    />
                  </div>
                </div>

                {/* row-2 */}
                {/* last name */}
                <div>
                  <label className="block text-lg font-medium text-maroon-color">
                    Last Name
                  </label>
                  <div className="mt-2">
                    <input
                      name="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={(e) =>
                        handleFieldChange("lastName", e.target.value)
                      }
                      placeholder="Last Name"
                      required
                      className="block w-full rounded-md bg-white px-3 py-2 text-xl text-gray-800 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gold2-color sm:text-sm/6"
                    />
                  </div>
                </div>
                {/* row-3 */}
                <div className="grid grid-cols-2 gap-5 items-center">
                  {/* gender */}
                  <div className="relative ">
                    <label className="block text-lg font-medium text-maroon-color">
                      Biodata Type
                    </label>
                    <Select
                      options={genderOptions}
                      value={
                        formData.bioDataType
                          ? {
                              label: formData.bioDataType,
                              value: formData.bioDataType,
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

                  {/* date of birth */}
                  <div>
                    <label className="block text-lg font-medium text-maroon-color">
                      Date Of Birth
                    </label>
                    <div className="relative w-full mt-2">
                      <DatePicker
                        selected={formData.dateOfBirth}
                        onChange={(date) =>
                          handleFieldChange("dateOfBirth", date)
                        }
                        dateFormat="yyyy/MM/dd"
                        maxDate={new Date()}
                        showYearDropdown
                        dropdownMode="select"
                        placeholderText="Birth Date"
                        className="block w-full rounded-md bg-white px-3 py-2 text-xl text-gray-800 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gold2-color sm:text-sm/6"
                      />
                      <SlCalender className="absolute top-2 left-[150px] text-lg"></SlCalender>
                    </div>
                  </div>
                </div>

                {/* row-4 */}
                <div className="grid grid-cols-2 gap-5">
                  {/* age */}
                  <div>
                    <label className="block text-lg font-medium text-maroon-color">
                      Age
                    </label>
                    <div className="mt-2">
                      <input
                        type="number"
                        value={ageValue}
                        placeholder="Your Age"
                        readOnly
                        required
                        className=" w-full rounded-md bg-white px-3 py-2 text-xl text-gray-800 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gold2-color sm:text-sm/6"
                      />
                    </div>
                  </div>
                  {/* Race */}
                  <div className="relative ">
                    <label className="block text-lg font-medium text-maroon-color">
                      Race
                    </label>
                    <Select
                      options={raceOptions}
                      value={
                        formData.race
                          ? { label: formData.race, value: formData.race }
                          : ""
                      }
                      onChange={(selectedOption) =>
                        handleFieldChange("race", selectedOption?.value)
                      }
                      required
                      styles={customStyles}
                      placeholder="select..."
                    />
                  </div>
                </div>
              </div>
              <div className="py-6 flex flex-col justify-evenly">
                <div className="w-48 h-48 mx-auto rounded-full border-4 border-gold-color">
                  {formData.image ? (
                    <img
                      className="w-full h-full rounded-full object-cover"
                      src={URL.createObjectURL(formData.image)}
                      alt="Preview"
                    />
                  ) : (
                    <img
                      className="w-full h-full rounded-full object-cover"
                      src={user?.photoURL}
                      alt=""
                    />
                  )}
                </div>
                <div className="">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    required
                    name="image"
                    className="col-span-2 block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                  {/* {formData.image && (
                    <div className="col-span-1 w-12 h-12">
                      
                    </div>
                  )} */}
                </div>
              </div>
            </div>
          </>
        )}

        {step === 2 && (
          <>
            {/* row-5 */}
            <div className="grid grid-cols-3 gap-3">
              {/* Occupation */}
              <div className="relative ">
                <label className="block text-lg font-medium text-maroon-color">
                  Occupation
                </label>
                <Select
                  options={occupationOptions}
                  value={
                    formData.occupation
                      ? {
                          label: formData.occupation,
                          value: formData.occupation,
                        }
                      : ""
                  }
                  onChange={(selectedOption) =>
                    handleFieldChange("occupation", selectedOption?.value)
                  }
                  required
                  styles={customStyles}
                />
              </div>
              {/* height */}
              <div className="relative ">
                <label className="block text-lg font-medium text-maroon-color">
                  Height
                </label>
                <div className="flex items-center gap-2">
                  <span className="">Feet: </span>
                  <Select
                    options={heightFeetOptions}
                    value={
                      formData.heightFeet
                        ? {
                            label: formData.heightFeet,
                            value: formData.heightFeet,
                          }
                        : ""
                    }
                    onChange={(selectedOption) =>
                      handleFieldChange("heightFeet", selectedOption?.value)
                    }
                    required
                    styles={customStyles}
                  />
                  <span className="">inch.: </span>
                  <Select
                    options={heightInchesOptions}
                    value={
                      formData.heightInches
                        ? {
                            label: formData.heightInches,
                            value: formData.heightInches,
                          }
                        : ""
                    }
                    onChange={(selectedOption) =>
                      handleFieldChange("heightInches", selectedOption?.value)
                    }
                    required
                    styles={customStyles}
                  />
                </div>
              </div>
              {/* weight */}
              <div className="relative ">
                <label className="block text-lg font-medium text-maroon-color">
                  Weight
                </label>
                <Select
                  options={weightOptions}
                  value={
                    formData.weight
                      ? { label: formData.weight, value: formData.weight }
                      : ""
                  }
                  onChange={(selectedOption) =>
                    handleFieldChange("weight", selectedOption?.value)
                  }
                  required
                  styles={customStyles}
                />
              </div>
            </div>
            {/* row-6 */}
            <div className="grid grid-cols-2 gap-8">
              {/* fathers name */}
              <div>
                <label className="block text-lg font-medium text-maroon-color">
                  Father's Name
                </label>
                <div className="mt-2">
                  <input
                    name="fathersName"
                    type="text"
                    placeholder="Father's Name"
                    value={formData.fathersName}
                    onChange={(e) =>
                      handleFieldChange("fathersName", e.target.value)
                    }
                    required
                    className="block w-full rounded-md bg-white px-3 py-2 text-xl text-gray-800 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gold2-color sm:text-sm/6"
                  />
                </div>
              </div>
              {/* mother's name */}
              <div>
                <label className="block text-lg font-medium text-maroon-color">
                  Mother's Name
                </label>
                <div className="mt-2">
                  <input
                    name="mothersName"
                    type="text"
                    placeholder="Mother's Name"
                    value={formData.mothersName}
                    onChange={(e) =>
                      handleFieldChange("mothersName", e.target.value)
                    }
                    required
                    className="block w-full rounded-md bg-white px-3 py-2 text-xl text-gray-800 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gold2-color sm:text-sm/6"
                  />
                </div>
              </div>
            </div>
            {/* row-7 */}
            <div className="grid grid-cols-2 gap-8">
              {/* permanent division name */}
              <div className="relative ">
                <label className="block text-lg font-medium text-maroon-color">
                  Permanent Division Name
                </label>
                <Select
                  options={permanentDivisionNameOptions}
                  value={
                    formData.permanentDivisionName
                      ? {
                          label: formData.permanentDivisionName,
                          value: formData.permanentDivisionName,
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
              {/* present division name */}
              <div className="relative ">
                <label className="block text-lg font-medium text-maroon-color">
                  Present Division Name
                </label>
                <Select
                  options={presentDivisionNameOptions}
                  value={
                    formData.presentDivisionName
                      ? {
                          label: formData.presentDivisionName,
                          value: formData.presentDivisionName,
                        }
                      : ""
                  }
                  onChange={(selectedOption) =>
                    handleFieldChange(
                      "presentDivisionName",
                      selectedOption?.value
                    )
                  }
                  required
                  styles={customStyles}
                />
              </div>
            </div>
          </>
        )}
        {step === 3 && (
          <>
            {/* row-8 */}
            {/* Expected Partner Height */}
            <div className="relative ">
              <label className="block text-lg font-medium text-maroon-color">
                Expected Partner Height
              </label>
              <div className="flex items-center gap-2">
                <span className="text-xl">Feet: </span>
                <Select
                  options={heightFeetOptions}
                  value={
                    formData.expectedPartnerHeightFromFeet
                      ? {
                          label: formData.expectedPartnerHeightFromFeet,
                          value: formData.expectedPartnerHeightFromFeet,
                        }
                      : ""
                  }
                  onChange={(selectedOption) =>
                    handleFieldChange(
                      "expectedPartnerHeightFromFeet",
                      selectedOption?.value
                    )
                  }
                  required
                  styles={customStyles}
                />
                <span className="ml-6 text-xl">inches: </span>
                <Select
                  options={heightInchesOptions}
                  value={
                    formData.expectedPartnerHeightFromInches
                      ? {
                          label: formData.expectedPartnerHeightFromInches,
                          value: formData.expectedPartnerHeightFromInches,
                        }
                      : ""
                  }
                  onChange={(selectedOption) =>
                    handleFieldChange(
                      "expectedPartnerHeightFromInches",
                      selectedOption?.value
                    )
                  }
                  required
                  styles={customStyles}
                />
                <span className="mx-6 text-xl">To: </span>
                <span className="text-xl">Feet: </span>
                <Select
                  options={heightFeetOptions}
                  value={
                    formData.expectedPartnerHeightToFeet
                      ? {
                          label: formData.expectedPartnerHeightToFeet,
                          value: formData.expectedPartnerHeightToFeet,
                        }
                      : ""
                  }
                  onChange={(selectedOption) =>
                    handleFieldChange(
                      "expectedPartnerHeightToFeet",
                      selectedOption?.value
                    )
                  }
                  required
                  styles={customStyles}
                />
                <span className="ml-6 text-xl">inches: </span>
                <Select
                  options={heightInchesOptions}
                  value={
                    formData.expectedPartnerHeightToInches
                      ? {
                          label: formData.expectedPartnerHeightToInches,
                          value: formData.expectedPartnerHeightToInches,
                        }
                      : ""
                  }
                  onChange={(selectedOption) =>
                    handleFieldChange(
                      "expectedPartnerHeightToInches",
                      selectedOption?.value
                    )
                  }
                  required
                  styles={customStyles}
                />
              </div>
            </div>

            {/* row-9 */}
            <div className="grid grid-cols-2 gap-8">
              {/* weight */}
              <div className="relative ">
                <label className="block text-lg font-medium text-maroon-color">
                  Expected Partner Weight (kg)
                </label>
                <div className="flex items-center gap-2">
                  <span className="text-xl">From: </span>
                  <Select
                    options={weightOptions}
                    value={
                      formData.expectedPartnerWeightFrom
                        ? {
                            label: formData.expectedPartnerWeightFrom,
                            value: formData.expectedPartnerWeightFrom,
                          }
                        : ""
                    }
                    onChange={(selectedOption) =>
                      handleFieldChange(
                        "expectedPartnerWeightFrom",
                        selectedOption?.value
                      )
                    }
                    required
                    styles={customStyles}
                  />
                  <span className="ml-6 text-xl">To: </span>
                  <Select
                    options={weightOptions}
                    value={
                      formData.expectedPartnerWeightTo
                        ? {
                            label: formData.expectedPartnerWeightTo,
                            value: formData.expectedPartnerWeightTo,
                          }
                        : ""
                    }
                    onChange={(selectedOption) =>
                      handleFieldChange(
                        "expectedPartnerWeightTo",
                        selectedOption?.value
                      )
                    }
                    required
                    styles={customStyles}
                  />
                </div>
              </div>
              {/* Expected Partner Age */}
              <div>
                <label className="block text-lg font-medium text-maroon-color">
                  Expected Partner Age
                </label>
                <div className="mt-2 flex items-center gap-2">
                  <span className="text-gray-800">From: </span>
                  <input
                    type="number"
                    placeholder="Expected Partner Age"
                    name="expectedPartnerAgeFrom"
                    value={formData.expectedPartnerAgeFrom}
                    onChange={(e) =>
                      handleFieldChange(
                        "expectedPartnerAgeFrom",
                        e.target.value
                      )
                    }
                    required
                    className="block w-full rounded-md bg-white px-3 py-2 text-xl text-gray-800 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gold2-color sm:text-sm/6"
                  />
                  <span className="text-gray-800">To: </span>
                  <input
                    type="number"
                    placeholder="Expected Partner Age"
                    name="expectedPartnerAgeTo"
                    value={formData.expectedPartnerAgeTo}
                    onChange={(e) =>
                      handleFieldChange("expectedPartnerAgeTo", e.target.value)
                    }
                    required
                    className="block w-full rounded-md bg-white px-3 py-2 text-xl text-gray-800 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gold2-color sm:text-sm/6"
                  />
                </div>
              </div>
            </div>

            {/* row-10 */}
            {/* contact information */}
            <div className="grid grid-cols-2 gap-8">
              {/* Contact email */}
              <div>
                <label className="block text-lg font-medium text-maroon-color">
                  Email Address
                </label>
                <div className="mt-2">
                  <input
                    name="email"
                    type="email"
                    defaultValue={user?.email}
                    readOnly
                    className="block w-full rounded-md bg-white px-3 py-2 text-xl text-gray-800 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gold2-color sm:text-sm/6"
                  />
                </div>
              </div>
              {/* mobile number */}
              <div>
                <label className="block text-lg font-medium text-maroon-color">
                  Phone Number
                </label>
                <div className="mt-2">
                  <input
                    name="number"
                    type="number"
                    placeholder="Phone Number"
                    value={formData.mobileNumber}
                    onChange={(e) =>
                      handleFieldChange("mobileNumber", e.target.value)
                    }
                    required
                    className="block w-full rounded-md bg-white px-3 py-2 text-xl text-gray-800 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gold2-color sm:text-sm/6"
                  />
                </div>
              </div>
            </div>
          </>
        )}
        {step === 3 && (
          <div className="flex justify-end">
            <button className="bg-maroon-color text-white py-1 px-4 rounded-lg ">
              Save And Publish Now
            </button>
          </div>
        )}
      </form>
      {/* pagination button */}
      <div className="flex justify-start gap-4 mt-8">
        <button
          disabled={step === 1}
          onClick={handlePreviousStep}
          className={`inline-flex items-center disabled gap-1 text-white py-1 px-3 rounded-xl text-lg ${
            step === 1 ? "bg-gray-300" : "bg-maroon-color"
          }`}
        >
          <GrCaretPrevious className=""></GrCaretPrevious>Previous
        </button>
        <button
          disabled={step === 3}
          onClick={handleNextStep}
          className={`inline-flex items-center gap-1 text-white py-1 px-3 rounded-xl text-lg ${
            step === 3 ? "bg-gray-300" : "bg-gold-color"
          }`}
        >
          Next<GrCaretNext className=""></GrCaretNext>
        </button>
      </div>
    </div>
  );
};

export default EditBiodata;
