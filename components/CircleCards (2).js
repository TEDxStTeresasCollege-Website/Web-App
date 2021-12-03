const CircleCard = () => {
    return (
        <section className="h-96">
            <div className="mx-auto w-full lg:w-1/2 relative">
                <div className="text-center top-56 hover:translate-y-60 lg:left-64 lg:top-10 lg:hover:translate-x-72 lg:hover:translate-y-0 transition-all absolute w-60 h-60 md:w-96 md:h-96 bg-card-5 rounded-lg border">
                    <div className="relative block">
                        <h3 className="absolute top-80 right-12 origin-bottom-right transform rotate-90 text-xl leading-none">Do I need to attend a TED Circle?</h3>
                        <p className="p-10 pr-12">TEDx is a non-profit organization that provides a forum for sharing ideas, knowledge, and perspectives</p>
                    </div>
                </div>
                <div className="top-56 hover:translate-y-60 lg:left-48 lg:top-10 lg:hover:translate-x-72 lg:hover:translate-y-0 transition-all absolute w-60 h-60 md:w-96 md:h-96 bg-card-4 rounded-lg border">
                    <div className="relative block">
                        <h3 className="absolute top-64 right-12 origin-bottom-right transform rotate-90 text-2xl">How do I join a Circle?</h3>
                        <p className="p-10 pr-12">TEDx is a non-profit organization that provides a forum for sharing ideas, knowledge, and perspectives</p>
                    </div>
                </div>
                <div className="top-56 hover:translate-y-60 lg:left-32 lg:top-10 lg:hover:translate-x-72 lg:hover:translate-y-0 transition-all absolute w-60 h-60 md:w-96 md:h-96 bg-card-3 rounded-lg border">
                    <div className="relative block">
                        <h3 className="absolute top-60 right-12 origin-bottom-right transform rotate-90 text-2xl">How do circles work?</h3>
                        <p className="p-10 pr-12">TEDx is a non-profit organization that provides a forum for sharing ideas, knowledge, and perspectives</p>
                    </div>
                </div>
                <div className="top-48 hover:translate-y-60 lg:left-16 lg:top-10 lg:hover:translate-x-72 lg:hover:translate-y-0 transition-all absolute w-60 h-60 md:w-96 md:h-96 bg-card-2 rounded-lg flex justify-center items-centerd-lg border">
                    <div className="relative block">
                        <h3 className="absolute top-60 right-12 origin-bottom-right transform rotate-90 text-2xl">What are Ted Circle?</h3>
                        <p className="p-10 pr-12">TEDx is a non-profit organization that provides a forum for sharing ideas, knowledge, and perspectives</p>
                    </div>
                </div>
                <div className="shadow-md top-10 absolute w-60 h-60 md:w-96 md:h-96 bg-card-1 rounded-lg flex justify-center items-center border">
                    <div className="text-center text-3xl">
                        <div className="text-3xl font-extrabold text-red-800">TED</div>Circles
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CircleCard;