import Head from 'next/head';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Image from 'next/image';

const Partners = () => {
    return (
        <>
            <Head>
                <title>Our Partners : TEDxStTeresasCollege</title>
                <meta name="description" content="Partners : TEDxStTeresasCollege" />
                <link rel="icon" href="logo.ico" />
            </Head>

            <Navbar />

            <div className='bg-night-sky bg-repeat-y bg-black'>
                <div className="flex flex-col gap-5 items-center text-center justify-center sans text-white sans mx-auto w-3/4 min-h-screen">
                    <h1 className="text-5xl md:text-6xl serif text-ted-red">Our Partners</h1>
                    <h3 className="text-sm md:text-xl text-center">Our sponsors are our partners who help the TEDx vision come to life!</h3>
                    <h3 className="text-sm md:text-xl text-center">A TEDx sponsorship is a collaboration to make the world a better place through spreading of compelling ideas and remarkable experiences. TEDxStTeresasCollege will be your launchpad to introduce new ideas to the community with the help of our on-site Ideas Lab.</h3>
                    <h3 className="text-sm md:text-xl text-center">Benefit from associating with the existing community and build global connections that last.</h3>
                    <h3 className="text-sm md:text-xl text-center">We look forward to changing perspectives one Talk at a time; together, with you. </h3>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=tedxstteresascollege@gmail.com" className="rounded-xl border lg:bg-gray-800 text-sm md:text-lg text-center hover:underline p-4">
                        Get in touch with us to explore partnership opportunities
                    </a>
                </div>
            </div>


            <Footer />
        </>
    );
}

export default Partners;
