import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarked } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Head from 'next/head'
import Slide from '../components/Slide'
import CircleCard from '../components/CircleCards'
import Navbar from '../components/Navbar'
import circleSlider from "../data/circleSlider";

const Circles = () => {
    return (
        <>

            <Head>
                <title>TED Circles : TEDxStTeresasCollege</title>
                <meta name="description" content="TED Circles : TEDxStTeresasCollege" />
                <link rel="icon" href="logo.ico" />
            </Head>

            <Navbar />

            <main className="bg-gradient-to-b from-white via-pink-200 to-pink-300">

                <div className="text-center font-sans text-black mx-auto w-5/6 md:w-3/4 min-h-screen pt-52">
                    <h1 className="font-bold text-2xl md:text-3xl">Circles Cards</h1>
                    <CircleCard />
                </div>

                <div className="text-white relative flex flex-col items-center justify-center text-center md:w-3/4 font-san mx-auto w-full min-h-screen mt-5">
                    <h2 className="text-2xl font-semibold pb-10">Learn more about TED Circles</h2>
                    <div className="mx-auto videowrapper">
                        <iframe src="https://www.youtube-nocookie.com/embed/qvoShsSiHuI?start=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div className='absolute right-10 top-0 w-56 h-66 z-10 web'>
                        <img className='' src="/circle/butterfly.png" loading='lazy' />
                    </div>
                </div>

                <div className="w-full min-h-screen">
                    <div className="flex flex-col gap-5 items-center justify-center font-sans min-h-full mx-auto w-full p-2 md:w-1/2">
                        <h1 className="font-bold text-2xl md:text-3xl mb-5">Camera Roll</h1>
                        <Slide images={ circleSlider }/>
                    </div>
                </div>

                <div className="flex flex-col gap-5 items-center text-center justify-center font-sans text-black mx-auto w-5/6 md:w-3/4 min-h-full mt-52 mb-32">
                    <h2 className="text-2xl font-semibold">Our Next Event</h2>
                    <div className="w-96 h-52 bg-gray-800"></div>
                    <h2 className="text-lg">Date : <span></span></h2>
                    <h2 className="text-lg">Time : <span></span></h2>
                    <h2 className="text-lg">Venue : <span></span></h2>
                    <h2 className="text-lg">Description<span></span></h2>
                    <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                        I'm there! Sign me up!
                    </button>
                </div>

                <div className="relative">
                    <div className='absolute -bottom-72 left-10 md:left-32 w-56 h-66'>
                        <img className='mobile' src="/circle/girlMobile.png" loading='lazy' />
                        <img className='web' src="/circle/girlWeb.png" loading='lazy' />
                    </div>
                </div>

            </main>

            <footer className="text-xs md:text-sm text-gray-100 relative min-h-screen w-full md:mt-0">

                <div className="absolute -z-20 top-32 md:top-20 lg:top-0">
                    <img className="bg-contain web" src="circle/footerCircles.png" loading="eager"></img>
                    <img className="bg-contain mobile" src="mobile/footer/circlesFooter.png" loading="eager"></img>
                </div>

                <div className="absolute -z-20 w-full h-72 bottom-0 bg-black ted-sizing"></div>

                <div className="absolute bottom-0 w-full">
                    <div className="grid grid-cols-2 gap-5 px-5 md:p-10">
                        <div className="text-left">
                            Reach out at :
                            <div className="text-blue-400"><a href="">tedxstteresascollege@gmail.com</a></div>
                            <div className="py-2 md:float-left md:mr-5">
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
                        <div className="text-right">
                            <a href="https://goo.gl/maps/oNWWs5diruyXFeVe6">
                                Locate us
                                <span><FontAwesomeIcon icon={faMapMarked} className="text-blue-400 ml-2" fixedWidth /></span>
                            </a>
                            <div className="">
                                St. Teresa’s College<br />Park Avenue Road<br />Ernakulam<br />Kerala - 682011<br />India<br />
                            </div>
                        </div>
                        <div className="text-left">
                            Say Hello!
                            <div className="flex justify-start gap-3 mt-3">
                                <a href="https://instagram.com/tedxst_teresascollege"><span><FontAwesomeIcon icon={faInstagram} className="text-blue-400" size="2x" /></span></a>
                                <a href="https://www.facebook.com/Tedxstteresascollege-102464092186247/"><span><FontAwesomeIcon icon={faFacebook} className="text-blue-400 ml-2" size="2x" /></span></a>
                                <a href="https://www.linkedin.com/company/tedxstteresascollege"><span><FontAwesomeIcon icon={faLinkedin} className="text-blue-400 ml-2" size="2x" /></span></a>
                            </div>
                        </div>
                        <div className="">
                            <form action="\home" className="w-full max-w-sm md:ml-auto">
                                <div className="flex items-center mb-2">
                                    <div className="w-1/2">
                                        <label className="block text-gray-100 text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name"> Name </label>
                                    </div>
                                    <div className="w-1/2">
                                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" />
                                    </div>
                                </div>
                                <div className="flex items-center mb-2">
                                    <div className="w-1/2">
                                        <label className="block text-gray-100 text-right mb-1 md:mb-0 pr-4" htmlFor="inline-password"> Email </label>
                                    </div>
                                    <div className="w-1/2">
                                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-email" type="email" />
                                    </div>
                                </div>
                                <div className="flex items-center mb-2">
                                    <div className="w-1/2">
                                        <label className="block text-gray-100 text-right mb-1 md:mb-0 pr-4" htmlFor="inline-password"> Organisation </label>
                                    </div>
                                    <div className="w-1/2">
                                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-organisation" type="text" />
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-1/2"></div>
                                    <div className="w-1/2">
                                        <input className="ml-auto shadow bg-blue-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white py-1 px-3 rounded" type="button" value="Subscribe" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="text-center mx-auto pt-10 pb-5 w-full md:w-1/2 px-2 md:mt-5">
                        This independent event is operated under license from TED<br />
                        Website developed by <a className='hover:underline' href="">Sharun E Rajeev</a> and <a className='hover:underline' href="">Gaurav Bhat</a>
                    </div>
                </div>


            </footer>

        </>
    );
}

export default Circles;