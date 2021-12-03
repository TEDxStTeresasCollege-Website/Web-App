import Head from 'next/head'
import Slide from '../components/Slide'
import CircleCard from '../components/CircleCards'
import Navbar from '../components/Navbar'
import circleSlider from "../data/circleSlider";
import Footer from '../components/Footer'

const Circles = () => {
    return (
        <>

            <Head>
                <title>TED Circles : TEDxStTeresasCollege</title>
                <meta name="description" content="TED Circles : TEDxStTeresasCollege" />
                <link rel="icon" href="logo.ico" />
            </Head>

            <Navbar />

            <div className='bg-night-sky bg-repeat-y bg-black'>
                <div className="min-h-screen flex flex-col items-center justify-center">
                    <CircleCard />
                </div>

                <div className="text-white relative flex flex-col items-center justify-center text-center md:w-1/4 mx-auto w-full min-h-screen">
                    <h2 className="text-2xl lg:text-4xl font-semibold text-ted-red serif">Learn more about TED Circles</h2>
                    <div className="mx-auto">
                        <iframe src="https://www.youtube-nocookie.com/embed/qvoShsSiHuI?start=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>

                <div className="flex flex-col gap-5 items-center justify-center font-sans min-h-screen mx-auto w-full md:w-1/2">
                    <h1 className="font-bold text-2xl md:text-3xl mb-5 text-ted-red serif">Camera Roll</h1>
                    <Slide images={circleSlider} />
                </div>

                <div className="flex flex-col gap-5 items-center text-center justify-center font-sans text-white mx-auto w-5/6 md:w-3/4 min-h-screen">
                    <h2 className="text-2xl font-semibold text-ted-red serif">Our Next Event</h2>
                    <div className="w-96 h-52 bg-gray-800"></div>
                    <h2 className="text-lg">Date : <span></span></h2>
                    <h2 className="text-lg">Time : <span></span></h2>
                    <h2 className="text-lg">Venue : <span></span></h2>
                    <h2 className="text-lg">Description<span></span></h2>
                    <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                        I'm there! Sign me up!
                    </button>
                </div>
            </div>

            <Footer />

        </>
    );
}

export default Circles;