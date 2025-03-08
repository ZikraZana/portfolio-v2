"use client"
import { useState, useEffect } from "react";
import Link from "next/link";

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
        <div className={`w-full fixed top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}`}>
            <nav className="p-5 flex justify-between">
                <div className="ms-10">
                    <h1 className="text-poppins font-bold">MonoZikk</h1>
                </div>
                <div>
                    <ul className="flex gap-5">
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
                <div className="me-10">
                    <svg width="100" height="0"></svg>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
