import Head from 'next/head'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import BlogCard from '../../components/BlogCard';

const Blogs = () => {
    const data = [
        {
            title: "The Journey from a Vision to its Existence",
            content: "- By Neha Cherian",
            url: "/blogs/1",
            imagesrc: "/team.jpg"
        },
    ]

    return (
        <>
            <Head>
                <title>Blogs : TEDxStTeresasCollege</title>
                <meta name="description" content="Blogs : TEDxStTeresasCollege" />
                <link rel="icon" href="logo.ico" />
            </Head>

            <Navbar />
            <div className='bg-night-sky bg-repeat-y bg-black'>
                <div className="flex flex-col gap-5 items-center text-center justify-center font-sans text-white sans mx-auto w-3/4 min-h-screen pt-36">
                    <h1 className="text-5xl md:text-6xl pb-10 text-ted-red serif">Our Blogs</h1>
                    <h3 className="text-sm md:text-xl text-center pb-5">Martin Luther once said, ”If you want to change the world, pick up a pen and write” and it holds true even in today’s age. The impact of a few delicately knitted and stirring words have the power to touch even the most indifferent of hearts. And our aim for this page is the same. This page is an extension of our efforts to provide a platform for the local community to express their voice and to bring people together by organizing TEDx Events and TED Circles. We are on a mission to help them embrace their differences and to strengthen their outlooks on different areas of life. </h3>

                    <div className="grid lg:grid-cols-1 sm:grid-cols-1 gap-4 mx-auto w-full md:mb-20 h-full mb-10">
                        {data.map((item, index) => {
                            return <BlogCard
                                title={item.title}
                                content={item.content}
                                url={item.url}
                                imagesrc={item.imagesrc}
                            />
                        })}
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default Blogs;
