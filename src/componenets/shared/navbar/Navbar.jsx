import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/website_logo2-removebg-preview.png";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import MobileMenu from "./MobileMenu";
import useAuth from "../../../hooks/useAuth";
const Navbar = () => {
  const { user, logOut } = useAuth();
  const [open, setOpen] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  const links = (
    <nav>
      <ul className="flex lg:flex-row md:flex-row flex-col justify-center items-center gap-6  font-fontHeading font-semibold">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>`relative px-4 py-1 rounded-lg transition duration-300 ease-in-out ${isActive ? "text-maroon-color font-medium hover:bg-maroon-color hover:text-white" : "text-gray-800 text-sm after:content-[''] after:absolute after:top-full after:left-0 after:h-[2px] after:w-0 after:bg-gray-700 after:transition-all after:duration-300 hover:after:w-full"}`}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/biodatas"
            className={({ isActive }) =>`relative px-4 py-1 rounded-lg transition duration-300 ease-in-out ${isActive ? "text-maroon-color font-medium hover:bg-maroon-color hover:text-white" : "text-gray-800 text-sm after:content-[''] after:absolute after:top-full after:left-0 after:h-[2px] after:w-0 after:bg-gray-700 after:transition-all after:duration-300 hover:after:w-full"}`}
          >
            Biodatas
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/aboutUs"
            className={({ isActive }) =>`relative px-4 py-1 rounded-lg transition duration-300 ease-in-out ${isActive ? "text-maroon-color font-semibold hover:bg-maroon-color hover:text-white" : "text-gray-800 text-sm after:content-[''] after:absolute after:top-full after:left-0 after:h-[2px] after:w-0 after:bg-gray-700 after:transition-all after:duration-300 hover:after:w-full"}`}
          >
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contactUs"
            className={({ isActive }) =>`relative px-4 py-1 rounded-lg transition duration-300 ease-in-out ${isActive ? "text-maroon-color font-semibold hover:bg-maroon-color hover:text-white" : "text-gray-800 text-sm after:content-[''] after:absolute after:top-full after:left-0 after:h-[2px] after:w-0 after:bg-gray-700 after:transition-all after:duration-300 hover:after:w-full"}`}
          >
            Contact Us
          </NavLink>
        </li>
        {user && <li>
          <NavLink
            to="dashboard"
            className={({ isActive }) =>`relative px-4 py-1 rounded-lg transition duration-300 ease-in-out ${isActive ? "text-maroon-color font-semibold hover:bg-maroon-color hover:text-white" : "text-gray-800 text-sm after:content-[''] after:absolute after:top-full after:left-0 after:h-[2px] after:w-0 after:bg-gray-700 after:transition-all after:duration-300 hover:after:w-full"}`}
          >
            Dashboard
          </NavLink>
        </li>}
      </ul>
    </nav>
  );
  return (
    <>
      <div className="flex justify-between items-center w-11/12 mx-auto">
        {/* logo section */}
        <div className="flex items-center gap-2">
          <div className="w-24">
            <img src={logo} alt="" />
          </div>
          <div className="flex gap-2 text-3xl text-maroon-color font-bold font-fontHeading">
            <p>Happily</p>
            <p>Ever</p>
          </div>
        </div>
        {/* menu section */}
        <div className="hidden lg:block md:block">
          <div>{links}</div>
        </div>
        {/* button section */}
        <div className="hidden lg:block md:block">
          {user ? (
            <div className="flex justify-center items-center gap-4">
              <div className="w-12 h-12 rounded-full">
                <img
                  className="h-full w-full rounded-full"
                  src={user?.photoURL}
                  alt=""
                />
              </div>
              <button onClick={handleLogOut} className=" bg-maroon-color text-white hover:bg-[#800000b1] hover:text-white rounded-lg px-4 py-1 duration-300">Logout</button>
            </div>
          ) : (
            <div className="space-x-2 font-fontBody">
              <NavLink
                to="logIn"
                className="text-lg bg-gold-color text-white hover:bg-[#cbab41] hover:text-white rounded-lg px-6 py-1.5 duration-300 "
              >
                Login
              </NavLink>
              <NavLink
                to="signUp"
                className="text-lg bg-maroon-color text-white hover:bg-[#800000b1] hover:text-white rounded-lg px-6 py-1.5 duration-300"
              >
                Registration
              </NavLink>
            </div>
          )}
        </div>
        {/* responsive menu icon section */}
        <div className="lg:hidden md:hidden" onClick={() => setOpen(!open)}>
          <MobileMenu open={open} links={links}></MobileMenu>
          <FiMenu className="text-3xl"></FiMenu>
        </div>
      </div>
      {/* mobile sidebar section */}
    </>
  );
};

export default Navbar;
