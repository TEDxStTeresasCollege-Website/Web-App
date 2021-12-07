import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const PaymentForm = () => {
  const [paymentStatus, setPaymentStatus] = useState("pending");

  const handlePayment = () => {
    try {
      // TODO: call payment API
      setPaymentStatus("success");
    } catch (error) {
      console.log(error);
      setPaymentStatus("failed");
    }
  };

  if (paymentStatus === "pending") {
    return (
      <div className="flex flex-col items-center justify-center p-6 m-2 bg-gray-800 rounded-lg bg-opacity-60">
        <h1 className="mb-5 text-2xl text-white">Payment</h1>
        <div className="cursor-pointer" onClick={handlePayment}>
          <Image
            src="/stripe.svg"
            height="50"
            width="150"
            layout="intrinsic"
          ></Image>
        </div>
      </div>
    );
  }

  if (paymentStatus === "success") {
    return (
      <div className="flex flex-col items-center justify-center space-y-5">
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
    <div>
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
