import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const PaymentForm = () => {

 
  const handlePayment = async () => {
    try {
      // TODO: call payment API
      const response = await axios.post(`${window.location.origin}/api/checkout/session`)
      window.location.href=response.data
      //setPaymentStatus("success");
    } catch (error) {
      console.log(error);
      setPaymentStatus("failed");
    }
  };
    return (
      <div className="flex flex-col items-center justify-center p-6 mt-10 bg-gray-800 rounded-lg bg-opacity-60">
        <h1 className="mb-5 text-2xl text-white">Make your payment</h1>
        <div className="cursor-pointer" onClick={handlePayment}>
          <Image src="/stripe.svg" height="50" width="150" layout="intrinsic" />
        </div>
      </div>
    );
};

export default PaymentForm;
