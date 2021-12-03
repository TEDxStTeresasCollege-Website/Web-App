import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Background from '../components/Background';

const Speaker = () => {
    return (
        <div>
            <Head>
                <title>Speakers : TEDxStTeresasCollege</title>
                <meta name="description" content="Speakers : TEDxStTeresasCollege" />
                <link rel="icon" href="logo.ico" />
            </Head>

            <Navbar />

            <Background />
            <div className="flex flex-col gap-5 items-center text-center justify-center sans text-white mx-auto w-3/4 min-h-screen">
                <h1 className="text-2xl md:text-4xl serif text-ted-red">Nominate a Speaker</h1>
                <h3 className="text-sm md:text-lg text-center">At TEDxStTeresasCollege, we are always on the lookout for passionate speakers who have the power to influence curious minds to see their surroundings in a different light.  If you know someone who can present an inspiring idea to the TEDx community, or if you believe that you can do so, we would love to hear from you!</h3>
                <h3 className="text-sm md:text-lg text-center">Please use our speaker recommendation form to tell us why this person would be a perfect speaker for a TEDxStTeresasCollege event.</h3>
                <button className="bg-water hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-lg text-sm md:text-md">
                    Nominate a Speaker
                </button>
            </div>

            <Footer />

        </div>
    );
}

export default Speaker;