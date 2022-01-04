import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";

import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarked } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { useForm } from "react-hook-form";
import axios from "axios";
import Checkbox from "rc-checkbox";

const register = () => {
  const [isChecked, setIsChecked] = React.useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (values) => {
    try {
      const response = await axios.post(
        `${window.location.origin}/api/data/newsletter`,
        values
      );
      if (response.status == 200) {
        toast.success(
          "Voila! You have successfully subscribed to our newsletter.",
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }
        );
      } else if (response.status == 201) {
        toast.success(response.data.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (error) {
      toast.error("Oops! Something went wrong!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen text-white bg-gradient-to-b from-cyno-1 via-cyno-2 to-cyno-3">
      <Head>
        <title>Register - Cynosure : TEDxStTeresasCollege</title>
        <meta
          name="description"
          content="Register - Cynosure : TEDxStTeresasCollege"
        />
        <link rel="icon" href="logo.ico" />
      </Head>

      <Navbar />

      {/* The main section */}
      <div className="mx-auto w-full text-center md:w-4/5">
        <div className="pt-32 pb-10 mx-auto md:w-2/5 md:pb-6 lg:w-1/3">
          <Image
            className=""
            src="/CynosureLogo.png"
            height={2251}
            width={2251}
            loading="eager"
          />
        </div>
        <div className="px-0 sm:px-10">
          <h1 className="serif text-3xl md:text-4xl lg:text-5xl mt-10 font-bold text-center hover:underline">
            Registration Instructions
          </h1>
          <ol className="w-full md:w-5/5 lg:w-2/3 text-sm md:text-xl sans text-left pt-10 px-10 sm:px-12 list-decimal mx-auto">
            <li className="py-4">There will be no refund of tickets once purchased.</li>
            <li className="py-4">Ticket price is inclusive of entry to venue,lounges,activities,refreshments and lunch.</li>
            <li className="py-4">Payment will be accepted through Google pay only.</li>
            <li className="py-4">Kindly complete the registration form provided after the payment on the next step.</li>
            <li className="py-4">For any queries, kindly contact <a href="tel:+919447378402" className="hover:text-purple-300 hover:underline">+919447378402</a> (Aparna Panicker).</li>
          </ol>
        </div>
      </div>

      <div className="flex flex-col justify-center py-10 text-sm md:text-xl">
        <div className="flex pb-4 space-x-3">
          <Checkbox
            checked={isChecked}
            onChange={() => setIsChecked((checked) => !checked)}
            id="terms-and-conditions"
          />
          <label htmlFor="terms-and-conditions">
            I agree with the terms and conditions
          </label>
        </div>
        <Link href="/qr">
          <button
            disabled={!isChecked}
            className="px-4 py-2 text-sm text-white bg-purple-500 rounded hover:bg-purple-700 lg:text-lg w-2/3 mx-auto mt-5"
          >
            Proceed to Pay
          </button>
        </Link>
      </div>

      {/* Footer */}
      <footer className="w-full">
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <div className="w-full mt-20 text-tiny md:text-sm lg:text-lg xl:text-xl">
          <div className="bg-white-dots md:hidden">
            <img src="/register/grassMobile.png" width="1920" height="477" />
          </div>
          <div className="hidden bg-white-dots md:block">
            <img src="/register/grass.png" width="2672" height="502" />
          </div>
          <div className="w-full p-5 lg:px-10 bg-footer-black md:bg-footer-black-1">
            <div className="flex flex-row">
              <div className="flex-1 text-left">
                Reach out at :
                <div className="text-cyno">
                  <a href="mailto:contact@tedxstteresascollege.in">
                    contact@tedxstteresascollege.in
                  </a>
                </div>
                <div className="py-2 md:mr-5">
                  <div className="hover:underline">Organizer</div>
                  Sneha Anna George
                  <br />
                  <a href="tel:+917994262370">+917994262370</a>
                  <br />
                </div>
                <div className="py-2">
                  <div className="hover:underline">Co-Organizer</div>
                  Marianne Joseph
                  <br />
                  <a href="tel:+918078708025">+918078708025</a>
                  <br />
                </div>
              </div>
              <div className="flex-1 text-right">
                <a href="https://goo.gl/maps/oNWWs5diruyXFeVe6">
                  Locate us
                  <span>
                    <FontAwesomeIcon
                      icon={faMapMarked}
                      className="ml-2 text-cyno"
                      fixedWidth
                    />
                  </span>
                </a>
                <div className="">
                  St. Teresa’s College
                  <br />
                  Park Avenue Road
                  <br />
                  Ernakulam
                  <br />
                  Kerala - 682011
                  <br />
                  India
                  <br />
                </div>
                <div className="my-2">
                  Say Hello!
                  <div className="flex justify-end gap-2 mt-3 md:gap-3">
                    <a href="https://instagram.com/tedxst_teresascollege">
                      <span>
                        <FontAwesomeIcon
                          icon={faInstagram}
                          className="text-cyno"
                          size="2x"
                        />
                      </span>
                    </a>
                    <a href="https://www.facebook.com/Tedxstteresascollege-102464092186247/">
                      <span>
                        <FontAwesomeIcon
                          icon={faFacebook}
                          className="ml-2 text-cyno"
                          size="2x"
                        />
                      </span>
                    </a>
                    <a href="https://www.linkedin.com/company/tedxstteresascollege">
                      <span>
                        <FontAwesomeIcon
                          icon={faLinkedin}
                          className="ml-2 text-cyno"
                          size="2x"
                        />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="sm:flex-1"></div>
              <div className="md:flex-1"></div>
              <div className="2xl:flex-1"></div>
              <div className="2xl:flex-1"></div>

              <div className="flex-1">
                <div className="p-2 text-center sm:text-right md:p-3 md:mt-10 rounded-xl bg-cyno">
                  <h1 className="pb-3 text-md">
                    Be the first one to get updates on our latest events!
                  </h1>
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="z-50 w-full max-w-sm ml-auto"
                  >
                    <div className="flex items-center mb-2">
                      <div className="w-1/3 sm:w-1/2">
                        <label
                          className="block pr-4 mb-1 text-right text-gray-100 md:mb-0"
                          htmlFor="inline-full-name"
                        >
                          Name
                        </label>
                      </div>
                      <div className="w-1/2">
                        <input
                          name="name"
                          {...register("name", {
                            required: {
                              value: true,
                              message: "First name is required",
                            },
                            maxLength: {
                              value: 50,
                              message: "Name is too long.",
                            },
                            minLength: {
                              value: 2,
                              message: "Name is too short.",
                            },
                          })}
                          className="w-full px-3 py-1 leading-tight text-gray-700 bg-gray-200 border-2 border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-purple-500"
                          id="inline-full-name"
                          type="name"
                        />
                        <span className="py-2 text-sm text-purple-400">
                          {errors.name?.message}
                        </span>
                        <span></span>
                      </div>
                    </div>
                    <div className="flex items-center mb-2">
                      <div className="w-1/3 sm:w-1/2">
                        <label
                          className="block pr-4 mb-1 text-right text-gray-100 md:mb-0"
                          htmlFor="inline-password"
                        >
                          {" "}
                          Email{" "}
                        </label>
                      </div>
                      <div className="w-1/2">
                        <input
                          name="email"
                          {...register("emailID", {
                            required: {
                              value: true,
                              message: "Valid Email ID is required",
                            },
                            maxLength: {
                              value: 120,
                              message: "You exceeded the maximum limit.",
                            },
                            minLength: {
                              value: 8,
                              message: "Too short to be an Email ID",
                            },
                          })}
                          className="w-full px-3 py-1 leading-tight text-gray-700 bg-gray-200 border-2 border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-purple-500"
                          id="inline-email"
                          type="email"
                        />
                        <span className="py-2 text-sm text-purple-400">
                          {errors?.emailID?.message}
                        </span>
                        <span></span>
                      </div>
                    </div>
                    <div className="flex items-center mb-2">
                      <div className="w-1/3 sm:w-1/2">
                        <label
                          className="block pr-4 mb-1 text-right text-gray-100 md:mb-0"
                          htmlFor="inline-password"
                        >
                          {" "}
                          Organisation{" "}
                        </label>
                      </div>
                      <div className="w-1/2">
                        <input
                          name="organisation"
                          {...register("organisation", {
                            required: {
                              value: true,
                              message: "Organisation is required",
                            },
                            maxLength: {
                              value: 30,
                              message: "You exceeded the maximum limit.",
                            },
                            minLength: {
                              value: 2,
                              message: "Too short to be a valid organisation",
                            },
                          })}
                          className="w-full px-3 py-1 leading-tight text-gray-700 bg-gray-200 border-2 border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-purple-500"
                          id="inline-organisation"
                          type="text"
                        />
                        <span className="py-2 text-sm text-purple-400">
                          {errors?.organisation?.message}
                        </span>
                        <span></span>
                      </div>
                    </div>
                    <div className="flex items-center justify-center sm:justify-end">
                      <div className="">
                        <input
                          className="px-3 py-1 ml-auto text-white bg-purple-500 rounded shadow hover:bg-purple-400 focus:shadow-outline focus:outline-none"
                          type="submit"
                          value="Subscribe"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="w-full pt-5 text-center">
              <div>
                This independent event is operated under license from TED
              </div>
              <div className="-my-1 font-bold md:text-lg">
                · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · ·
                · · · · · · · · · · · ·
              </div>
              <div className="pb-2">
                Website created by{" "}
                <a
                  className="hover:underline"
                  href="https://github.com/sharunrajeev"
                >
                  Sharun E Rajeev
                </a>{" "}
                and{" "}
                <a className="hover:underline" href="">
                  Gaurav Bhat
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default register;
