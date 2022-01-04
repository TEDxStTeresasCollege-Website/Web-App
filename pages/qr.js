import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';

import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarked } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useForm } from "react-hook-form";
import axios from "axios";

const register = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const onSubmit = async (values) => {
        try {
            const response = await axios.post(`${window.location.origin}/api/data/newsletter`, values);
            if (response.status == 200) {
                toast.success('Voila! You have successfully subscribed to our newsletter.', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
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
            toast.error('Oops! Something went wrong!', {
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
        <div className="text-white min-h-screen w-full flex flex-col justify-center items-center bg-gradient-to-b from-cyno-1 via-cyno-2 to-cyno-3">
            <Head>
                <title>Register - Cynosure : TEDxStTeresasCollege</title>
                <meta name="description" content="Register - Cynosure : TEDxStTeresasCollege" />
                <link rel="icon" href="logo.ico" />
            </Head>

            <Navbar />

           
            <h1 className="serif text-2xl md:text-3xl lg:text-4xl mt-32 font-bold text-center">Payment Instructions</h1>
            <h3 className="w-full md:w-4/5 lg:w-2/3 text-sm md:text-xl sans text-left p-12">1) Kindly scan the QR code given below for ticket payment to Rachel Reji
            <br /><br />2) The rate per ticket is 1500/-,inclusive of entry to venue,lounges, activities,refreshments and lunch
            <br /><br />3) When making payment <b>please mention the full name of the attendee in the GPay description</b>
            <br /><br />4) After making payment,please take a <b>screenshot clearly showing the amount,description and transaction ID.</b>This will be used as proof of payment in the registration form.
                <br /><br />5) Kindly complete the registration form provided after payment on the next step.<br /><br /> 6) Incomplete GPay registrations will not be refunded<br /><br /></h3>  
            <img className="w-1/2 lg:w-1/4 rounded-md" src="/qr.jpeg" width="50%"/>
           
            

            <div className="py-10 flex justify-center">
                    <Link href='https://forms.gle/Nme6B9xhug2MQXCK8'>
                        <button className="bg-purple-500 hover:bg-purple-700 text-white py-2 px-4 rounded text-sm lg:text-lg">
                            Click here to complete registration
                        </button>
                    </Link>
                </div>

                {/* Footer */}
            <footer className="w-full" >
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
                <div className="w-full mt-20 text-tiny lg:text-lg xl:text-xl">
                    <div className="bg-white-dots md:hidden"><img src="/register/grassMobile.png" width="1920" height="477" /></div>
                    <div className="bg-white-dots hidden md:block"><img src="/register/grass.png" width="2672" height="502" /></div>
                    <div className="p-5 lg:px-10 w-full bg-footer-black md:bg-footer-black-1">
                        <div className="flex flex-row">
                            <div className="text-left flex-1">
                                Reach out at :
                                <div className="text-cyno"><a href="mailto:contact@tedxstteresascollege.in">contact@tedxstteresascollege.in</a></div>
                                <div className="py-2 md:mr-5">
                                    <div className="hover:underline">Organizer</div>
                                    Sneha Anna George<br />
                                    <a href="tel:+917994262370">+917994262370</a><br />
                                </div>
                                <div className="py-2">
                                    <div className="hover:underline">Co-Organizer</div>
                                    Marianne Joseph<br />
                                    <a href="tel:+918078708025">+918078708025</a><br />
                                </div>
                            </div>
                            <div className="text-right flex-1">
                                <a href="https://goo.gl/maps/oNWWs5diruyXFeVe6">
                                    Locate us
                                    <span><FontAwesomeIcon icon={faMapMarked} className="text-cyno ml-2" fixedWidth /></span>
                                </a>
                                <div className="">
                                    St. Teresa’s College<br />Park Avenue Road<br />Ernakulam<br />Kerala - 682011<br />India<br />
                                </div>
                                <div className="my-2">
                                    Say Hello!
                                    <div className="flex justify-end gap-2 md:gap-3 mt-3">
                                        <a href="https://instagram.com/tedxst_teresascollege"><span><FontAwesomeIcon icon={faInstagram} className="text-cyno" size="2x" /></span></a>
                                        <a href="https://www.facebook.com/Tedxstteresascollege-102464092186247/"><span><FontAwesomeIcon icon={faFacebook} className="text-cyno ml-2" size="2x" /></span></a>
                                        <a href="https://www.linkedin.com/company/tedxstteresascollege"><span><FontAwesomeIcon icon={faLinkedin} className="text-cyno ml-2" size="2x" /></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row">
                            <div className="flex-1"></div>
                            <div className="md:flex-1"></div>
                            <div className="lg:flex-1"></div>

                            <div className="flex-1">
                                <div className="text-right p-2 md:p-3 md:mt-10 rounded-xl bg-cyno">
                                    <h1 className="pb-3 text-md">Be the first one to get updates on our latest events!</h1>
                                    <form
                                        onSubmit={handleSubmit(onSubmit)}
                                        className="w-full max-w-sm ml-auto z-50">

                                        <div className="flex items-center mb-2">
                                            <div className="w-1/2">
                                                <label className="block text-gray-100 text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">Name</label>
                                            </div>
                                            <div className="w-1/2">
                                                <input name="name"

                                                    {...register("name", {
                                                        required: { value: true, message: "First name is required" },
                                                        maxLength: { value: 50, message: "Name is too long." },
                                                        minLength: { value: 2, message: "Name is too short." },
                                                    })}
                                                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="name" />
                                                <span className="py-2 text-sm text-purple-400">
                                                    {errors.name?.message}
                                                </span>
                                                <span></span>
                                            </div>
                                        </div>
                                        <div className="flex items-center mb-2">
                                            <div className="w-1/2">
                                                <label className="block text-gray-100 text-right mb-1 md:mb-0 pr-4" htmlFor="inline-password"> Email </label>
                                            </div>
                                            <div className="w-1/2">
                                                <input name="email"
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
                                                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-1
                                        px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white
                                        focus:border-purple-500" id="inline-email" type="email" />
                                                <span className="py-2 text-sm text-purple-400">
                                                    {errors?.emailID?.message}
                                                </span>
                                                <span></span>

                                            </div>
                                        </div>
                                        <div className="flex items-center mb-2">
                                            <div className="w-1/2">
                                                <label className="block text-gray-100 text-right mb-1 md:mb-0 pr-4" htmlFor="inline-password"> Organisation </label>
                                            </div>
                                            <div className="w-1/2">
                                                <input name="organisation" {...register("organisation", {
                                                    required: {
                                                        value: true,
                                                        message: "Organisation is required"
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
                                                    className="bg-gray-200 appearance-none border-2 border-gray-200
                                        rounded w-full py-1 px-3 text-gray-700 leading-tight
                                        focus:outline-none focus:bg-white focus:border-purple-500"
                                                    id="inline-organisation" type="text" />
                                                <span className="py-2 text-sm text-purple-400">
                                                    {errors?.organisation?.message}
                                                </span>
                                                <span></span>
                                            </div>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="w-1/2"></div>
                                            <div className="w-1/2">
                                                <input className="ml-auto shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white py-1 px-3 rounded" type="submit" value="Subscribe" />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>

                        </div>



                        <div className="pt-5 w-full text-center">
                            <div>This independent event is operated under license from TED</div>
                            <div className="md:text-lg font-bold -my-1">· · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · ·</div>
                            <div className="pb-2">Website created by <a className='hover:underline' href="https://github.com/sharunrajeev">Sharun E Rajeev</a> and <a className='hover:underline' href="">Gaurav Bhat</a></div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default register;