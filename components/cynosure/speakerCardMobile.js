const speakerCardMobile = ({ imgsrc, imgwidth, imgheight, speaker, details }) => {
    return (
        <div className="mt-20 grid grid-cols-1 md:hidden">
            <div className="mx-auto p-5 sm:w-2/3">
                <img className="" src={imgsrc} width={imgwidth} height={imgheight}></img>
            </div>
            <div className="text-justify sm:w-4/5 mx-auto">
                <h2 className="serif text-3xl font-semibold text-center py-5">{speaker}</h2>
                <p className="">{details}</p>
            </div>
        </div>
    )
}

export default speakerCardMobile;