import Navbar from "../components/Navbar";
import Image from "next/image";

const cynosure = () => {
    return (
        <div className="text-white min-h-screen w-full flex flex-col justify-center items-center bg-gradient-to-b from-cyno-1 via-cyno-2 to-cyno-3">
            <Navbar />

            <div className="p-10 md:p-32 text-center bg-white-dots">
                <div className="h-96 w-full md:w-96 mx-auto">
                    <Image className="" src="/CynosureLogo.png" height={2251} width={2251} />
                </div>
                <p className="pt-20 text-xl">Non aute anim exercitation aute nostrud ex ad do in dolor non velit. Occaecat ex excepteur exercitation aliquip ut nostrud enim consectetur.</p>
                <p className="pt-10 text-xl">Non aute anim exercitation aute nostrud ex ad do in dolor non velit. Occaecat ex excepteur exercitation aliquip ut nostrud enim consectetur.</p>
            </div>

        </div>
    );
}

export default cynosure;

// Colors 4b2266 030051 000004