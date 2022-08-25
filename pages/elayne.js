import Navbar from "../components/Navbar";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

import Slide from "../components/Slide";
import elayneslider from "../data/elayneslider";
import SpeakerCard from "../components/cynosure/speakerCard";
import SpeakerCardMobile from "../components/cynosure/speakerCardMobile";

import { useForm } from "react-hook-form";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarked } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import axios from "axios";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const elayne = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (values) => {
    try {
      const response = await axios.post(
        `${window.location.origin}/api/data/newsletter`,
        values
      );
      if (response.status == 200) {
        toast.success(
          "Voila! You have successfully subscribed to our newsletter.",
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }
        );
      } else if (response.status == 201) {
        toast.success(response.data.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (error) {
      toast.error("Oops! Something went wrong!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  return (
    <div className="text-white min-h-screen w-full flex flex-col justify-center items-center bg-elayne-bg bg-top bg-cover">
      <Head>
        <title>Elayne : TEDxStTeresasCollege</title>
        <meta name="description" content="Elayne : TEDxStTeresasCollege" />
        <link rel="icon" href="logo.ico" />
      </Head>

      <Navbar />

      {/* The main section */}
      <div className="text-center bg-white-dots md:w-4/5 mx-auto">
        <div className="px-10">
          <br></br>
          <br></br>
          <br></br>
          <div className="pt-32 pb-10 md:w-4/5 md:pb-6 lg:w-4/5 mx-auto">
            <Image
              className=""
              src="/elayne/elayne-2.png"
              height={2251}
              width={4000}
              loading="eager"
            />
          </div>
          <p className="text-lg lg:text-xl xl:text-2xl">[iy-ley-n] </p>{" "}
          <br></br>
          <p className="text-lg lg:text-xl xl:text-2xl">RAY OF LIGHT </p>
          <br></br>
          <p className="text-lg lg:text-xl xl:text-2xl">French </p>
          <br></br>
          <p className="text-lg lg:text-xl xl:text-2xl">
            The very necessity of light can be seen in our lives.{" "}
          </p>
          <p className="text-lg lg:text-xl xl:text-2xl pt-5">
            If the sun ceases to shine and the powerhouse are cut,we will all
            end up in an era of confusion and stillness.
          </p>
          <p className="text-lg lg:text-xl xl:text-2xl pt-5">
            {" "}
            The very objective of Elayne is to shine a light on such sparked
            minds that are keen on ideas,thoughts,and facts. A ray of light that
            brings you hope and joy in a challenging situation.
          </p>
        </div>
        <div className="pt-32 pb-10 md:w-4/5 md:pb-6 lg:w-2/5 mx-auto">
          <Image
            className=""
            src="/elayne/NOOR (1).png"
            height={2251}
            width={2251}
            loading="eager"
          />
        </div>
        <div className="px-10">
          <p className="text-lg lg:text-xl xl:text-2xl">
            {" "}
            Have you ever wondered what glows in the darkness and gives nature
            its light as seasons come and go?
          </p>
          <p className="text-lg lg:text-xl xl:text-2xl pt-5">
            Paving way through the darkness in constant search of illumined
            souls... Only a few who are keen to ideas, truths can see it..
          </p>
          <p className="text-lg lg:text-xl xl:text-2xl pt-5">
            It twinkles and glows in the light of the moon They call me "NOOR"!{" "}
          </p>
        </div>
      </div>

      {/* Speakers section */}
      <div className="px-5 bg-white-dots md:w-4/5 lg:w-5/6 mx-auto"><br></br><br></br>
        {/* Heading */}
        <h1 className="serif text-4xl md:text-5xl lg:text-6xl mt-20 font-bold text-center hover:underline">
          Unveiling the Voices
        </h1><br></br><br></br>
        {/* Mobile View */}
        <SpeakerCardMobile
          imgsrc="/elayne/SHAZAM MOHAMMED (1) (1).png"
          imgwidth="971"
          imgheight="971"
          speaker="Shazam Mohammed"
          details="SHAZ MOHAMMED
                    Shaz Mohammed aka Shazzam has been established as a content creator,
                    assistant director, and influencer. His comedic criticism of technology
                    has always been flamboyant. He explores content creation as a new job
                    opportunity and the misconceptions that exist in such an era in our
                    upcoming event."
        />
        <SpeakerCardMobile
          imgsrc="/elayne/LENAA (1).png"
          imgwidth="971"
          imgheight="971"
          speaker="Lenaa"
          details="A name that is highly familiar to the Malayali audience, who hasn't
                    failed to amaze us through her ground-breaking performances. She is
                    also an entrepreneur and a scriptwriter. She would enlighten the audience
                    on the importance of self-realisation and finding purpose on the 29th of
                    August at TEDxStTeresasCollege."
        />
        <SpeakerCardMobile
          imgsrc="/elayne/RIYA SALIM1.png"
          imgwidth="971"
          imgheight="971"
          speaker="Riyas Salim"
          details="RIYAS SALIM
                    A social media influencer and singer who gained popularity through
                    his videos on TikTok, Instagram and YouTube. He is also a reality
                    TV star and finalist who won over a large audience with his bold and
                    humorous personality.Riyas Salim will join TEDxStTeresasCollege
                    on the 29th of August to shine a light on the topic of social acceptance
                    and happiness."
        />
        <SpeakerCardMobile
          imgsrc="/elayne/JEVIN ZAC (1).png"
          imgwidth="971"
          imgheight="971"
          speaker="Jevin Zac"
          details="JEVIN ZAC
                    Jevin Zac is a socially-motivated entrepreneur who has worked
                    to reduce the carbon footprint. He will be joining us to narrate
                    his story of the person he is today. Get a chance to hear from him
                    at TEDxStTeresasCollege."
        />
        <SpeakerCardMobile
          imgsrc="/elayne/RESHMA SEBASTIAN (1).png"
          imgwidth="971"
          imgheight="971"
          speaker="Reshma Sebastian"
          details="RESHMA SEBASTIAN
                    An engineer, model and actress reknowned for her famous role in
                    the movie Charlie, She started her career in the year2011 and has
                    never turned back since.
                    Our speaker Reshma Sebastian is going to talk about the importance
                    and advantages of financial independence for young women. "
        />
        <SpeakerCardMobile
          imgsrc="/elayne/MIDHILA JOSE (1).png"
          imgwidth="971"
          imgheight="971"
          speaker="Midhila Jose"
          details="MIDHILA JOSE
                    With a stellar track record of achievements, the reigning
                    Mrs India International 2020, Mrs East Asia Universe 2021, anc
                    Mrs Universe Successful 2022, Midhila Jose is an embodiment
                    of success.She is going to talk about how to have a successful life
                    and she will be sharing with us her journey towards success."
        />
        <SpeakerCardMobile
          imgsrc="/elayne/PINKY1.png"
          imgwidth="971"
          imgheight="971"
          speaker="Pinky Jayaprakash"
          details="PINKY JAYAPRAKASH
                    A budding entrepreneur and the founder of SkEdu. she has covered
                    all the bases of understanding the issues faced by the student community
                    as a student, parent and teacher herself.
                    She had to face numerous setbacks in her life, but with great willpower
                    and with the help of her friends and family members, she overcame it.
                    She will be giving us an insight into her life journey."
        />
        <SpeakerCardMobile
          imgsrc="/elayne/SABU RAMACHANDRAN1.png"
          imgwidth="971"
          imgheight="971"
          speaker="Babu Ramachandran"
          details="BABU RAMACHANDRAN
                    is a creative and knowledgeable journalist.
                    He works for the prominent media organization Asianet News as
                    the chief broadcast journalist. He is well known to the Malayali
                    audience because he hosts the popular show Vallathoru Katha 
                    which debuted in July 2020."
        />
        
        
        <div className="px-5 md:w-4/5 lg:w-5/6 mx-auto">
          {/* Heading */}
          {/*<h1 className="serif text-4xl md:text-5xl lg:text-6xl mt-20 font-bold text-center hover:underline">
            Unveiling the Voices
          </h1>*/}

          {/* Mobile View */}
          {/* <SpeakerCardMobile
            imgsrc="/cynosure/gauthami.png"
            imgwidth="971"
            imgheight="971"
            speaker="Gauthami Nair"
            details="Gauthami Nair, an adept actress and a proficient director, is a name familiar to all Malayalees. Her flamboyant personality mixed with her soul-stirring acting has made her one of the most illustrious actresses in the Malyalam film industry. Having made her mark through films like The Diamond Necklace and Second Show, she also directed Vrittham, a movie that made history with an all-women crew. Currently doing research in neuroscience at Sree Chitra Hospital, Trivandrum, her determination and mettle has incited many aspiring women directors to take the big step and prove their competence in the field."
          />

          <SpeakerCardMobile
            imgsrc="/cynosure/Rojin Thomas.png"
            imgwidth="971"
            imgheight="971"
            speaker="Rojin Thomas"
            details="One of most reowned film directors and scriptwriters in the Malayalam film industry, he is the brain behind some of your favourite movies like Home and Philips and the Monkey Pen. With ideas and stories that can move the most indifferent of hearts, Mr. Thomas finds a way every time to connect his stories with the daily hustles of the common man. Home is a blockbuster hit that brought many deep-rooted issues into the limelight with a simple story of a family man and was extremely well-received by the Malayali audience."
          />

          <SpeakerCardMobile
            imgsrc="/cynosure/nilufer.png"
            imgwidth="971"
            imgheight="971"
            speaker="Dr. Fathima Nilufer Sheriff"
            details="A one woman show who did it all herself and strives to do more. The builder and driving force behind the company, this enterpreneur is now known for her brand 'Therefore I'm', one of the very first wellness centers in Kerala A brand with an army of accomplished artists who are constantly aiming to help people gain confidence in themselves and gratification to all those who endorse it.
                    The clinic provides a top-notch transformation experience and uses globally acclaimed medical practices to treat its clients."
          />

          <SpeakerCardMobile
            imgsrc="/cynosure/Don Paul.png"
            imgwidth="971"
            imgheight="971"
            speaker="Don Paul"
            details="A young humanitarian who uses his engineering skills to help the differently abled, Don Paul began his journey with just a student startup. With his steadfast dedication and grit, Desintox Technologies has gone on to become an organization that creates innovations to help out people whose physical abilities are compromised. A hero without a cape but a man on a mission, Mr. Don Paul is a harbinger for change and a person set to make reality of an inclusive society for differently abled people across the country."
          />*/}

          {/* Web View */}
          <SpeakerCard
            option="left"
            imgsrc="/elayne/SHAZAM MOHAMMED (1) (1).png"
            imgwidth="971"
            imgheight="971"
            speaker="Shazam Mohammed"
            details="SHAZ MOHAMMED
                    Shaz Mohammed aka Shazam has been established as a content creator,
                    assistant director, and influencer. His comedic criticism of technology
                    has always been flamboyant. He explores content creation as a new job
                    opportunity and the misconceptions that exist in such an era in our
                    upcoming event."
          />

          <SpeakerCard
            option="right"
            imgsrc="/elayne/LENAA (1).png"
            imgwidth="971"
            imgheight="971"
            speaker="Lenaa"
            details="A name that is highly familiar to the Malayali audience, who hasn't
                    failed to amaze us through her ground-breaking performances. She is
                    also an entrepreneur and a scriptwriter. She would enlighten the audience
                    on the importance of self-realisation and finding purpose on the 29th of
                    August at TEDxStTeresasCollege."
          />

          <SpeakerCard
            option="left"
            imgsrc="/elayne/RIYA SALIM1.png"
            imgwidth="971"
            imgheight="971"
            speaker="Riyas Salim"
            details="RIYAS SALIM
                    A social media influencer and singer who gained popularity through
                    his videos on TikTok, Instagram and YouTube. He is also a reality
                    TV star and finalist who won over a large audience with his bold and
                    humorous personality.Riyas Salim will join TEDxStTeresasCollege
                    on the 29th of August to shine a light on the topic of social acceptance
                    and happiness."
          />

          <SpeakerCard
            option="right"
            imgsrc="/elayne/JEVIN ZAC (1).png"
            imgwidth="971"
            imgheight="971"
            speaker="Jevin Zac"
            details="JEVIN ZAC
                    is a socially-motivated entrepreneur who has worked
                    to reduce the carbon footprint. He will be joining us to narrate
                    his story of the person he is today. Get a chance to hear from him
                    at TEDxStTeresasCollege."
          />
          <SpeakerCard
            option="left"
            imgsrc="/elayne/RESHMA SEBASTIAN (1).png"
            imgwidth="971"
            imgheight="971"
            speaker="Reshma Sebastian"
            details="RESHMA SEBASTIAN
                    An engineer, model and actress reknowned for her famous role in
                    the movie Charlie,She started her career in the year2011 and has
                    never turned back since.
                    Our speaker Reshma Sebastian is going to talk about the importance
                    and advantages of financial independence for young women. "
          />
          <SpeakerCard
            option="right"
            imgsrc="/elayne/MIDHILA JOSE (1).png"
            imgwidth="971"
            imgheight="971"
            speaker="Midhila Jose"
            details="MIDHILA JOSE
                    With a stellar track record of achievements, the reigning
                    Mrs India International 2020, Mrs East Asia Universe 2021, anc
                    Mrs Universe Successful 2022, Midhila Jose is an embodiment
                    of success.She is going to talk about how to have a successful life
                    and she will be sharing with us her journey towards success."
          />
          <SpeakerCard
            option="left"
            imgsrc="/elayne/PINKY1.png"
            imgwidth="971"
            imgheight="971"
            speaker="Pinky Jayaprakash"
            details="PINKY JAYAPRAKASH
                    A budding entrepreneur and the founder of SkEdu. she has covered
                    all the bases of understanding the issues faced by the student community
                    as a student, parent and teacher herself.
                    She had to face numerous setbacks in her life, but with great willpower
                    and with the help of her friends and family members, she overcame it.
                    She will be giving us an insight into her life journey."
          />
          <SpeakerCard
            option="right"
            imgsrc="/elayne/SABU RAMACHANDRAN1.png"
            imgwidth="971"
            imgheight="971"
            speaker="Babu Ramachandran"
            details="BABU RAMACHANDRAN
                    is a creative and knowledgeable journalist.
                    He works for the prominent media organization Asianet News as
                    the chief broadcast journalist. He is well known to the Malayali
                    audience because he hosts the popular show Vallathoru Katha 
                    which debuted in July 2020."
          />
        </div>
        {/* Performer LineUp */}
        <div className="px-5  w-full md:w-4/5 lg:w-5/6 mx-auto">
          <h1 className="serif text-4xl md:text-5xl lg:text-6xl my-20 font-bold text-center hover:underline">
            Performers Line Up
          </h1>
          <div className="w-full md:w-4/5 mx-auto">
            <Slide images={elayneslider} />
          </div>
          <div className="py-10 flex justify-center">
            <Link href="http://wa.me/916238774229">
              <button className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded text-sm lg:text-lg">
                Register Now Through WhatsApp
              </button>
            </Link>
          </div>
        </div>
        {/* Footer section */}
        <footer className="w-full">
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <div className="w-full mt-20 text-tiny lg:text-lg xl:text-xl">
            <div className="p-5 lg:px-10 w-full bg-footer-black md:bg-footer-black-1">
              <div className="flex flex-row">
                <div className="text-left flex-1">
                  Reach out at :
                  <div className="text-cyno">
                    <a href="mailto:contact@tedxstteresascollege.in">
                      contact@tedxstteresascollege.in
                    </a>
                  </div>
                  <div className="py-2 md:mr-5">
                    <div className="hover:underline">Organizer</div>
                    Sneha Anna George
                    <br />
                    <a href="tel:+917994262370">+917994262370</a>
                    <br />
                  </div>
                </div>
                <div className="text-right flex-1">
                  <a href="https://goo.gl/maps/oNWWs5diruyXFeVe6">
                    Locate us
                    <span>
                      <FontAwesomeIcon
                        icon={faMapMarked}
                        className="text-cyno ml-2"
                        fixedWidth
                      />
                    </span>
                  </a>
                  <div className="">
                    St. Teresa’s College
                    <br />
                    Park Avenue Road
                    <br />
                    Ernakulam
                    <br />
                    Kerala - 682011
                    <br />
                    India
                    <br />
                  </div>
                  <div className="my-2">
                    Say Hello!
                    <div className="flex justify-end gap-2 md:gap-3 mt-3">
                      <a href="https://instagram.com/tedxst_teresascollege">
                        <span>
                          <FontAwesomeIcon
                            icon={faInstagram}
                            className="text-cyno"
                            size="2x"
                          />
                        </span>
                      </a>
                      <a href="https://www.facebook.com/Tedxstteresascollege-102464092186247/">
                        <span>
                          <FontAwesomeIcon
                            icon={faFacebook}
                            className="text-cyno ml-2"
                            size="2x"
                          />
                        </span>
                      </a>
                      <a href="https://www.linkedin.com/company/tedxstteresascollege">
                        <span>
                          <FontAwesomeIcon
                            icon={faLinkedin}
                            className="text-cyno ml-2"
                            size="2x"
                          />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row">
                <div className="flex-1"></div>
                <div className="md:flex-1"></div>
                <div className="lg:flex-1"></div>

                <div className="flex-1">
                  <div className="text-right p-2 md:p-3 md:mt-10 rounded-xl bg-cyno">
                    <h1 className="pb-3 text-md">
                      Be the first one to get updates on our latest events!
                    </h1>
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className="w-full max-w-sm ml-auto z-50"
                    >
                      <div className="flex items-center mb-2">
                        <div className="w-1/2">
                          <label
                            className="block text-gray-100 text-right mb-1 md:mb-0 pr-4"
                            htmlFor="inline-full-name"
                          >
                            Name
                          </label>
                        </div>
                        <div className="w-1/2">
                          <input
                            name="name"
                            {...register("name", {
                              required: {
                                value: true,
                                message: "First name is required",
                              },
                              maxLength: {
                                value: 50,
                                message: "Name is too long.",
                              },
                              minLength: {
                                value: 2,
                                message: "Name is too short.",
                              },
                            })}
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            id="inline-full-name"
                            type="name"
                          />
                          <span className="py-2 text-sm text-purple-400">
                            {errors.name?.message}
                          </span>
                          <span></span>
                        </div>
                      </div>
                      <div className="flex items-center mb-2">
                        <div className="w-1/2">
                          <label
                            className="block text-gray-100 text-right mb-1 md:mb-0 pr-4"
                            htmlFor="inline-password"
                          >
                            {" "}
                            Email{" "}
                          </label>
                        </div>
                        <div className="w-1/2">
                          <input
                            name="email"
                            {...register("emailID", {
                              required: {
                                value: true,
                                message: "Valid Email ID is required",
                              },
                              maxLength: {
                                value: 120,
                                message: "You exceeded the maximum limit.",
                              },
                              minLength: {
                                value: 8,
                                message: "Too short to be an Email ID",
                              },
                            })}
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-1
                                        px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white
                                        focus:border-purple-500"
                            id="inline-email"
                            type="email"
                          />
                          <span className="py-2 text-sm text-purple-400">
                            {errors?.emailID?.message}
                          </span>
                          <span></span>
                        </div>
                      </div>
                      <div className="flex items-center mb-2">
                        <div className="w-1/2">
                          <label
                            className="block text-gray-100 text-right mb-1 md:mb-0 pr-4"
                            htmlFor="inline-password"
                          >
                            {" "}
                            Organisation{" "}
                          </label>
                        </div>
                        <div className="w-1/2">
                          <input
                            name="organisation"
                            {...register("organisation", {
                              required: {
                                value: true,
                                message: "Organisation is required",
                              },
                              maxLength: {
                                value: 30,
                                message: "You exceeded the maximum limit.",
                              },
                              minLength: {
                                value: 2,
                                message: "Too short to be a valid organisation",
                              },
                            })}
                            className="bg-gray-200 appearance-none border-2 border-gray-200
                                        rounded w-full py-1 px-3 text-gray-700 leading-tight
                                        focus:outline-none focus:bg-white focus:border-purple-500"
                            id="inline-organisation"
                            type="text"
                          />
                          <span className="py-2 text-sm text-purple-400">
                            {errors?.organisation?.message}
                          </span>
                          <span></span>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-1/2"></div>
                        <div className="w-1/2">
                          <input
                            className="ml-auto shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white py-1 px-3 rounded"
                            type="submit"
                            value="Subscribe"
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              <div className="pt-5 w-full text-center">
                <div>
                  This independent event is operated under license from TED
                </div>
                <div className="md:text-lg font-bold -my-1">
                  · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · ·
                  · · · · · · · · · · · · ·
                </div>
                <div className="pb-2">
                  Website created by{" "}
                  <a
                    className="hover:underline"
                    href="https://github.com/sharunrajeev"
                  >
                    Sharun E Rajeev
                  </a>{" "}
                  and{" "}
                  <a className="hover:underline" href="">
                    Gaurav Bhat
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default elayne;
