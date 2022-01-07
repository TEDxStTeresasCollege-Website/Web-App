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
                <div className="flex flex-col gap-5 items-center text-center justify-center sans text-white sans mx-auto w-3/4 min-h-screen pt-32 sm:pt-20">
                    <h1 className="text-5xl md:text-6xl serif text-ted-red">Our Partners</h1>
                    <h3 className="text-sm md:text-xl text-center">Our sponsors are our partners who help the TEDx vision come to life!</h3>
                    <div className='grid grid-cols-1 w-1/2 md:grid-cols-3 gap-5 md:w-2/3 lg:w-1/2 my-5'>
                        <Image src="/tonicoCafe.jpg" width="1969" height="1969" />
                        <Image src="/muthoot.png" width="675" height="675" />
                        <Image src="/mod.jpg" width="4134" height="4134" />
                    </div>
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
