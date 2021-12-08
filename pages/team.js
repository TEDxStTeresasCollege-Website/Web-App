import Head from 'next/head'
import Button from '../components/CategoryButton'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import teamDetails from '../data/teamDetails.js'
import Image from 'next/image'
import React, { useState } from 'react'
import TD from '../components/TeamDetails'


const Team = () => {
    const [state, setState] = useState(0)

    return (
        <>
            <Head>
                <title>Our Team : TEDxStTeresasCollege</title>
                <meta name="description" content="Our Team : TEDxStTeresasCollege" />
                <link rel="icon" href="logo.ico" />
            </Head>

            <Navbar />

            <TD content="Hello" url="/team.jpg" />

            <div className="min-h-screen bg-night-sky bg-repeat-y bg-black">
                <div className="flex flex-col gap-5 items-center text-center justify-center font-sans text-white mx-auto w-3/4 pt-52">
                    <h1 className="text-2xl md:text-4xl text-ted-red serif">Team</h1>
                    <h3 className="text-sm md:text-lg text-center">A TEDx event is only as phenomenal as the team behind it. Behold, a troupe of carefully selected, brilliant minds, who encompass the essence of TEDx along with a stroke of creativity and enthusiasm. Our together make up the 9 teams of volunteers are the hands behind the different parts of every event and together make up the 7 teams of TEDxStTeresasCollege. We proudly stand as one - united by a purpose to spread ideas worth sharing.</h3>

                    <div className="flex justify-center m-5 mt-10 gap-3 flex-wrap lg:w-3/4 mx-auto">
                        <Button text="All" click={() => setState(0)} />
                        <Button text="Core Team" click={() => setState(1)} />
                        <Button text="Content Team" click={() => setState(2)} />
                        <Button text="Event Management" click={() => setState(3)} />
                        <Button text="Backup Volunteers" click={() => setState(4)} />
                        <Button text="Executive Team" click={() => setState(5)} />
                        <Button text="Media & Design" click={() => setState(6)} />
                        <Button text="Sponsorship Team" click={() => setState(7)} />
                        <Button text="Technical Team" click={() => setState(8)} />
                        <Button text="Operations Crew" click={() => setState(9)} />
                    </div>
                </div>
                {(state == 1) ?
                    <div className="p-10 grid grid-col-2 gap-5 w-3/4 mx-auto text-white sans">
                        
                    </div> :
                    <div className="w-3/4 mx-auto">
                        <p className="text-white text-lg text-center pb-5">{teamDetails[state].content}</p>
                        <Image src={teamDetails[state].image} width="4000" height="1800"></Image>
                    </div>}
            </div>

            <Footer />
        </>
    );
}

export default Team;
