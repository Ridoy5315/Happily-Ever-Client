import { Link, NavLink, Outlet } from "react-router-dom";
import Footer from "../componenets/shared/footer/footer";
import Navbar from "../componenets/shared/navbar/Navbar";

import useAdmin from "../hooks/useAdmin";
import { FaStreetView, FaUserEdit } from "react-icons/fa";
import { MdFavoriteBorder, MdOutlineContactSupport } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import { RxDashboard } from "react-icons/rx";
import { IoMdSkipBackward } from "react-icons/io";
import { CiLogin, CiLogout } from "react-icons/ci";
import useAuth from "../hooks/useAuth";
import logo from "../assets/website_logo2-removebg-preview.png";
import { useEffect, useState } from "react";
import { BiMaleFemale } from "react-icons/bi";
const Dashboard = () => {
  // const [activeMenu, setActiveMenu] = useState(null);
  const { user } = useAuth();
  const [isAdmin] = useAdmin();

  // useEffect(() => {
  //   if(isAdmin){
  //     setActiveMenu()
  //   }
  // }, [])
  return (
    <div>
      <div className="grid grid-cols-5">
        {/* side menu */}
        <div className="min-h-screen col-span-1  bg-white  flex flex-col justify-between shadow-[4px_0_12px_2px_rgba(212,187,108,0.300)]">
          {/* upper site */}
          <div className="">
            {/* home button */}
            <Link
              to="/"
              className="uppercase m-3 bg-gold-color text-white inline-flex items-center gap-2 py-1 px-3 rounded-xl text-sm"
            >
              <IoMdSkipBackward></IoMdSkipBackward>Back to home
            </Link>

            {/* logo */}
            <div className="border-b pb-7">
              <div className="w-40 mx-auto">
                <img className="w-full " src={logo} alt="" />
              </div>
              <h3 className="text-center text-2xl font-semibold">
                Happily Ever
              </h3>
            </div>

            <div className="border-b py-5 flex items-center gap-3 text-2xl font-semibold pl-6">
              <RxDashboard className="text-3xl"></RxDashboard>
              <p>User Dashboard</p>
            </div>

            <ul className="space-y-7 ml-6 mt-7">
              {isAdmin ? (
                <>
                  <li className="">
                    <NavLink
                      to="/dashboard/adminDashboard"
                      className={({isActive}) => `flex items-center gap-4 text-xl ${isActive ? "bg-maroon-color text-white" : " "}`}
                    >
                      <FaUserEdit className="text-2xl"></FaUserEdit>Dashboard
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/manageUsers"
                      className={({isActive}) => `flex items-center gap-4 text-xl ${isActive ? "bg-maroon-color text-white" : " "}`}
                    >
                      <FaStreetView className="2xl"></FaStreetView>Manage Users
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/approvedPremium"
                      className={({isActive}) => `flex items-center gap-4 text-xl ${isActive ? "bg-maroon-color text-white" : " "}`}
                    >
                      <MdOutlineContactSupport className="text-2xl"></MdOutlineContactSupport>
                      Approved Premium
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/approvedContactRequest"
                      className={({isActive}) => `flex items-center gap-4 text-xl ${isActive ? "bg-maroon-color text-white" : " "}`}
                    >
                      <MdFavoriteBorder className="text-2xl"></MdFavoriteBorder>
                      Approved Contact Request
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="">
                    <NavLink
                      to="/dashboard/editBiodata"
                      className="flex items-center gap-4 text-xl"
                    >
                      <FaUserEdit className="text-2xl"></FaUserEdit>Edit Biodata
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/viewBiodata"
                      className="flex items-center gap-4 text-xl"
                    >
                      <FaStreetView className="2xl"></FaStreetView>View Biodata
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/myContactRequest"
                      className="flex items-center gap-3 text-xl"
                    >
                      <MdOutlineContactSupport className="text-2xl"></MdOutlineContactSupport>
                      My Contact Request
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/favoritesBiodata"
                      className="flex items-center gap-3 text-xl"
                    >
                      <MdFavoriteBorder className="text-2xl"></MdFavoriteBorder>
                      Favorites Biodata
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/gotMarried"
                      className="flex items-center gap-3 text-xl"
                    >
                      <BiMaleFemale className="text-2xl"></BiMaleFemale>
                      Got Married
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
          {/* lower site */}
          <div>
            {/* user */}
            <div className="px-7 py-3 border-t space-y-2">
              <div className="border-b pb-3">
                <button className="flex items-center gap-4 text-xl font-semibold">
                  <CiLogin className="text-2xl"></CiLogin>Login
                </button>
              </div>
              <button className="flex items-center gap-4 text-xl font-semibold">
                <CiLogout className="text-2xl font-semibold"></CiLogout>Logout
              </button>
            </div>
            <div className="flex items-center gap-3 border-t py-4 pl-7">
              <div className="relative w-14 h-14">
                <span className="absolute p-1.5 text-sm bg-green-500 border-2 border-white rounded-full bottom-1 right-1"></span>
                <img
                  className="w-full h-full rounded-full object-cover"
                  src={user?.photoURL}
                  alt=""
                />
              </div>
              <div>
                <h4 className="text-xl font-semibold">{user?.displayName}</h4>
                <p className="">{user?.email}</p>
              </div>
            </div>
          </div>
        </div>
        {/* dashboard content */}
        <div className="col-span-4">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
