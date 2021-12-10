import Head from 'next/head'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'


const one = () => {
    return (
        <>
            <Head>
                <title>The Journey from a Vision to its Existence</title>
                <meta name="description" content="Blogs 1 : TEDxStTeresasCollege" />
                <link rel="icon" href="../logo.ico" />
            </Head>

            <Navbar />


            <div className="min-h-screen bg-night-sky bg-repeat-y bg-black text-white pt-28 w-full">
                <div className="">
                    <div className="p-10 w-full md:w-3/4 mx-auto">
                        <h1 className="text-center text-ted-red serif text-5xl">The Journey from a Vision to its Existence</h1>
                        <div className="text-white text-xl">
                            <div className="text-ted-red pt-8 pb-10 text-center">By Neha CherianI BSc Psychology</div>
                            <div className='text-justify'>
                                <div className='pb-10'>Have you ever rejected an idea thinking it was too “out of the box” and too hard for you to accomplish? Well, a similar idea occurred to a group of young girls from St. Teresa’s College, Kochi and despite the blurry path that they’d have to go through, they took the chance.</div>
                                <div className='pb-10'>A small thought, idea, an inference, can give fuel to ignite endless opportunities and this one was no different. It was the dream of these students to bring the widely acclaimed international platform TED into their own college. It was high time for a prestigious college like St. Teresa’s to host its very first TEDx Event. A small step such as this could inspire millions of young girls to speak up and make them realise how much their voice needs to be heard in this society.</div>
                                <div className='pb-10'>Sneha Anna George, a second year BCom student, Marianne Joseph, a third year BCom student and Anna Kattampally, a third-year Communicative English student took up the responsibilities of the Organizer, Co-Organizer and the Event Manager respectively and commenced on a journey to host the first Official TEDxStTeresasCollege Event.</div>
                            </div>
                            <div className="text-center pb-4">
                                <div className='pb-10'><img className="mx-auto  w-1/4 h-1/4 py-2 rounded-lg" src='/blog/sneha.jpeg'></img><figcaption>Sneha Anna George</figcaption></div>
                                <div className='pb-10'><img className=" mx-auto w-1/4 h-1/4 py-2 rounded-lg" src='/coreTeam/anna.png'></img><figcaption>Anna Kattampally</figcaption></div>
                                <div className='pb-10'><img className=" mx-auto w-1/4 h-1/4 py-2 rounded-lg" src='/coreTeam/marianne.jpg'></img><figcaption>Marianne Joseph</figcaption></div>
                            </div>

                            <div className='text-justify'>
                                <div className='pb-10'>But an event like TEDx is certainly not a one woman show. Consequently, the Core Team members joined the expedition and were more than excited to become part of a journey that was full of uncertainties, but their enthusiasm was strong and their bond, stronger. The core team had two tasks to juggle with at the moment - one was to encompass the most skilled women from around the college to formulate an efficient team, the other was to obtain the official TEDx License.  The application for the license was submitted on 17th May, 2021 and after months of perseverance, determination and patience, the Team finally acquired their first ever TEDx license in June 2021.</div>
                                <div className='pb-10'>The college students heartily welcomed the idea that could change the face of the Teresian events forever. The prospect of having a TEDx Event in one’s own college may look impressive but being able to become a part of it could unlock a window of rare opportunities and novel experiences for many fresh talents. And so, preparations for the first session of recruitment began - without a doubt, the most competent women from different streams secured their places in the official TEDxStTeresasCollege team. </div>
                                <div className='pb-10'>Then the festivities began, from finalising the different teams to creating an Instagram page, the team had a lot on their plate to be done within a span of 2-3 months. The team not only conducted numerous online events but also conducted their first ever offline event, The Open Mic '21 on 27th October with great enthusiasm.</div>
                            </div>
                            <div className='pb-10'>
                                <img className=" mx-auto w-1/2 h-1/2 py-2 rounded-lg" src='/slider/home/10.JPG'></img>
                                <img className=" mx-auto w-1/2 h-1/2 py-2 rounded-lg" src='/slider/home/8.JPG'></img>
                                <img className=" mx-auto w-1/2 h-1/2 py-2 rounded-lg" src='/slider/home/9.JPG'></img>
                            </div>
                            <div>
                                <div className='pb-10'>The TEDxStTeresasCollege team is in the midst of gearing up for the Pre-Event on 17th December and for the Main Event on January 8th, 2022. The volunteers are all ready to shed their blood, sweat and tears to get the show on the road and make this the most historical event that St.Teresa’s and the residents of Kochi have ever seen.</div>
                                <div className='pb-10'>The programme is all set to showcase India's most loved speakers and performers and the volunteers can't wait for their 8 months of dedication and patience to finally show its colours and touch the audience’s hearts.</div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>


            <Footer />
        </>
    )
}

export default one
