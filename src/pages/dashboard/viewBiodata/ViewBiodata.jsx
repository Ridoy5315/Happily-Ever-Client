import React, { useEffect, useState } from "react";
import coverPhoto from "../../../assets/cover-photo.jpg";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import LoadingSpinner from "../../../componenets/shared/loadingSpinner/LoadingSpinner";
import { IoLocationOutline } from "react-icons/io5";
import { format } from "date-fns";
import { FaPhoneAlt } from "react-icons/fa";
import {
  MdEmail,
  MdEmojiPeople,
  MdOutlineWorkspacePremium,
  MdWork,
} from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { BsCalendarDate } from "react-icons/bs";
import { findUserAge } from "../../../api/utils";
import { FaArrowRightLong } from "react-icons/fa6";
import Swal from "sweetalert2";
const ViewBiodata = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  // const [ageValue, setAgeValue] = useState(0);

  const { data: bioData = {}, isPending: loading, refetch } = useQuery({
    queryKey: ["bioData", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure(`/user/bioData/${user?.email}`);
      return data;
    },
  });

  

  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  const handlePremium = async() => {
    const {data} = await axiosSecure.patch(`/user/premium/${user?.email}`)
    if(data.modifiedCount > 0){
      refetch()
      Swal.fire({
        title: "Success!",
        text: `${person?.name} role has changed.`,
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }

  return (
    <div>
      {/* cover photo */}
      <div className="w-full h-56">
        <img className="w-full h-full object-cover" src={coverPhoto} alt="" />
      </div>
      {/* user bio data */}
      <div className="pb-16">
        <div className="bg-white">
          <div className="w-9/12 mx-auto relative pt-8 pb-16">
            {/* user profile photo */}
            <div className="absolute -top-20 w-56 h-56 rounded-full border-[6px] border-white shadow-xl">
              <img
                className="w-full h-full rounded-full object-cover"
                src={user?.photoURL}
                alt=""
              />
            </div>
            {/* basic details of user */}
            <div className="ml-64 space-y-3">
              <p className="text-4xl font-fontHeading text-maroon-color font-semibold">
                {bioData.name}
              </p>
              <div className="flex gap-5 items-center ">
                <p className="bg-gold-color text-sm text-white px-4 rounded-xl">
                  {bioData.bioDataType}
                </p>
                <p className="flex items-center gap-1 text-sm text-gray-500">
                  <IoLocationOutline></IoLocationOutline>{" "}
                  {bioData.presentDivisionName}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* lower part */}
        <div className="w-9/12 mx-auto mt-8 flex flex-col gap-8">
          {/* contact information */}
          <div className="flex gap-20 items-center">
            <div className=" space-y-3">
              <h3 className="text-2xl text-maroon-color font-medium">
                Contact Information
              </h3>
              <div className="space-y-1 ml-2">
                <p className="flex items-center gap-3">
                  <FaPhoneAlt></FaPhoneAlt> {bioData.mobileNumber}
                </p>
                <p className="flex items-center gap-3 text-gold-color">
                  <MdEmail className="text-xl"></MdEmail> {bioData.contactEmail}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-8">
              <div className="bg-white shadow-[1px_1px_8px_0_rgba(128,0,0,0.400)] py-4 px-6 rounded-2xl text-center">
                <MdWork className="mx-auto text-6xl text-gold-color"></MdWork>
                <h5 className="text-xl text-gold-color font-semibold">
                  Occupation
                </h5>
                <p className="text-sm text-gray-700">{bioData.occupation}</p>
              </div>
              <div className="bg-white shadow-[1px_1px_8px_0_rgba(128,0,0,0.400)] py-4 px-6 rounded-2xl text-center">
                <BsCalendarDate className="mx-auto text-6xl text-gold-color"></BsCalendarDate>
                <h5 className="text-lg text-gold-color font-semibold">
                  Date Of Birth
                </h5>

                {bioData.dateOfBirth && (
                  <p className="text-sm text-gray-700">
                    {format(new Date(bioData.dateOfBirth), "PP")}
                  </p>
                )}
              </div>
              <div className="bg-white shadow-[1px_1px_8px_0_rgba(128,0,0,0.400)] py-4 px-6 rounded-2xl text-center">
                <MdEmojiPeople className="mx-auto text-6xl text-gold-color"></MdEmojiPeople>
                <h5 className="text-xl text-gold-color font-semibold">Age</h5>
                <p className="text-sm text-gray-700">{bioData.age} years old</p>
              </div>
            </div>
          </div>

          {/* user bio data details */}
          <div className="text-lg grid grid-cols-2 text-gray-700">
            <div className="flex gap-4 ">
              <div>
                <ul className="space-y-1 font-medium">
                  <li className="flex items-center gap-1">
                    <IoIosArrowForward></IoIosArrowForward> Fathers name:{" "}
                  </li>
                  <li className="flex items-center gap-1">
                    <IoIosArrowForward></IoIosArrowForward> Mothers name:{" "}
                  </li>
                  <li className="flex items-center gap-1">
                    <IoIosArrowForward></IoIosArrowForward> Height:{" "}
                  </li>
                  <li className="flex items-center gap-1">
                    <IoIosArrowForward></IoIosArrowForward> Weight:{" "}
                  </li>
                  <li className="flex items-center gap-1">
                    <IoIosArrowForward></IoIosArrowForward> Race:{" "}
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-1">
                  <li>{bioData.fathersName}</li>
                  <li>{bioData.mothersName}</li>
                  <li>{bioData.height}</li>
                  <li>{bioData.weight}</li>
                  <li>{bioData.race}</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4 border-l-2 pl-5">
              <div>
                <ul className="space-y-1 font-medium">
                  <li className="flex items-center gap-1">
                    <IoIosArrowForward></IoIosArrowForward> Present Division
                    name :{" "}
                  </li>
                  <li className="flex items-center gap-1">
                    <IoIosArrowForward></IoIosArrowForward> Permanent Division
                    name:{" "}
                  </li>
                  <li className="flex items-center gap-1">
                    <IoIosArrowForward></IoIosArrowForward> Expected partner
                    age:{" "}
                  </li>
                  <li className="flex items-center gap-1">
                    <IoIosArrowForward></IoIosArrowForward> Expected partner
                    height:{" "}
                  </li>
                  <li className="flex items-center gap-1">
                    <IoIosArrowForward></IoIosArrowForward> Expected partner
                    weight:{" "}
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-1">
                  <li>{bioData.presentDivisionName}</li>
                  <li>{bioData.permanentDivisionName}</li>
                  <li>{bioData.expectedPartnerAge}</li>
                  <li>{bioData.expectedPartnerHeight}</li>
                  <li>{bioData.expectedPartnerWeight}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="w-9/12 mx-auto flex gap-6 mt-8">
          <h5 className="text-maroon-color font-semibold text-xl flex items-center  gap-5">
            Make Your Biodata Premium and Attract More Proposals{" "}
            <FaArrowRightLong className="text-base"></FaArrowRightLong>
          </h5>

          <button onClick={handlePremium} className="bg-gold-color text-white px-5 py-1 rounded-lg flex items-center gap-2">
            <MdOutlineWorkspacePremium className="text-lg"></MdOutlineWorkspacePremium>
            Get Premium Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewBiodata;
