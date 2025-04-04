import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Link, useParams } from "react-router-dom";
import { FaCity } from "react-icons/fa";
import { FaPeopleRoof, FaTreeCity } from "react-icons/fa6";
import { MdOutlineMailOutline, MdOutlineWork } from "react-icons/md";
import { IoIosArrowForward, IoIosPhonePortrait } from "react-icons/io";
import { CiLock } from "react-icons/ci";
import "../../componenets/home/premiumCards/PremiumCard.css";
import useAuth from "../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import SimilarProfiles from "../../componenets/biodataDetails/SimilarProfiles";
import { findUserAge } from "../../api/utils";
import { GrFavorite } from "react-icons/gr";
import { format } from "date-fns";
import Swal from "sweetalert2";
import useBiodatas from "../../hooks/useBiodatas";
const BiodataDetails = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [details, setDetails] = useState({});
  const [similarData, setSimilarData] = useState([]);
  // const [age, setAge] = useState(null);
  const [biodatas] = useBiodatas();
  const [premium, setPremium] = useState(false);
  const [userPremium, setUserPremium] = useState(false);

  const premiumBiodatas = biodatas?.premiumBiodatasResult;

  const {
    bioDataId,
    bioDataType,
    name,
    profileImage,
    dateOfBirth,
    height,
    weight,
    occupation,
    race,
    fathersName,
    mothersName,
    permanentDivisionName,
    presentDivisionName,
    expectedPartnerAge,
    expectedPartnerHeight,
    expectedPartnerWeight,
    contactEmail,
    mobileNumber,
    age,
  } = details || {};

  const favoriteBiodataInfo = {
    userEmail: user?.email,
    favoritePerson: {
      name: details?.name,
      biodata_Id: details?.bioDataId,
      permanent_Address: details?.permanentDivisionName,
      occupation: details?.occupation,
    },
  };
  useEffect(() => {
    const bioDataDetails = async () => {
      const { data } = await axiosSecure.get(`/biodata-details/${id}`);
      setDetails(data);

      //get similar bio data for details page
      const res = await axiosSecure.get(
        `/bioData-similar?email=${data?.contactEmail}&gender=${data?.bioDataType}`
      );

      const similar = res.data;
      setSimilarData(similar);
    };
    bioDataDetails();
  }, []);

  useEffect(() => {
    if (premiumBiodatas) {
      const isPremium = premiumBiodatas.some(
        (item) => item.email === contactEmail
      );
      if (isPremium) setPremium(true);
    }
    if (premiumBiodatas) {
      const isPremium = premiumBiodatas.some(
        (item) => item.email === user?.email
      );
      if (isPremium) setUserPremium(true);
    }
  }, [premiumBiodatas, contactEmail, user?.email]);

  const handleAddFavorite = async (details) => {
    const { data } = await axiosSecure.post(
      "/favorite-biodata",
      favoriteBiodataInfo
    );
    if (data.insertedId) {
      Swal.fire({
        title: `${details?.name}'s biodata added in your favorite list`,
        icon: "success",
        draggable: true,
      });
    }
  };

  return (
    <div className=" mb-28">
      {/*  details  */}
      <div className="grid grid-cols-2 gap-10">
        {/* profile photo */}
        <div className="sticky lg:top-20  md:top-14 top-10 h-screen  w-full">
          <img
            src={profileImage}
            alt="profile image"
            className="w-full h-full object-cover mx-auto"
          />
        </div>
        {/* Details information */}
        <div className="mt-32 space-y-10 mr-16">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <p className="text-5xl font-fontHeading font-semibold text-maroon-color">
                {name}
              </p>
              <p>ID: {bioDataId}</p>
            </div>
            {premium && (
              <div className="inline-flex">
                <div className="animate-border-gradient">
                  <p className="z-10 text-maroon-color px-4 text-xs uppercase py-0.5 font-medium">
                    Premium member
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="flex gap-3">
            <p className="bg-maroon-color text-white rounded-xl text-sm py-0.5 px-3">
              {bioDataType}
            </p>
            {dateOfBirth && (
              <p className="bg-gold-color text-white rounded-xl text-sm py-0.5 px-3">
                {format(new Date(dateOfBirth), "dd-MM-yyyy")}
              </p>
            )}
          </div>
          <div className="uppercase grid grid-cols-4 gap-5">
            <div className="border border-gold-color p-4 rounded-xl flex flex-col justify-center items-center space-y-1">
              <FaTreeCity className="text-4xl text-gold-color"></FaTreeCity>
              <h5 className="font-light text-xs">
                permanent <span className="capitalize">addr</span>. :
              </h5>
              <p className="font-medium">{permanentDivisionName}</p>
            </div>
            <div className="border border-gold-color p-4 rounded-xl flex flex-col justify-center items-center space-y-1">
              <FaCity className="text-4xl text-gold-color"></FaCity>
              <h5 className="font-light text-xs">
                present <span className="capitalize">addr</span>. :
              </h5>
              <p className="font-medium">{presentDivisionName}</p>
            </div>
            <div className="border border-gold-color p-4 rounded-xl flex flex-col justify-center items-center space-y-1">
              <FaPeopleRoof className="text-4xl text-gold-color"></FaPeopleRoof>
              <h5 className="font-light text-xs">age:</h5>
              <p className="font-medium">{age}</p>
            </div>
            <div className="border border-gold-color p-4 rounded-xl flex flex-col justify-center items-center space-y-1">
              <MdOutlineWork className="text-4xl text-gold-color"></MdOutlineWork>
              <h5 className="font-light text-xs">occupation:</h5>
              <p className="font-medium">{occupation}</p>
            </div>
          </div>
          {/* personal information */}
          <div className="flex gap-6 text-lg">
            <div>
              <ul className="space-y-1 font-medium">
                <li className="flex items-center gap-1">
                  <IoIosArrowForward></IoIosArrowForward> Name:{" "}
                </li>
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
                <li className="flex items-center gap-1">
                  <IoIosArrowForward></IoIosArrowForward> Expected partner age:{" "}
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
                <li>{name}</li>
                <li>{fathersName}</li>
                <li>{mothersName}</li>
                <li>{height}</li>
                <li>{weight}</li>
                <li>{race}</li>
                <li>{expectedPartnerAge}</li>
                <li>{expectedPartnerHeight}</li>
                <li>{expectedPartnerWeight}</li>
              </ul>
            </div>
          </div>
          {/* Contact Info */}
          <div className="space-y-3">
            <h2 className="uppercase font-semibold text-maroon-color text-2xl">
              Contact Info
            </h2>
            {userPremium  ? (
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="border border-gold-color p-1 rounded-lg">
                    <IoIosPhonePortrait className=" text-gold-color text-2xl"></IoIosPhonePortrait>
                  </div>
                  <p className="text-xl">Phone:</p>
                  <p className="text-xl">{mobileNumber}</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="border border-gold-color p-1 rounded-lg">
                    <MdOutlineMailOutline className=" text-gold-color text-2xl"></MdOutlineMailOutline>
                  </div>
                  <p className="text-xl">Email:</p>
                  <p className="text-xl">{contactEmail}</p>
                </div>
              </div>
            ) : (
              <div className="space-y-2">
                <p>
                  Your perfect match is just a step away! Get access to view
                  contact info.
                </p>
                <Link
                  to={`/checkout/${bioDataId}`}
                  className="bg-gold-color text-white py-1 px-4 rounded-xl inline-flex items-center  gap-1"
                >
                  <CiLock className="text-xl"></CiLock> Unlock Contact
                </Link>
              </div>
            )}
          </div>
          {/* add to favorite */}
          <div>
            <button
              onClick={() => handleAddFavorite(details)}
              className="bg-maroon-color text-white py-0.5 px-4 rounded-xl flex items-center gap-2 text-lg"
            >
              <GrFavorite className="text-xl"></GrFavorite>Add to Favorites
            </button>
            {/* TODO: if this user already in favorite list icon will change */}
          </div>
          {/* similar user */}
          <div className="">
            <h2 className="uppercase font-semibold text-maroon-color text-2xl">
              Related profiles
            </h2>
            <div className="grid grid-cols-3 gap-3">
              {similarData.map((item, index) => (
                <SimilarProfiles key={index} item={item}></SimilarProfiles>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BiodataDetails;
