import Head from 'next/head'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import BlogCard from '../../components/BlogCard';

const Blogs = () => {
    const data = [
        {
            title: "Blog post 1",
            content: "content",
            url: "#",
            imagesrc: "https://picsum.photos/400/200"
        },
        {
            title: "Blog post 2",
            content: "content 2",
            url: "#",
            imagesrc: "https://picsum.photos/400/200"
        },
        {
            title: "Blog post 3",
            content: "content 3",
            url: "#",
            imagesrc: "https://picsum.photos/400/200"
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
                    <h1 className="text-2xl md:text-4xl pb-10 text-ted-red serif">Our Blogs</h1>
                    <h3 className="text-sm md:text-lg text-center pb-5">A TEDx event is only as phenomenal as the team behind it. Behold, a troupe of carefully selected, brilliant minds, who encompass the essence of TEDx along with a stroke of creativity and enthusiasm. Our 32 volunteers are the hands behind the different parts of every event and together make up the 7 teams of TEDxStTeresasCollege. We proudly stand as one - united by a purpose to spread ideas worth sharing.</h3>

                    <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-4 mx-auto w-full md:mb-20 h-full mb-10">
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