import React from 'react';
import cartonPhoto from "../../../assets/marriedSignUp.jpg";
import { Link } from 'react-router-dom';
const LogInForm = () => {
     return (
          <div className="grid grid-cols-2 w-10/12 mx-auto mt-12 mb-28 bg-white shadow-lg rounded-xl">
      <div className="bg-gold2-color px-16 py-12 space-y-10 rounded-l-xl">
        <div className="text-maroon-color">
          <h1 className="text-5xl mb-8">Now</h1>
          <h1 className="text-6xl font-semibold leading-tight">
          Log In to Discover Your Soulmate
          </h1>
        </div>
        <div className="relative  mx-auto w-96 h-96 rounded-full">
          <img
            className="w-full h-full rounded-full object-cover mx-auto"
            src={cartonPhoto}
            alt=""
          />
        </div>
      </div>
      <div className="">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h4>Welcome Back!</h4>
          <h2 className=" text-2xl/9 font-bold tracking-tight text-gray-900">
            Log in to your account
          </h2>
          <p className=" text-sm/6 text-gray-500">
          Don’t have an account?{" "}
            <Link className="font-semibold text-indigo-600 hover:text-indigo-500">
            Sign Up Now
            </Link>
          </p>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6">
            
            <div>
              <label className="block text-sm/6 font-medium text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Enter Your Email Here"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            

            <div>
              <label className="block text-sm/6 font-medium text-gray-900">
                Password
              </label>

              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  placeholder="******"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
                
              </div>
            </div>
            

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
     );
};

export default LogInForm;