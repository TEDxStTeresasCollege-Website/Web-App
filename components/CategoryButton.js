const Button = ({text, click}) => {
    return (
        <button className="text-white bg-water hover:border hover:border-solid hover:border-water hover:bg-white hover:text-water active:bg-blue-600 font-bold uppercase text-xs px-6 py-3 rounded-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" onClick={click} type="button">{text}</button>
    );
}

export default Button;