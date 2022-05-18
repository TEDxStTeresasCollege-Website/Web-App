import Head from 'next/head'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'



const two = () => {
    return (
        <>
            <Head>
                <title>Selective Breeding: the fine line between Aesthetics and Abuse</title>
                <meta name="description" content="Blogs 2 : TEDxStTeresasCollege" />
                <link rel="icon" href="../logo.ico" />
            </Head>
          
            <Navbar />


            <div className="min-h-screen bg-night-sky bg-repeat-y bg-black text-white pt-28 w-full">
                <div className="">
                    <div className="p-10 w-full md:w-3/4 mx-auto">
                        <h1 className="text-center text-ted-red serif text-6xl">Selective Breeding: the fine line between Aesthetics and Abuse</h1>
                        <div className="text-white text-xl">
                            <div className="text-ted-red pt-8 pb-10 text-center">By Naomi Netto, II BA English Language and Literature</div>
                            <div className='text-justify'>
                                <div className='pb-5'>A google search for the world’s most popular dog breeds would give you a list that lands the Pug, Shih Tzu, Boxer, French bulldog and Pekingese places in the top 30 spots.</div>
                                <div className='pb-5'>What do these breeds have in common though?</div>
                                <div className='pb-5'>Just by looking at them, one can see that these dogs all have a common flatter-looking face, which makes them cute and appealing.</div>
                                <div className='pb-5'>These breeds with their short faces are known as brachycephalic breeds.</div>
                                <div className='pb-5'>Brachycephalic means “short-headed”. These animals have been bred intentionally to have a shortened skull and mini muzzle which gives them an overall squashed, baby-like appearance, which most pet lovers are endeared by.</div>
                            </div>
                            <div className="text-center pb-4">
                                <div className='pb-5'><img className="mx-auto  w-1/3 h-1/3 py-2 rounded-lg" src='/blog/b7.png'></img><figcaption>Some common brachycephalic breeds</figcaption></div>    
                            </div>

                            <div className='text-justify'>
                                <div className='pb-10'>However, this cuteness comes at a price…</div>
                                <div className='pb-10'>Brachycephalic breeds are prone to breathing difficulties (among many other health issues), due to the compromised shape of their head, muzzle and throat. They usually have a shorter life expectancy because of these issues.</div>
                            </div>
                            <div className="text-justify pb-4">
                                <div className='pb-5'><img className="float-left  w-1/3 h-1/3 py-2 rounded-lg" src='/blog/b3.png'></img></div>
                                <div className='pb-5'><img className="mx-auto  w-1/3 h-1/3 py-2 rounded-lg" src='/blog/b4.png'></img><figcaption>Brachycephalic cat breeds: (left) Himalayan cat, (right) Persian cat</figcaption></div>
                            </div>

                            <div className='text-justify'>
                                <div className='pb-5'>How does this occur in the first place?</div>
                                <div className='pb-5'>Well this is due to selective breeding, wherein the traits – in this case, those that ensure a snub-nosed appearance, are promoted. Sometimes selective breeding can be taken to an extreme by callous breeders, which results in severe life-long health issues for the animal.</div>
                                <div className='pb-5'>This problem of extreme selective breeding is one that is more recent. If you were to look at pictures or paintings of pugs from around a 100 years ago, their snouts would not resemble those of their modern day counterparts, as these dogs from a bygone age had more distinct noses. Ironically, pugs were actually considered to be athletic creatures capable of vigorous exercise, so much so that the Germans have a term ‘mopsfidel’ meaning “fit as a pug”. But now due to the damaging effects of selective breeding most pugs struggle to lead a healthy life.</div>
                            </div>
                            <div className="text-justify pb-4">
                                <div className='pb-5'><img className="float-left  w-1/3 h-1/3 py-2 rounded-lg" src='/blog/b5.png'></img></div>
                                <div className='pb-5'><img className="mx-auto  w-1/3 h-1/3 py-2 rounded-lg" src='/blog/b1.png'></img></div>    
                            </div>

                            <div className='text-justify'>
                                <div className='pb-5'>Selective breeding has had damaging effects on other canine breeds too.</div>
                                <div className='pb-5'>The German Shepherd is perhaps one of the most recognizable and popular breeds of dog there is. Unfortunately, a trend has arisen in the breeding of these dogs that focuses more on the overall cosmetic look of the animal. German Shepherds, an athletic breed, are now more prone to osteoarthritis (arthritis that occurs when flexible tissue at the ends of bones wear down) which is caused by breeding for aesthetic traits such as lower hind legs or a more sloping back.</div>
                            </div>
                            <div className="text-center pb-4">
                                <div className='pb-5'><img className="mx-auto  w-1/3 h-1/3 py-2 rounded-lg" src='/blog/b2.png'></img></div>
                                    
                            </div>

                            <div className='text-justify'>
                                <div className='pb-10'>Selective breeding doesn’t seem like the most ethical practice, however, it does have its advantages. Promoting particular traits can produce animals that are bigger, stronger and faster, for e.g. successful racehorses may be bred together to create offspring that are faster and more agile.</div>
                            </div>
                            <div className="text-center pb-4">
                                <div className='pb-5'><img className="mx-auto  w-1/3 h-1/3 py-2 rounded-lg" src='/blog/b6.png'></img></div>
                            </div>

                            <div className='text-justify'>
                                <div className='pb-5'>Therefore, extreme selective breeding - in the context of making animals look more physically appealing to humans, is something that is by no means ethical as it is clearly at the cost of the animal’s comfort and health.</div>
                                <div className='pb-5'>Today, there are around 350 dog breeds in the world, these various breeds have all arisen from a common ancestor, the grey wolf, due to human intervention over the past 10,000+ years. Artificial selection has given us what we consider to be ‘man’s best friend’, but we seem to be doing a great disservice to them by valuing our own aesthetic pleasure over their general wellbeing.</div>
                            </div>
                            <div className='text-justify'>
                            <p><br></br> Sources:<br></br>sciencing.com/artificial-selection-selective-breeding-definition-examples<br></br>https://www.earth.com/news/german-shepherd-health-breeding/<br></br>https://www.sciencedaily.com/releases/2017/07/170727221255.htm<br></br> https://kleintierklinik.uni-leipzig.de/455-leistungen/1932-kurzkoepfigkeit_1932 </p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <Footer />
        </>
    )
}

export default two