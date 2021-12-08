import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";
import Image from "next/image";

import PersonalDetailsForm from "../components/cochym/PersonalDetailsForm";
import PaymentForm from "../components/cochym/PaymentForm";

const Cochym = () => {
  const [pageNumber, setPageNumber] = useState(1);

  return (
    <>
      <Head>
        <title>Cochym : TEDxStTeresasCollege</title>
        <meta name="description" content="Cochym : TEDxStTeresasCollege" />
        <link rel="icon" href="logo.ico" />
      </Head>

      <Navbar />

      <div className="flex flex-col items-center min-h-screen mt-20 text-white bg-black bg-repeat-y bg-night-sky sans">
        <h1 className="my-5 font-serif text-2xl lg:text-3xl text-ted-red">
          Pre-Event Registration Form
        </h1>
        <div className="">
          <Image
            src="/cochymLogo.png"
            width="504"
            height="180"
            layout="intrinsic"
          ></Image>
        </div>

        <div className="mx-auto mt-50">
          {pageNumber === 1 ? (
            <PersonalDetailsForm gotoNextPage={() => setPageNumber(2)} />
          ) : (
            <PaymentForm />
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Cochym;
