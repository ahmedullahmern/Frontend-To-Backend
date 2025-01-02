function Card({data}) {
    return (
        <div className="p-4 ">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                    src={data.thumbnail}
                />
                <div className="p-6">
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                        {data.title}
                    </h1>
                    <p className="leading-relaxed mb-3">
                        {data.description}
                    </p>
                    <div className="flex items-center flex-wrap ">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card