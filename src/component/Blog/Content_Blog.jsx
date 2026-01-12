"use client"
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import { faCalendarAlt, faUser, faArrowRight, faSearch, faTag, faTimes, faBookOpen, faNewspaper } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Content_Blog = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedPost, setSelectedPost] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const fetchBlogs = async () => {
            const { data, error } = await supabase
                .from('blogs')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) {
                console.error("Error fetching blogs:", error);
            } else {
                setPosts(data || []);
            }
            setLoading(false);
        };

        fetchBlogs();
    }, []);

    const handleOpenModal = (post) => {
        setSelectedPost(post);
        document.getElementById('blog_modal').showModal();
    };

    const formatDate = (dateString) => {
        if (!dateString) return "";
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

    const filteredPosts = posts.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-bg_primary pt-24 pb-20">

            <div className="text-center mb-16 px-6">
                <p className="text-gray-600 uppercase tracking-[0.2em] text-sm font-semibold mb-3">Thoughts & Insights</p>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 text-poppins inline-block relative">
                    My Blog
                    <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-gray-400 rounded-full"></span>
                </h1>

                <div className="mt-8 max-w-md mx-auto relative">
                    <input
                        type="text"
                        placeholder="Search articles..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full py-3 px-5 pl-12 rounded-full border border-gray-300 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500 transition-all bg-white shadow-sm"
                    />
                    <FontAwesomeIcon icon={faSearch} className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 !w-4 !h-4" />
                </div>
            </div>

            {/* --- SKELETON LOADING (Modern Shimmer) --- */}
            {loading ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-16 lg:px-24">
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                        <div key={item} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm h-full flex flex-col animate-pulse">
                            {/* Image Skeleton */}
                            <div className="h-48 bg-gray-200 w-full relative">
                                <div className="absolute top-4 left-4 h-6 w-20 bg-gray-300 rounded-full"></div>
                            </div>

                            {/* Content Skeleton */}
                            <div className="p-6 flex flex-col flex-grow space-y-4">
                                {/* Meta Info */}
                                <div className="flex gap-4">
                                    <div className="h-3 w-20 bg-gray-200 rounded"></div>
                                    <div className="h-3 w-20 bg-gray-200 rounded"></div>
                                </div>

                                {/* Title */}
                                <div className="h-7 bg-gray-200 rounded w-5/6"></div>

                                {/* Excerpt */}
                                <div className="space-y-2">
                                    <div className="h-3 bg-gray-200 rounded w-full"></div>
                                    <div className="h-3 bg-gray-200 rounded w-full"></div>
                                    <div className="h-3 bg-gray-200 rounded w-4/6"></div>
                                </div>

                                {/* Button Skeleton */}
                                <div className="mt-auto pt-4 border-t border-gray-100">
                                    <div className="h-4 w-24 bg-gray-200 rounded"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                /* --- REAL DATA --- */
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-16 lg:px-24">
                    {filteredPosts.map((post) => (
                        <div
                            key={post.id}
                            onClick={() => handleOpenModal(post)}
                            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2 flex flex-col h-full cursor-pointer"
                        >

                            {/* Image Header */}
                            <div className="h-48 w-full bg-gray-200 relative overflow-hidden flex items-center justify-center">
                                {post.image_url ? (
                                    <img
                                        src={post.image_url}
                                        alt={post.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                ) : (
                                    <div className="text-gray-400 flex flex-col items-center">
                                        <FontAwesomeIcon icon={faNewspaper} className="w-10 h-10 mb-2" />
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>

                                {/* Category Badge */}
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-800 shadow-sm flex items-center gap-2">
                                    <FontAwesomeIcon icon={faTag} className="!w-3 !h-3 text-gray-500" />
                                    {post.category}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col flex-grow">
                                {/* Meta Info */}
                                <div className="flex items-center gap-4 text-xs text-gray-400 mb-3 font-medium">
                                    <span className="flex items-center gap-1">
                                        <FontAwesomeIcon icon={faCalendarAlt} className="!w-3 !h-3" /> {formatDate(post.created_at)}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <FontAwesomeIcon icon={faUser} className="!w-3 !h-3" /> {post.author}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-gray-600 transition-colors">
                                    {post.title}
                                </h3>

                                {/* Excerpt */}
                                <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 mb-6 flex-grow">
                                    {post.excerpt}
                                </p>

                                {/* Read More Button */}
                                <div className="mt-auto pt-4 border-t border-gray-100">
                                    <button className="text-sm font-bold text-gray-800 flex items-center gap-2 group-hover:gap-3 transition-all">
                                        Read Article
                                        <FontAwesomeIcon icon={faArrowRight} className="!w-3 !h-3" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {!loading && filteredPosts.length === 0 && (
                <div className="text-center py-20">
                    <p className="text-gray-500">No articles found matching your search.</p>
                </div>
            )}

            <dialog id="blog_modal" className="modal">
                <div className="modal-box bg-white max-w-4xl p-0 rounded-3xl overflow-hidden shadow-2xl relative">

                    {selectedPost && (
                        <>
                            <div className="w-full h-64 bg-gray-900 relative">
                                {selectedPost.image_url ? (
                                    <img src={selectedPost.image_url} alt={selectedPost.title} className="w-full h-full object-cover opacity-80" />
                                ) : (
                                    <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900"></div>
                                )}

                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

                                <form method="dialog" className="absolute top-4 right-4 z-20">
                                    <button className="w-10 h-10 cursor-pointer bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-105 border border-white/20">
                                        <FontAwesomeIcon icon={faTimes} className="!w-5 !h-5" />
                                    </button>
                                </form>

                                <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10">
                                    <span className="bg-white/20 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full w-fit mb-3 border border-white/30">
                                        {selectedPost.category}
                                    </span>
                                    <h3 className="text-2xl md:text-4xl font-bold text-white text-poppins leading-tight shadow-sm">
                                        {selectedPost.title}
                                    </h3>
                                </div>
                            </div>

                            <div className="p-8 md:p-10 bg-white max-h-[60vh] overflow-y-auto">
                                <div className="flex items-center gap-6 text-sm text-gray-500 mb-8 border-b border-gray-100 pb-6">
                                    <span className="flex items-center gap-2">
                                        <FontAwesomeIcon icon={faUser} className="!w-3 !h-3" /> {selectedPost.author}
                                    </span>
                                    <span className="flex items-center gap-2">
                                        <FontAwesomeIcon icon={faCalendarAlt} className="!w-3 !h-3" /> {formatDate(selectedPost.created_at)}
                                    </span>
                                    <span className="flex items-center gap-2">
                                        <FontAwesomeIcon icon={faBookOpen} className="!w-3 !h-3" /> Read
                                    </span>
                                </div>

                                <div className="prose max-w-none text-gray-700 leading-relaxed whitespace-pre-line">
                                    <p className="text-lg font-medium text-gray-800 mb-6 border-l-4 border-gray-800 pl-4 bg-gray-50 py-2 rounded-r-lg italic">
                                        {selectedPost.excerpt}
                                    </p>
                                    <div className="text-justify space-y-4">
                                        {selectedPost.content}
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </dialog>

        </div>
    );
}

export default Content_Blog;