"use client"
import { useState, useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { DotsThreeCircleVertical } from "@phosphor-icons/react";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Handle Body Scroll Lock
    useEffect(() => {
        if (isSidebarOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isSidebarOpen]);

    const handleAlert = () => {
        swal("Sorry", "The feature is currently unavailable", "info");
    };

    const navItems = [
        { name: "Home", path: "/" },
        { name: "My Blog", path: "/blog" },
        { name: "My Project", path: "/project" },
        { name: "Achievements", path: "/achievements" }, // <-- Menu Baru
        { name: "About", path: "/about" }
    ];

    return (
        <>
            {/* --- Main Navbar Container --- */}
            <div className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
                    ? "bg-white/80 backdrop-blur-md shadow-md py-3"
                    : "bg-transparent py-4 md:py-5"
                }`}>
                <nav className="mx-auto max-w-7xl px-6 md:px-10 flex justify-between items-center">

                    {/* Logo */}
                    <div className="flex-shrink-0 relative z-50">
                        <h1 className={`text-xl md:text-2xl font-bold text-poppins tracking-tight transition-colors ${isScrolled ? "text-gray-900" : "text-black"
                            }`}>
                            Mono<span className="text-gray-500">Zikk</span>
                        </h1>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navItems.map((item) => {
                            const isActive = pathname === item.path;
                            return (
                                <Link
                                    key={item.name}
                                    href={item.path}
                                    className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 relative group overflow-hidden ${isActive
                                            ? "bg-gray-900 text-white shadow-md transform scale-105"
                                            : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                                        }`}
                                >
                                    <span className="relative z-10">{item.name}</span>
                                </Link>
                            );
                        })}
                    </div>

                    {/* Mobile Toggle Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsSidebarOpen(true)}
                            className={`p-1.5 transition-colors focus:outline-none rounded-full hover:bg-gray-100/50 ${isScrolled ? "text-gray-800" : "text-black"}`}
                        >
                            <DotsThreeCircleVertical size={35} weight="regular" />
                        </button>
                    </div>
                </nav>
            </div>

            {/* --- Mobile Sidebar Overlay (Backdrop) --- */}
            <div
                className={`fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${isSidebarOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
                onClick={() => setIsSidebarOpen(false)}
            />

            {/* --- Mobile Sidebar Drawer --- */}
            {/* FIX: Lebar diperkecil (max-w-[260px]) agar tidak kegedean */}
            <div className={`fixed top-0 right-0 h-full w-[75%] max-w-[260px] bg-white z-[70] shadow-2xl transform transition-transform duration-300 ease-out md:hidden ${isSidebarOpen ? "translate-x-0" : "translate-x-full"
                }`}>
                <div className="p-5 flex flex-col h-full relative">

                    {/* Decoration */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gray-50 rounded-bl-full -z-10"></div>

                    {/* Sidebar Header */}
                    <div className="flex justify-between items-center mb-6 mt-1">
                        <h2 className="text-base font-bold text-gray-800 tracking-wide uppercase">Menu</h2>
                        {/* FIX: Tombol close diperkecil & icon dipaksa ukurannya (!w-3 !h-3) */}
                        <button
                            onClick={() => setIsSidebarOpen(false)}
                            className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-red-500 transition-colors rounded-full bg-gray-50 hover:bg-red-50 border border-gray-100"
                        >
                            <FontAwesomeIcon icon={faTimes} className="!w-5 !h-5" />
                        </button>
                    </div>

                    {/* Mobile Menu Items */}
                    <ul className="flex flex-col space-y-2">
                        {navItems.map((item) => {
                            const isActive = pathname === item.path;
                            return (
                                <li key={item.name}>
                                    <Link
                                        href={item.path}
                                        className={`block w-full px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 border ${isActive
                                                ? "bg-gray-900 text-white border-gray-900 shadow-md"
                                                : "text-gray-600 border-transparent hover:bg-gray-50 hover:text-gray-900"
                                            }`}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>

                    {/* Sidebar Footer */}
                    <div className="mt-auto pt-6 border-t border-gray-100">
                        <p className="text-[10px] text-center text-gray-400 font-medium">
                            Designed by <span className="text-gray-600 font-bold">Zikra Zana</span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;