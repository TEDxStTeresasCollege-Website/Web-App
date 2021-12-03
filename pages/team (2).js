import Head from 'next/head'
import Button from '../components/CategoryButton'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Team = () => {

    return (
        <>
            <Head>
                <title>Our Team : TEDxStTeresasCollege</title>
                <meta name="description" content="Our Team : TEDxStTeresasCollege" />
                <link rel="icon" href="logo.ico" />
            </Head>

            <Navbar />

            <div className="min-h-screen bg-night-sky bg-repeat-y bg-black">
                <div className="flex flex-col gap-5 items-center text-center justify-center font-sans text-white mx-auto w-3/4 pt-52">
                    <h1 className="text-2xl md:text-4xl text-ted-red serif">Team</h1>
                    <h3 className="text-sm md:text-lg text-center">A TEDx event is only as phenomenal as the team behind it. Behold, a troupe of carefully selected, brilliant minds, who encompass the essence of TEDx along with a stroke of creativity and enthusiasm. Our together make up the 9 teams of volunteers are the hands behind the different parts of every event and together make up the 7 teams of TEDxStTeresasCollege. We proudly stand as one - united by a purpose to spread ideas worth sharing.</h3>

                    <div className="flex justify-center m-5 mt-10 gap-3 flex-wrap lg:w-3/4 mx-auto">
                        <Button text="All" />
                        <Button text="Core Team" />
                        <Button text="Content Team" />
                        <Button text="Event Management" />
                        <Button text="Backup Volunteers" />
                        <Button text="Executive Team" />
                        <Button text="Media & Design" />
                        <Button text="Sponsorship Team" />
                        <Button text="Technical Team" />
                        <Button text="Operations Crew" />
                        <Button text="Teachers-in-charge" />
                    </div>

                    <h3 className="text-sm md:text-lg text-center ">Team work undoubtedly makes the dream work and we have no better example of this than our own crew of volunteers! During this year, 95 people decided to come together under the common banner of TEDxStTeresasCollege to spread ideas they believe are worth sharing. Today, these 95 people are volunteers who are proud and ready to host their very first TEDx event!</h3>
                    {/* <Background /> */}
                    <div>
                        <Image src="/team.jpg" alt="Team" width={4000} height={1800} />
                    </div>
                </div>
                {/* <div className="p-10 grid sm:grid-cols-1 lg:grid-cols-4 gap-5 w-3/4 mx-auto text-white sans">
                    <table className='table-auto'>
                        <thead>
                            <tr>
                                <th>Name</th>
                            </tr>
                        </thead>
                    </table>
                </div> */}
            </div>

            <Footer />
        </>
    );
}

export default Team;