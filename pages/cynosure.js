import Navbar from "../components/Navbar";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

import Footer from '../components/cynosure/Footer';
import Slide from '../components/Slide'
import cynoSlider from '../data/cynoSlider'
import SpeakerCard from "../components/cynosure/speakerCard";
import SpeakerCardMobile from "../components/cynosure/speakerCardMobile";

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
            <Footer />

        </div >
    );
}

export default cynosure;