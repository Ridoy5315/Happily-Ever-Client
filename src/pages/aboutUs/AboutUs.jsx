import React from "react";
import banner from "../../assets/aboutUs/Ethnic-Punjabi-wedding-couple-photography.jpg";
import SectionTitle from "../../componenets/shared/SectionTitle/SectionTitle";
const AboutUs = () => {
  return (
    <div className="mb-24">
      <div className="overflow-hidden w-full relative  lg:h-[550px] md:h-[400px] h-[350px]">
        <div className="absolute z-10 text-gray-300 px-16 md:px-52 lg:px-80 top-[35%] transform -translate-y-1/2">
          <h1 className="lg:text-5xl md:text-2xl text-lg text-center lg:leading-snug leading-normal font-medium">
            Connecting
            <span className="text-gold-color"> Hearts, Building </span>
            Futures
          </h1>
          <p className="text-center lg:mt-4 md:mt-2 mt-1 lg:text-xl md:text-base text-xs">
            Welcome to Happily Ever, a trusted and secure matrimony platform
            designed to help individuals find their life partners. Our mission
            is to make the journey of finding love simple, meaningful, and
            hassle-free.
          </p>
        </div>

        <img
          className="bsolute top-0 left-0 w-full h-full object-cover"
          src={banner}
          alt=""
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/65 to-black/45"></div>
      </div>
      <div className="pt-24 lg:w-6/12 w-11/12 mx-auto text-gray-600">
        <h3 className="text-4xl font-semibold text-gold-color text-center">Our Mission & Vision</h3>
        <div className="mt-8 space-y-6">
          <div>
               <h5 className="text-center text-2xl font-semibold text-maroon-color">Mission Statement: </h5>
               <p className="bg-[#f5e7e4] rounded-xl p-5 mt-2">Our mission is to create a reliable and transparent matchmaking service where individuals can connect based on shared values, preferences, and cultural backgrounds.</p>
          </div>
          <div>
               <h5 className="text-center text-2xl font-semibold text-maroon-color">Vision: </h5>
               <p className="bg-[#f5e7e4] rounded-xl p-5 mt-2">We envision a world where everyone finds their perfect match through technology, trust, and tradition.</p>
          </div>
        </div>
        
      </div>
      <div className="pt-24 lg:w-6/12 w-11/12 mx-auto text-gray-600">
        <h3 className="text-4xl font-semibold text-gold-color text-center">Why Choose Us?</h3>
        <div className="mt-8 space-y-4">
          <p className="text-lg">
               <span className="text-maroon-color text-xl font-medium">✓ Privacy & Security - </span> Your data is safe with us.
          </p>
          <p className="text-lg">
               <span className="text-maroon-color text-xl font-medium">✓ User-Friendly Dashboard - </span> Simple and easy-to-use interface.
          </p>
          <p className="text-lg">
               <span className="text-maroon-color text-xl font-medium">✓ Contact Privacy Control - </span> Your contact details remain hidden Admin approve the contact request.
          </p>
          <p className="text-lg">
               <span className="text-maroon-color text-xl font-medium">✓ Free & Premium Membership Plans - </span> Choose from free or premium plans based on your needs. Premium members get advanced contact access.
          </p>
          <p className="text-lg">
               <span className="text-maroon-color text-xl font-medium">✓ Success Stories & Happy Couples - </span> Read real success stories from couples who found love through our platform.
          </p>
          <p className="text-lg">
               <span className="text-maroon-color text-xl font-medium">✓ Mobile-Friendly & Easy Access - </span> Access our platform on any device—desktop, tablet, or mobile—anytime, anywhere.
          </p>
        </div>

      </div>
      <div className="pt-24 lg:w-6/12 w-11/12 mx-auto text-gray-600">
        <h3 className="text-4xl font-semibold text-gold-color text-center">Our Journey</h3>
        <p className="mt-8 text-center bg-[#f5e7e4] py-5 px-6 rounded-lg">Our journey began with the vision to make online matchmaking safer, easier, and more personalized. The idea for Happily Ever was born out of a need for a safe, trustworthy, and effective matchmaking platform. Many people struggled with unreliable matchmaking services, so we decided to create a solution that prioritizes authenticity, privacy, and meaningful connections.</p>
        

      </div>
    </div>
  );
};

export default AboutUs;
