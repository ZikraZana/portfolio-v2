"use client"
import { useState, useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";


const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

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
                        <div className="md:hidden flex items-center justify-center">
                            <FontAwesomeIcon icon={faBars} width={'30px'} className="cursor-pointer" />
                        </div>
                        <svg className="max-md:hidden" width="100" height="0"></svg>
                    </div>
                </nav>
            </div>
            <div className="flex justify-end md:hidden">
                {/* Mobile & Tablet */}
                <ul className="gap-5 absolute pt-20">
                    <li>
                        <Link href={"/"}>
                            <button className="btn border-2 border-white px-2 py-1 pe-10 rounded-full hover:bg-white hover:text-black text-md">Home</button>
                        </Link>
                    </li>
                    <li>
                        <Link href={"/blog"}>
                            <button className="btn border-2 border-white px-2 py-1 pe-10 rounded-full hover:bg-white hover:text-black text-md">My Blog</button>
                        </Link>
                    </li>
                    <li>
                        <Link href={"/my-project"}>
                            <button className="btn border-2 border-white px-2 py-1 pe-10 rounded-full hover:bg-white hover:text-black text-md">My Project</button>
                        </Link>
                    </li>
                    <li>
                        <Link href={"/about"}>
                            <button className="btn border-2 border-white px-2 py-1 pe-10 rounded-full hover:bg-white hover:text-black text-md">About</button>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Navbar;
