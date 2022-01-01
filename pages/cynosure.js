import Navbar from "../components/Navbar";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

import Footer from '../components/cynosure/Footer';
import Slide from '../components/Slide'
import cynoSlider from '../data/cynoSlider'
import SpeakerCard from "../components/cynosure/speakerCard";
import SpeakerCardMobile from "../components/cynosure/speakerCardMobile";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarked } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useForm } from "react-hook-form";
import axios from "axios";
import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const cynosure = () => {
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
                <title>Cynosure : TEDxStTeresasCollege</title>
                <meta name="description" content="Cynosure : TEDxStTeresasCollege" />
                <link rel="icon" href="logo.ico" />
            </Head>

            <Navbar />

            {/* The main section */}
            <div className="text-center bg-white-dots md:w-4/5 mx-auto">
                <div className="pt-32 pb-10 md:w-4/5 md:pb-6 lg:w-2/5 mx-auto">
                    <Image className="" src="/CynosureLogo.png" height={2251} width={2251} loading="eager" />
                </div>
                <div className="px-10">
                    <p className="text-lg lg:text-xl xl:text-2xl">Non aute anim exercitation aute nostrud ex ad do in dolor non velit. Occaecat ex excepteur exercitation aliquip ut nostrud enim consectetur.</p>
                    <p className="text-lg lg:text-xl xl:text-2xl pt-5">Non aute anim exercitation aute nostrud ex ad do in dolor non velit. Occaecat ex excepteur exercitation aliquip ut nostrud enim consectetur.</p>
                </div>
            </div>

            {/* Speakers section */}
            <div className="px-5 bg-white-dots md:w-4/5 lg:w-5/6 mx-auto">
                {/* Heading */}
                <h1 className="serif text-4xl md:text-5xl lg:text-6xl mt-20 font-bold text-center hover:underline">Unveiling the Voices</h1>

                {/* Mobile View */}
                <SpeakerCardMobile
                    imgsrc="/cynosure/Meera.png"
                    imgwidth="971"
                    imgheight="971"
                    speaker="Meera"
                    details="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                />

                <SpeakerCardMobile
                    imgsrc="/cynosure/Meera.png"
                    imgwidth="971"
                    imgheight="971"
                    speaker="Meera"
                    details="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                />

                <SpeakerCardMobile
                    imgsrc="/cynosure/Meera.png"
                    imgwidth="971"
                    imgheight="971"
                    speaker="Meera"
                    details="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                />

                <SpeakerCardMobile
                    imgsrc="/cynosure/Meera.png"
                    imgwidth="971"
                    imgheight="971"
                    speaker="Meera"
                    details="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                />

                <SpeakerCardMobile
                    imgsrc="/cynosure/Meera.png"
                    imgwidth="971"
                    imgheight="971"
                    speaker="Meera"
                    details="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                />

                {/* Web View */}
                <SpeakerCard
                    option='left'
                    imgsrc="/cynosure/Meera.png"
                    imgwidth="971"
                    imgheight="971"
                    speaker="Meera"
                    details="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                />

                <SpeakerCard
                    option='right'
                    imgsrc="/cynosure/Meera.png"
                    imgwidth="971"
                    imgheight="971"
                    speaker="Meera"
                    details="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                />

                <SpeakerCard
                    option='left'
                    imgsrc="/cynosure/Meera.png"
                    imgwidth="971"
                    imgheight="971"
                    speaker="Meera"
                    details="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                />

                <SpeakerCard
                    option='right'
                    imgsrc="/cynosure/Meera.png"
                    imgwidth="971"
                    imgheight="971"
                    speaker="Meera"
                    details="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                />

                <SpeakerCard
                    option='left'
                    imgsrc="/cynosure/Meera.png"
                    imgwidth="971"
                    imgheight="971"
                    speaker="Meera"
                    details="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                />

            </div>

            {/* Performer LineUp */}
            <div className="px-5 bg-white-dots w-full md:w-4/5 lg:w-5/6 mx-auto">
                <h1 className="serif text-4xl md:text-5xl lg:text-6xl my-20 font-bold text-center hover:underline">Performers Line Up</h1>
                <div className="w-4/5 mx-auto"><Slide images={cynoSlider} /></div>
                <div className="py-10 flex justify-center">
                    <Link href='/register'>
                        <button className="bg-purple-500 hover:bg-purple-700 text-white py-2 px-4 rounded text-sm lg:text-lg">
                            Register Now
                        </button>
                    </Link>
                </div>
            </div>

            {/* Footer section */}
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
                <div className="w-full mt-20 text-sm lg:text-lg xl:text-xl">
                    <div className="bg-white-dots md:hidden"><img src="/mobile/FooterGirl.png" width="1081" height="1453" /></div>
                    <div className="bg-white-dots hidden md:block"><img src="/web/cynosureFooter.png" width="2673" height="1615" /></div>
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

        </div >
    );
}

export default cynosure;