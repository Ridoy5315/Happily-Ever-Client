import React from "react";
import SectionTitle from "../../shared/SectionTitle/SectionTitle";
import Lottie from "lottie-react";
import register from "./jsonFiles/register.json";
import member from "./jsonFiles/premiumMember.json";
import find from "./jsonFiles/find.json";
import profile from "./jsonFiles/profile.json";
import meet from "./jsonFiles/meet.json";
import married from "./jsonFiles/married.json";
const HowItWorks = () => {
  return (
    <div className="pt-28 w-10/12 mx-auto">
      <SectionTitle
        heading="How It Works"
        subHeading="Your Path to Love Starts Here – Easy, Secure, and Trusted"
      ></SectionTitle>
      <div className="mt-14 space-y-16">
        {/* Register */}
        <div>
          <div className="grid grid-cols-2  justify-center">
            <div className="flex mr-20">
              <div className=" ml-auto">
                <Lottie className="" animationData={register}></Lottie>
              </div>
            </div>
            <div className="border-l-2 border-maroon-color pl-12 flex gap-3">
              <div>
                <span className="inline-flex text-gold-color border border-maroon-color px-2.5 rounded-full text-2xl font-semibold">
                  1
                </span>
              </div>
              <div>
                <h3 className="ml-auto">Register</h3>

                <p>
                  Join our community in just a few simple steps! Sign up with
                  your basic details and create a profile that reflects your
                  personality, preferences, and aspirations. Your journey to
                  finding the perfect match begins here.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* premium member */}
        <div>
          <div className="grid grid-cols-2  justify-center">
            <div className="border-r-2 border-maroon-color pr-12 flex gap-3">
              <div className="mr-2">
                <div className="flex">
                  <h3 className="ml-auto">Become a Premium Member</h3>
                </div>
                <p className="text-justify">
                Upgrade to a premium membership to access advanced features like priority profile visibility, unlimited matches, and personalized matchmaking services. Enjoy a seamless and enhanced experience to find your ideal life partner.
                </p>
              </div>
              <div>
                <span className="inline-flex text-gold-color border border-maroon-color px-2.5 rounded-full text-2xl font-semibold">
                  2
                </span>
              </div>
            </div>
            <div className="flex items-center ml-16">
              <div className="w-1/2">
                <Lottie className="" animationData={member}></Lottie>
              </div>
            </div>
          </div>
        </div>
       {/* find your match */}
       <div>
          <div className="grid grid-cols-2  justify-center">
            <div className="flex mr-20">
              <div className="w-64 ml-auto">
                <Lottie className="" animationData={find}></Lottie>
              </div>
            </div>
            <div className="border-l-2 border-maroon-color pl-12 flex gap-3">
              <div>
                <span className="inline-flex text-gold-color border border-maroon-color px-2.5 rounded-full text-2xl font-semibold">
                  3
                </span>
              </div>
              <div>
                <h3 className="ml-auto">find your match</h3>

                <p>
                Use our advanced search filters to find profiles that align with your preferences. Whether it’s based on location, interests, or values, we help you connect with the right person.
                </p>
              </div>
            </div>
          </div>
        </div>
       {/* get profile information */}
       <div>
          <div className="grid grid-cols-2  justify-center">
            <div className="border-r-2 border-maroon-color pr-12 flex gap-3">
              <div className="mr-2">
                <div className="flex">
                  <h3 className="ml-auto">Get Profile Information</h3>
                </div>
                <p className="text-justify">
                View profiles with detailed information about your potential matches. From hobbies and lifestyle, get all the insights you need to make an informed decision.
                </p>
              </div>
              <div>
                <span className="inline-flex text-gold-color border border-maroon-color px-2.5 rounded-full text-2xl font-semibold">
                  4
                </span>
              </div>
            </div>
            <div className="ml-16">
              <div className="w-1/2">
                <Lottie className="" animationData={profile}></Lottie>
              </div>
            </div>
          </div>
        </div>
       {/* Start Meetups */}
       <div>
          <div className="grid grid-cols-2  justify-center">
            <div className="flex mr-20">
              <div className=" ml-auto">
                <Lottie className="" animationData={meet}></Lottie>
              </div>
            </div>
            <div className="border-l-2 border-maroon-color pl-12 flex gap-3">
              <div>
                <span className="inline-flex text-gold-color border border-maroon-color px-2.5 rounded-full text-2xl font-semibold">
                  5
                </span>
              </div>
              <div>
                <h3 className="ml-auto">Start Meetups</h3>

                <p>
                Once you find a match, start meaningful conversations through contact information. Plan meetups and take the first step towards building a strong and lasting relationship.
                </p>
              </div>
            </div>
          </div>
        </div>
       {/* Getting Married */}
       <div>
          <div className="grid grid-cols-2  justify-center">
            <div className="border-r-2 border-maroon-color pr-12 flex gap-3">
              <div className="mr-2">
                <div className="flex">
                  <h3 className="ml-auto">Getting Married</h3>
                </div>
                <p className="text-justify">
                Found the one? Congratulations! Our platform is here to support you as you take the next big step towards marriage. Start your new life together with confidence and joy.
                </p>
              </div>
              <div>
                <span className="inline-flex text-gold-color border border-maroon-color px-2.5 rounded-full text-2xl font-semibold">
                  6
                </span>
              </div>
            </div>
            <div className="flex items-center ml-16">
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
