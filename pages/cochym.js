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

            <div className="min-h-screen bg-repeat-y bg-black text-white pt-56">
                <h1 className="text-center text-2xl lg:text-4xl text-ted-red serif">Pre-Event Registration Form</h1>
                {/* <div className="w-3/4 h-10"><Image className="" src="/cochymLogo.png" layout="fill"></Image></div> */}

                <div className="w-1/2 mx-auto mt-20">
                    <form className="">
                        <div className="grid grid-cols-2 gap-5 justify-center">
                            <label>First Name :</label>
                            <input></input>
                            <label>Last Name :</label>
                            <input></input>
                            <label>Mobile Number :</label>
                            <input></input>
                            <label>Email ID :</label>
                            <input></input>
                            <label>Designation :</label>
                            <input></input>
                            <label>Institution Name :</label>
                            <input></input>
                            <input type="submit" value="Submit" className="bg-ted-red text-white font-bold py-2 px-4 rounded"></input>
                        </div>
                    </form>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Cochym