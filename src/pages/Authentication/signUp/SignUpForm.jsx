import React from "react";
import { useState } from "react";
import { Field, Label, Switch } from "@headlessui/react";
import { Link, useNavigate } from "react-router-dom";
import cartonPhoto from "../../../assets/marriedSignUp.jpg";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import SocialLogin from "../../../componenets/SocialLogin/SocialLogin";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { imageUpload } from "../../../api/utils";
//isolate


const SignUpForm = () => {
  const axiosPublic = useAxiosPublic();
  const { createUser, updateUserProfile } = useAuth();
  const [agreed, setAgreed] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  // const [alertText, setAlertText] = useState('');
  // if(!agreed){
  //   return setAlertText('you have to agree')
  // }
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    
    const imageFile = data.image[0] ;
    
    //image upload to imgbb and then get an url
    const imageInfo = await imageUpload(imageFile)
    if (imageInfo.success) {
      //now send the user data for update profile
      const userInfo = {
        name: data.name,
        email: data.email,
        image: imageInfo.data.display_url,
      };
      createUser(data.email, data.password).then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        updateUserProfile(data.name, imageInfo.data.display_url).then(() => {
          //create user entry in the database
          axiosPublic.post("/user", userInfo)
          .then(res => {
            if(res.data.insertedId){
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "You’ve successfully registered! Get started now.",
                showConfirmButton: false,
                timer: 2500
              });
            }
          })
          reset();
          navigate('/');
        })
        .catch(error => {
          console.log(error);
        })
      });
    }
  };

  return (
    <div className="grid grid-cols-2 w-10/12 mx-auto mt-12 mb-28 bg-white shadow-lg rounded-xl font-fontBody">
      <div className="bg-gold2-color px-16 py-12 space-y-10 rounded-l-xl">
        <div className="text-maroon-color font-fontHeading">
          <h1 className="text-5xl mb-8">Now</h1>
          <h1 className="text-6xl font-semibold leading-tight">
            One Step Away from Something Amazing.
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
      <div className="pt-10">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm space-y-2">
          <h4 className="font-medium text-maroon-color text-3xl">Sign Up for Free</h4>
          <h2 className=" text-xl font-bold tracking-tight text-gray-900">
            Sign up to your account
          </h2>
          <p className=" text-sm/6 text-gray-500">
            Have an account?{" "}
            <Link to='/logIn' className="font-semibold text-indigo-600 hover:text-indigo-500">
              Log in
            </Link>
            <span> to continue</span>
          </p>
        </div>

        <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label className="block text-sm/6 font-medium text-gray-900">
                Full Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  placeholder="Enter Your Name Here"
                  {...register("name", { required: true })}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
                {errors.name && (
                  <span className="text-red-500">Name is required</span>
                )}
              </div>
            </div>
            <div>
              <label className="block text-sm/6 font-medium text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  placeholder="Enter Your Email Here"
                  {...register("email", { required: true })}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
                {errors.email && (
                  <span className="text-red-500">Email is required</span>
                )}
              </div>
            </div>
            <div>
              <label className="block text-sm/6 font-medium text-gray-900">
                Select Image
              </label>
              <div className="mt-2">
                <input
                  type="file"
                  accept="image/*"
                  required
                  {...register("image")}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
                {errors.image && (
                  <span className="text-red-500">Image is required</span>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm/6 font-medium text-gray-900">
                Password
              </label>

              <div className="mt-2 relative">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="******"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
                <span onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-[10px]">{showPassword ? <FaRegEyeSlash></FaRegEyeSlash> : <FaRegEye></FaRegEye>}</span>
                {errors.password?.type === "required" && (
                  <span className="text-red-500">Password is required</span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="text-red-500">
                    Password must be 6 character
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="text-red-500 text-xs">
                    Password must have one upper case, one lower case, one
                    number and one special character
                  </span>
                )}
              </div>
            </div>
            <Field className="flex gap-x-4 sm:col-span-2">
              <div className="flex h-6 items-center">
                <Switch
                  checked={agreed}
                  onChange={setAgreed}
                  className="group flex w-8 flex-none cursor-pointer rounded-full bg-gray-200 p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 data-[checked]:bg-indigo-600"
                >
                  <span className="sr-only">Agree to policies</span>
                  <span
                    aria-hidden="true"
                    className="size-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out group-data-[checked]:translate-x-3.5"
                  />
                </Switch>
              </div>
              <Label className="text-sm/6 text-gray-600">
                By selecting this, you agree to our{" "}
                <a href="#" className="font-semibold text-maroon-color">
                  privacy&nbsp;policy
                </a>
                .
              </Label>
              {/* {errors.exampleRequired && <span>This field is required</span>} */}
              {/* <p>{alertText}</p> */}
            </Field>

            <div className="pb-6">
              <input
                className="flex w-full justify-center rounded-md bg-maroon-color px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-[#800000b1]"
                type="submit"
                value="Sign Up"
              />
            </div>
          </form>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
