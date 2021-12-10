import Head from 'next/head';
import Navbar from '../components/Navbar'
import Image from 'next/image';
import Footer from '../components/Footer';

const newform = () => {
    return (
        <>
        <Head>
            <title>newform</title>
            <meta name="description" content="Newform" />
            <link rel="icon" href="logo.ico" />
        </Head>

        <Navbar />

        <div className="min-h-screen bg-night-sky bg-repeat-y bg-black text-white pt-20 flex flex-col justify-center items-center">
            <p className="text-sm md:text-base pb-4"> Step 3/3</p>
            <div className="w-1/2 mx-20">
                <form action="/api/checkout/session" method="POST" className="bg-water p-6 rounded-lg m-2 bg-opacity-50">
                <h1 className="text-center text-2xl lg:text-4xl text-ted-red serif block mb-5">New Form</h1>
                    <div className="grid grid-cols-2 gap-5 justify-center">
                        <label className="text-xl md:text-2xl">First Name :</label>
                        <input className="rounded-sm"></input>
                        <label className="text-xl md:text-2xl">Last Name :</label>
                        <input className="rounded-sm"></input>
                        <label className="text-xl md:text-2xl">Mobile Number :</label>
                        <input className="rounded-sm"></input>
                        {/* <label className="text-xl md:text-2xl">Aadhar Number :</label>
                        <input className="rounded-sm"></input> */}
                    </div>
                    <div className="mt-10 flex justify-center">
                        <input type="submit" value="Submit" className="bg-ted-red text-white font-bold py-2 px-4 rounded w-1/3"></input>
                    </div>
                </form>
            </div>
        </div>

        <Footer />

        </>
    );
}

export default newform;
