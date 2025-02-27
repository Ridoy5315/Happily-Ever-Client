import React from "react";
import SectionTitle from "../../shared/SectionTitle/SectionTitle";
import Lottie from "lottie-react";
import register from "./jsonFiles/register.json";
import member from "./jsonFiles/premiumMember.json";
import find from "./jsonFiles/find.json";
import profile from "./jsonFiles/profile.json";
import meet from "./jsonFiles/meet.json";
import married from "./jsonFiles/married.json";
import flower from "../../../assets/flower/f1-removebg-preview.png";
const HowItWorks = () => {
  return (
    <div className="relative pt-28 lg:w-10/12 w-11/12 mx-auto">
      <img
        className="absolute -top-1 left-1/2 transform -translate-x-1/2"
        src={flower}
        alt=""
      />
      <SectionTitle
        heading="How It Works"
        subHeading="Your Path to Love Starts Here – Easy, Secure, and Trusted"
      ></SectionTitle>
      <div className="lg:mt-14 mt-10 lg:space-y-16 space-y-10 text-gray-700 font-fontBody">
        {/* Register */}
        <div>
          <div className="grid grid-cols-2 justify-center">
            <div className="flex lg:mr-20 md:mr-10 mr-6">
              <div className="ml-auto">
                <Lottie className="" animationData={register}></Lottie>
              </div>
            </div>
            <div className="border-l-2 border-maroon-color lg:pl-12 md:pl-8 pl-4 flex flex-col gap-3">
              <div className="flex gap-4">
                <span className="inline-flex text-gold-color border border-maroon-color px-2.5 rounded-full lg:text-2xl md:text-xl  font-semibold">
                  1
                </span>
                <h3 className="font-fontHeading lg:text-2xl md:text-xl">Register</h3>
              </div>

              <p className="text-justify lg:text-base md:text-base text-xs">
                Join our community in just a few simple steps! Sign up with your
                basic details and create a profile that reflects your
                personality, preferences, and aspirations. Your journey to
                finding the perfect match begins here.
              </p>
            </div>
          </div>
        </div>
        {/* premium member */}
        <div>
          <div className="grid grid-cols-2  justify-center">
            <div className="border-r-2 border-maroon-color lg:pr-12 md:pr-8 pr-4 flex gap-3">
              <div className="mr-2 flex flex-col gap-3">
                <div className="flex items-center gap-4">
                  <h3 className="ml-auto font-fontHeading lg:text-2xl md:text-xl text-sm">
                    Become a Premium Member
                  </h3>
                  <span className="inline-flex text-gold-color border border-maroon-color px-2.5 rounded-full lg:text-2xl md:text-xl  font-semibold">
                    2
                  </span>
                </div>
                <p className="text-justify lg:text-base md:text-base text-xs">
                  Upgrade to a premium membership to access advanced features
                  like priority profile visibility, unlimited matches, and
                  personalized matchmaking services. Enjoy a seamless and
                  enhanced experience to find your ideal life partner.
                </p>
              </div>
            </div>
            <div className="flex items-center lg:ml-16 md:ml-16 ml-10">
              <div className="w-1/2">
                <Lottie className="" animationData={member}></Lottie>
              </div>
            </div>
          </div>
        </div>
        {/* find your match */}
        <div>
          <div className="grid grid-cols-2  justify-center">
            <div className="flex lg:mr-20 md:mr-10 mr-6">
              <div className="w-64 ml-auto">
                <Lottie className="" animationData={find}></Lottie>
              </div>
            </div>
            <div className="border-l-2 border-maroon-color lg:pl-12 md:pl-8 pl-4 flex flex-col gap-3">
              <div className="flex gap-4">
                <span className="inline-flex text-gold-color border border-maroon-color px-2.5 rounded-full lg:text-2xl md:text-xl font-semibold">
                  3
                </span>
                <h3 className="font-fontHeading lg:text-2xl md:text-xl">Find your match</h3>
              </div>

              <p className="text-justify lg:text-base md:text-base text-xs">
                Use our advanced search filters to find profiles that align with
                your preferences. Whether it’s based on location, interests, or
                values, we help you connect with the right person.
              </p>
            </div>
          </div>
        </div>
        {/* get profile information */}
        <div>
          <div className="grid grid-cols-2  justify-center">
            <div className="border-r-2 border-maroon-color lg:pr-12 md:pr-8 pr-4 flex gap-3">
              <div className="mr-2 flex flex-col gap-3">
                <div className="flex items-center gap-4">
                  <h3 className="ml-auto font-fontHeading lg:text-2xl md:text-xl text-sm">
                    Get Profile Information
                  </h3>
                  <span className="inline-flex text-gold-color border border-maroon-color px-2.5 rounded-full lg:text-2xl md:text-xl font-semibold">
                    4
                  </span>
                </div>

                <p className="text-justify lg:text-base md:text-base text-xs">
                  View profiles with detailed information about your potential
                  matches. From hobbies and lifestyle, get all the insights you
                  need to make an informed decision.
                </p>
              </div>
            </div>
            <div className="lg:ml-16 md:ml-16 ml-10">
              <div className="w-1/2">
                <Lottie className="" animationData={profile}></Lottie>
              </div>
            </div>
          </div>
        </div>
        {/* Start Meetups */}
        <div>
          <div className="grid grid-cols-2  justify-center">
            <div className="flex lg:mr-20 md:mr-10 mr-6">
              <div className=" ml-auto">
                <Lottie className="" animationData={meet}></Lottie>
              </div>
            </div>
            <div className="border-l-2 border-maroon-color lg:pl-12 md:pl-8 pl-4 flex flex-col gap-3">
              <div className="flex gap-4">
                <span className="inline-flex text-gold-color border border-maroon-color px-2.5 rounded-full lg:text-2xl md:text-xl font-semibold">
                  5
                </span>
                <h3 className="font-fontHeading lg:text-2xl md:text-xl">Start Meetups</h3>
              </div>
              <p className="text-justify lg:text-base md:text-base text-xs">
                Once you find a match, start meaningful conversations through
                contact information. Plan meetups and take the first step
                towards building a strong and lasting relationship.
              </p>
            </div>
          </div>
        </div>
        {/* Getting Married */}
        <div>
          <div className="grid grid-cols-2  justify-center">
            <div className="border-r-2 border-maroon-color lg:pr-12 md:pr-8 pr-4 flex gap-3">
              <div className="mr-2 flex flex-col gap-3">
                <div className="flex items-center gap-4">
                  <h3 className="ml-auto font-fontHeading lg:text-2xl md:text-xl">
                    Getting Married
                  </h3>
                  <span className="inline-flex text-gold-color border border-maroon-color px-2.5 rounded-full lg:text-2xl md:text-xl font-semibold">
                    6
                  </span>
                </div>

                <p className="text-justify lg:text-base md:text-base text-xs">
                  Found the one? Congratulations! Our platform is here to
                  support you as you take the next big step towards marriage.
                  Start your new life together with confidence and joy.
                </p>
              </div>
            </div>
            <div className="flex items-center lg:ml-16 md:ml-16 ml-10">
              <div className="w-1/2">
                <Lottie className="" animationData={married}></Lottie>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
