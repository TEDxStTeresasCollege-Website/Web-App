const TeamCard = ({ name, designation, image }) => {
    return (
        <>
            <div>
                <img src={image} className="shadow-xl mb-2 object-cover mx-auto" alt="" />
                <div className="text-center">
                    <h5 className="text-xl font-semibold mb-1">{name}</h5>
                    <p className="mb-2">{designation}</p>
                </div>
            </div>
        </>
    );
}

export default TeamCard;