"use client"
const Content_Project = () => {
    return (
        <>
            <div className="bg-bg_primary max-md:pt-20 lg:px-40 sm:px-10 sm:p-25 p-8 text-black">
                <div className="mb-10 max-md:flex max-md:justify-center">
                    <p className="sm:text-3xl text-2xl font-bold border-b-2 w-fit text-poppins">My Latest Project</p>
                </div>
                <div className=" grid md:grid-cols-3 grid-cols-1 justify-center gap-7">
                    {/* Personal Website */}
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
                                        <li><strong>Frontend:</strong> React.js with Next.js</li>
                                        <li><strong>Styling:</strong> Tailwind CSS + DaisyUI</li>
                                        <li><strong>Email Service:</strong> EmailJS</li>
                                        <li><strong>Deployment:</strong> Vercel</li>
                                        <li><strong>Version Control:</strong> Git & GitHub</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold text-gray-800 mb-3">Team Members:</h4>
                                    <ul className="list-disc ml-6 text-gray-700 space-y-2">
                                        <li><strong>Zikra Zana</strong> <span className="text-gray-600 font-medium">(Individual Project)</span></li>
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

                    {/* E-Library */}
                    <div className="card bg-white w-full md:w-96 shadow-md hover:shadow-xl cursor-pointer transition ease-in hover:scale-[1.01]" onClick={() => document.getElementById('my_project_2').showModal()}>
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
                                <span className="px-3 py-1 bg-gray-100 border border-black text-red-500 rounded-full text-sm">Laravel</span>
                                <span className="px-3 py-1 bg-gray-600 text-blue-300 rounded-full text-sm">MySQL</span>
                                <span className="px-3 py-1 bg-gray-100 border border-black text-purple-500 rounded-full text-sm">Bootstrap</span>
                            </div>
                        </div>
                    </div>
                    <dialog id="my_project_2" className="modal">
                        <div className="modal-box bg-bg_primary max-w-3xl p-10">
                            <h3 className="text-3xl font-bold text-center mb-6 text-poppins">E-Library</h3>
                            <img
                                className="w-full rounded-lg shadow-lg object-cover"
                                src="project/e_library.png"
                                alt="E-Library Preview"
                            />
                            <div className="space-y-6 mt-6">
                                <div>
                                    <h4 className="text-xl font-semibold text-gray-800 mb-3">Description:</h4>
                                    <p className="text-gray-700 leading-relaxed">
                                        E-Library is a comprehensive digital library management system developed as a final project for the Web Programming II course.
                                        This web application streamlines library operations by providing an intuitive interface for both librarians and users.
                                        The system features robust book cataloging capabilities, efficient user management, and a sophisticated borrowing system that tracks book circulation in real-time.
                                        Built with Laravel and MySQL, it demonstrates modern web development practices while solving real-world library management challenges.
                                        The project showcases the implementation of authentication, authorization, CRUD operations, and database relationships in a practical, user-friendly interface.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold text-gray-800 mb-3">Key Features:</h4>
                                    <ul className="list-disc ml-6 text-gray-700 space-y-2">
                                        <li>Member registration and management</li>
                                        <li>Book borrowing and return tracking</li>
                                        <li>Search and filter functionality for books</li>
                                        <li>Admin dashboard for library management</li>
                                        <li>Automated fine calculation for late returns</li>
                                        <li>Book availability status tracking</li>
                                        <li>User borrowing history and records</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold text-gray-800 mb-3">Tech Stack:</h4>
                                    <ul className="list-disc ml-6 text-gray-700 space-y-2">
                                        <li><strong>Frontend:</strong> HTML, Blade templating</li>
                                        <li><strong>Backend:</strong> Laravel (PHP)</li>
                                        <li><strong>Database:</strong> MySQL</li>
                                        <li><strong>Styling:</strong> Bootstrap 5, Pure CSS</li>
                                        <li><strong>Version Control:</strong> Git & GitHub</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold text-gray-800 mb-3">Team Members:</h4>
                                    <ul className="list-disc ml-6 text-gray-700 space-y-2">
                                        <li><strong>Nathania Ardelia</strong> <span className="text-pink-500 font-medium">(UI/UX & Frontend)</span></li>
                                        <li><strong>Endah Retno Kinanti</strong> <span className="text-pink-500 font-medium">(UI/UX & Frontend)</span></li>
                                        <li><strong>Zikra Zana</strong> <span className="text-blue-600 font-medium">(Frontend & Backend)</span></li>
                                        <li><strong>Devi Listiani Safitri</strong> <span className="text-blue-600 font-medium">(Backend)</span></li>
                                    </ul>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-gray-700">
                                        Status: <span className="text-red-700 font-semibold">Not Hosted</span>
                                    </p>
                                    <p className="text-gray-700">
                                        Github: <a href="https://github.com/ZikraZana/E-Library" target="blank" className="text-indigo-600 hover:text-indigo-800 font-semibold underline transition duration-200">E-Library Repository</a>
                                    </p>
                                    <p className="text-gray-700">
                                        Visit Website: <span className="text-red-700 font-semibold">Not Available</span>
                                    </p>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1 bg-gray-100 border border-black text-red-500 rounded-full text-sm">Laravel</span>
                                    <span className="px-3 py-1 bg-gray-600 text-blue-300 rounded-full text-sm">MySQL</span>
                                    <span className="px-3 py-1 bg-gray-100 border border-black text-purple-500 rounded-full text-sm">Bootstrap</span>
                                </div>
                                <div className="modal-action">
                                    <form method="dialog">
                                        <button className="btn bg-download_cv hover:bg-gray-900 text-white px-8 py-2.5 rounded-lg font-medium transition duration-300">Close</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </dialog>

                    {/* Homestay */}
                    <div className="card bg-white w-full md:w-96 shadow-md hover:shadow-xl cursor-pointer transition ease-in hover:scale-[1.01]" onClick={() => document.getElementById('my_project_3').showModal()}>
                        <figure>
                            <div className="border m-3 rounded">
                                <img
                                    className="aspect-3/2 w-full"
                                    src="project/homestay.png"
                                />
                            </div>
                        </figure>
                        <div className="card-body p-6">
                            <h2 className="card-title text-2xl font-bold text-gray-800">Homestay</h2>
                            <p className="text-gray-600 text-sm">A homestay management system that helps receptionists manage guest data and room bookings efficiently.</p>
                            <div className="flex gap-2">
                                <span className="px-3 py-1 bg-gray-100 border border-black text-blue-600 rounded-full text-sm font-medium hover:bg-gray-200">C#</span>
                                <span className="px-3 py-1 bg-gray-600 text-blue-300 rounded-full text-sm font-medium hover:bg-gray-700">MySQL</span>
                                <span className="px-3 py-1 bg-gray-100 border border-black text-purple-600 rounded-full text-sm font-medium hover:bg-gray-200">GunaUI2</span>
                            </div>
                        </div>
                    </div>
                    <dialog id="my_project_3" className="modal">
                        <div className="modal-box bg-bg_primary max-w-3xl p-10">
                            <h3 className="text-3xl font-bold text-center mb-6 text-poppins">E-Library</h3>
                            <img
                                className="w-full rounded-lg shadow-lg object-cover"
                                src="project/homestay.png"
                                alt="Homestay Preview"
                            />
                            <div className="space-y-6 mt-6">
                                <div>
                                    <h4 className="text-xl font-semibold text-gray-800 mb-3">Description:</h4>
                                    <p className="text-gray-700 leading-relaxed">
                                        Homestay is a desktop-based management system developed as a final project for the Visual Programming course using Visual Studio. 
                                        This application is designed to help receptionists efficiently handle their daily operations. 
                                        The system provides comprehensive features for managing guest data, room bookings and check-in/check-out processes. 
                                        Built with C# and MySQL, utilizing the modern GunaUI2 framework for an attractive and user-friendly interface. 
                                        The project demonstrates the practical implementation of desktop application development, including database connectivity, CRUD operations, and report generation.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold text-gray-800 mb-3">Key Features:</h4>
                                    <ul className="list-disc ml-6 text-gray-700 space-y-2">
                                        <li>Guest registration and check-in management</li>
                                        <li>Room booking</li>
                                        <li>Search and filter functionality for rooms</li>
                                        <li>Admin dashboard for homestay management</li>
                                        <li>Guest booking history and records</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold text-gray-800 mb-3">Tech Stack:</h4>
                                    <ul className="list-disc ml-6 text-gray-700 space-y-2">
                                        <li><strong>Frontend:</strong> C#, GunaUI2</li>
                                        <li><strong>Backend:</strong> C#</li>
                                        <li><strong>Database:</strong> MySQL</li>
                                        <li><strong>Framework:</strong> GunaUI2, Crystall Report</li>
                                        <li><strong>Version Control:</strong> GitHub</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold text-gray-800 mb-3">Team Members:</h4>
                                    <ul className="list-disc ml-6 text-gray-700 space-y-2">
                                        <li><strong>Nathania Ardelia</strong> <span className="text-pink-500 font-medium">(UI/UX & Frontend)</span></li>
                                        <li><strong>Zikra Zana</strong> <span className="text-blue-600 font-medium">(Frontend & Backend)</span></li>
                                        <li><strong>Devi Listiani Safitri</strong> <span className="text-blue-600 font-medium">(Backend)</span></li>
                                    </ul>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-gray-700">
                                        Status: <span className="text-red-700 font-semibold">Not Hosted</span>
                                    </p>
                                    <p className="text-gray-700">
                                        Github: <a href="https://github.com/ZikraZana/HomeStay" target="blank" className="text-indigo-600 hover:text-indigo-800 font-semibold underline transition duration-200">Homestay Repository</a>
                                    </p>
                                    <p className="text-gray-700">
                                        Visit Application: <span className="text-red-700 font-semibold">Not Available</span>
                                    </p>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1 bg-gray-100 border border-black text-blue-600 rounded-full text-sm font-medium hover:bg-gray-200">C#</span>
                                <span className="px-3 py-1 bg-gray-600 text-blue-300 rounded-full text-sm font-medium hover:bg-gray-700">MySQL</span>
                                <span className="px-3 py-1 bg-gray-100 border border-black text-purple-600 rounded-full text-sm font-medium hover:bg-gray-200">GunaUI2</span>
                                </div>
                                <div className="modal-action">
                                    <form method="dialog">
                                        <button className="btn bg-download_cv hover:bg-gray-900 text-white px-8 py-2.5 rounded-lg font-medium transition duration-300">Close</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </dialog>
                </div>
            </div>
        </>
    )
}

export default Content_Project