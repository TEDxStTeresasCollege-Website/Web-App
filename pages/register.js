import Head from 'next/head';
import Image from 'next/image';
import Footer from '../components/cynosure/Footer';

import Navbar from '../components/Navbar';

const register = () => {
    return (
        <div className="text-white min-h-screen w-full flex flex-col justify-center items-center bg-gradient-to-b from-cyno-1 via-cyno-2 to-cyno-3">
            <Head>
                <title>Register - Cynosure : TEDxStTeresasCollege</title>
                <meta name="description" content="Register - Cynosure : TEDxStTeresasCollege" />
                <link rel="icon" href="logo.ico" />
            </Head>

            <Navbar />

            {/* The main section */}
            <div className="text-center bg-white-dots md:w-4/5 mx-auto">
                <div className="pt-32 pb-10 md:w-2/5 md:pb-6 lg:w-1/3 mx-auto">
                    <Image className="" src="/CynosureLogo.png" height={2251} width={2251} loading="eager" />
                </div>
                <div className="px-10">
                    <p className="text-lg lg:text-xl xl:text-2xl">Non aute anim exercitation aute nostrud ex ad do in dolor non velit. Occaecat ex excepteur exercitation aliquip ut nostrud enim consectetur.</p>
                    <p className="text-lg lg:text-xl xl:text-2xl pt-5">Non aute anim exercitation aute nostrud ex ad do in dolor non velit. Occaecat ex excepteur exercitation aliquip ut nostrud enim consectetur.</p>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default register;