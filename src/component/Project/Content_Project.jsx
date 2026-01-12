"use client"
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt, faLayerGroup, faTimes, faImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Content_Project = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            // Simulasi delay sedikit biar skeleton kelihatan (opsional, bisa dihapus nanti)
            // await new Promise(resolve => setTimeout(resolve, 1000)); 
            
            const { data, error } = await supabase
                .from('projects')
                .select('*')
                .order('created_at', { ascending: false });
            
            if (error) {
                console.error("Error fetching projects:", error);
            } else {
                setProjects(data || []);
            }
            setLoading(false);
        };

        fetchProjects();
    }, []);

    const handleOpenModal = (project) => {
        setSelectedProject(project);
        document.getElementById('project_modal').showModal();
    };

    const parseTechStack = (stack) => {
        if (Array.isArray(stack)) return stack;
        if (typeof stack === 'string') {
            const cleanString = stack.replace(/[\[\]"{}]/g, ''); 
            return cleanString.split(',').map(s => s.trim()).filter(s => s);
        }
        return [];
    };

    return (
        <div className="min-h-screen bg-bg_primary pt-24 pb-20">
            
            <div className="text-center mb-16 px-6">
                <p className="text-gray-600 uppercase tracking-[0.2em] text-sm font-semibold mb-3">Portfolio</p>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 text-poppins inline-block relative">
                    Featured Projects
                </h1>
            </div>

            {/* --- SKELETON LOADING (Modern Shimmer) --- */}
            {loading ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-16 lg:px-24">
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                        <div key={item} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm h-full flex flex-col animate-pulse">
                            {/* Image Skeleton */}
                            <div className="h-56 bg-gray-200 w-full"></div>
                            
                            {/* Content Skeleton */}
                            <div className="p-6 flex flex-col flex-grow space-y-4">
                                {/* Title Bar */}
                                <div className="h-7 bg-gray-200 rounded w-3/4"></div>
                                
                                {/* Description Bars */}
                                <div className="space-y-2">
                                    <div className="h-3 bg-gray-200 rounded w-full"></div>
                                    <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                                    <div className="h-3 bg-gray-200 rounded w-4/6"></div>
                                </div>
                                
                                {/* Tech Stack Pills */}
                                <div className="flex gap-2 mt-auto pt-4">
                                    <div className="h-6 w-16 bg-gray-200 rounded-lg"></div>
                                    <div className="h-6 w-14 bg-gray-200 rounded-lg"></div>
                                    <div className="h-6 w-20 bg-gray-200 rounded-lg"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                /* --- REAL DATA --- */
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-16 lg:px-24">
                    {projects.map((project) => (
                        <div 
                            key={project.id} 
                            onClick={() => handleOpenModal(project)}
                            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2 cursor-pointer flex flex-col h-full"
                        >
                            <div className="relative h-56 overflow-hidden bg-gray-100">
                                {project.image_url ? (
                                    <img
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        src={project.image_url}
                                        alt={project.title}
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-gray-300">
                                        <FontAwesomeIcon icon={faImage} className="w-12 h-12" />
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <h2 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-gray-600 transition-colors line-clamp-1">
                                    {project.title}
                                </h2>
                                <p className="text-gray-500 text-sm line-clamp-3 mb-4 flex-grow">
                                    {project.description}
                                </p>
                                
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {parseTechStack(project.tech_stack).slice(0, 3).map((tech, i) => (
                                        <span key={i} className="px-3 py-1 bg-gray-100 text-xs font-semibold rounded-lg text-gray-600 border border-gray-200">
                                            {tech}
                                        </span>
                                    ))}
                                    {parseTechStack(project.tech_stack).length > 3 && (
                                        <span className="px-2 py-1 text-xs text-gray-400">+{parseTechStack(project.tech_stack).length - 3}</span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {!loading && projects.length === 0 && (
                <div className="text-center py-20 px-6">
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 inline-block max-w-md">
                        <p className="text-gray-500 mb-2">No projects found yet.</p>
                        <p className="text-sm text-gray-400">Check back later or add projects via Admin Dashboard.</p>
                    </div>
                </div>
            )}

            <dialog id="project_modal" className="modal">
                <div className="modal-box bg-white max-w-4xl p-0 rounded-3xl overflow-hidden shadow-2xl relative">
                    {selectedProject && (
                        <>
                            <div className="w-full h-64 bg-gray-100 relative group">
                                {selectedProject.image_url ? (
                                    <img className="w-full h-full object-cover" src={selectedProject.image_url} alt="Detail" />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-400">
                                        <FontAwesomeIcon icon={faImage} className="w-16 h-16" />
                                    </div>
                                )}
                                
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-8">
                                    <h3 className="text-3xl md:text-4xl font-bold text-white text-poppins shadow-sm">
                                        {selectedProject.title}
                                    </h3>
                                </div>

                                <form method="dialog" className="absolute top-4 right-4 z-20">
                                    <button className="w-10 h-10 cursor-pointer bg-black/50 hover:bg-black/70 backdrop-blur-md text-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-105 border border-white/20">
                                        <FontAwesomeIcon icon={faTimes} className="!w-4 !h-4" />
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
                                            <p className="text-gray-600 leading-relaxed text-sm whitespace-pre-line">
                                                {selectedProject.description}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="space-y-6 bg-gray-50 p-6 rounded-2xl border border-gray-100 h-fit">
                                        <div>
                                            <h4 className="text-sm font-bold text-gray-800 uppercase tracking-wider mb-3">Tech Stack</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {parseTechStack(selectedProject.tech_stack).map((tech, i) => (
                                                    <span key={i} className="px-3 py-1 bg-white shadow-sm text-xs font-medium rounded-md text-gray-600 border border-gray-200">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-bold text-gray-800 uppercase tracking-wider mb-3">Links</h4>
                                            <div className="space-y-2">
                                                {selectedProject.repo_url ? (
                                                    <a href={selectedProject.repo_url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-600 hover:text-black transition-colors hover:underline">
                                                        <FontAwesomeIcon icon={faGithub} className="!w-4 !h-4" /> Repository
                                                    </a>
                                                ) : (
                                                    <span className="flex items-center gap-2 text-sm text-gray-400 cursor-not-allowed">
                                                        <FontAwesomeIcon icon={faGithub} className="!w-4 !h-4" /> Private Repo
                                                    </span>
                                                )}

                                                {selectedProject.demo_url ? (
                                                    <a href={selectedProject.demo_url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-600 hover:text-black transition-colors hover:underline">
                                                        <FontAwesomeIcon icon={faExternalLinkAlt} className="!w-3 !h-3" /> Live Demo
                                                    </a>
                                                ) : (
                                                    <span className="flex items-center gap-2 text-sm text-gray-400 cursor-not-allowed">
                                                        <FontAwesomeIcon icon={faExternalLinkAlt} className="!w-3 !h-3" /> Not Hosted
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </dialog>
        </div>
    );
};

export default Content_Project;