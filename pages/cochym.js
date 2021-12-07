import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { triggerFocus } from "antd/lib/input/Input";
import axios from "axios";

import PersonalDetailsForm from "../components/cochym/PersonalDetailsForm";
import PrivateDetailsForm from "../components/cochym/PrivateDetailsForm";
import PaymentForm from "../components/cochym/PaymentForm";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

export default function Cochym() {
  const [pageNumber, setPageNumber] = useState(1);

  const gotoNextPage = (pageNumber) => {
    setPageNumber(pageNumber + 1);
  };

  return (
    <>
      <Head>
        <title>Cochym : TEDxStTeresasCollege</title>
        <meta name="description" content="Cochym : TEDxStTeresasCollege" />
        <link rel="icon" href="logo.ico" />
      </Head>

      <Navbar />

      <div className="flex flex-col items-center justify-center min-h-screen pt-40 text-white bg-black bg-repeat-y bg-night-sky sans">
        <h1 className="block mb-20 text-2xl text-center lg:text-4xl text-ted-red serif">
          Pre-Event Registration Form
        </h1>
        <div className="">
          <Image
            className=""
            src="/cochymLogo.png"
            width="700"
            height="250"
            layout="intrinsic"
          ></Image>
        </div>

        <div className="mx-auto mt-50">
          {pageNumber === 1 && (
            <PersonalDetailsForm gotoNextPage={() => gotoNextPage(2)} />
          )}
          {pageNumber === 2 && (
            <PrivatetailsForm gotoNextPage={() => gotoNextPage(3)} />
          )}
          {pageNumber === 3 && (
            <PaymentForm gotoNextPage={() => gotoNextPage(4)} />
          )}
          {pageNumber > 3 && (
            <p>rder placed! You will receive an email confirmation.</p>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}
