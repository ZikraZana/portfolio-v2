"use client"
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import { faAward, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Content_Achievements = () => {
    const [certs, setCerts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState("All");
    const [selectedCert, setSelectedCert] = useState(null);

    const categories = ["All", "Prestasi Lomba", "Peserta Lomba", "Kepanitiaan", "Program/Bootcamp", "Organisasi", "Lainnya"];

    useEffect(() => {
        const fetchCerts = async () => {
            // Simulasi delay agar skeleton terlihat (opsional)
            // await new Promise(resolve => setTimeout(resolve, 800)); 

            const { data, error } = await supabase
                .from('certificates')
                .select('*')
                .order('is_pinned', { ascending: false })
                .order('created_at', { ascending: false });
            
            if (error) console.error(error);
            else setCerts(data || []);
            setLoading(false);
        };
        fetchCerts();
    }, []);

    // Logic Filtering
    const filteredCerts = filter === "All" 
        ? certs 
        : certs.filter(c => c.category === filter);

    const handleOpenModal = (cert) => {
        setSelectedCert(cert);
        document.getElementById('cert_modal').showModal();
    };

    return (
        <div className="min-h-screen bg-bg_primary pt-24 pb-20">
            {/* Header */}
            <div className="text-center mb-12 px-6">
                <p className="text-gray-600 uppercase tracking-[0.2em] text-sm font-semibold mb-3">Proof of Work</p>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 text-poppins">
                    Achievements & <br/> Certifications
                </h1>
            </div>

            {/* Filter Tabs (Scrollable on Mobile) */}
            <div className="flex justify-center mb-12 px-4">
                <div className="flex gap-2 overflow-x-auto pb-4 max-w-full no-scrollbar">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-5 py-2 hover:cursor-pointer rounded-full text-sm font-medium whitespace-nowrap transition-all border ${
                                filter === cat 
                                ? "bg-gray-900 text-white border-gray-900 shadow-lg" 
                                : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50"
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* --- SKELETON LOADING --- */}
            {loading ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 md:px-16 lg:px-24">
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                        <div key={item} className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm h-full flex flex-col animate-pulse">
                            {/* Image Skeleton */}
                            <div className="aspect-[4/3] bg-gray-200 rounded-xl mb-4"></div>
                            
                            {/* Title Skeleton */}
                            <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
                            
                            {/* Desc Skeleton */}
                            <div className="space-y-2">
                                <div className="h-3 bg-gray-200 rounded w-full"></div>
                                <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                /* --- REAL CONTENT --- */
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 md:px-16 lg:px-24">
                    {filteredCerts.map((cert) => (
                        <div 
                            key={cert.id}
                            onClick={() => handleOpenModal(cert)}
                            className="bg-white p-4 rounded-2xl shadow-sm hover:shadow-xl transition-all cursor-pointer border border-gray-100 group"
                        >
                            {/* Image Container */}
                            <div className="aspect-[4/3] bg-gray-100 rounded-xl overflow-hidden mb-4 relative">
                                {cert.image_url ? (
                                    <img src={cert.image_url} alt={cert.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                ) : (
                                    <div className="flex items-center justify-center h-full text-gray-300">
                                        <FontAwesomeIcon icon={faAward} className="w-12 h-12" />
                                    </div>
                                )}
                                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-gray-800 shadow-sm">
                                    {cert.category}
                                </div>
                            </div>
                            
                            <h3 className="font-bold text-gray-800 text-lg mb-1 line-clamp-2 group-hover:text-blue-600 transition-colors">
                                {cert.title}
                            </h3>
                            <p className="text-gray-500 text-sm line-clamp-2">
                                {cert.description}
                            </p>
                        </div>
                    ))}
                    
                    {!loading && filteredCerts.length === 0 && (
                        <div className="col-span-full text-center py-20 text-gray-400">
                            <p>No certificates found in this category.</p>
                        </div>
                    )}
                </div>
            )}

            {/* Modal Detail */}
            <dialog id="cert_modal" className="modal backdrop-blur-sm">
                <div className="modal-box bg-white max-w-3xl p-0 rounded-2xl overflow-hidden shadow-2xl relative">
                    {selectedCert && (
                        <div className="flex flex-col">
                            {/* Header Image Container */}
                            <div className="relative bg-gray-100 group">
                                <img src={selectedCert.image_url} className="w-full h-auto max-h-[70vh] object-contain mx-auto" alt="Certificate Detail" />
                                
                                {/* Gradient Overlay (Optional, for better text visibility if needed) */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>

                                {/* --- CLOSE BUTTON (Style from Blog) --- */}
                                <form method="dialog" className="absolute top-4 right-4 z-20">
                                    <button className="w-10 h-10 cursor-pointer bg-black/20 hover:bg-black/40 backdrop-blur-md text-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-105 border border-white/20">
                                        <FontAwesomeIcon icon={faTimes} className="!w-5 !h-5" />
                                    </button>
                                </form>
                            </div>

                            {/* Content Body */}
                            <div className="p-8">
                                <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider border border-blue-100">
                                    {selectedCert.category}
                                </span>
                                <h3 className="text-2xl font-bold text-gray-900 mt-4 mb-3">{selectedCert.title}</h3>
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
        </div>
    );
};

export default Content_Achievements;