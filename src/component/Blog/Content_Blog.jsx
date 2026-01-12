"use client"
import { useState } from "react";
import { faCalendarAlt, faUser, faArrowRight, faSearch, faTag, faTimes, faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Content_Blog = () => {
    // State untuk menyimpan artikel yang dipilih agar modal dinamis
    const [selectedPost, setSelectedPost] = useState(null);

    // --- Mock Data (Data Dummy) ---
    const posts = [
        {
            id: 1,
            title: "Building a Modern Portfolio with Next.js & Tailwind",
            excerpt: "A deep dive into how I built this portfolio using the latest stack. Learn about component structure, responsiveness, and deployment.",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. \n\n Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula.",
            date: "Jan 12, 2026",
            author: "Zikra Zana",
            category: "Development",
            gradient: "from-gray-700 to-gray-900"
        },
        {
            id: 2,
            title: "My Journey as a Google Student Ambassador",
            excerpt: "Sharing my experience leading the tech community on campus, organizing workshops, and what I learned from the GSA program.",
            content: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Nulla porttitor accumsan tincidunt. Curabitur aliquet quam id dui posuere blandit. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. \n\n Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Nulla quis lorem ut libero malesuada feugiat. Proin eget tortor risus. Donec rutrum congue leo eget malesuada.",
            date: "Dec 20, 2025",
            author: "Zikra Zana",
            category: "Leadership",
            gradient: "from-gray-500 to-gray-700"
        },
        {
            id: 3,
            title: "Why Documentation Matters in Software Development",
            excerpt: "Documentation is often overlooked. Here is why writing good docs is a crucial skill for every developer and system analyst.",
            content: "Cras ultricies ligula sed magna dictum porta. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Pellentesque in ipsum id orci porta dapibus. Curabitur aliquet quam id dui posuere blandit. \n\n Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.",
            date: "Nov 15, 2025",
            author: "Zikra Zana",
            category: "Soft Skills",
            gradient: "from-gray-400 to-gray-600"
        },
        {
            id: 4,
            title: "Balancing Code and Organization Life",
            excerpt: "Tips on time management for students who want to excel in both academic projects and organizational responsibilities.",
            content: "Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. \n\n Sed porttitor lectus nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.",
            date: "Oct 05, 2025",
            author: "Zikra Zana",
            category: "Student Life",
            gradient: "from-gray-600 to-gray-800"
        }
    ];

    // Fungsi untuk membuka modal dan set data
    const handleOpenModal = (post) => {
        setSelectedPost(post);
        document.getElementById('blog_modal').showModal();
    };

    return (
        <div className="min-h-screen bg-bg_primary pt-24 pb-20">

            {/* --- Header Section --- */}
            <div className="text-center mb-16 px-6">
                <p className="text-gray-600 uppercase tracking-[0.2em] text-sm font-semibold mb-3">Thoughts & Insights</p>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 text-poppins inline-block relative">
                    My Blog
                </h1>

                {/* Search Bar */}
                <div className="mt-8 max-w-md mx-auto relative">
                    <input
                        type="text"
                        placeholder="Search articles..."
                        className="w-full py-3 px-5 pl-12 rounded-full border border-gray-300 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500 transition-all bg-white shadow-sm"
                    />
                    <FontAwesomeIcon icon={faSearch} className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 !w-4 !h-4" />
                </div>
            </div>

            {/* --- Blog Grid --- */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-16 lg:px-24">
                {posts.map((post) => (
                    <div
                        key={post.id}
                        // Tambahkan onClick handler di sini
                        onClick={() => handleOpenModal(post)}
                        className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2 flex flex-col h-full cursor-pointer"
                    >

                        {/* Image Placeholder (Gradient) */}
                        <div className={`h-48 w-full bg-gradient-to-br ${post.gradient} relative overflow-hidden`}>
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all duration-500"></div>

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
                                    <FontAwesomeIcon icon={faCalendarAlt} className="!w-3 !h-3" /> {post.date}
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

            {/* --- SINGLE MODAL (Dynamic Content) --- */}
            <dialog id="blog_modal" className="modal">
                <div className="modal-box bg-white max-w-4xl p-0 rounded-3xl overflow-hidden shadow-2xl relative">

                    {selectedPost && (
                        <>
                            {/* Modal Header Image */}
                            <div className={`w-full h-64 bg-gradient-to-br ${selectedPost.gradient} relative`}>
                                <div className="absolute inset-0 bg-black/20"></div>

                                {/* Tombol Close (Style Baru: Gradient Abu Gelap) */}
                                <form method="dialog" className="absolute top-4 right-4 z-20">
                                    <button className="w-10 h-10 cursor-pointer bg-gradient-to-br from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 text-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-105 border border-white/20">
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

                            {/* Modal Content Body */}
                            <div className="p-8 md:p-10 bg-white">
                                {/* Meta Data */}
                                <div className="flex items-center gap-6 text-sm text-gray-500 mb-8 border-b border-gray-100 pb-6">
                                    <span className="flex items-center gap-2">
                                        <FontAwesomeIcon icon={faUser} className="!w-3 !h-3" /> {selectedPost.author}
                                    </span>
                                    <span className="flex items-center gap-2">
                                        <FontAwesomeIcon icon={faCalendarAlt} className="!w-3 !h-3" /> {selectedPost.date}
                                    </span>
                                    <span className="flex items-center gap-2">
                                        <FontAwesomeIcon icon={faBookOpen} className="!w-3 !h-3" /> 5 min read
                                    </span>
                                </div>

                                {/* Article Text */}
                                <div className="prose max-w-none text-gray-700 leading-relaxed whitespace-pre-line">
                                    <p className="text-lg font-medium text-gray-800 mb-6 border-l-4 border-gray-800 pl-4 bg-gray-50 py-2 rounded-r-lg">
                                        {selectedPost.excerpt}
                                    </p>
                                    <p>
                                        {selectedPost.content}
                                    </p>
                                    <p className="mt-4 italic text-sm text-gray-400">
                                        (This is a generated placeholder text. In a real application, this would be the full article content fetched from a database or markdown file.)
                                    </p>
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