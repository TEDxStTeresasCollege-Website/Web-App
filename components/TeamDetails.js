import Image from 'next/image'

const TeamDetails = ({ content, url }) => {
    return (
        <>
            <h3 className="text-sm md:text-lg text-center ">{ content }</h3>
            <div>
                <Image src={url} alt="Team" width={4000} height={1800} />
            </div>
        </>
    )
}