import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

import Clouds from "../components/cochym/Clouds";
import PersonalDetailsForm from "../components/cochym/PersonalDetailsForm";
import PaymentForm from "../components/cochym/PaymentForm";

const Cochym = () => {
  const [pageNumber, setPageNumber] = useState(1);

  return (
    <div className="w-full">
      <Head>
        <title>Cochym : TEDxStTeresasCollege</title>
        <meta name="description" content="Cochym : TEDxStTeresasCollege" />
        <link rel="icon" href="logo.ico" />
      </Head>

      <Navbar />

      <Clouds />

      <div className="flex flex-col items-center min-h-screen mt-20 text-white bg-black bg-repeat-y bg-night-sky sans">
        <h1 className="z-10 my-5 font-serif text-2xl lg:text-3xl text-ted-red">
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

        {/* <div className="z-10 mx-auto mt-50">
          {pageNumber === 1 ? (
            <PersonalDetailsForm gotoNextPage={() => setPageNumber(2)} />
          ) : (
            <PaymentForm />
          )}
        </div>
        <div className="pt-0 pb-10 text-center">
          <p className="text-lg">
            Note: Ticket not inclusive of food charges. Stalls will be available
            on campus for purchasing food during the event.
          </p>
          <a href="/terms" className="text-sm hover:underline text-white-400">
            Terms and Conditions
          </a>
          <br />
          <a href="/privacy" className="text-sm hover:underline text-white-400">
            Privacy Policy
          </a>
        </div> */}

        <div className="z-10 text-3xl text-center sans">
          <h1 className="mt-20 m-5 font-bold">Limited tickets left!</h1>
          <h3 className="m-5">To register</h3>
          <div className="m-5">
            <a className="no-underline hover:underline inline-block" href="https://wa.me/8078708025">
              <FontAwesomeIcon icon={faWhatsapp} className="text-green-500 inline-block" /> 8078708025</a>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
};

export default Cochym;
