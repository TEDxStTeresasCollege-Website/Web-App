import Head from 'next/head'
import Button from '../components/CategoryButton'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import teamDetails from '../data/teamDetails.js'
import Image from 'next/image'
import React, { useState } from 'react'
import TeamCard from '../components/TeamCard'

const Team = () => {
    const [state, setState] = useState(0)
    var team = []
    var heads = []
    var ends = []
    const length = teamDetails[1].name.length
    for (var i = 0; i < 2; i++) {
        heads.push(<TeamCard name={teamDetails[1].name[i]} designation={teamDetails[1].designation[i]} image={teamDetails[1].image[i]} />);
    }
    for (var i = 2; i < length - 2; i++) {
        team.push(<TeamCard name={teamDetails[1].name[i]} designation={teamDetails[1].designation[i]} image={teamDetails[1].image[i]} />);
    }
    for (var i = length - 2; i < length; i++) {
        ends.push(<TeamCard name={teamDetails[1].name[i]} designation={teamDetails[1].designation[i]} image={teamDetails[1].image[i]} />);
    }

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
                    <div className="w-full px-10 lg:px-0 lg:w-1/2 mx-auto text-white sans">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:w-3/4 mx-auto pb-10">
                            {heads}
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                            {team}
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mx-auto py-10 lg:w-2/3">
                            {ends}
                        </div>
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
