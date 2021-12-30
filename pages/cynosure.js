import Navbar from "../components/Navbar";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarked } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useForm } from "react-hook-form";
import axios from "axios";
import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const cynosure = () => {
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
                <div className="pt-32 pb-10 md:w-4/5 md:pb-6 lg:w-11/12 mx-auto">
                    <Image className="" src="/CynosureLogo.png" height={2251} width={2251} />
                </div>
                <div className="px-10">
                    <p className="text-lg lg:text-2xl xl:text-3xl">Non aute anim exercitation aute nostrud ex ad do in dolor non velit. Occaecat ex excepteur exercitation aliquip ut nostrud enim consectetur.</p>
                    <p className="text-lg lg:text-2xl xl:text-3xl pt-5">Non aute anim exercitation aute nostrud ex ad do in dolor non velit. Occaecat ex excepteur exercitation aliquip ut nostrud enim consectetur.</p>
                </div>
            </div>

            {/* Speakers section */}
            <div className="px-5 bg-white-dots md:w-4/5 lg:w-5/6 mx-auto">
                <h1 className="serif text-4xl md:text-5xl lg:text-6xl my-20 font-bold text-center hover:underline">Unveiling the Voices</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 md:items-center">
                    <div className="mx-auto p-5 md:p-0 md:pr-5 md:w-full">
                        <img className="" src="/cynosure/Meera.png" width="971" height="971"></img>
                    </div>
                    <div className="text-justify">
                        <h2 className="serif text-3xl md:text-2xl lg:text-4xl font-semibold text-center py-5 md:pt-0">Meera Singania</h2>
                        <p className="md:text-sm lg:text-xl">Ea et in eiusmod consequat adipisicing minim cupidatat pariatur. Consectetur consequat elit aute amet incididunt eu laboris ut incididunt cillum enim aliqua magna mollit. Labore incididunt cillum irure sint enim incididunt nisi mollit ipsum. Elit culpa eu irure nostrud et esse enim exercitation dolore Lorem proident nisi. Tempor commodo voluptate sunt veniam in ex ea est aliquip. Nisi velit voluptate ea minim nisi mollit enim in voluptate deserunt aliquip sint incididunt.</p>
                    </div>
                </div>
                <div className="mt-20 grid grid-cols-1 md:grid-cols-2 md:items-center">
                    <div className="text-justify">
                        <h2 className="serif text-3xl md:text-2xl lg:text-4xl font-semibold text-center py-5 md:pt-0">Meera Singania</h2>
                        <p className="md:text-sm lg:text-xl">Ea et in eiusmod consequat adipisicing minim cupidatat pariatur. Consectetur consequat elit aute amet incididunt eu laboris ut incididunt cillum enim aliqua magna mollit. Labore incididunt cillum irure sint enim incididunt nisi mollit ipsum. Elit culpa eu irure nostrud et esse enim exercitation dolore Lorem proident nisi. Tempor commodo voluptate sunt veniam in ex ea est aliquip. Nisi velit voluptate ea minim nisi mollit enim in voluptate deserunt aliquip sint incididunt.</p>
                    </div>
                    <div className="mx-auto p-5 md:p-0 md:pl-5 md:w-full">
                        <img className="" src="/cynosure/Meera.png" width="971" height="971"></img>
                    </div>
                </div>
            </div>

            {/* Performer LineUp */}
            <div className="px-5 bg-white-dots w-full md:w-4/5 lg:w-5/6 mx-auto">
                <h1 className="serif text-4xl md:text-5xl lg:text-6xl my-20 font-bold text-center hover:underline">Performers Line Up</h1>
                <div className="h-40 w-full bg-purple-900">
                </div>
                <div className="py-5 flex justify-center">
                    <Link href='/register'>
                        <button className="bg-purple-500 hover:bg-purple-700 text-white py-2 px-4 rounded text-sm lg:text-lg">
                            Register Now
                        </button>
                    </Link>
                </div>
            </div>

            {/* Footer section */}
            <footer className="">
                <div className="w-full mt-20 text-sm lg:text-lg xl:text-xl">
                    <div className="bg-white-dots"><img src="/mobile/FooterGirl.png" width="1081" height="1453" /></div>
                    <div className="p-5 w-full bg-black">
                        <div className="flex flex-row">
                            <div className="text-left flex-1">
                                Reach out at :
                                <div className="text-blue-400"><a href="mailto:contact@tedxstteresascollege.in">contact@tedxstteresascollege.in</a></div>
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
                                    <span><FontAwesomeIcon icon={faMapMarked} className="text-blue-400 ml-2" fixedWidth /></span>
                                </a>
                                <div className="">
                                    St. Teresa’s College<br />Park Avenue Road<br />Ernakulam<br />Kerala - 682011<br />India<br />
                                </div>
                                <div className="my-2">
                                    Say Hello!
                                    <div className="flex justify-end gap-2 md:gap-3 mt-3">
                                        <a href="https://instagram.com/tedxst_teresascollege"><span><FontAwesomeIcon icon={faInstagram} className="text-blue-400" size="2x" /></span></a>
                                        <a href="https://www.facebook.com/Tedxstteresascollege-102464092186247/"><span><FontAwesomeIcon icon={faFacebook} className="text-blue-400 ml-2" size="2x" /></span></a>
                                        <a href="https://www.linkedin.com/company/tedxstteresascollege"><span><FontAwesomeIcon icon={faLinkedin} className="text-blue-400 ml-2" size="2x" /></span></a>
                                    </div>
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
            </footer >

        </div >
    );
}

export default cynosure;