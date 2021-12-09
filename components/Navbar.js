import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className="absolute top-0 z-10 z-50 flex items-center w-full px-2 text-sm bg-black md:px-5 lg:px-10">
        <div className="flex-1 p-5">
          <Link href="/">
            <img className="w-60" src="/tedXSTClogo.png" />
          </Link>
        </div>
        <div className="float-right dropdown">
          <button className="inline-flex items-center px-4 py-2 font-semibold text-white bg-transparent rounded">
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
          <ul className="hidden mr-2 link-container dropdown-menu md:mr-5 lg:mr-10">
            <Link href="/">
              <a className="border border-gray-700 rounded-t navbar-link">
                Home
              </a>
            </Link>
            <Link href="/about">
              <a className="border border-t-0 border-gray-700 navbar-link">
                About TED/TEDx
              </a>
            </Link>
            <Link href="/cochym">
              <a className="border border-t-0 border-gray-700 navbar-link">
                Cochym
              </a>
            </Link>
            {/* <Link href="/circles"><a className="border border-t-0 border-gray-700 navbar-link">TED Circles</a></Link> */}
            <Link href="/partners">
              <a className="border border-t-0 border-gray-700 navbar-link">
                Our Partners
              </a>
            </Link>
            <Link href="/blogs">
              <a className="border border-t-0 border-gray-700 navbar-link">
                Blog
              </a>
            </Link>
            {/* <Link href="/speaker"><a className="border border-t-0 border-gray-700 navbar-link">Nominate a Speaker</a></Link> */}
            <Link href="/team">
              <a className="border border-t-0 border-gray-700 rounded-b navbar-link">
                Meet the Team
              </a>
            </Link>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
