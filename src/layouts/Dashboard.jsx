import { Link, NavLink, Outlet } from "react-router-dom";

import useAdmin from "../hooks/useAdmin";
import { FaStreetView, FaUserEdit } from "react-icons/fa";
import { MdContactMail, MdDashboard, MdFavoriteBorder, MdOutlineContactSupport, MdOutlineWorkspacePremium } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { IoMdSkipBackward } from "react-icons/io";
import { CiLogout } from "react-icons/ci";
import useAuth from "../hooks/useAuth";
import logo from "../assets/website_logo2-removebg-preview.png";
import { BiMaleFemale } from "react-icons/bi";
import { FaUsersGear } from "react-icons/fa6";
import { TbBrandStorytel } from "react-icons/tb";
const Dashboard = () => {
  // const [activeMenu, setActiveMenu] = useState(null);
  const { user, logOut} = useAuth();
  const [isAdmin] = useAdmin();

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  
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
            <div className="border-b pb-5">
              <div className="w-36 mx-auto">
                <img className="w-full " src={logo} alt="" />
              </div>
              <h3 className="text-center text-xl font-semibold">
                Happily Ever
              </h3>
            </div>

            <div className="border-b py-3 flex items-center gap-3 text-xl font-semibold pl-6">
              <RxDashboard className="text-2xl"></RxDashboard>
              {isAdmin ? <p>Admin Dashboard</p> : <p>User Dashboard</p>}
            </div>

            <ul className="space-y-3 ml-3 mt-7">
              {isAdmin ? (
                <>
                  <li className="">
                    <NavLink
                      to="/dashboard/adminDashboard"
                      className={({ isActive }) =>`relative inline-flex items-center gap-4 text-lg px-4 py-1 rounded-lg transition duration-300 ease-in-out ${isActive ? "text-maroon-color font-medium hover:bg-maroon-color hover:text-white" : "text-gray-800 after:content-[''] after:absolute after:top-full after:left-3 after:h-[2px] after:w-0 after:bg-gray-700 after:transition-all after:duration-300 hover:after:w-full"}`}
                    >
                      <MdDashboard className="text-xl"></MdDashboard>Dashboard
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/manageUsers"
                      className={({ isActive }) =>`relative inline-flex items-center gap-4 text-lg px-4 py-1 rounded-lg transition duration-300 ease-in-out ${isActive ? "text-maroon-color font-medium hover:bg-maroon-color hover:text-white" : "text-gray-800 after:content-[''] after:absolute after:top-full after:left-3 after:h-[2px] after:w-0 after:bg-gray-700 after:transition-all after:duration-300 hover:after:w-full"}`}
                    >
                      <FaUsersGear className="text-xl"></FaUsersGear>Manage Users
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/approvedPremium"
                      className={({ isActive }) =>`relative inline-flex items-center gap-4 text-lg px-4 py-1 rounded-lg transition duration-300 ease-in-out ${isActive ? "text-maroon-color font-medium hover:bg-maroon-color hover:text-white" : "text-gray-800 after:content-[''] after:absolute after:top-full after:left-3 after:h-[2px] after:w-0 after:bg-gray-700 after:transition-all after:duration-300 hover:after:w-full"}`}
                    >
                      <MdOutlineWorkspacePremium className="text-xl"></MdOutlineWorkspacePremium>
                      Approved Premium
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/approvedContactRequest"
                      className={({ isActive }) =>`relative inline-flex items-center gap-4 text-lg px-4 py-1 rounded-lg transition duration-300 ease-in-out ${isActive ? "text-maroon-color font-medium hover:bg-maroon-color hover:text-white" : "text-gray-800 after:content-[''] after:absolute after:top-full after:left-3 after:h-[2px] after:w-0 after:bg-gray-700 after:transition-all after:duration-300 hover:after:w-64"}`}
                    >
                      <MdContactMail className="text-xl"></MdContactMail>
                      Approved Contact Request
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/story"
                      className={({ isActive }) =>`relative inline-flex items-center gap-4 text-lg px-4 py-1 rounded-lg transition duration-300 ease-in-out ${isActive ? "text-maroon-color font-medium hover:bg-maroon-color hover:text-white" : "text-gray-800 after:content-[''] after:absolute after:top-full after:left-3 after:h-[2px] after:w-0 after:bg-gray-700 after:transition-all after:duration-300 hover:after:w-full"}`}
                    >
                      <TbBrandStorytel className="text-xl"></TbBrandStorytel>
                      Success Story
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="">
                    <NavLink
                      to="/dashboard/editBiodata"
                      className={({ isActive }) =>`relative inline-flex items-center gap-4 text-lg px-4 py-1 rounded-lg transition duration-300 ease-in-out ${isActive ? "text-maroon-color font-medium hover:bg-maroon-color hover:text-white" : "text-gray-800 after:content-[''] after:absolute after:top-full after:left-3 after:h-[2px] after:w-0 after:bg-gray-700 after:transition-all after:duration-300 hover:after:w-full"}`}
                    >
                      <FaUserEdit className="text-xl"></FaUserEdit>Edit Biodata
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/viewBiodata"
                      className={({ isActive }) =>`relative inline-flex items-center gap-4 text-lg px-4 py-1 rounded-lg transition duration-300 ease-in-out ${isActive ? "text-maroon-color font-medium hover:bg-maroon-color hover:text-white" : "text-gray-800 after:content-[''] after:absolute after:top-full after:left-3 after:h-[2px] after:w-0 after:bg-gray-700 after:transition-all after:duration-300 hover:after:w-full"}`}
                    >
                      <FaStreetView className="xl"></FaStreetView>View Biodata
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/myContactRequest"
                      className={({ isActive }) =>`relative inline-flex items-center gap-4 text-lg px-4 py-1 rounded-lg transition duration-300 ease-in-out ${isActive ? "text-maroon-color font-medium hover:bg-maroon-color hover:text-white" : "text-gray-800 after:content-[''] after:absolute after:top-full after:left-3 after:h-[2px] after:w-0 after:bg-gray-700 after:transition-all after:duration-300 hover:after:w-full"}`}
                    >
                      <MdOutlineContactSupport className="text-xl"></MdOutlineContactSupport>
                      My Contact Request
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/favoritesBiodata"
                      className={({ isActive }) =>`relative inline-flex items-center gap-4 text-lg px-4 py-1 rounded-lg transition duration-300 ease-in-out ${isActive ? "text-maroon-color font-medium hover:bg-maroon-color hover:text-white" : "text-gray-800 after:content-[''] after:absolute after:top-full after:left-3 after:h-[2px] after:w-0 after:bg-gray-700 after:transition-all after:duration-300 hover:after:w-full"}`}
                    >
                      <MdFavoriteBorder className="text-xl"></MdFavoriteBorder>
                      Favorites Biodata
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/gotMarried"
                      className={({ isActive }) =>`relative inline-flex items-center gap-4 text-lg px-4 py-1 rounded-lg transition duration-300 ease-in-out ${isActive ? "text-maroon-color font-medium hover:bg-maroon-color hover:text-white" : "text-gray-800 after:content-[''] after:absolute after:top-full after:left-3 after:h-[2px] after:w-0 after:bg-gray-700 after:transition-all after:duration-300 hover:after:w-full"}`}
                    >
                      <BiMaleFemale className="text-xl"></BiMaleFemale>
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
            <div className="px-7 py-3 border-t">
              <button onClick={handleLogOut} className="flex items-center gap-4 text-lg font-semibold">
                <CiLogout className="text-xl font-semibold"></CiLogout>Logout
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
