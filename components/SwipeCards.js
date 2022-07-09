export default function SwipeCards() {
    return (
        <>
            <div className="border border-black p-10">
                <div className="h-96 w-96 bg-gray-800 text-white bg-opacity-80 serif rounded text-center text-2xl mb-10 hidden md:relative">
                    <div className="w-4/5 absolute left-0 h-full">
                        <p className="pt-24">TEDx is a non-profit organization that provides a forum for sharing ideas, knowledge, and perspectives</p>
                    </div>
                    <div className="w-full pt-5 -right-2 -top-1.5 h-1/5 absolute transform translate-y-40 translate-x-36 rotate-90 border-b-2 border-gray-100">
                        <p className="">Do I need to attend a TED Circle?</p>
                    </div>
                </div>

                <div className="h-96 w-96 bg-gray-800 bg-opacity-80 text-white serif rounded text-center text-2xl md:hidden">
                    <div className="w-full h-1/5 border-b-2">
                        <p className="p-5">Do I need to attend a TED Circle?</p>
                    </div>
                    <div className="w-full h-4/5">
                        <p className="p-5 pt-20 text-justify">TEDx is a non-profit organization that provides a forum for sharing ideas, knowledge, and perspectives</p>
                    </div>
                </div>
            </div>
        </>
    )
}