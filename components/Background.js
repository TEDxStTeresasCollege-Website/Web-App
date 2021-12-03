import Image from 'next/image'

export default function Background() {
    return (
        <>
            <div className="absolute -z-10 bg-black w-full h-full"></div>
            <div className="absolute object-cover -z-1 h-full w-full block md:hidden"><Image src="/mobile/bg.png" layout="fill" /></div>
            <div className="absolute object-cover -z-1 h-full w-full hidden md:block"><Image src="/web/bg.png" layout="fill" /></div>
        </>
    )
}