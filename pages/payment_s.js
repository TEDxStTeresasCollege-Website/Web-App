import Head from 'next/head';
import Image from 'next/image';

const payments = () => {
    return (
        <>
            <Head>
                <title>Payment successful</title>
                <meta name="description" content="Payment Successful" />
                <link rel="icon" href="logo.ico" />
            </Head>

            <div className='bg-night-sky bg-repeat-y bg-black'>
                <div className="flex-1 p-5">
                    <img className='w-60' src="/tedXSTClogo.png"/>
                </div>
                <div className="flex flex-col pb-36 gap-1 items-center text-center justify-center sans text-white sans mx-auto w-3/4 min-h-screen">
                    <p className="text-6xl md:text-7xl serif text-ted-red">Payment Successful!</p>
                    <p className="text-center text-2xl md:text-2xl serif text-ted-white">Thank you for your purchase!</p>
                    <p className="text-center text-2xl md:text-2xl serif text-ted-white">Please check your email for further updates.</p>
                    <p className="text-center text-2xl md:text-2xl serif text-ted-white">We look forward to seeing you at our Pre-event!</p>
                </div>
            </div>

        </>
    );
}

export default payments;
