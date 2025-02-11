import React, { useEffect, useState } from "react";
import cartonPhoto from "../../../assets/marriedSignUp.jpg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import useAuth from "../../../hooks/useAuth";
import SocialLogin from "../../../componenets/SocialLogin/SocialLogin";
const LogInForm = () => {
     const [isCaptchaValid, setIsCaptchaValid] = useState(false);
     const [wrongValidate, setWrongValidate] = useState("");
     const {signIn} = useAuth();
     const navigate = useNavigate();
     const location = useLocation();

     const from = location.state?.from?.pathname || '/';

     useEffect(() => {
          loadCaptchaEnginge(6);
     }, [])

     //handle login
     const handleLogin = (e) => {
      e.preventDefault();
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;

      signIn(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        navigate(from, {replace: true});
      })
     }

     const handleValidateCaptcha = (e) => {
          const user_captcha_value = e.target.value;
          if(validateCaptcha(user_captcha_value)){
               setIsCaptchaValid(true)
          }
          else{
            setWrongValidate("Please write the correct code");
          }
     }


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
            <Link to='/signUp' className="font-semibold text-indigo-600 hover:text-indigo-500">
              Sign Up Now
            </Link>
          </p>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleLogin} className="space-y-6">
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
                  name="password"
                  type="password"
                  required
                  placeholder="******"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
                <div className="text-sm mt-1">
                  <Link className=" font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </Link>
                </div>
              </div>
            </div>
            {/* Captcha */}
            <div>
              <label className="block text-sm/6 font-medium text-gray-900">
              <LoadCanvasTemplate />
              </label>

              <div className="mt-2">
                <input
                onBlur={handleValidateCaptcha}
                  name="captcha"
                  type="text"
                  
                  required
                  placeholder="type the captcha above"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
                {/* <button onClick={handleValidateCaptcha}>Validate</button> */}
                
              </div>
              <p className="text-xs text-red-500">{wrongValidate}</p>
            </div>

            <div>
              <button 
              disabled={!isCaptchaValid}
                type="submit"
                className={`flex w-full justify-center rounded-md px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${isCaptchaValid ? 'bg-indigo-600 hover:bg-indigo-500' : 'bg-gray-400 hover:bg-gray-500 cursor-not-allowed'}`}
              >
                Log In
              </button>
            </div>
          </form>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default LogInForm;
