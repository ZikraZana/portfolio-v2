const Content_Project = () => {
    return (
        <>
            <div className="bg-bg_primary max-md:pt-20 lg:px-40 sm:px-10 sm:p-25 p-8 text-black">

                <div className="mb-10 max-md:flex max-md:justify-center">
                    <p className="sm:text-3xl text-2xl font-bold border-b-2 w-fit text-poppins">My Latest Project</p>
                </div>
                <div className=" grid md:grid-cols-2 grid-cols-1 justify-center gap-5">
                    <div className="card bg-white w-full md:w-96 shadow-md hover:shadow-xl cursor-pointer transition ease-in hover:scale-[1.01]">
                        <figure>
                            <img
                                className="aspect-3/2 p-3 w-full"
                                src="project/personal_website.png"
                            />
                        </figure>
                        <div className="card-body p-6">
                            <h2 className="card-title text-2xl font-bold text-gray-800">Personal Website</h2>
                            <p className="text-gray-600 text-sm">A modern and responsive personal portfolio website built with the latest web technologies.</p>
                            <div className="flex gap-2">
                                <span className="px-3 py-1 bg-gray-800 text-cyan-400 rounded-full text-sm">React</span>
                                <span className="px-3 py-1 bg-gray-700 text-white rounded-full text-sm">Next.js</span>
                                <span className="px-3 py-1 bg-gray-600 text-blue-300 rounded-full text-sm">Tailwind</span>                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Content_Project