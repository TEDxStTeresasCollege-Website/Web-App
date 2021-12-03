import Head from 'next/head'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Background from '../../components/Background';


const one = () => {
    return (
        <>
            <Head>
                <title>Blogs : TEDxStTeresasCollege</title>
                <meta name="description" content="Blogs : TEDxStTeresasCollege" />
                <link rel="icon" href="logo.ico" />
            </Head>

            <Navbar />

            <Background />

            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="text-center text-ted-red">Blogs</h1>
                        <p className="text-center text-white">
                            This is a blog page.
                        </p>
                    </div>
                </div>
            </div>


            <Footer />
        </>
    )
}

export default one