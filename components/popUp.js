import { useState } from "react";

const PopUp = () => {
    const [close, toggleClose] = useState(false);

    return (
        close ? <></> : <>
            <div className="z-50 bottom-0 right-0 m-20 bg-gray-900 border border-white text-white fixed py-10 px-16 rounded-lg">
                <div className="flex flex-col items-center justify-center w-full h-full">
                    <button onClick={()=>toggleClose(!close)} className="absolute right-0 top-0 mt-1 mr-1 py-1 px-3 border border-gray-500 rounded-md hover:bg-gray-800">X</button>
                    <h1 className="py-2">Join our Pre-Event!</h1>
                    <button className="bg-red-700 hover:bg-red-900 text-white py-1 px-3 rounded">
                        <a href="/cochym">Register</a>
                    </button>
                </div>
            </div>
        </>
    )
}

export default PopUp;