import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarked } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <footer className="w-full text-xs md:text-sm relative min-h-full sans text-white bg-black">

            <div className="relative top-0 w-full h-full">
                <img className="absolute object-contain w-full block lg:hidden" src="/mobile/footer.png"></img>
                <img className="absolute object-contain hidden lg:block" src="/web/footer.png"></img>
                <div className="relative w-full h-full top-0 z-50">
                    <div className="relative top-20 lg:top-0 w-full p-10 pt-16">
                        <div className="flex flex-row">
                            <div className="text-left flex-1">
                                Reach out at :
                                <div className="text-blue-400"><a href="">tedxstteresascollege@gmail.com</a></div>
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
                            </div>
                        </div>
                        <div className="flex flex-row">
                            <div className="text-left my-10 py-3 flex-1">
                                Say Hello!
                                <div className="flex justify-start gap-3 mt-3">
                                    <a href="https://instagram.com/tedxst_teresascollege"><span><FontAwesomeIcon icon={faInstagram} className="text-blue-400" size="2x" /></span></a>
                                    <a href="https://www.facebook.com/Tedxstteresascollege-102464092186247/"><span><FontAwesomeIcon icon={faFacebook} className="text-blue-400 ml-2" size="2x" /></span></a>
                                    <a href="https://www.linkedin.com/company/tedxstteresascollege"><span><FontAwesomeIcon icon={faLinkedin} className="text-blue-400 ml-2" size="2x" /></span></a>
                                </div>
                            </div>
                            <div className="text-right float-right">
                                <div className="text-right  p-3 mt-10 rounded-xl border bg-gray-800">
                                    <h1 className="pb-3 text-md">Be the first one to get updates on our latest events</h1>
                                    <form action="/home" className="w-full max-w-sm ml-auto z-50">
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
                        </div>

                        <div className="relative pt-10 w-full text-center">
                            This independent event is operated under license from TED<br />
                            Website Created by <br />
                            <a className='hover:underline' href="">Sharun E Rajeev</a> and <a className='hover:underline' href="">Gaurav Bhat</a>
                        </div>
                    </div>

                    <div className="absolute bg-gray-900 text-white rounded text-center md:w-1/4 p-3 left-1/2 top-10 opacity-0 hover:opacity-100">
                        <h3 className="text-sm md:text-lg">Kumbalangi</h3>
                        <p className="text-xs md:text-sm">This quaint fishing hamlet is a must-visit for experiencing Kerala's culture and delectable cuisine in its raw form.</p>
                        <p className="text-xs md:text-sm">Sea sparkle (കവര്) along the backwaters abutting the Arabian sea, dotted with Chinese fishing nets paints a charming picture.</p>
                    </div>

                </div>

            </div>
        </footer>
    );
}

export default Footer;



