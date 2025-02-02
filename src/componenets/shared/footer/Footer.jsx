import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <>
    <div className="bg-[#F7E7CE] px-44 py-24">
      <div className="flex justify-between">
        <div>
          <h4 className="uppercase">Get in touch</h4>
          <div>
            <p>Address: 3812 Lena Lane City Jackson Mississippi</p>
            <p>Phone: +92 (8800) 68 - 8960</p>
            <p>Email: info@example.com</p>
          </div>
        </div>
        <div className="border-r-2 border-black"></div>
        <div>
          <h4 className="uppercase">HELP & SUPPORT</h4>
          <div>
            <p>About company</p>
            <p>Feedback</p>
            <p>Testimonials</p>
            <p>Contact us</p>
            <p>FAQs</p>
          </div>
        </div>
        <div className="border-r-2 border-black"></div>
        <div>
          <h4 className="uppercase">social media</h4>
          <div className="flex lg:gap-4 md:gap-4 gap-2 lg:text-xl md:text-xl text-lg">
            <button className="">
              <FaFacebook></FaFacebook>
            </button>
            <button>
              <FaInstagram></FaInstagram>
            </button>
            <button>
              <FiYoutube></FiYoutube>
            </button>
            <button>
              <FaXTwitter></FaXTwitter>
            </button>
          </div>
        </div>
      </div>
      <div className="border-b-2 border-black"></div>
      <div>
        <p>
          Company name Site - Trusted by over thousands of Boys & Girls for
          successfull marriage.
        </p>
        <button>Join us today !</button>
      </div>
      
      
    </div>
    <div className="bg-[#f9efdd] text-center py-4">
        <p>Copyright © 2023 Company.com All rights reserved.</p>
      </div>
    </>
  );
};

export default Footer;
