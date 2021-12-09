import Head from 'next/head'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'


const one = () => {
    return (
        <>
            <Head>
                <title>Blogs 1 : TEDxStTeresasCollege</title>
                <meta name="description" content="Blogs 1 : TEDxStTeresasCollege" />
                <link rel="icon" href="logo.ico" />
            </Head>

            <Navbar />


            <div className="container min-h-screen bg-night-sky bg-repeat-y bg-black text-white pt-28">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="text-center text-ted-red serif text-5xl">The Journey from a Vision to its Existence</h1>
                        <p className="text-center text-white text-xl">
                            <div className="text-ted-red pt-8 pb-10">By Neha Cherian<br />I BSc Psychology</div>
                            Have you ever rejected an idea thinking it was too “out of the box” and too hard for you<br /> to accomplish? Well, a similar idea occurred to a group of young girls from St. Teresa’s<br /> College, Kochi and despite the blurry path that they’d have to go through, they took the chance.<br />
                            <br /><br />A small thought, idea, an inference, can give fuel to ignite endless opportunities and this<br /> one was no different. It was the dream of these students to bring the widely acclaimed<br /> international platform TED into their own college. It was high time for a prestigious<br /> college like St. Teresa’s to host its very first TEDx Event.<br /><br />A small step such as this could inspire millions of young girls to speak up and make<br /> them realise how much their voice needs to be heard in this society.<br /><br />
                            Sneha Anna George, a second year BCom student, Marianne Joseph, a third year BCom<br /> student and Anna Kattampally, a third-year Communicative English student took up the<br /> responsibilities of the Organizer, Co-Organizer and the Event Manager respectively and<br /> commenced on a journey to host the first Official TEDxStTeresasCollege Event<br /><br />

                            <img className="mx-auto  w-1/4 h-1/4 py-2 rounded-lg" src='/blog/sneha.jpeg'></img><figcaption>Sneha Anna George</figcaption>
                            <img className=" mx-auto w-1/4 h-1/4 py-2 rounded-lg" src='/coreTeam/anna.png'></img><figcaption>Anna Kattampally</figcaption>
                            <img className=" mx-auto w-1/4 h-1/4 py-2 rounded-lg" src='/coreTeam/marianne.jpg'></img><figcaption>Marianne Joseph</figcaption>



                            <br /><br /> But an event like TEDx is certainly not a one woman show. Consequently, the Core<br /> Team members joined the expedition and were more than excited to become part of a<br /> journey that was full of uncertainties, but their enthusiasm was strong and their bond,<br /> stronger.<br /> <br />The core team had two tasks to juggle with at the moment - one was to encompass the<br /> most skilled women from around the college to formulate an efficient team, the other<br /> was to obtain the official TEDx License.<br /> <br /> The application for the license was submitted on 17th May, 2021 and after 4 months of<br /> perseverance, determination and patience, the Team finally acquired their first ever<br /> TEDx licence in June 2021.<br /><br />
                            The college students heartily welcomed the idea that could change the face of the<br /> Teresian events forever. The prospect of having a TEDx Event in one’s own college may<br /> look impressive but being able to become a part of it could unlock a window of rare<br /> opportunities and novel experiences for many fresh talents. And so, preparations for the<br /> first session of recruitment began - without a doubt, the most competent women from<br /> different streams secured their places in the official TEDxStTeresasCollege team. <br /><br />
                            Then the festivities began, from finalising the different teams to creating an instagram<br /> page, the team had a lot on their plate to be done within a span of 2-3 months. The team<br /> not only conducted numerous online events but also conducted their first ever offline<br /> event, The Open Mic '21 on 27th October with great enthusiasm.<br />
                            <img className=" mx-auto w-1/2 h-1/2 py-2 rounded-lg" src='/team.JPG'></img>
                            <img className=" mx-auto w-1/2 h-1/2 py-2 rounded-lg" src='/slider/home/10.JPG'></img>
                            <img className=" mx-auto w-1/2 h-1/2 py-2 rounded-lg" src='/slider/home/8.JPG'></img>
                            <img className=" mx-auto w-1/2 h-1/2 py-2 rounded-lg" src='/slider/home/9.JPG'></img><br />
                            The TEDxStTeresasCollege team is in the midst of gearing up for the Pre-Event on 17th<br /> December and for the Main Event on January 8th, 2022. The volunteers are all ready to shed<br /> their blood, sweat and tears to get the show on the road and make this the most  historical<br /> event that St. Teresa’s and the residents of Kochi have ever seen.<br /><br />
                            The programme is all set to showcase India's most loved speakers and performers and the<br /> volunteers can't wait for their 8 months of dedication and patience to finally show its<br /> colours and touch the audience’s hearts<br />


                        </p>

                    </div>
                </div>
            </div>


            <Footer />
        </>
    )
}

export default one
