import Navbar from '../components/Navbar';
import Head from 'next/head'

const privacy = () => {
    return (
        <div>
            <Head>
                <title>Privacy Policy</title>
                <meta name="description" content="Privacy Policy" />
                <link rel="icon" href="logo.ico" />
            </Head>

            <Navbar />
            <div className='bg-night-sky bg-repeat-y bg-black'>
                <section className="w-full min-h-screen mt-20 text-white mx-auto relative bg-night-sky-web">
                    <div className="w-5/6 md:w-2/3 flex flex-col gap-5 mx-auto items-center justify-center text-center py-20">
                        <h1 className="text-5xl md:text-6xl serif text-ted-red">Privacy Policy</h1>
                        <h3 className="text-sm md:text-xl sans text-justify">1)  Stripe is a payment gateway which collects your card information exclusively for payment processes. This information is not stored in a database.<br /><br />2)  This website does not use any cookies.<br /><br />3)  This website does not maintain your log files.<br /><br />4)  We collect and store data entered by you, primarily to enhance and streamline your overall experience.<br /><br />5)  By using our website, products and services, you freely and expressly consent to the collection, use, processing, storage and disclosure of personal information (with the exception of transaction card details) by us as set out in this Privacy Policy<br /><br />6)  TEDxStTeresasCollege reserves the right to modify this Privacy Policy in whole or in part, from time to time without notice, and amendments will be effective immediately upon posting of the amended Policy on the TEDxStTeresasCollege website.<br /><br />7)  If you require further information regarding our Privacy Policy or wish to make a complaint, please contact us at <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=tedxstteresascollege@gmail.com">contact@tedxstteresascollege.in</a></h3>
                    </div>
                </section>
            </div>

        </div>
    );
}

export default privacy;
