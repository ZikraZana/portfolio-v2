"use client"
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt, faCode, faDatabase, faLayerGroup, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Content_Project = () => {
    return (
        <>
            <div className="min-h-screen bg-bg_primary pt-24 pb-20">
                
                {/* --- Section Header --- */}
                <div className="text-center mb-16 px-6">
                    <p className="text-gray-600 uppercase tracking-[0.2em] text-sm font-semibold mb-3">Portfolio</p>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 text-poppins inline-block relative">
                        Featured Projects
                    </h1>
                </div>

                {/* --- Projects Grid --- */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-16 lg:px-24">
                    
                    {/* Project 1: Personal Website */}
                    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2 cursor-pointer flex flex-col" onClick={() => document.getElementById('my_project_1').showModal()}>
                        <div className="relative h-56 overflow-hidden bg-gray-100">
                            <img
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                src="project/personal_website.png"
                                alt="Personal Website"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                            <h2 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-gray-600 transition-colors">Personal Website</h2>
                            <p className="text-gray-500 text-sm line-clamp-3 mb-4 flex-grow">
                                A modern and responsive personal portfolio website built with the latest web technologies to showcase skills and projects.
                            </p>
                            <div className="flex flex-wrap gap-2 mt-auto">
                                <span className="px-3 py-1 bg-gray-100 text-xs font-semibold rounded-lg text-gray-600 border border-gray-200">React</span>
                                <span className="px-3 py-1 bg-gray-100 text-xs font-semibold rounded-lg text-gray-600 border border-gray-200">Next.js</span>
                                <span className="px-3 py-1 bg-gray-100 text-xs font-semibold rounded-lg text-gray-600 border border-gray-200">Tailwind</span>
                            </div>
                        </div>
                    </div>

                    {/* Modal 1 */}
                    <dialog id="my_project_1" className="modal">
                        <div className="modal-box bg-white max-w-4xl p-0 rounded-3xl overflow-hidden shadow-2xl">
                            <div className="w-full h-64 bg-gray-100 relative">
                                <img className="w-full h-full object-cover" src="project/personal_website.png" alt="Detail" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                                    <h3 className="text-3xl font-bold text-white text-poppins">Personal Website</h3>
                                </div>
                                <form method="dialog" className="absolute top-4 right-4">
                                    {/* FIX UX: Tombol Close Gradient Abu Gelap */}
                                    <button className="w-10 h-10 cursor-pointer bg-gradient-to-br from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 text-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-105 border border-white/20">
                                        <FontAwesomeIcon icon={faTimes} className="!w-5 !h-5" />
                                    </button>
                                </form>
                            </div>

                            <div className="p-8 md:p-10 space-y-8 overflow-y-auto max-h-[60vh]">
                                <div className="grid md:grid-cols-[2fr_1fr] gap-8">
                                    <div className="space-y-6">
                                        <div>
                                            <h4 className="text-lg font-bold text-gray-800 mb-2 flex items-center gap-2">
                                                <FontAwesomeIcon icon={faLayerGroup} className="text-gray-400 !w-5 !h-5" /> Description
                                            </h4>
                                            <p className="text-gray-600 leading-relaxed text-sm">
                                                This is my personal portfolio website that serves as a digital showcase of my work, skills, and experiences.
                                                The main purpose of this website is to provide a professional online presence where potential clients and employers can
                                                learn more about my capabilities and view my projects in an organized and visually appealing manner.
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-gray-800 mb-2">Key Features</h4>
                                            <ul className="list-disc ml-5 text-gray-600 text-sm space-y-1">
                                                <li>Responsive design that works on all devices</li>
                                                <li>Modern UI/UX with smooth animations</li>
                                                <li>Project showcase with detailed modal views</li>
                                                <li>Built with React, Next.js, and Tailwind CSS</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="space-y-6 bg-gray-50 p-6 rounded-2xl border border-gray-100 h-fit">
                                        <div>
                                            <h4 className="text-sm font-bold text-gray-800 uppercase tracking-wider mb-3">Tech Stack</h4>
                                            <div className="flex flex-wrap gap-2">
                                                <span className="px-3 py-1 bg-white shadow-sm text-xs font-medium rounded-md text-gray-600 border border-gray-200">React.js</span>
                                                <span className="px-3 py-1 bg-white shadow-sm text-xs font-medium rounded-md text-gray-600 border border-gray-200">Next.js</span>
                                                <span className="px-3 py-1 bg-white shadow-sm text-xs font-medium rounded-md text-gray-600 border border-gray-200">Tailwind</span>
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-bold text-gray-800 uppercase tracking-wider mb-3">Links</h4>
                                            <div className="space-y-2">
                                                <a href="https://github.com/ZikraZana/portfolio-v2" target="_blank" className="flex items-center gap-2 text-sm text-gray-600 hover:text-black transition-colors">
                                                    <FontAwesomeIcon icon={faGithub} className="!w-4 !h-4" /> Repository
                                                </a>
                                                <a href="https://zikra-portfolio.vercel.app" target="_blank" className="flex items-center gap-2 text-sm text-gray-600 hover:text-black transition-colors">
                                                    <FontAwesomeIcon icon={faExternalLinkAlt} className="!w-3 !h-3" /> Live Demo
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </dialog>


                    {/* Project 2: E-Library */}
                    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2 cursor-pointer flex flex-col" onClick={() => document.getElementById('my_project_2').showModal()}>
                        <div className="relative h-56 overflow-hidden bg-gray-100">
                            <img
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                src="project/e_library.png"
                                alt="E-Library"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                            <h2 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-gray-600 transition-colors">E-Library</h2>
                            <p className="text-gray-500 text-sm line-clamp-3 mb-4 flex-grow">
                                A digital library management system with features for book cataloging, user management, and borrowing tracking.
                            </p>
                            <div className="flex flex-wrap gap-2 mt-auto">
                                <span className="px-3 py-1 bg-gray-100 text-xs font-semibold rounded-lg text-gray-600 border border-gray-200">Laravel</span>
                                <span className="px-3 py-1 bg-gray-100 text-xs font-semibold rounded-lg text-gray-600 border border-gray-200">MySQL</span>
                                <span className="px-3 py-1 bg-gray-100 text-xs font-semibold rounded-lg text-gray-600 border border-gray-200">Bootstrap</span>
                            </div>
                        </div>
                    </div>

                    {/* Modal 2 */}
                    <dialog id="my_project_2" className="modal">
                        <div className="modal-box bg-white max-w-4xl p-0 rounded-3xl overflow-hidden shadow-2xl">
                            <div className="w-full h-64 bg-gray-100 relative">
                                <img className="w-full h-full object-cover" src="project/e_library.png" alt="Detail" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                                    <h3 className="text-3xl font-bold text-white text-poppins">E-Library System</h3>
                                </div>
                                <form method="dialog" className="absolute top-4 right-4">
                                    {/* FIX UX: Tombol Close Gradient Abu Gelap */}
                                    <button className="w-10 h-10 cursor-pointer bg-gradient-to-br from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 text-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-105 border border-white/20">
                                        <FontAwesomeIcon icon={faTimes} className="!w-5 !h-5" />
                                    </button>
                                </form>
                            </div>

                            <div className="p-8 md:p-10 space-y-8 overflow-y-auto max-h-[60vh]">
                                <div className="grid md:grid-cols-[2fr_1fr] gap-8">
                                    <div className="space-y-6">
                                        <div>
                                            <h4 className="text-lg font-bold text-gray-800 mb-2 flex items-center gap-2">
                                                <FontAwesomeIcon icon={faLayerGroup} className="text-gray-400 !w-5 !h-5" /> Description
                                            </h4>
                                            <p className="text-gray-600 leading-relaxed text-sm">
                                                E-Library is a comprehensive digital library management system.
                                                This web application streamlines library operations featuring robust book cataloging, user management, and a sophisticated borrowing system.
                                                Built with Laravel and MySQL, it demonstrates modern web development practices while solving real-world library management challenges.
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-gray-800 mb-2">Key Responsibilities</h4>
                                            <ul className="list-disc ml-5 text-gray-600 text-sm space-y-1">
                                                <li><strong>System Analysis:</strong> Designed the database schema (ERD) and flow (UML).</li>
                                                <li><strong>Fullstack Dev:</strong> Implemented the borrowing logic using Laravel & MySQL.</li>
                                                <li><strong>Documentation:</strong> Wrote comprehensive technical documentation.</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="space-y-6 bg-gray-50 p-6 rounded-2xl border border-gray-100 h-fit">
                                        <div>
                                            <h4 className="text-sm font-bold text-gray-800 uppercase tracking-wider mb-3">Tech Stack</h4>
                                            <div className="flex flex-wrap gap-2">
                                                <span className="px-3 py-1 bg-white shadow-sm text-xs font-medium rounded-md text-gray-600 border border-gray-200">Laravel</span>
                                                <span className="px-3 py-1 bg-white shadow-sm text-xs font-medium rounded-md text-gray-600 border border-gray-200">MySQL</span>
                                                <span className="px-3 py-1 bg-white shadow-sm text-xs font-medium rounded-md text-gray-600 border border-gray-200">Bootstrap 5</span>
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-bold text-gray-800 uppercase tracking-wider mb-3">Links</h4>
                                            <div className="space-y-2">
                                                <a href="https://github.com/ZikraZana/E-Library" target="_blank" className="flex items-center gap-2 text-sm text-gray-600 hover:text-black transition-colors">
                                                    <FontAwesomeIcon icon={faGithub} className="!w-4 !h-4" /> Repository
                                                </a>
                                                <span className="flex items-center gap-2 text-sm text-gray-400 cursor-not-allowed">
                                                    <FontAwesomeIcon icon={faExternalLinkAlt} className="!w-3 !h-3" /> Not Hosted
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </dialog>


                    {/* Project 3: Homestay */}
                    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2 cursor-pointer flex flex-col" onClick={() => document.getElementById('my_project_3').showModal()}>
                        <div className="relative h-56 overflow-hidden bg-gray-100">
                            <img
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                src="project/homestay.png"
                                alt="Homestay"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                            <h2 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-gray-600 transition-colors">Homestay App</h2>
                            <p className="text-gray-500 text-sm line-clamp-3 mb-4 flex-grow">
                                A desktop homestay management system for managing guest data, room bookings, and check-in/out efficiently.
                            </p>
                            <div className="flex flex-wrap gap-2 mt-auto">
                                <span className="px-3 py-1 bg-gray-100 text-xs font-semibold rounded-lg text-gray-600 border border-gray-200">C#</span>
                                <span className="px-3 py-1 bg-gray-100 text-xs font-semibold rounded-lg text-gray-600 border border-gray-200">MySQL</span>
                                <span className="px-3 py-1 bg-gray-100 text-xs font-semibold rounded-lg text-gray-600 border border-gray-200">GunaUI2</span>
                            </div>
                        </div>
                    </div>

                    {/* Modal 3 */}
                    <dialog id="my_project_3" className="modal">
                        <div className="modal-box bg-white max-w-4xl p-0 rounded-3xl overflow-hidden shadow-2xl">
                            <div className="w-full h-64 bg-gray-100 relative">
                                <img className="w-full h-full object-cover" src="project/homestay.png" alt="Detail" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                                    <h3 className="text-3xl font-bold text-white text-poppins">Homestay Management System</h3>
                                </div>
                                <form method="dialog" className="absolute top-4 right-4">
                                    {/* FIX UX: Tombol Close Gradient Abu Gelap */}
                                    <button className="w-10 h-10 cursor-pointer bg-gradient-to-br from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 text-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-105 border border-white/20">
                                        <FontAwesomeIcon icon={faTimes} className="!w-5 !h-5" />
                                    </button>
                                </form>
                            </div>

                            <div className="p-8 md:p-10 space-y-8 overflow-y-auto max-h-[60vh]">
                                <div className="grid md:grid-cols-[2fr_1fr] gap-8">
                                    <div className="space-y-6">
                                        <div>
                                            <h4 className="text-lg font-bold text-gray-800 mb-2 flex items-center gap-2">
                                                <FontAwesomeIcon icon={faLayerGroup} className="text-gray-400 !w-5 !h-5" /> Description
                                            </h4>
                                            <p className="text-gray-600 leading-relaxed text-sm">
                                                Homestay is a desktop-based management system developed using Visual Studio.
                                                This application helps receptionists efficiently handle daily operations like guest data, room bookings, and reporting.
                                                Built with C# and MySQL, utilizing the modern GunaUI2 framework for an attractive interface.
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-gray-800 mb-2">Key Responsibilities</h4>
                                            <ul className="list-disc ml-5 text-gray-600 text-sm space-y-1">
                                                <li><strong>Reporting:</strong> Created detailed operational reports using Crystal Report.</li>
                                                <li><strong>Collaboration:</strong> Worked closely with UI/UX designers to align function with design.</li>
                                                <li><strong>Logic:</strong> Optimizing the booking algorithm for real-time room availability.</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="space-y-6 bg-gray-50 p-6 rounded-2xl border border-gray-100 h-fit">
                                        <div>
                                            <h4 className="text-sm font-bold text-gray-800 uppercase tracking-wider mb-3">Tech Stack</h4>
                                            <div className="flex flex-wrap gap-2">
                                                <span className="px-3 py-1 bg-white shadow-sm text-xs font-medium rounded-md text-gray-600 border border-gray-200">C# .NET</span>
                                                <span className="px-3 py-1 bg-white shadow-sm text-xs font-medium rounded-md text-gray-600 border border-gray-200">MySQL</span>
                                                <span className="px-3 py-1 bg-white shadow-sm text-xs font-medium rounded-md text-gray-600 border border-gray-200">GunaUI2</span>
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-bold text-gray-800 uppercase tracking-wider mb-3">Links</h4>
                                            <div className="space-y-2">
                                                <a href="https://github.com/ZikraZana/HomeStay" target="_blank" className="flex items-center gap-2 text-sm text-gray-600 hover:text-black transition-colors">
                                                    <FontAwesomeIcon icon={faGithub} className="!w-4 !h-4" /> Repository
                                                </a>
                                                <span className="flex items-center gap-2 text-sm text-gray-400 cursor-not-allowed">
                                                    <FontAwesomeIcon icon={faExternalLinkAlt} className="!w-3 !h-3" /> Desktop App
                                                </span>
                                            </div>
                                        </div>
                                    </div>
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