import Head from 'next/head'
import Button from '../components/CategoryButton'
import TeamCard from '../components/TeamCard'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Background from '../components/Background'

const Team = () => {

    return (
        <>
            <Head>
                <title>Our Team : TEDxStTeresasCollege</title>
                <meta name="description" content="Our Team : TEDxStTeresasCollege" />
                <link rel="icon" href="logo.ico" />
            </Head>

            <Navbar />

            <div className="min-h-screen">
                <Background />
                <div className="flex flex-col gap-5 items-center text-center justify-center font-sans text-white mx-auto w-3/4 pt-52">
                    <h1 className="font-bold text-2xl md:text-4xl">Team</h1>
                    <h3 className="text-sm md:text-lg text-center">A TEDx event is only as phenomenal as the team behind it. Behold, a troupe of carefully selected, brilliant minds, who encompass the essence of TEDx along with a stroke of creativity and enthusiasm. Our together make up the 9 teams of volunteers are the hands behind the different parts of every event and together make up the 7 teams of TEDxStTeresasCollege. We proudly stand as one - united by a purpose to spread ideas worth sharing.</h3>
                </div>
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
                </div>
                <div className="p-10 grid sm:grid-cols-1 lg:grid-cols-4 gap-5 w-3/4 mx-auto text-white sans">
                    <table className='table-auto'>
                        <thead>
                            <tr>
                                <th>Name</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default Team;