import Link from 'next/link';
import Image from 'next/image';

const Navbar = ({ hide }) => {

    return (
        <>
            <nav className="absolute top-0 flex items-center w-full z-10 text-sm bg-black px-2 md:px-5 lg:px-20">

                <div className="flex-1 p-5">
                    <Link href="/"><img className='w-60' src="/tedXSTClogo.png"/></Link>
                </div>
                <div className="dropdown float-right">
                    <button className="bg-transparent text-white font-semibold py-2 px-4 rounded inline-flex items-center">
                        <svg className="w-8 h-8" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="{2}" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    <ul className="link-container dropdown-menu hidden mr-2 md:mr-5 lg:mr-20">
                        <Link href="/"><a className="rounded-t navbar-link border border-gray-700">Home</a></Link>
                        <Link href="/about"><a className="navbar-link border border-gray-700 border-t-0">About TED/TEDx</a></Link>
                        {/* <Link href="/about"><a className="navbar-link border border-gray-700 border-t-0">TEDxStTeresasCollege</a></Link> */}
                        <Link href="/circles"><a className="navbar-link border border-gray-700 border-t-0">TED Circles</a></Link>
                        <Link href="/partners"><a className="navbar-link border border-gray-700 border-t-0">Our Partners</a></Link>
                        <Link href="/blogs"><a className="navbar-link border border-gray-700 border-t-0">Blog</a></Link>
                        <Link href="/speaker"><a className="navbar-link border border-gray-700 border-t-0">Nominate a Speaker</a></Link>
                        <Link href="/team"><a className="rounded-b navbar-link  border border-gray-700 border-t-0">Meet the Team</a></Link>
                    </ul>
                </div>
            </nav>
        </>
    );
}

Navbar.defaultProps = {
    hide: 'opacity-100'
}

export default Navbar;