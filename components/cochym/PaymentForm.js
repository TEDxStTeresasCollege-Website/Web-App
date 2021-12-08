import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const PaymentForm = () => {
  const [paymentStatus, setPaymentStatus] = useState("pending");

  const handlePayment = () => {
    try {
      // TODO: call payment API
      axios.post("http://localhost:3000/api/checkout/session", data)
      setPaymentStatus("success");
    } catch (error) {
      console.log(error);
      setPaymentStatus("failed");
    }
  };

  if (paymentStatus === "pending") {
    return (
      <div className="flex flex-col items-center justify-center p-6 mt-10 bg-gray-800 rounded-lg bg-opacity-60">
        <h1 className="mb-5 text-2xl text-white">Make your payment</h1>
        <div className="cursor-pointer" onClick={handlePayment}>
          <Image src="/stripe.svg" height="50" width="150" layout="intrinsic" />
        </div>
      </div>
    );
  }

  if (paymentStatus === "success") {
    return (
      <div className="flex flex-col items-center justify-center mt-10 space-y-5">
        <p className="text-lg">
          Order placed! You will receive an email confirmation.
        </p>
        <Link
          href="/"
          className="px-4 py-2 font-bold text-white rounded bg-ted-red"
        >
          <button className="px-4 py-2 font-bold text-white rounded bg-ted-red">
            Go back home
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center mt-10 space-y-5">
      <p className="text-lg">
        Uh oh! Something went wrong. Please try again later!
      </p>
      <Link href="/">
        <button className="px-4 py-2 font-bold text-white rounded bg-ted-red">
          Go back home
        </button>
      </Link>
    </div>
  );
};

export default PaymentForm;
