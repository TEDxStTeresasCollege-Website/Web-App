import Link from "next/link";
import Head from "next/head";
import Footer from "../components/Footer";

const about = () => {
  return (
    <div>
      <Head>
        <title>About TED/TEDx : TEDxStTeresasCollege</title>
        <meta
          name="description"
          content="About TED/TEDx : TEDxStTeresasCollege"
        />
        <link rel="icon" href="logo.ico" />
      </Head>

      <nav className="absolute top-0 flex items-center h-20 w-full z-50 text-sm bg-black px-2 md:px-5 lg:px-10">
        <div className="flex-1 p-5">
          <Link href="/">
            <img className="w-60" src="/tedXSTClogo.png" />
          </Link>
        </div>
        <div className="dropdown float-right">
          <button className="bg-transparent text-white font-semibold py-2 px-4 rounded inline-flex items-center">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="white"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="{2}"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <ul className="link-container dropdown-menu hidden mr-2 md:mr-5 lg:mr-10">
            <Link href="/">
              <a className="rounded-t navbar-link border border-gray-700">
                Home
              </a>
            </Link>
            <Link href="/about">
              <a className="navbar-link border border-gray-700 border-t-0">
                About TED/TEDx
              </a>
            </Link>
            {/* <Link href="/cochym"><a className="navbar-link border border-gray-700 border-t-0">Cochym</a></Link> */}
            <Link href="/elayne">
              <a className="navbar-link border border-gray-700 border-t-0">
                Elayne
              </a>
            </Link>
            {/* <Link href="/circles"><a className="navbar-link border border-gray-700 border-t-0">TED Circles</a></Link> */}
            <Link href="/partners">
              <a className="navbar-link border border-gray-700 border-t-0">
                Our Partners
              </a>
            </Link>
            <Link href="/blogs">
              <a className="navbar-link border border-gray-700 border-t-0">
                Blog
              </a>
            </Link>
            {/* <Link href="/speaker"><a className="navbar-link border border-gray-700 border-t-0">Nominate a Speaker</a></Link> */}
            <Link href="/team">
              <a className="rounded-b navbar-link  border border-gray-700 border-t-0">
                Meet the Team
              </a>
            </Link>
          </ul>
        </div>
      </nav>

      <div className="bg-night-sky bg-repeat-y bg-black">
        <section className="w-full min-h-screen mt-20 text-white mx-auto relative bg-night-sky-web">
          <div className="w-5/6 md:w-2/3 flex flex-col gap-5 mx-auto items-center justify-center text-center py-20">
            <h1 className="text-5xl md:text-6xl serif text-ted-red">
              About TEDx, x=independently organized event
            </h1>
            <h3 className="text-sm md:text-xl sans text-justify">
              In the spirit of ideas worth spreading, TEDx is a program of
              local, self-organized events that bring people together to share a
              TED-like experience. At a TEDx event, TED Talk video and live
              speakers combine to spark deep discussion and connection. These
              local, self-organized events are branded TEDx, where x =
              independently organized TED event. The TED Conference provides
              general guidance for the TEDx program, but individual TEDx events
              are self-organized. (Subject to certain rules and regulations.)
            </h3>
            <h1 className="text-5xl md:text-6xl serif text-ted-red mt-20">
              About TED
            </h1>
            <h3 className="text-sm md:text-xl text-justify sans">
              TED is a nonprofit organization devoted to Ideas Worth Spreading.
              Started as a four-day conference in California 30 years ago, TED
              has grown to support its mission with multiple initiatives. The
              two annual TED Conferences invite the world's leading thinkers and
              doers to speak for 18 minutes or less. Many of these talks are
              then made available, free, at TED.com. TED speakers have included
              Bill Gates, Jane Goodall, Elizabeth Gilbert, Sir Richard Branson,
              Nandan Nilekani, Philippe Starck, Ngozi Okonjo-Iweala, Sal Khan
              and Daniel Kahneman.
            </h3>
            <h3 className="text-sm md:text-lg text-justify sans">
              The annual TED Conference takes place each spring in Vancouver,
              British Columbia. TED's media initiatives include TED.com, where
              new TED Talks are posted daily; TED Translators, which provides
              subtitles and interactive transcripts as well as translations from
              volunteers worldwide; the educational initiative TED-Ed. TED has
              established The Audacious Project that takes a collaborative
              approach to funding ideas with the potential to create change at
              thrilling scale; TEDx, which supports individuals or groups in
              hosting local, self- organized TED-style events around the world,
              and the TED Fellows program, helping world-changing innovators
              from around the globe to amplify the impact of their remarkable
              projects and activities.
            </h3>
            <h3 className="text-sm md:text-lg text-justify sans">
              Follow TED on{" "}
              <a
                className="underline hover:text-blue-300"
                href="http://twitter.com/TEDTalks"
              >
                Twitter
              </a>{" "}
              or on{" "}
              <a
                className="underline hover:text-blue-300"
                href="http://www.facebook.com/TED"
              >
                Facebook
              </a>
            </h3>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default about;
