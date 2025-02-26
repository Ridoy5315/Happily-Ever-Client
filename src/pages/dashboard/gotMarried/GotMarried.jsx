import React, { useState } from "react";
import { imageUpload } from "../../../api/utils";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import { SlCalender } from "react-icons/sl";
const GotMarried = () => {
  const axiosSecure = useAxiosSecure();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [formData, setFormData] = useState({
    image: "",
  });
  console.log(selectedDate)
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const selfBiodataId = form.selfBiodataId.value;
    const partnerBiodataId = form.partnerBiodataId.value;

    const { data } = await imageUpload(formData.image);
    const coupleImage = data?.display_url;

    const successStoryReview = form.storyReview.value;

    const dataInfo = {
      selfBiodataId: parseInt(selfBiodataId),
      partnerBiodataId: parseInt(partnerBiodataId),
      coupleImage,
       marriageDate: selectedDate,
      successStoryReview,
    };

    try {
      const { data } = await axiosSecure.post("/user-married", dataInfo);
      if (data.insertedId) {
        Swal.fire({
          title:
            "Thanks to share your story. We will try to share your story in homepage",
          icon: "success",
          showConfirmButton: false,
          timer: 3500,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="w-8/12 mx-auto mt-40">
      <form onSubmit={handleSubmit}>
        {/* 1st row */}
        <div className="grid grid-cols-2 gap-20">
          {/* Self Biodata Id */}
          <div>
            <label className="block text-lg font-medium text-maroon-color">
              Self Biodata Id
            </label>
            <div className="mt-2">
              <input
                name="selfBiodataId"
                type="number"
                placeholder="Self biodata id"
                required
                className="block w-full rounded-md bg-white px-3 py-2 text-xl text-gray-800 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gold2-color sm:text-sm/6"
              />
            </div>
          </div>
          {/* Partner Biodata Id */}
          <div>
            <label className="block text-lg font-medium text-maroon-color">
              Partner Biodata Id
            </label>
            <div className="mt-2">
              <input
                name="partnerBiodataId"
                type="number"
                placeholder="Partner biodata id"
                required
                className="block w-full rounded-md bg-white px-3 py-2 text-xl text-gray-800 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gold2-color sm:text-sm/6"
              />
            </div>
          </div>
        </div>
        {/* 2nd row */}
        <div className="grid grid-cols-2 gap-10 items-center mt-10">
          <div className="space-y-6">
            {/* image link */}
            <div className="">
              <label className="block text-lg font-medium text-maroon-color">
                Couple Image Link
              </label>
              <div className="mt-2">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  required
                  name="image"
                  className="col-span-2 block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            {/* date of birth */}
            <div>
              <label className="block text-lg font-medium text-maroon-color">
                Date Of Birth
              </label>
              <div className="relative w-full mt-2">
                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
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
            <div>
              <label className="block text-lg font-medium text-maroon-color">
                Success Story Review
              </label>
              <div className="mt-2">
                <textarea
                  type="text"
                  name="storyReview"
                  placeholder="Write your story"
                  rows="3"
                  className="peer relative w-full rounded border border-slate-200 px-4 py-2 text-sm text-gray-700  outline-none focus:border-gold2-color"
                ></textarea>
              </div>
            </div>
          </div>
          {/* image */}
          <div className="py-6 flex flex-col justify-evenly">
            {formData.image && (
              <div className="w-64 h-56 mx-auto rounded-2xl border-4 border-gold-color">
                <img
                  className="w-full h-full rounded-xl object-cover"
                  src={URL.createObjectURL(formData.image)}
                  alt="Preview"
                />
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-end">
          <button className="bg-gold-color text-white py-1 px-4 rounded-lg ">
            submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default GotMarried;
