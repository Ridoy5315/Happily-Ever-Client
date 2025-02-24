import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { GiTakeMyMoney } from "react-icons/gi";
import { FaUsersViewfinder } from "react-icons/fa6";
import { FaFemale, FaMale } from "react-icons/fa";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import useUsers from "../../../../hooks/useUsers";
import LoadingSpinner from "../../../../componenets/shared/loadingSpinner/LoadingSpinner";
const AdminDashboard = () => {
  const [counter, setCounter] = useState(false);
  const [data, loading] = useUsers();
  const total_Revenue = 5 * data?.totalRevenue;

  if(loading){
     return <LoadingSpinner></LoadingSpinner>
  }
  return (
    <div className="w-11/12 mx-auto py-10">
      <ScrollTrigger
        onEnter={() => setCounter(true)}
        onExit={() => setCounter(false)}
      >
        <div className="">
          {/* total biodata */}
          <div className=" p-6 bg-[#98fcb62c] flex flex-col items-center gap-8 justify-evenly border-b-8 border-maroon-color rounded-xl">
            <p className="text-[#b97267] font-semibold text-4xl">
              Total Members on the Platform
            </p>
            <div className="flex items-center gap-10">
              <div className="">
                <FaUsersViewfinder className="text-6xl text-[#b97267]"></FaUsersViewfinder>
              </div>

              <h2 className="text-6xl text-maroon-color font-medium">
                {counter && (
                  <CountUp start={0} end={data?.totalUsers} duration={2.75}></CountUp>
                )}
              </h2>
            </div>
          </div>

          {/* 2nd row */}
          <div className="grid grid-cols-5 mt-8 gap-10">
            {/* male and female biodata */}
            <div className="col-span-2 space-y-3">
              <div className=" p-6 bg-[#fdfb8d34]  border-b-8 border-maroon-color rounded-xl space-y-2">
                <div className="flex justify-center">
                  <FaMale className="text-5xl text-[#b97267]"></FaMale>
                </div>
                <p className="text-[#b97267] text-center font-semibold text-3xl">
                  Total Male Biodata
                </p>
                <h2 className="text-5xl text-center text-maroon-color font-medium">
                  {counter && (
                    <CountUp start={0} end={data?.maleUsers} duration={2.75}></CountUp>
                  )}
                </h2>
              </div>
              <div className=" p-6 bg-[#fec6ef3e]  border-b-8 border-maroon-color rounded-xl space-y-2">
                <div className="flex justify-center">
                  <FaFemale className="text-5xl text-[#b97267]"></FaFemale>
                </div>
                <p className="text-[#b97267] text-center font-semibold text-3xl">
                  Total Female Biodata
                </p>
                <h2 className="text-5xl text-center text-maroon-color font-medium">
                  {counter && (
                    <CountUp start={0} end={data?.femaleUsers} duration={2.75}></CountUp>
                  )}
                </h2>
              </div>
            </div>
            {/* total profit */}

            <div className="col-span-3 flex flex-col items-center justify-evenly p-6 rounded-2xl  shadow-[5px_5px_40px_5px_rgba(30,29,34,0.150)]">
              <div className="grid grid-cols-3 items-center">
                <div className="flex justify-center col-span-1">
                  <GiTakeMyMoney className="text-9xl text-gold-color"></GiTakeMyMoney>
                </div>

                <div className="col-span-2 space-y-10 text-center">
                  <p className="text-maroon-color font-semibold text-6xl">
                    Total Revenue
                  </p>
                  <div className="flex justify-center">
                    <h2 className="text-5xl text-center text-white font-medium bg-[#b97267] p-8 rounded-xl">
                      $
                      {counter && (
                        <CountUp start={0} end={total_Revenue} duration={2.75}></CountUp>
                      )}
                    </h2>
                  </div>
                </div>
              </div>
              <p className="text-maroon-color text-lg font-medium">
                [Total earnings generated from users purchasing contact
                information.]
              </p>
            </div>
          </div>
          {/* 3rd row */}

          <div className=" p-6 bg-[#ffcf7c29] flex items-center justify-evenly border-b-8 border-maroon-color rounded-xl mt-8">
            <p className="text-[#b97267] font-semibold text-5xl">
              Total Verified Premium Members
            </p>
            <div className="flex items-center gap-1">
              <h2 className="text-5xl text-maroon-color font-medium">
                {counter && (
                  <CountUp start={0} end={data?.premiumUsers} duration={2.75}></CountUp>
                )}
              </h2>
              <div className="flex justify-center">
                <MdOutlineWorkspacePremium className="text-5xl text-[#b97267]"></MdOutlineWorkspacePremium>
              </div>
            </div>
          </div>
        </div>
      </ScrollTrigger>
    </div>
  );
};

export default AdminDashboard;
