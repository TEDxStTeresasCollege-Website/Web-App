import Head from 'next/head'
import Navbar from '../components/Navbar'
import Slide from '../components/Slide'
import Footer from '../components/Footer'
import homeSlider from '../data/homeSlider'
import Link from 'next/link'
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Clouds from "../components/Clouds"
import PopUp from "../components/popUp"

export default function Home() {

  useEffect(() => {
    // INITIALIZE AOS
    AOS.init();
  }, [])

  return (
    <div>
      <Head>
        <title>TEDxStTeresasCollege : Home</title>
        <meta name="description" content="TEDxStTeresasCollege : Home" />
        <link rel="icon" href="logo.ico" />
      </Head>

      <Navbar />

      <PopUp />

      <div className='bg-night-sky bg-repeat-y bg-black'>
        <Clouds />
        <section id="home" className="w-full h-screen relative text-white serif">
          <div className="absolute -z-10 bg-black w-full h-full"></div>
          {/* <div className="absolute -z-1 h-full w-full block lg:hidden"><Image src="/mobile/homebg.png" layout="fill" /></div> */}
          {/* <div className="absolute -z-1 h-full w-full hidden lg:block"><Image src="/web/homebg.png" layout="fill" /></div> */}
          <div className="flex flex-col gap-5 text-center items-center justify-center serif text-white min-h-screen px-2 w-full">
            <p className="font-bold text-3xl sm:text-4xl md:text-5xl animate__animated animate__zoomIn">Welcome to TEDxStTeresasCollege</p>
            <p className="text-xl sm:text-3xl animate__animated animate__fadeInUp">Where perceptions meets new perspectives</p>
          </div>
        </section>
        <section id="vision" className="w-full h-full lg:min-h-screen text-white bg-night-sky-web">
          <div className="flex flex-col justify-center items-center text-justify lg:text-center sans mx-auto h-full lg:min-h-screen py-20 lg:py-0 w-full md:w-3/4 px-10 lg:px-20">
            <h1 data-aos="fade-up" className="font-bold text-5xl md:text-6xl pb-10 text-ted-red serif">Our Vision</h1>
            <h3 className="text-sm md:text-xl pb-5">When the Teresian spirit meets TED's ethos, mind blowing ideas erupt. </h3>
            <h3 className="text-sm md:text-xl">TEDxStTeresasCollege seeks to ignite enlightening conversations and draw curious minds to our stage to see the world around us in a different light. We visualize a generation that spearheads groundbreaking, innovative changes in society through the values they take away from our events. Our aim is to be the confluence of ideals and values that are catalysts for spreading noteworthy ideas.</h3>
          </div>
        </section>

        <section id="about" className="w-full h-full relative text-white sans bg-night-sky-web">
          <div className="flex flex-wrap md:gap-20 justify-center items-center w-5/6 md:w-2/3 h-full mx-auto text-center text-gray-100 py-20">
            <div className=" bg-gray-800 rounded-lg m-2 bg-opacity-60 flex justify-center items-center flex-col h-full p-20">
              <h2 className="text-2xl font-bold mb-2 serif">Up Next ...</h2>
              <div className="pt-4">
                <p className="text-xl text-ted-red">Cochym</p>
                <a href="/cochym" className="text-sm hover:underline text-blue-400">Read More</a>
              </div>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg m-2 bg-opacity-60 py-16">
              <h2 className="text-2xl font-bold mb-2 serif">Featured Blog Posts</h2>
              <div className="pt-4">
                <p className="text-lg">The Journey from a Vision to its Existence</p>
                <p className="text-md">- By Neha Cherian</p>
                <a href="/blogs/1" className="text-sm hover:underline text-blue-400">Read More</a>
              </div>
            </div>
          </div>
        </section>

        <section id="camera-roll" className="w-full h-full lg:min-h-screen">
          <div className="flex flex-col gap-5 items-center justify-center font-sans text-black h-full lg:min-h-screen mx-auto w-full p-2 md:w-1/2">
            <h1 data-aos="fade-up" className="text-5xl md:text-6xl mb-5 text-ted-red serif">Camera Roll</h1>
            <Slide images={homeSlider} />
          </div>
        </section>

        <section id="whatIsTedX" className="w-full h-full lg:min-h-screen py-20 lg:py-0">
          <div className="flex flex-col gap-5 items-center justify-center text-center h-full lg:min-h-screen font-sans text-white mx-auto w-3/4">
            <h1 className="text-5xl md:text-6xl text-ted-red serif">What is TEDx?</h1>
            <h3 className="text-sm md:text-xl">In the spirit of ideas worth spreading, TED has created a program called TEDx. TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. Our event is called TEDxStTeresasCollege, where x = independently organized TED event. At our TEDxStTeresasCollege event, TED Talks video and live speakers will combine to spark deep discussion and connection in a small group. The TED Conference provides general guidance for the TEDx program, but individual TEDx events, including ours, are self-organized.</h3>
            <Link href='/about'>
              <button className="bg-gray-500 hover:bg-gray-700 text-white py-2 px-4 rounded text-sm">
                About TED and TEDx
              </button>
            </Link>
          </div>
        </section>
      </div>

      <Footer />

    </div>
  )
}
