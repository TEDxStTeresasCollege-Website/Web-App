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


            <div className="container min-h-screen bg-night-sky bg-repeat-y text-white pt-28">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="text-center text-ted-red serif text-4xl">Blogs</h1>
                        <p className="text-center text-white">
                            This is a blog page.
                        </p>
                        <img src=''></img>
                    </div>
                </div>
            </div>


            <Footer />
        </>
    )
}

export default one