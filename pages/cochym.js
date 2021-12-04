import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Head from "next/head"
import Image from "next/image"

const Cochym = () => {
    return (
        <>
            <Head>
                <title>Cochym : TEDxStTeresasCollege</title>
                <meta name="description" content="Cochym : TEDxStTeresasCollege" />
                <link rel="icon" href="logo.ico" />
            </Head>

            <Navbar />

            <div className="min-h-screen bg-night-sky bg-repeat-y bg-black text-white pt-40 flex flex-col justify-center items-center">
                <h1 className="text-center text-2xl lg:text-4xl text-ted-red serif block mb-20">Pre-Event Registration Form</h1>
                <div className="">
                    <Image className="" src="/cochymLogo.png" width="700" height="250" layout="intrinsic"></Image>
                </div>

                <div className="w-1/2 mx-auto mt-20">
                    <form className="bg-gray-800 p-6 rounded-lg m-2 bg-opacity-60">
                        <div className="grid grid-cols-2 gap-5 justify-center">
                            <label className="text-xl md:text-2xl">First Name :</label>
                            <input className="rounded-sm"></input>
                            <label className="text-xl md:text-2xl">Last Name :</label>
                            <input className="rounded-sm"></input>
                            <label className="text-xl md:text-2xl">Mobile Number :</label>
                            <input className="rounded-sm"></input>
                            <label className="text-xl md:text-2xl">Email ID :</label>
                            <input className="rounded-sm"></input>
                            <label className="text-xl md:text-2xl">Designation :</label>
                            <input className="rounded-sm"></input>
                            <label className="text-xl md:text-2xl">Institution Name :</label>
                            <input className="rounded-sm"></input>
                        </div>
                        <div className="mt-10 flex justify-center">
                            <input type="submit" value="Submit" className="bg-ted-red text-white font-bold py-2 px-4 rounded w-1/3"></input>
                        </div>
                    </form>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Cochym