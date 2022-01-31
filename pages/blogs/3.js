import Link from 'next/link'
import Head from 'next/head'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'


const three = () => {
    return (
        <>
            <Head>
                <title>Stopping by Her Shores on a Breezy Evening</title>
                <meta name="description" content="Blogs 3 : TEDxStTeresasCollege" />
                <link rel="icon" href="../logo.ico" />
            </Head>

            <Navbar />

            <div className="min-h-screen bg-night-sky bg-repeat-y bg-black text-white pt-28 w-full">
                <div className="">
                    <div className="p-10 w-full md:w-3/4 mx-auto">
                        <h1 className="text-center text-ted-red serif text-6xl">Stopping by Her Shores on a Breezy Evening</h1>
                        <div className="text-white text-xl">
                            <div className="text-ted-red pt-8 pb-10 text-center">By Rachel Reji, II BCom Capital Market</div>
                            <div className='text-center'>
                                <div className='pb-5'>is there a place that truly felt like<br></br> home<br></br> like a good friend it grows with you<br></br> often becomes you<br></br> -Priya Varghese<br></br>(an excerpt from Go Kochi: a Joy Movie production)<br></br><br></br></div>
                            </div>
                            <div className='text-justify'>
                                <div className='pb-5'>With centuries of foreign influence under its sleeve, Kochi is the ultimate experience with its own unique culture created by blending Portuguese, Dutch, British, Jewish and the authentic Malabar itself!</div>
                                <div className='pb-5'>The port city has, over the centuries, welcomed explorers, traders and seafarers with open arms. Its culturally rich streets are time capsules waiting to be unearthed. Let the cool breeze from the Arabian Sea take you to another era.</div>
                            </div>   
                            <div className="text-center pb-4">
                                <div className='pb-7'><img className="mx-auto  w-1/3 h-1/3 py-2 rounded-lg" src='/blog/image7.png'></img></div>
                            </div>
                            <div className='text-justify'>
                                <div className='pb-10'>Come along, as we take a trip down the lanes of each historical period…</div>
                            </div>
                            <div className='text-justify'>
                                <div className='pb-7 underline'>The Portuguese Period</div>
                                <div className='pb-5'>Pallipuram Fort</div>
                                <div className='pb-5'>The Portuguese constructed the hexagonal-shaped fort in 1503 as a base to check the ships that plied up and down the Periyar to the Arabian Sea and the cellar was used for storing gunpowder. Originally constructed with just timber wood, it was later renovated by replacing timber with stone. Only ruins of this strong tower are left to see now.</div>
                            </div>
                            <div className="text-center pb-4">
                                <div className='pb-5'><img className="mx-auto  w-1/3 h-1/3 py-2 rounded-lg" src='/blog/image13.png'></img></div>
                            </div>

                            <div className='text-justify'>
                                <div className='pb-5'>Indo Portuguese Museum:</div>
                                <div className='pb-5'>The museum is an important center situated in Fort Kochi to understand the Indo-Portuguese heritage. The museum building is divided into five main sections including Treasure, Civil Life, Altar, Procession and Cathedral. The currently preserved items in the museum include some of the most artistic and architectural wonders which have a strong influence from the Portuguese era.</div>
                            </div>
                            <div className="text-center pb-4">
                                <div className='pb-10'><img className="mx-auto  w-1/3 h-1/3 py-2 rounded-lg" src='/blog/image14.png'></img></div>
                            </div>

                            <div className='text-justify'>
                                <div className='pb-5'>St. Francis Church :</div>
                                <div className='pb-5'>The modest and unpretentious architecture stands as a landmark in the history of church architecture in India. The church was built in 1503 by the Portuguese traders who came here following the same route as the revolutionary explorer, Vasco-da-Gama. The major highlight of the church is the gravestone of Vasco-da-Gama which, after 14 years of his death, was taken away to Lisbon in Portugal. The gravestone of the Portuguese is present on the northern wall and that of Dutch is present on the southern wall.</div>
                            </div>
                            <div className="text-center pb-4">
                                <div className='pb-5'><img className="mx-auto  w-1/3 h-1/3 py-2 rounded-lg" src='/blog/image12.png'></img></div>
                            </div>

                            <div className='text-justify'>
                                <div className='pb-5'>Santa Cruz Basilica:</div>
                                <div className='pb-5'>Formerly known as Santo Antonio, this artistic grandeur has gabled timber roofs covered with tiles, interiors featuring facades flanked on either side by stepped pinnacles and semi-circular arched windows and doors. The church with it’s gothic interiors has been a model for many churches in India. The canvas painting of the Last Supper in it was modelled on the famous painting of Leonardo da Vinci.</div>
                            </div>
                            <div className="text-center pb-4">
                                <div className='pb-5'><img className="mx-auto  w-1/3 h-1/3 py-2 rounded-lg" src='/blog/image19.png'></img></div>
                            </div>

                            <div className='text-justify'>
                                <div className='pb-5 underline'>The Dutch Period</div>
                                <div className='pb-5'>Mattancherry Palace</div>
                                <div className='pb-5'>Also known as Dutch Palace, this majestic Palace is one of the finest examples of the Kerala style of architecture interspersed with colonial influence. Built around 1545 C.E. by the Portuguese as a present to King Veera Kerala Verma of Kochi dynasty, it came to be known as the Dutch Palace as it underwent major repairs at the hands of the Dutch. It is famous for its long and spacious halls along with its central courtyard and a lovely collection of murals. It is now the home of the deity of the royal family, Pazhayannur Bhagavathy.</div>
                            </div>
                            <div className="text-center pb-4">
                                <div className='pb-5'><img className="mx-auto  w-1/3 h-1/3 py-2 rounded-lg" src='/blog/image16.png'></img></div>
                            </div>

                            <div className='text-justify'>
                                <div className='pb-5'>Dutch Cemetery:</div>
                                <div className='pb-5'>It is a 282-year old cemetery in Fort Kochi bearing an authentic record of hundreds of Europeans who came to India with the want to expand their colonial empire. It is the oldest cemetery of India with over 104 tombs. Each of the tombs tell tales of power, greed and conquest.</div>
                            </div>
                            <div className="text-center pb-4">
                                <div className='pb-5'><img className="mx-auto  w-1/3 h-1/3 py-2 rounded-lg" src='/blog/image10.png'></img></div>
                            </div>

                            <div className='text-justify'>
                                <div className='pb-5'>Thakur House</div>
                                <div className='pb-5'>With lovely lawns cooled by breeze from the sea below, it is yet another building that reflects the glory of the Dutch architecture and a bygone era. Made in the 1700s as a club and community centre for the Dutch East India Company, it has characteristic rooms, wooden floors and bay windows. It is believed that the house has several tunnels leading to far-off places in Fort Kochi such as the St. Francis Church and Bishop’s House.</div>
                            </div>
                            <div className="text-center pb-4">
                                <div className='pb-5'><img className="mx-auto  w-1/3 h-1/3 py-2 rounded-lg" src='/blog/image15.png'></img></div>
                            </div>

                            <div className='text-justify'>
                                <div className='pb-5 underline'>The Remnant of the Jews</div>
                                <div className='pb-5'>Jew Town</div>
                                <div className='pb-5'>With it’s old world charms, it remains in the heart of the Cochin Jewish community, which once thrived in Kochi. Known for its 16th-century Paradesi Synagogue and the quaint Mattancherry Palace, it is a favourite haunt for collectors of antique objects. Pristine and historically relevant artefacts have quite often been discovered in this quirky market.</div>
                            </div>
                            <div className="text-center pb-4">
                                <div className='pb-10'><img className="float-left  w-1/3 h-1/3 py-2 rounded-lg" src='/blog/image17.png'></img></div>
                                <div className='pb-10'><img className="mx-auto  w-1/3 h-1/3 py-2 rounded-lg" src='/blog/image18.png'></img></div>
                            </div>

                            <div className='text-justify'>
                                <div className='pb-5'>Paradesi Synagogue</div>
                                <div className='pb-5'>The 453 year-old synagogue is the oldest in the entire British Commonwealth.Founded by the Spanish and the Dutch Sephardic Jews, the synagogue has a beautifully decorated interior that reflects the tastes and traditions of the many cultures that flourished along trade routes of the Malabar.</div>
                            </div>
                            <div className="text-center pb-4">
                                <div className='pb-10'><img className="mx-auto  w-1/3 h-1/3 py-2 rounded-lg" src='/blog/image20.png'></img></div>
                            </div>

                            <div className='text-justify'>
                                <div className='pb-5'>As you join us for an exciting day to take in new perspectives and to enjoy a spectacular set of performances, make some time, after the event to enjoy the cultural melting-pot that Kochi is. Don’t miss out on the mouthwatering delicacies, the absorbing wall-art, the magical sunsets in the tropical skies, the cozy coconut groves, the mighty waves and the calm backwaters. Let them too, open your eyes to a new perspective!</div>
                            </div>
                            <div className="text-center pb-4">
                                <div className='pb-5'><img className="mx-auto  w-1/3 h-1/3 py-2 rounded-lg" src='/blog/image6.png'></img></div>
                            </div>

                            <div className='text-justify'>
                                <div className='pb-5'>Here’s a sneak-peek into the incredible street art and vivid murals that will mesmerize your eyes once you visit this gem of a city.</div>
                            </div>
                            <div className="text-justify pb-4">
                                <div className='pb-5'><img className="float-left  w-1/3 h-1/3 py-2 rounded-lg" src='/blog/image1.png'></img></div>
                                <div className='pb-5'><img className="mx-auto  w-1/3 h-1/3 py-2 rounded-lg" src='/blog/image8.png'></img></div>
                                <div className='pb-5'><img className="float-left  w-1/3 h-1/3 py-2 rounded-lg" src='/blog/image4.png'></img></div>
                                <div className='pb-5'><img className="mx-auto  w-1/3 h-1/3 py-2 rounded-lg" src='/blog/image2.png'></img></div>
                                <div className='pb-5'><img className="float-left  w-1/3 h-1/3 py-2 rounded-lg" src='/blog/image3.png'></img></div>
                                <div className='pb-5'><img className="mx-auto  w-1/3 h-1/3 py-2 rounded-lg" src='/blog/image5.png'></img></div>
                                <div className='pb-5'><img className="float-left  w-1/3 h-1/3 py-2 rounded-lg" src='/blog/image9.png'></img></div>
                                <div className='pb-5'><img className="mx-auto  w-1/4 h-1/4 py-2 rounded-lg" src='/blog/image11.png'></img></div>
                            </div>

                            <div className='text-justify'>
                                <div className='pb-10'>Note: All the images used in the blog belong to their respective owners and TEDxStTeresasCollege or the writer does not claim any right over them. The usage of the same falls under the guidelines of fair use for nonprofit educational purposes. If you wish for us to take down any of the copyrighted images, kindly contact contact us at contact@tedxstteresascollege.in</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />

            
            <Link href='/blogs/1'>Go to blog 1</Link>
        </>
    )
}

export default three