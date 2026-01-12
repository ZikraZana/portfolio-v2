"use client"
import { faGraduationCap, faLaptopCode, faLayerGroup, faLightbulb, faBriefcase, faUsers, faCalendarAlt, faCheckCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Content_About = () => {
    return (
        <>
            {/* --- Section 1: Introduction & Highlights --- */}
            <div className="lg:min-h-screen bg-bg_primary flex flex-col justify-center">
                <div className="py-20 px-6 md:px-16 lg:px-24">

                    {/* Header Title */}
                    <div className="mb-12 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 text-poppins inline-block relative">
                            About Me
                        </h1>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Kolom Kiri: Biografi */}
                        <div className="space-y-6">
                            <h2 className="text-2xl font-semibold text-gray-700">
                                Who is <span className="text-black font-bold">Zikra Zana?</span>
                            </h2>
                            <p className="text-lg text-gray-600 text-justify leading-relaxed">
                                I am an Information Systems student at Universitas Jambi who bridges the gap between <b>technology</b> and <b>management</b>.
                                <br /><br />
                                I combine technical skills in <b>Web Development (Laravel/Next.js)</b> with strong capabilities in <b>System Analysis and Organizational Management</b>. My experience as a Google Student Ambassador and Secretary General has honed my ability to lead teams, manage administrative data, and execute strategic programs.
                            </p>

                            {/* Quote Kecil */}
                            <div className="border-l-4 border-gray-400 pl-4 py-2 italic text-gray-500 bg-white/40 rounded-r-lg">
                                "Striving to develop solutions that are not only technically sound but also well-documented and efficiently managed."
                            </div>
                        </div>

                        {/* Kolom Kanan: 4 Key Highlights (Grid 2x2) */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {/* Card 1 */}
                            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 group">
                                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-gray-800 transition-colors duration-300">
                                    <FontAwesomeIcon icon={faLaptopCode} className="text-gray-600 group-hover:text-white !w-6 !h-6" />
                                </div>
                                <h3 className="font-bold text-gray-800 text-lg">Digital Builder</h3>
                                <p className="text-sm text-gray-500 mt-1">Fullstack Web & System Analyst</p>
                            </div>

                            {/* Card 2 */}
                            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 group">
                                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-gray-800 transition-colors duration-300">
                                    <FontAwesomeIcon icon={faGraduationCap} className="text-gray-600 group-hover:text-white !w-6 !h-6" />
                                </div>
                                <h3 className="font-bold text-gray-800 text-lg">Student</h3>
                                <p className="text-sm text-gray-500 mt-1">Information Systems, UNJA</p>
                            </div>

                            {/* Card 3 */}
                            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 group">
                                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-gray-800 transition-colors duration-300">
                                    <FontAwesomeIcon icon={faLightbulb} className="text-gray-600 group-hover:text-white !w-5 !h-6" />
                                </div>
                                <h3 className="font-bold text-gray-800 text-lg">Problem Solver</h3>
                                <p className="text-sm text-gray-500 mt-1">Strategic & Analytical Thinking</p>
                            </div>

                            {/* Card 4 */}
                            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 group">
                                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-gray-800 transition-colors duration-300">
                                    <FontAwesomeIcon icon={faLayerGroup} className="text-gray-600 group-hover:text-white !w-6 !h-6" />
                                </div>
                                <h3 className="font-bold text-gray-800 text-lg">Leader</h3>
                                <p className="text-sm text-gray-500 mt-1">Management & Communication</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- Section 2: Experience Journey --- */}
            <div className="bg-behind_sosmed px-6 md:px-16 lg:px-40 py-24 rounded-t-[4rem] -mt-10 relative z-10">
                
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <p className="text-gray-600 uppercase tracking-[0.2em] text-sm font-semibold mb-3">The Path So Far</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-poppins">Experience & Contribution</h2>
                    <div className="w-24 h-1.5 bg-gray-800 mx-auto mt-6 rounded-full opacity-80"></div>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                    
                    {/* --- KARTU 1: ORGANISASI --- */}
                    <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100 relative overflow-hidden group">
                        {/* Background Decoration */}
                        <div className="absolute -right-10 -top-10 w-40 h-40 bg-gray-100 rounded-full opacity-50 group-hover:scale-110 transition-transform duration-500"></div>
                        
                        {/* Header Kartu */}
                        <div className="flex items-center gap-4 mb-8 relative z-10">
                            <div className="w-12 h-12 rounded-2xl bg-gray-800 flex items-center justify-center shadow-lg">
                                {/* FIX: Gunakan !w-5 !h-5 untuk memaksa ukuran */}
                                <FontAwesomeIcon icon={faUsers} className="text-white !w-5 !h-5" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800">Organization</h3>
                        </div>

                        {/* Timeline List */}
                        <div className="space-y-8 relative z-10">
                            {/* Item 1 */}
                            <div className="flex gap-4">
                                <div className="flex flex-col items-center">
                                    <div className="w-3 h-3 bg-gray-800 rounded-full ring-4 ring-gray-100"></div>
                                    <div className="w-0.5 h-full bg-gray-200 mt-2 rounded-full"></div>
                                </div>
                                <div className="pb-2">
                                    <h4 className="text-lg font-bold text-gray-800 leading-tight">Google Student Ambassador</h4>
                                    {/* FIX: Icon kalender dipaksa kecil */}
                                    <span className="text-sm font-medium text-gray-500 mt-1 mb-2 flex items-center gap-2">
                                        <FontAwesomeIcon icon={faCalendarAlt} className="!w-3 !h-3" /> 2025
                                    </span>
                                    <ul className="text-gray-600 text-sm space-y-1.5">
                                        <li className="flex items-start gap-2">
                                            {/* FIX: Icon check dipaksa kecil */}
                                            <FontAwesomeIcon icon={faCheckCircle} className="text-gray-400 mt-1 shrink-0 !w-3 !h-3" />
                                            <span>Led technology workshops & community events.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <FontAwesomeIcon icon={faCheckCircle} className="text-gray-400 mt-1 shrink-0 !w-3 !h-3" />
                                            <span>Bridged Google programs with university students.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Item 2 */}
                            <div className="flex gap-4">
                                <div className="flex flex-col items-center">
                                    <div className="w-3 h-3 bg-gray-400 rounded-full ring-4 ring-gray-100"></div>
                                    <div className="w-0.5 h-full bg-gray-200 mt-2 rounded-full"></div>
                                </div>
                                <div className="pb-2">
                                    <h4 className="text-lg font-bold text-gray-800 leading-tight">Secretary General - HIMASI</h4>
                                    <span className="text-sm font-medium text-gray-500 mt-1 mb-2 flex items-center gap-2">
                                        <FontAwesomeIcon icon={faCalendarAlt} className="!w-3 !h-3" /> 2025/2026
                                    </span>
                                    <p className="text-gray-600 text-sm">
                                        Managed internal administration, strategic planning, and member database coordination.
                                    </p>
                                </div>
                            </div>

                            {/* Item 3 */}
                            <div className="flex gap-4">
                                <div className="flex flex-col items-center">
                                    <div className="w-3 h-3 bg-gray-300 rounded-full ring-4 ring-gray-100"></div>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-gray-800 leading-tight">HIMASI R&T Division</h4>
                                    <span className="text-sm font-medium text-gray-500 mt-1 mb-2 flex items-center gap-2">
                                        <FontAwesomeIcon icon={faCalendarAlt} className="!w-3 !h-3" /> 2024/2025
                                    </span>
                                    <p className="text-gray-600 text-sm">
                                        Active member in Research & Technology division, managing website content.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* --- KARTU 2: WORKS --- */}
                    <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100 relative overflow-hidden group">
                        {/* Background Decoration */}
                        <div className="absolute -right-10 -top-10 w-40 h-40 bg-gray-800 rounded-full opacity-5 group-hover:scale-110 transition-transform duration-500"></div>

                        {/* Header Kartu */}
                        <div className="flex items-center gap-4 mb-8 relative z-10">
                            <div className="w-12 h-12 rounded-2xl bg-white border-2 border-gray-100 flex items-center justify-center shadow-sm">
                                {/* FIX: Gunakan !w-5 !h-5 untuk memaksa ukuran */}
                                <FontAwesomeIcon icon={faBriefcase} className="text-gray-800 !w-5 !h-5" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800">Professional Work</h3>
                        </div>

                        {/* Work Content */}
                        <div className="relative z-10">
                            {/* Work Item */}
                            <div className="mb-8">
                                    <h4 className="text-xl gap-2 mb-2 font-bold text-gray-800">Freelance Web Developer</h4>
                                {/* FIX: Icon kalender dipaksa kecil */}
                                <p className="text-sm text-gray-500 mb-4 flex items-center gap-2">
                                    <FontAwesomeIcon icon={faCalendarAlt} className="!w-3 !h-3" /> 2025 - Present
                                </p>
                                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                    Developing custom web solutions focusing on efficiency and user experience. 
                                    I provide full-stack services including frontend interface, backend logic, and system documentation.
                                </p>
                                
                                {/* Skill Tags */}
                                <div className="flex gap-2 flex-wrap">
                                    <span className="px-3 py-1.5 bg-gray-50 text-xs font-semibold rounded-lg text-gray-600 border border-gray-200">Frontend</span>
                                    <span className="px-3 py-1.5 bg-gray-50 text-xs font-semibold rounded-lg text-gray-600 border border-gray-200">Backend</span>
                                    <span className="px-3 py-1.5 bg-gray-50 text-xs font-semibold rounded-lg text-gray-600 border border-gray-200">System Analyst</span>
                                </div>
                            </div>

                            {/* Call to Action Box */}
                            <div className="bg-gray-50 rounded-xl p-5 border border-gray-100 text-center mt-8">
                                <p className="text-gray-500 text-sm font-medium mb-1">Open for Opportunities</p>
                                <p className="text-xs text-gray-400">Have a project in mind? Let's discuss.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Content_About