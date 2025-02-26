import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import logo from "../../../assets/website_logo2-removebg-preview.png";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div className="bg-[#f7e7ce30] text-gray-700 font-fontBody px-44 py-10">
        <div className="flex justify-between items-center">
          <div className="flex flex-col justify-center items-center">
            <div className="w-44">
              <img src={logo} alt="" />
            </div>
            <p className=" text-2xl text-maroon-color font-fontHeading font-bold">
              Happily Ever
            </p>

            <div className="mt-10 flex lg:gap-4 md:gap-4 gap-2 lg:text-xl md:text-xl text-lg">
              <button className="">
                <FaFacebook className="text-3xl text-maroon-color"></FaFacebook>
              </button>
              <button>
                <FaInstagram className="text-3xl text-maroon-color"></FaInstagram>
              </button>
              <button>
                <FiYoutube className="text-3xl text-maroon-color"></FiYoutube>
              </button>
              <button>
                <FaXTwitter className="text-3xl text-maroon-color"></FaXTwitter>
              </button>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="uppercase text-xl font-semibold text-maroon-color">Get in touch</h4>
            <div className="space-y-1">
              <p>Address: 3812 Lena Lane City Jackson Mississippi</p>
              <p>Phone: +92 (8800) 68 - 8960</p>
              <p>Email: info@example.com</p>
            </div>
          </div>
  
          <div className="space-y-4 mt-10">
            <h4 className="uppercase text-xl font-semibold text-maroon-color">HELP & SUPPORT</h4>
            <div className="space-y-1">
              <p>About company</p>
              <p>Feedback</p>
              <p>Testimonials</p>
              <p>Contact us</p>
              <p>FAQs</p>
            </div>
          </div>

        </div>
        {/* divider */}
        <div className="border-b my-8 border-black"></div>
        <div className="flex justify-center items-center gap-6">
          <p>
            HAPPILY EVER - Trusted by over thousands of Boys & Girls for
            successfully marriage
          </p>
          <button className="bg-maroon-color px-6 py-1 rounded-lg text-white">Join us today !</button>
        </div>
      </div>
      <div className="bg-[#f9efdd] text-center py-4">
        <p>Copyright ©{currentYear} Happily Ever All rights reserved.</p>
      </div>
    </>
  );
};

export default Footer;
