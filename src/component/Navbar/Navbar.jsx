"use client"
import { useState, useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { DotsThreeCircleVertical } from "@phosphor-icons/react";



const Navbar = () => {
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

    return (
        <>
            <div className={`w-full fixed top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}`}>
                <nav className="p-5 flex justify-between">
                    <div className="lg:ms-10">
                        <h1 className="text-poppins max-md:text-xl font-bold">MonoZikk</h1>
                    </div>
                    <div>
                        {/* Desktop */}
                        <ul className="flex gap-5 max-md:hidden">
                            <li>
                                <Link href={"/"} className="border-b-2 w-full">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href={"/blog"}>My Blog</Link>
                            </li>
                            <li>
                                <Link href={"/my-project"}>My Project</Link>
                            </li>
                            <li>
                                <Link href={"/about"}>About</Link>
                            </li>
                        </ul>


                    </div>
                    <div className="md:me-10">
                        <div className="md:hidden flex items-center justify-center me-1 fixed right-3 top-3">
                            <DotsThreeCircleVertical size={45} weight="light" className="cursor-pointer" onClick={() => setIsSidebarOpen(!isSidebarOpen)} />
                        </div>
                        <svg className="max-md:hidden" width="100" height="0"></svg>
                    </div>
                </nav>
            </div>
            <div className={`flex justify-end md:hidden `}>
                {/* Mobile & Tablet */}
                <ul className={`gap-5 mt-20 fixed z-[999] transition-all duration-300 transform ${isSidebarOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}>
                    <li className="py-1">
                        <Link href={"/"}>
                            <button className="btn border-2 border-black px-2 py-1 w-32 me-5 rounded-full hover:bg-white hover:text-black text-md">Home</button>
                        </Link>
                    </li>
                    <li className="py-1">
                        <Link href={"/blog"}>
                            <button className="btn border-2 border-black px-2 py-1 w-32 rounded-full hover:bg-white hover:text-black text-md">My Blog</button>
                        </Link>
                    </li>
                    <li className="py-1">
                        <Link href={"/my-project"}>
                            <button className="btn border-2 border-black px-2 py-1 w-32 rounded-full hover:bg-white hover:text-black text-md">My Project</button>
                        </Link>
                    </li>
                    <li className="py-1">
                        <Link href={"/about"}>
                            <button className="btn border-2 border-black px-2 py-1 w-32 rounded-full hover:bg-white hover:text-black text-md">About</button>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Navbar;
