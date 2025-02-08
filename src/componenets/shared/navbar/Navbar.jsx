import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/website_logo2-removebg-preview.png";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import './Navbar.css';
import MobileMenu from "./MobileMenu";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const links = (
    <nav>
      <ul className="flex lg:flex-row md:flex-row flex-col justify-center items-center gap-6 text-gray-600">
        <li>
          <NavLink to='/' className='menu relative font-semibold'>Home</NavLink>
        </li>
        <li>
          <NavLink to='bioData' className='menu relative font-semibold'>Biodatas</NavLink>
        </li>
        <li>
          <NavLink className='menu relative font-semibold'>About Us</NavLink>
        </li>
        <li>
          <NavLink className='menu relative font-semibold'>Blogs</NavLink>
        </li>
        <li>
          <NavLink className='menu relative font-semibold'>Program</NavLink>
        </li>
      </ul>
    </nav>
  );
  return (
    <>
    <div className="flex justify-between items-center">
      {/* logo section */}
      <div className="flex items-center gap-2">
        <div className="w-20">
          <img src={logo} alt="" />
        </div>
        <div className="flex gap-2 text-2xl">
          <p>Happily</p>
          <p>Ever</p>
        </div>
      </div>
      {/* menu section */}
      <div className="hidden lg:block md:block">
        <div>
        {
          links
        }
        </div>
      </div>
      {/* button section */}
      <div className="hidden lg:block md:block">
        <NavLink to='logIn' className="text-2xl hover:bg-red-500 hover:text-white rounded-full p-2 duration-300">Login</NavLink>
        <NavLink to='signUp' className="text-2xl hover:bg-red-500 hover:text-white rounded-full p-2 duration-300">Registration</NavLink>
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
