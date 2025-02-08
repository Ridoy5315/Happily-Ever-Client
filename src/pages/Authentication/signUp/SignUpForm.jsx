import React from "react";
import { useState } from "react";
import { Field, Label, Switch } from "@headlessui/react";
import { Link } from "react-router-dom";
import cartonPhoto from "../../../assets/marriedSignUp.jpg";
//isolate
const SignUpForm = () => {
  const [agreed, setAgreed] = useState(false);
  return (
    //     <div className="">
    //       {/* <div
    //         aria-hidden="true"
    //         className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
    //       >
    //         <div
    //           style={{
    //             clipPath:
    //               "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
    //           }}
    //           className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
    //         />
    //       </div> */}

    //       <form
    //         action="#"
    //         method="POST"
    //         className="mx-auto mt-16 max-w-xl sm:mt-20 "
    //       >
    //         <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
    //           <div>
    //             <label
    //               htmlFor="first-name"
    //               className="block text-sm/6 font-semibold text-gray-900"
    //             >
    //               First name
    //             </label>
    //             <div className="mt-2.5">
    //               <input
    //                 id="first-name"
    //                 name="first-name"
    //                 type="text"
    //                 autoComplete="given-name"
    //                 className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
    //               />
    //             </div>
    //           </div>
    //           <div>
    //             <label
    //               htmlFor="last-name"
    //               className="block text-sm/6 font-semibold text-gray-900"
    //             >
    //               Last name
    //             </label>
    //             <div className="mt-2.5">
    //               <input
    //                 id="last-name"
    //                 name="last-name"
    //                 type="text"
    //                 autoComplete="family-name"
    //                 className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
    //               />
    //             </div>
    //           </div>
    //           <div className="sm:col-span-2">
    //             <label
    //               htmlFor="company"
    //               className="block text-sm/6 font-semibold text-gray-900"
    //             >
    //               Company
    //             </label>
    //             <div className="mt-2.5">
    //               <input
    //                 id="company"
    //                 name="company"
    //                 type="text"
    //                 autoComplete="organization"
    //                 className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
    //               />
    //             </div>
    //           </div>
    //           <div className="sm:col-span-2">
    //             <label
    //               htmlFor="email"
    //               className="block text-sm/6 font-semibold text-gray-900"
    //             >
    //               Email
    //             </label>
    //             <div className="mt-2.5">
    //               <input
    //                 id="email"
    //                 name="email"
    //                 type="email"
    //                 autoComplete="email"
    //                 className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
    //               />
    //             </div>
    //           </div>

    //           <div className="sm:col-span-2">
    //             <label
    //               htmlFor="message"
    //               className="block text-sm/6 font-semibold text-gray-900"
    //             >
    //               Message
    //             </label>
    //             <div className="mt-2.5">
    //               <textarea
    //                 id="message"
    //                 name="message"
    //                 rows={4}
    //                 className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
    //                 defaultValue={""}
    //               />
    //             </div>
    //           </div>
    //           <Field className="flex gap-x-4 sm:col-span-2">
    //             <div className="flex h-6 items-center">
    //               <Switch
    //                 checked={agreed}
    //                 onChange={setAgreed}
    //                 className="group flex w-8 flex-none cursor-pointer rounded-full bg-gray-200 p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 data-[checked]:bg-indigo-600"
    //               >
    //                 <span className="sr-only">Agree to policies</span>
    //                 <span
    //                   aria-hidden="true"
    //                   className="size-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out group-data-[checked]:translate-x-3.5"
    //                 />
    //               </Switch>
    //             </div>
    //             <Label className="text-sm/6 text-gray-600">
    //               By selecting this, you agree to our{" "}
    //               <a href="#" className="font-semibold text-indigo-600">
    //                 privacy&nbsp;policy
    //               </a>
    //               .
    //             </Label>
    //           </Field>
    //         </div>
    //         <div className="mt-10">
    //           <button
    //             type="submit"
    //             className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    //           >
    //             Let's talk
    //           </button>
    //         </div>
    //       </form>
    //     </div>
    <div className="grid grid-cols-2 w-10/12 mx-auto mt-12 mb-28 bg-white shadow-lg rounded-xl">
      <div className="bg-gold2-color px-16 py-12 space-y-10 rounded-l-xl">
        <div className="text-maroon-color">
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
      <div className="">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h4>Sign Up for Free</h4>
          <h2 className=" text-2xl/9 font-bold tracking-tight text-gray-900">
            Sign up to your account
          </h2>
          <p className=" text-sm/6 text-gray-500">
            Have an account?{" "}
            <Link className="font-semibold text-indigo-600 hover:text-indigo-500">
              Log in
            </Link>
            <span> to continue</span>
          </p>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6">
            <div>
              <label className="block text-sm/6 font-medium text-gray-900">
                Full Name
              </label>
              <div className="mt-2">
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="Enter Your Name Here"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
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
                Select Image
              </label>
              <div className="mt-2">
                <input
                  name="image"
                  type="file"
                  accept="image/*"
                  required
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
                <div className="text-sm mt-1">
                  <Link className=" font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </Link>
                </div>
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
                <a href="#" className="font-semibold text-indigo-600">
                  privacy&nbsp;policy
                </a>
                .
              </Label>
            </Field>

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

export default SignUpForm;
