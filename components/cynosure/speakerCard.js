const speakerCard = ({ option, imgsrc, imgwidth, imgheight, speaker, details }) => {
    console.log();
    if (option == 'left') {
        return (
            <div className="mt-20 hidden md:grid grid-cols-1 md:grid-cols-2 gap-0 md:items-center">
                <div className="mx-auto p-5 md:p-0 md:pr-5 lg:w-2/3">
                    <img className="" src={imgsrc} width={imgwidth} height={imgheight}></img>
                </div>
                <div className="text-justify">
                    <h2 className="serif text-3xl md:text-2xl lg:text-4xl font-semibold text-center py-5 md:pt-0">{speaker}</h2>
                    <p className="md:text-sm lg:text-xl">{details}</p>
                </div>
            </div>
        );
    } else if (option == 'right') {
        return (
            <div className="mt-20 hidden md:grid grid-cols-1 md:grid-cols-2 md:items-center">
                <div className="text-justify">
                    <h2 className="serif text-3xl md:text-2xl lg:text-4xl font-semibold text-center py-5 md:pt-0">{speaker}</h2>
                    <p className="md:text-sm lg:text-xl">{details}</p>
                </div>
                <div className="mx-auto p-5 md:p-0 md:pl-5 lg:w-2/3">
                    <img className="" src={imgsrc} width={imgwidth} height={imgheight}></img>
                </div>
            </div>
        );
    }
}

export default speakerCard;