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
      <div className="bg-[#f7e7ce30] text-gray-700 font-fontBody lg:px-44 md:px-12 px-6 lg:py-10 md:py-6">
        <div className="flex justify-between items-center md:gap-14 gap-10">
          <div className="flex flex-col justify-center items-center lg:block md:block hidden">
            <div className="lg:w-44 md:w-28 ">
              <img src={logo} alt="" />
            </div>
            <p className=" lg:text-2xl md:text-lg text-maroon-color font-fontHeading font-bold">
              Happily Ever
            </p>

            <div className="lg:mt-10 md:mt-6 flex lg:gap-4 md:gap-3 gap-2">
              <button className="">
                <FaFacebook className="lg:text-3xl text-xl text-maroon-color"></FaFacebook>
              </button>
              <button>
                <FaInstagram className="lg:text-3xl text-xl text-maroon-color"></FaInstagram>
              </button>
              <button>
                <FiYoutube className="lg:text-3xl text-xl text-maroon-color"></FiYoutube>
              </button>
              <button>
                <FaXTwitter className="lg:text-3xl text-xl text-maroon-color"></FaXTwitter>
              </button>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="uppercase lg:text-xl md:text-lg font-semibold text-maroon-color">Get in touch</h4>
            <div className="space-y-1 md:text-sm lg:text-base text-xs">
              <p>Address: 3812 Lena Lane City Jackson Mississippi</p>
              <p>Phone: +92 (8800) 68 - 8960</p>
              <p>Email: info@example.com</p>
            </div>
          </div>
  
          <div className="space-y-4 lg:mt-10 md:mt-16 mt-10">
            <h4 className="uppercase lg:text-xl md:text-lg text-sm font-semibold text-maroon-color">HELP & SUPPORT</h4>
            <div className="space-y-1 md:text-sm text-xs">
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
        <div className="flex justify-center items-center lg:text-base text-xs gap-6 ">
          <p className="lg:block md:block hidden">
            HAPPILY EVER - Trusted by over thousands of Boys & Girls for
            successfully marriage
          </p>
          <button className="bg-maroon-color px-6 py-1 rounded-lg text-white lg:block md:block hidden">Join us today !</button>
        </div>
      </div>
      <div className="bg-[#f9efdd] text-center py-4 lg:text-base text-xs">
        <p>Copyright ©{currentYear} Happily Ever All rights reserved.</p>
      </div>
    </>
  );
};

export default Footer;
