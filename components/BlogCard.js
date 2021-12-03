const BlogCard = ({title, content, url, imagesrc}) => {
    return (
        <div className="mx-auto">
            <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
                <a href={url}>
                    <img className="rounded-t-lg w-full" src={imagesrc} alt={title} />
                </a>
                <div className="p-5">
                    <a href={url}>
                        <h5 className="text-gray-900 font-bold text-lg tracking-tight mb-2">{title}</h5>
                    </a>
                    <p className="text-md text-gray-700 mb-3">{content}</p>
                    <a className="text-white bg-gray-800 hover:bg-gray-500 focus:ring-4 rounded text-sm px-2 py-1 text-center" href={url}>
                        Read more
                    </a>
                </div>
            </div>
        </div>
    );
}

export default BlogCard;