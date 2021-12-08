import Navbar from '../components/Navbar';
import Head from 'next/head'

const terms = () => {
    return (
        <div>
            <Head>
                <title>Terms and Conditions</title>
                <meta name="description" content="Terms and Conditions" />
                <link rel="icon" href="logo.ico" />
            </Head>

            <Navbar />
            <div className='bg-night-sky bg-repeat-y bg-black'>
                <section className="w-full min-h-screen mt-20 text-white mx-auto relative bg-night-sky-web">
                    <div className="w-5/6 md:w-2/3 flex flex-col gap-5 mx-auto items-center justify-center text-center py-20">
                        <h1 className="text-5xl md:text-6xl serif text-ted-red">Terms and Conditions</h1>
                        <h3 className="text-sm md:text-xl sans text-justify">1)   There will be no refund of tickets issued once purchased.<br /><br />2)   Any breach of the following terms will lead to termination of ticket.<br /><br />3)   The client shall ensure that the Terms and Conditions are complete and accurate<br /><br />4)   By accessing and using our services, you freely and expressly consent to the collection, use, processing, storage and disclosure of personal information set by us as set out in these Terms and Conditions.<br /><br />5)   TEDxStTeresasCollege reserves the right to modify the Terms and Conditions in whole or in part, from time to time without notice, and amendments will be effective immediately upon posting of the amended terms and conditions on the TEDxStTeresasCollege website.<br /><br />6)   By registering for the event, you agree that you accept all terms and conditions and allow for us to store data (with the exception of transaction card details) you have entered in the website.<br /><br />7)   If you require further information regarding our Terms and Conditions or wish to make a complaint, please contact us at ______@tedxstteresascollege.in</h3>

                    </div>
                </section>
            </div>

        </div>
    );
}

export default terms;
