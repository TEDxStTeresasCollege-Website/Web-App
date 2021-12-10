import Image from 'next/image'

const TeamCard = ({ name, designation, image }) => {
    return (
        <>
            <div className="bg-gray-700 opacity-80 rounded-lg p-2">
                <Image src={image} className="object-contain mx-auto p-5 rounded-lg" width="910" height="799" alt={name} />
                <div className="text-center">
                    <h5 className="text-xl font-semibold mb-1">{name}</h5>
                    <p className="mb-2">{designation}</p>
                </div>
            </div>
        </>
    );
}

export default TeamCard;