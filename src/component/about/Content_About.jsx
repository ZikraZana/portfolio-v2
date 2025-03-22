import { faGraduationCap, faLaptopCode, faLayerGroup, faLightbulb } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Content_About = () => {
    return (
        <>
            {/* About Me */}
            <div className="min-h-screen bg-bg_primary md:grid md:grid-cols-[1fr_1.8fr] ">
                <div className="flex justify-end items-end flex-col max-md:hidden">
                    <img className="" src="profile/foto_diri.png" alt="" height={'2000px'} />
                </div>
                <div className=" py-25 px-10">
                    <div className="">
                        <p className="text-3xl font-bold max-md:text-center">Zikra Zana</p>
                        <p className="text-xl font-light mb-5 max-md:hidden">Information System | Jambi University</p>
                        <div className="text-xl font-light text-center md:hidden">Information System</div>
                        <div className="text-xl font-light mb-5 text-center md:hidden">Jambi University</div>

                        <p className="text-lg text-justify">
                            Saya, Zikra Zana, mahasiswa Sistem Informasi di Universitas Jambi dengan minat besar dalam pengembangan web. Saya fokus menguasai Laravel sebagai backend utama dan mengeksplorasi teknologi modern untuk meningkatkan kinerja aplikasi. Selain itu, saya tertarik pada frontend guna menciptakan antarmuka yang interaktif dan responsif. Dengan pemahaman kuat tentang arsitektur web, basis data, dan desain, saya berupaya mengembangkan aplikasi yang fungsional, estetis, dan ramah pengguna. Saya percaya bahwa pembelajaran berkelanjutan dan adaptasi teknologi adalah kunci untuk berkontribusi di dunia pengembangan perangkat lunak.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 mt-6 p-5 rounded-2xl gap-6 items-start">
                        <div className="flex flex-col gap-5 h-full">
                            <div className="flex items-center gap-4 bg-white/50 p-3 rounded-lg shadow-sm min-h-[100px]">
                                <FontAwesomeIcon icon={faLaptopCode} width={'25px'} className="text-gray-700" />
                                <p className="text-lg font-medium">Role: Fullstack Developer</p>
                            </div>
                            <div className="flex items-center gap-4 bg-white/50 p-3 rounded-lg shadow-sm min-h-[100px]">
                                <FontAwesomeIcon icon={faGraduationCap} width={'25px'} className="text-gray-700" />
                                <p className="text-lg font-medium">Education: Jambi University</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-5 h-full">
                            <div className="flex items-center gap-4 bg-white/50 p-3 rounded-lg shadow-sm min-h-[100px]">
                                <FontAwesomeIcon icon={faLightbulb} width={'25px'} className="text-gray-700" />
                                <p className="text-lg font-medium">Now Learning: Machine Learning</p>
                            </div>
                            <div className="flex items-center gap-4 bg-white/50 p-3 rounded-lg shadow-sm min-h-[100px]">
                                <FontAwesomeIcon icon={faLayerGroup} width={'25px'} className="text-gray-700" />
                                <p className="text-lg font-medium">Other Skills: Design (Figma, Canva), Music (Guitar)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*  */}
            <div className="bg-behind_sosmed px-10 py-20 rounded-lg shadow-md">
                <div className="flex justify-center items-center mb-12 flex-col">
                    <p className="text-4xl font-bold w-fit border-b-2 border-gray-800 pb-2 mb-3 text-gray-800">My Experience</p>
                    <p className="text-gray-600 text-lg">Experience that I have gained</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300">
                        <p className="text-center text-2xl font-bold mb-6 text-gray-800">Organization</p>
                        <div className="flex justify-center">
                            <div className="space-y-4">
                                <div className="">
                                    <p className="text-lg font-semibold">HIMASI Research and Technology Division <span className="text-gray-600 font-light">| 2024/2025</span></p>
                                    <ul className="mt-2 space-y-2 text-gray-700">
                                        <li className="flex items-center"><span className="text-black mr-2">•</span>Handling HIMASI Articles</li>
                                        <li className="flex items-center"><span className="text-black mr-2">•</span>Participating in all committee activities</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300">
                        <p className="text-center text-2xl font-bold mb-6 text-gray-800">Works</p>
                        <div className="flex justify-center">
                            <div className="space-y-4">
                                <div className="">
                                    <p className="text-lg font-semibold">Freelance Web Developer <span className="text-gray-600 font-light">| 2025 - now</span></p>
                                    <ul className="mt-2 space-y-2 text-gray-700">
                                        <li className="flex items-center"><span className="text-black mr-2">•</span>Handling Frontend & Backend</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Content_About