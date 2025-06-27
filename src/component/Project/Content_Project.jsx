"use client"
const Content_Project = () => {
    return (
        <>
            <div className="bg-bg_primary max-md:pt-20 lg:px-40 sm:px-10 sm:p-25 p-8 text-black">
                <div className="mb-10 max-md:flex max-md:justify-center">
                    <p className="sm:text-3xl text-2xl font-bold border-b-2 w-fit text-poppins">My Latest Project</p>
                </div>
                <div className=" grid md:grid-cols-3 grid-cols-1 justify-center gap-7">
                    <div className="card bg-white w-full md:w-96 shadow-md hover:shadow-xl cursor-pointer transition ease-in hover:scale-[1.01]" onClick={() => document.getElementById('my_project_1').showModal()}>
                        <figure>
                            <div className="border m-3 rounded">
                                <img
                                    className="aspect-3/2 w-full"
                                    src="project/personal_website.png"
                                />
                            </div>
                        </figure>
                        <div className="card-body p-6">
                            <h2 className="card-title text-2xl font-bold text-gray-800">Personal Website</h2>
                            <p className="text-gray-600 text-sm">A modern and responsive personal portfolio website built with the latest web technologies.</p>
                            <div className="flex gap-2">
                                <span className="px-3 py-1 bg-gray-800 text-cyan-400 rounded-full text-sm">React</span>
                                <span className="px-3 py-1 bg-gray-700 text-white rounded-full text-sm">Next.js</span>
                                <span className="px-3 py-1 bg-gray-600 text-blue-300 rounded-full text-sm">Tailwind</span>
                            </div>
                        </div>
                    </div>
                    <dialog id="my_project_1" className="modal">
                        <div className="modal-box bg-bg_primary max-w-3xl p-10">
                            <h3 className="text-3xl font-bold text-center mb-6 text-poppins">Personal Website</h3>
                            <img
                                className="w-full rounded-lg shadow-lg object-cover"
                                src="project/personal_website.png"
                                alt="Personal Website Preview"
                            />
                            <div className="space-y-6 mt-6">
                                <div>
                                    <h4 className="text-xl font-semibold text-gray-800 mb-3">Description:</h4>
                                    <p className="text-gray-700 leading-relaxed">
                                        This is my personal portfolio website that serves as a digital showcase of my work, skills, and experiences.
                                        The main purpose of this website is to provide a professional online presence where potential clients and employers can
                                        learn more about my capabilities and view my projects in an organized and visually appealing manner.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold text-gray-800 mb-3">Key Features:</h4>
                                    <ul className="list-disc ml-6 text-gray-700 space-y-2">
                                        <li>Responsive design that works on all devices</li>
                                        <li>Modern UI/UX with smooth animations</li>
                                        <li>Project showcase with detailed modal views</li>
                                        <li>Built with React, Next.js, and Tailwind CSS</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold text-gray-800 mb-3">Tech Stack:</h4>
                                    <ul className="list-disc ml-6 text-gray-700 space-y-2">
                                        <li>Frontend Framework: React.js</li>
                                        <li>Framework: Next.js</li>
                                        <li>Styling: Tailwind CSS + DaisyUI</li>
                                        <li>Email Service: EmailJS</li>
                                        <li>Deployment: Vercel</li>
                                        <li>Version Control: Git & GitHub</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold text-gray-800 mb-3">Team Members:</h4>
                                    <ul className="list-disc ml-6 text-gray-700 space-y-2">
                                        <li>Zikra Zana (Individual Project)</li>
                                    </ul>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-gray-700">
                                        Status: <span className="text-emerald-600 font-semibold">Hosted on Vercel</span>
                                    </p>
                                    <p className="text-gray-700">
                                        Github: <a href="https://github.com/ZikraZana/portfolio-v2" target="blank" className="text-indigo-600 hover:text-indigo-800 font-semibold underline transition duration-200">portvolio-v2</a>
                                    </p>
                                    <p className="text-gray-700">
                                        Visit Website: <a href="https://zikra-portfolio.vercel.app" target="blank" className="text-purple-600 hover:text-purple-800 font-semibold underline transition duration-200">Personal Website</a>
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    <span className="px-4 py-1.5 bg-gray-800 text-cyan-400 rounded-full text-sm font-medium">React</span>
                                    <span className="px-4 py-1.5 bg-gray-700 text-white rounded-full text-sm font-medium">Next.js</span>
                                    <span className="px-4 py-1.5 bg-gray-600 text-blue-300 rounded-full text-sm font-medium">Tailwind</span>
                                </div>

                                <div className="modal-action">
                                    <form method="dialog">
                                        <button className="btn bg-download_cv hover:bg-gray-900 text-white px-8 py-2.5 rounded-lg font-medium transition duration-300">Close</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </dialog>

                    <div className="card bg-white w-full md:w-96 shadow-md hover:shadow-xl cursor-pointer transition ease-in hover:scale-[1.01]">
                        <figure>
                            <div className="border m-3 rounded">
                                <img
                                    className="aspect-3/2 w-full"
                                    src="project/e_library.png"
                                />
                            </div>
                        </figure>
                        <div className="card-body p-6">
                            <h2 className="card-title text-2xl font-bold text-gray-800">E-Library</h2>
                            <p className="text-gray-600 text-sm">A digital library management system with features for book cataloging, user management, and borrowing tracking.</p>
                            <div className="flex gap-2">
                                <span className="px-3 py-1 bg-gray-300 text-red-500 rounded-full text-sm">Laravel</span>
                                <span className="px-3 py-1 bg-gray-600 text-blue-300 rounded-full text-sm">MySQL</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Content_Project