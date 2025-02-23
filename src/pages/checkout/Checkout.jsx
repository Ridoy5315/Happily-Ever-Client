import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { findUserAge } from "../../api/utils";
import useAuth from "../../hooks/useAuth";
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from "../../componenets/chechkout/CheckoutForm";
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY)
const Checkout = () => {
  const [card, setCard] = useState({});
  const axiosSecure = useAxiosSecure();
  const [age, setAge] = useState(null);
  const { user } = useAuth();
  const { id } = useParams();
  useEffect(() => {
    const userCard = async () => {
      const { data } = await axiosSecure.get(`/biodata-details/${id}`);
      setCard(data);
      setAge(findUserAge(data.dateOfBirth));
    };
    userCard();
  }, []);

  const contactRequestInfo = {
    userEmail: user?.email,
    status: Pending,
    requested_Person: {
      name: card?.name,
      email: card?.contactEmail,
      phone_Number: card?.mobileNumber,
    }
    
  }

  return (
    <div className="w-10/12 mx-auto mt-10 grid grid-cols-3 gap-8">
      {/* checkout form */}
      <div className="col-span-2 bg-white py-8 px-10 space-y-7">
          {/* form */}
          <div className="space-y-3">
            <h3 className="text-xl text-gold-color font-semibold">
              Information
            </h3>
            <div className="grid grid-cols-5 gap-2 items-center">
              <label className="col-span-1">Biodata Id</label>
              <div className="w-full col-span-4">
                <input
                  type="number"
                  defaultValue={card.bioDataId}
                  required
                  disabled
                  name="bioDataId"
                  className="w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div className="grid grid-cols-5 gap-2 items-center">
              <label className="col-span-1">Your email</label>
              <div className="w-full col-span-4">
                <input
                  type="email"
                  defaultValue={user?.email}
                  name="email"
                  required
                  disabled
                  className="w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
          </div>
          {/* payment details */}
          <div>
            <h3 className="text-xl text-gold-color font-semibold">
              Payment details
            </h3>
            {/* checkout form */}
            <div>
               <Elements stripe={stripePromise}>
                    {/* form component */}
                    <CheckoutForm contactRequestInfo={contactRequestInfo}></CheckoutForm>
               </Elements>
            </div>
          </div>
      </div>
      {/* checkout summary */}
      <div className="col-span-1">
        {/* show the a card which user contact info want to see */}
        <div className="flex gap-5 items-center my-8">
          <div className="w-16 h-16">
            <img
              className="w-full h-full rounded-full object-cover"
              src={card.profileImage}
              alt=""
            />
          </div>
          <div className="text-sm">
            <h5 className="text-xl text-maroon-color font-medium">
              {card.name}
            </h5>
            <p>{age} years old</p>
            <p>{card.occupation}</p>
          </div>
        </div>
        {/* summary */}
        <div className="bg-white py-4 px-6 text-sm">
          <div className="border-b pb-3">
            <h3 className="text-lg text-maroon-color font-medium">Summary</h3>
            <p className="">The total cost consist of the subtotal and tax.</p>
          </div>
          <div className="flex justify-between mt-4 border-b pb-3">
            <ul className="font-semibold space-y-1">
              <li>Subtotal</li>
              <li>Tax</li>
            </ul>
            <ul>
              <li>$ 5.00</li>
              <li>$ 0.00</li>
            </ul>
          </div>
          <div className="mt-3 flex justify-between">
            <p className="font-semibold text-maroon-color">TOTAL</p>
            <p>$ 5.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
