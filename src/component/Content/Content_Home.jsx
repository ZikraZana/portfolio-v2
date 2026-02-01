"use client"
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import Link from "next/link";
import { faFacebook, faInstagram, faGithub, faLinkedin, faLaravel, faReact, faJs, faPhp, faNode, faBootstrap } from "@fortawesome/free-brands-svg-icons";
import { faUsers, faFileAlt, faMicrophone, faTasks, faTimes, faAward, faSpinner, faThumbtack } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Content_Home = () => {
    const [certs, setCerts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedCert, setSelectedCert] = useState(null);

    useEffect(() => {
        const fetchLatestCerts = async () => {
            const { data, error } = await supabase
                .from('certificates')
                .select('*')
                // LOGIC UTAMA: Urutkan berdasarkan Pin dulu (true di atas), baru tanggal
                .order('is_pinned', { ascending: false })
                .order('created_at', { ascending: false })
                .limit(3);

            if (error) console.error(error);
            else setCerts(data || []);
            setLoading(false);
        };
        fetchLatestCerts();
    }, []);

    const handleOpenModal = (cert) => {
        setSelectedCert(cert);
        document.getElementById('home_cert_modal').showModal();
    };

    return (
        <>
            {/* Hero Section */}
            <div className="lg:min-h-screen flex flex-col justify-between bg-bg_primary text-black">
                <div className="grid md:grid-cols-[2fr_1fr] lg:p-30 md:p-15 py-5 mt-9 grid-cols-1">
                    <div className="md:order-1 order-2 flex justify-center items-center flex-col">
                        <div className="p-10 ">
                            <p className="sm:font-bold sm:text-poppins text-xl md:mb-3 mb-1 md:text-start text-center">Hello, I'm Zikra Zana</p>
                            <p className="sm:text-4xl text-2xl font-bold text-poppins md:mb-3 mb-1 md:text-start text-center">
                                Digital Solution Builder & <br className="hidden md:block" /> Community Leader
                            </p>
                            <p className="text-lg md:text-start text-center ">
                                I am an Information Systems student at Universitas Jambi who bridges the gap between <b>technology</b> and <b>management</b>.
                                Beyond writing code for web applications, I serve as a <b>Google Student Ambassador</b> and actively contribute to campus organizations like <b>HIMASI</b> and the <b>English Club</b>.
                                I am passionate about creating efficient digital systems, managing strategic programs, and driving community growth.
                            </p>
                            <div className="max-md:justify-center flex">
                                <a href="/docs/ZikraCV.pdf" download className="border bg-download_cv text-lg py-1 px-3 rounded mt-3 hover:bg-gray-900 text-white cursor-pointer">Download CV</a>
                            </div>
                        </div>
                    </div>
                    <div className="md:order-2 order-1 sm:p-10 pt-15 flex justify-center items-center">
                        <img
                            src="profile/foto_diri.jpg"
                            className="rounded-full sm:w-[300px] w-[200px] border-4 shadow-[0px_0px_15px_10px_rgba(255,255,255,0.5)] border-behind_img"
                            alt=""
                        />
                    </div>
                </div>
                <div className="flex justify-center ">
                    <div className="flex p-2 px-20 gap-8 bg-behind_sosmed rounded-t-6xl">
                        <a href="https://www.facebook.com/zikra.zana.5?mibextid=ZbWKwL" target="_blank">
                            <FontAwesomeIcon icon={faFacebook} width={'30px'} className="hover:text-blue-700 cursor-pointer" />
                        </a>
                        <a href="https://www.instagram.com/zikrazana_" target="_blank">
                            <FontAwesomeIcon icon={faInstagram} width={'30px'} className="hover:text-pink-700 cursor-pointer" />
                        </a>
                        <a href="https://github.com/ZikraZana" target="_blank">
                            <FontAwesomeIcon icon={faGithub} width={'30px'} className="hover:text-gray-600 cursor-pointer" />
                        </a>
                        <a href="https://www.linkedin.com/in/zikra-zana-b4964b2b4/" target="_blank">
                            <FontAwesomeIcon icon={faLinkedin} width={'30px'} className="hover:text-blue-600 cursor-pointer" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Achievements Section (Pinned Featured) */}
            <div className="bg-behind_sosmed lg:px-40 sm:px-10 sm:p-25 p-8 text-black">
                <div className="mb-10 flex justify-between items-center">
                    <p className="sm:text-3xl text-xl font-bold border-b-2 w-fit text-poppins">Featured Achievements</p>
                    <Link href="/achievements" className="sm:text-md text-sm hover:underline cursor-pointer transition-all flex items-center gap-1">
                        Show More
                    </Link>
                </div>

                <div className="flex flex-col items-center">
                    {loading ? (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 justify-center gap-5 w-full">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="bg-bg_primary w-full h-64 shadow-md animate-pulse rounded-xl"></div>
                            ))}
                        </div>
                    ) : (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 justify-center gap-5 w-full">
                            {certs.map((cert) => (
                                <div
                                    key={cert.id}
                                    className="card bg-bg_primary w-full shadow-md hover:shadow-xl cursor-pointer transition ease-in hover:scale-[1.01] rounded-xl overflow-hidden group border border-transparent hover:border-gray-200"
                                    onClick={() => handleOpenModal(cert)}
                                >
                                    <figure className="relative h-64 w-full bg-gray-200">
                                        {cert.image_url ? (
                                            <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src={cert.image_url} alt={cert.title} />
                                        ) : (
                                            <div className="flex items-center justify-center h-full text-gray-400">
                                                <FontAwesomeIcon icon={faAward} className="w-12 h-12" />
                                            </div>
                                        )}

                                        {/* Pin Indicator (Optional: kalau mau kasih tanda ini sertifikat spesial) */}
                                        {cert.is_pinned && (
                                            <div className="absolute top-3 right-3 bg-white/90 backdrop-blur text-blue-600 p-1.5 rounded-full shadow-sm z-10" title="Featured Achievement">
                                                <FontAwesomeIcon icon={faThumbtack} className="!w-3 !h-3 transform rotate-45" />
                                            </div>
                                        )}

                                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-5 pt-12 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                            <span className="text-[10px] uppercase tracking-wider text-gray-300 font-semibold mb-1 block">
                                                {cert.category}
                                            </span>
                                            <p className="text-white font-bold text-lg line-clamp-2 leading-tight">{cert.title}</p>
                                        </div>
                                    </figure>
                                </div>
                            ))}
                        </div>
                    )}

                    {!loading && certs.length === 0 && (
                        <div className="text-center py-10">
                            <p className="text-gray-500 italic">No achievements added yet.</p>
                        </div>
                    )}
                </div>
            </div>

            <dialog id="home_cert_modal" className="modal backdrop-blur-sm">
                <div className="modal-box bg-white max-w-3xl p-0 rounded-2xl overflow-hidden shadow-2xl relative">
                    {selectedCert && (
                        <div className="flex flex-col">
                            <div className="relative bg-gray-100 group">
                                <img src={selectedCert.image_url} className="w-full h-auto max-h-[70vh] object-contain mx-auto" alt="Detail" />
                                <form method="dialog" className="absolute top-4 right-4 z-20">
                                    <button className="w-10 h-10 cursor-pointer bg-black/20 hover:bg-black/40 backdrop-blur-md text-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-105 border border-white/20">
                                        <FontAwesomeIcon icon={faTimes} className="!w-5 !h-5" />
                                    </button>
                                </form>
                            </div>
                            <div className="p-8">
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider border border-blue-100">
                                        {selectedCert.category}
                                    </span>
                                    {selectedCert.is_pinned && (
                                        <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2 py-1 rounded-full border border-amber-100 flex items-center gap-1">
                                            <FontAwesomeIcon icon={faThumbtack} className="!w-2 !h-2" /> Featured
                                        </span>
                                    )}
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">{selectedCert.title}</h3>
                                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                                    {selectedCert.description}
                                </p>
                            </div>
                        </div>
                    )}
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>

            {/* Skills Section (Tetap sama) */}
            <div className="bg-bg_primary lg:px-40 px-10 lg:p-20 p-10 text-black">
                <div className="flex flex-col max-md:hidden gap-4 mb-8 justify-center items-center">
                    <h1 className="text-4xl font-bold border-b-2 w-fit text-poppins">My Skills</h1>
                    <h3 className="text-lg font-light ">Technical & Professional Expertise</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Column 1: Frameworks */}
                    <div className="grid grid-rows-[auto_1fr] gap-4">
                        <h2 className="text-2xl font-bold text-center">Framework & Libraries</h2>
                        <div className="mt-2 justify-center flex flex-wrap gap-3">
                            <div className="relative group flex flex-col items-center">
                                <p className="text-sm font-medium mb-1 md:mb-0 md:absolute md:opacity-0 group-hover:opacity-100 md:-top-8 md:left-1/2 md:-translate-x-1/2">Laravel</p>
                                <div className="border rounded w-[52px] h-[52px] p-1.5 flex justify-center items-center">
                                    <FontAwesomeIcon icon={faLaravel} width={'40px'} className="group-hover:text-red-600" />
                                </div>
                            </div>
                            <div className="relative group flex flex-col items-center">
                                <p className="text-sm font-medium mb-1 md:mb-0 md:absolute md:opacity-0 group-hover:opacity-100 md:-top-8 md:left-1/2 md:-translate-x-1/2">React</p>
                                <div className="border rounded w-[52px] h-[52px] p-1.5 flex justify-center items-center">
                                    <FontAwesomeIcon icon={faReact} width={'40px'} className="group-hover:text-cyan-300" />
                                </div>
                            </div>
                            <div className="relative group flex flex-col items-center">
                                <p className="text-sm font-medium mb-1 md:mb-0 md:absolute md:opacity-0 group-hover:opacity-100 md:-top-8 md:left-1/2 md:-translate-x-1/2">Bootstrap</p>
                                <div className="border rounded w-[52px] h-[52px] p-1.5 flex justify-center items-center">
                                    <FontAwesomeIcon icon={faBootstrap} width={'40px'} className="group-hover:text-purple-600" />
                                </div>
                            </div>
                            <div className="relative group flex flex-col items-center">
                                <p className="text-sm font-medium mb-1 md:mb-0 md:absolute md:opacity-0 group-hover:opacity-100 md:-top-8 md:left-1/2 md:-translate-x-1/2">Node.js</p>
                                <div className="border rounded w-[52px] h-[52px] p-1.5 flex justify-center items-center">
                                    <FontAwesomeIcon icon={faNode} width={'40px'} className="group-hover:text-green-600" />
                                </div>
                            </div>
                            <div className="relative group flex flex-col items-center">
                                <p className="text-sm font-medium mb-1 md:mb-0 md:absolute md:opacity-0 group-hover:opacity-100 md:-top-8 md:left-1/2 md:-translate-x-1/2">Tailwind</p>
                                <div className="border rounded w-[52px] h-[52px] p-1.5 flex justify-center items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="#1A1A1A" viewBox="0 0 24 24" width="40px" className="group-hover:fill-cyan-400">
                                        <path d="M23.395 7.081c-.488-.207-1.053-.002-1.29.472-.224.448-.523.723-.914.838-.612.183-1.343-.052-1.685-.253-.451-.265-.974-.667-1.527-1.092C16.214 5.688 14.018 4 11 4 8.586 4 7.346 5.239 5.293 7.293 4.902 7.684 4.899 8.32 5.29 8.71 5.67 9.092 6.28 9.104 6.672 8.74c.01-.009.02-.019.03-.028.552-.426 4.03-.012 5.55 1.196C14.511 11.703 16.142 13 18 13c2.659 0 4.879-1.741 5.94-4.658C24.121 7.844 23.882 7.291 23.395 7.081zM18.395 14.081c-.488-.207-1.053-.002-1.29.472-.224.448-.523.723-.914.838-.612.18-1.343-.052-1.685-.253-.451-.265-.974-.667-1.527-1.092C11.214 12.688 9.018 11 6 11c-2.414 0-3.654 1.239-5.707 3.293-.391.391-.394 1.027-.003 1.417.38.382.991.395 1.383.03.01-.009.02-.019.03-.028.551-.426 4.031-.012 5.55 1.196C9.511 18.703 11.142 20 13 20c2.659 0 4.879-1.741 5.94-4.658C19.121 14.844 18.882 14.291 18.395 14.081z" />
                                    </svg>
                                </div>
                            </div>
                            <div className="relative group flex flex-col items-center">
                                <p className="text-sm font-medium mb-1 md:mb-0 md:absolute md:opacity-0 group-hover:opacity-100 md:-top-8 md:left-1/2 md:-translate-x-1/2">Next.js</p>
                                <div className="border rounded w-[52px] h-[52px] p-1.5 flex justify-center items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="#1A1A1A" viewBox="0 0 48 48" width="40px" className="group-hover:fill-gray-800">
                                        <path d="M20,23.474V31.5c0,0.828-0.672,1.5-1.5,1.5S17,32.328,17,31.5v-13c0-0.659,0.431-1.241,1.062-1.435 c0.627-0.19,1.314,0.049,1.682,0.596l0.249,0.37L20,18l15.234,22.546C40.524,36.947,44,30.88,44,24c0-11.046-8.954-20-20-20 S4,12.954,4,24s8.954,20,20,20c3.082,0,5.99-0.718,8.597-1.963L20,23.474z M28,16.5c0-0.828,0.672-1.5,1.5-1.5s1.5,0.672,1.5,1.5 v12.79l-3-4.304V16.5z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Column 2: Professional Skills */}
                    <div className="grid grid-rows-[auto_1fr] gap-4">
                        <h2 className="text-2xl font-bold text-center">Professional Skills</h2>
                        <div className="mt-2 justify-center flex flex-wrap gap-3">
                            <div className="relative group flex flex-col items-center">
                                <p className="text-sm font-medium mb-1 md:mb-0 md:absolute md:opacity-0 group-hover:opacity-100 md:-top-8 md:left-1/2 md:-translate-x-1/2 text-center whitespace-nowrap">Leadership</p>
                                <div className="border rounded w-[52px] h-[52px] p-1.5 flex justify-center items-center">
                                    <FontAwesomeIcon icon={faUsers} width={'30px'} className="group-hover:text-blue-500" />
                                </div>
                            </div>
                            <div className="relative group flex flex-col items-center">
                                <p className="text-sm font-medium mb-1 md:mb-0 md:absolute md:opacity-0 group-hover:opacity-100 md:-top-8 md:left-1/2 md:-translate-x-1/2 text-center whitespace-nowrap">Project Mgmt</p>
                                <div className="border rounded w-[52px] h-[52px] p-1.5 flex justify-center items-center">
                                    <FontAwesomeIcon icon={faTasks} width={'30px'} className="group-hover:text-green-500" />
                                </div>
                            </div>
                            <div className="relative group flex flex-col items-center">
                                <p className="text-sm font-medium mb-1 md:mb-0 md:absolute md:opacity-0 group-hover:opacity-100 md:-top-8 md:left-1/2 md:-translate-x-1/2 text-center whitespace-nowrap">Documentation</p>
                                <div className="border rounded w-[52px] h-[52px] p-1.5 flex justify-center items-center">
                                    <FontAwesomeIcon icon={faFileAlt} width={'30px'} className="group-hover:text-yellow-500" />
                                </div>
                            </div>
                            <div className="relative group flex flex-col items-center">
                                <p className="text-sm font-medium mb-1 md:mb-0 md:absolute md:opacity-0 group-hover:opacity-100 md:-top-8 md:left-1/2 md:-translate-x-1/2 text-center whitespace-nowrap">Public Speaking</p>
                                <div className="border rounded w-[52px] h-[52px] p-1.5 flex justify-center items-center">
                                    <FontAwesomeIcon icon={faMicrophone} width={'30px'} className="group-hover:text-red-500" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Column 3: Programming Language */}
                    <div className="grid grid-rows-[auto_1fr] gap-4">
                        <h2 className="text-2xl font-bold text-center">Languages & DB</h2>
                        <div className="mt-2 justify-center flex gap-3">
                            <div className="relative group flex flex-col items-center">
                                <p className="text-sm font-medium mb-1 md:mb-0 md:absolute md:opacity-0 group-hover:opacity-100 md:-top-8 md:left-1/2 md:-translate-x-1/2">Php</p>
                                <div className="border rounded w-[52px] h-[52px] p-1.5 flex justify-center items-center">
                                    <FontAwesomeIcon icon={faPhp} width={'40px'} className="group-hover:text-indigo-400" />
                                </div>
                            </div>
                            <div className="relative group flex flex-col items-center">
                                <p className="text-sm font-medium mb-1 md:mb-0 md:absolute md:opacity-0 group-hover:opacity-100 md:-top-8 md:left-1/2 md:-translate-x-1/2">Javascript</p>
                                <div className="border rounded w-[52px] h-[52px] p-1.5 flex justify-center items-center">
                                    <FontAwesomeIcon icon={faJs} width={'40px'} className="group-hover:text-yellow-400" />
                                </div>
                            </div>
                            <div className="relative group flex flex-col items-center">
                                <p className="text-sm font-medium mb-1 md:mb-0 md:absolute md:opacity-0 group-hover:opacity-100 md:-top-8 md:left-1/2 md:-translate-x-1/2">MySQL</p>
                                <div className="border rounded w-[52px] h-[52px] p-1.5 flex justify-center items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="#1A1A1A" viewBox="0 0 24 24" width="40px" className="group-hover:fill-cyan-300">
                                        <path d="M 3.125 1 C 2.219 1 1.5030625 1.4805 1.1640625 2.3125 C 1.0570625 2.5695 1.0029531 2.8420469 1.0019531 3.1230469 C 1.0009531 4.0540469 1.6009375 4.8097188 1.9609375 5.2617188 C 2.0239375 5.3407187 2.080625 5.4110938 2.140625 5.4960938 L 2.3027344 5.7109375 C 2.4637344 5.9219375 2.6470781 6.16125 2.7050781 6.28125 C 2.7240781 6.33625 2.7492031 6.4326875 2.7832031 6.5546875 C 2.9402031 7.1196875 3.2332187 8.16975 3.6992188 8.96875 C 3.8872187 9.29075 4.1517969 9.6954687 4.3417969 9.9804688 C 4.2147969 10.616469 4 11.788 4 12.5 C 4 13.75 4.2592188 14.753875 4.8242188 15.671875 C 5.0332187 15.999875 5.671 17 6.75 17 C 7.133 17 7.7694062 16.850391 7.9414062 15.900391 C 8.7064063 16.887391 10 18.125 12 19 C 12 19 8.2507969 14.625438 7.5917969 11.898438 C 7.5917969 11.898437 6.874625 12.625375 6.265625 14.109375 C 6.083625 13.651375 6 13.135 6 12.5 C 6 11.873 6.2758125 10.471375 6.3828125 9.984375 L 6.4765625 9.5605469 L 6.2304688 9.203125 C 6.2264687 9.196125 5.7227344 8.4688906 5.4277344 7.9628906 C 5.0917344 7.3868906 4.8439375 6.4955781 4.7109375 6.0175781 C 4.6459375 5.7845781 4.594875 5.6159531 4.546875 5.5019531 C 4.371875 5.1229531 4.115625 4.7900937 3.890625 4.4960938 L 3.765625 4.3300781 C 3.702625 4.2390781 3.6193906 4.133625 3.5253906 4.015625 C 3.3423906 3.785625 3.0017188 3.3570312 3.0117188 3.0820312 L 3.1230469 3.0039062 L 3.125 3 C 3.92 3 4.9440781 3.5643437 5.3300781 3.7773438 C 5.4560781 3.8463438 5.5486563 3.8940156 5.5976562 3.9160156 L 5.7714844 3.9921875 L 6.1132812 4.0039062 C 6.5602813 4.0139062 7.9189063 4.0456875 8.8789062 4.4296875 C 10.629906 5.1296875 11.598031 5.830375 12.582031 7.109375 C 14.906031 10.131375 15.763484 14.044984 15.771484 14.083984 L 15.896484 14.648438 L 16.443359 14.826172 C 16.462359 14.833172 17.992922 15.344641 19.419922 16.681641 C 17.624922 17.125641 17 18 17 18 C 17 18 17.476 18.928 19.75 20.375 C 21.125 21.25 21.875 21.875 23 23 C 23 23 21.875688 20.499813 20.304688 18.507812 C 21.500687 18.124813 22.970703 17.925781 22.970703 17.925781 L 22.060547 16.664062 C 20.562547 14.587063 18.553656 13.538859 17.597656 13.130859 C 17.265656 11.864859 16.262969 8.614625 14.167969 5.890625 C 12.968969 4.331625 11.693094 3.3993125 9.6210938 2.5703125 C 8.3940937 2.0803125 6.9187188 2.0218594 6.2617188 2.0058594 C 5.6867187 1.6898594 4.409 1 3.125 1 z M 7.1875 5 C 7.1875 5 6.75 5 6.25 5.125 L 7.625 6.9980469 C 8 6.5000469 8 5.9179688 8 5.9179688 C 8 5.9179688 7.7505 5.25 7.1875 5 z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Content_Home