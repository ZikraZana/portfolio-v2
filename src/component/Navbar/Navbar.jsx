"use client"
import { useState, useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
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

    const handleAlert = () => {
        swal("Sorry", "The feature is currently unavailable", "info");
    };

    return (
        <>
            <div className={`w-full fixed top-0 z-50`}>
                <nav className={`p-5 flex justify-between transition-all duration-300 ${isScrolled ? "backdrop-blur-sm shadow-md" : "bg-transparent"}`}>
                    <div className="lg:ms-10">
                        <h1 className="text-poppins max-md:text-xl font-bold">MonoZikk</h1>
                    </div>
                    <div>
                        {/* Desktop */}
                        <ul className="flex gap-5 max-md:hidden">
                            {[
                                { name: "Home", path: "/" },
                                { name: "My Blog", path: "/blog" },
                                { name: "My Project", path: "/project" },
                                { name: "About", path: "/about" }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link href={item.path === '/blog' ? '#' : item.path} onClick={item.path === '/blog' ? handleAlert : undefined} className={`${pathname === item.path ? 'border-b-2 w-full' : ''} `}>
                                        {item.name}
                                    </Link>
                                </li>
                            ))}

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
                    {[
                        { name: "Home", path: "/" },
                        { name: "My Blog", path: "/blog" },
                        { name: "My Project", path: "/project" },
                        { name: "About", path: "/about" }
                    ].map((item) => (
                        <li key={item.name} className="py-1 ">
                            <Link href={item.path === "/blog" ? '#' : item.path} onClick={item.path === "/blog" ? handleAlert : undefined} >
                                <button className="btn border-2 border-black px-2 py-1 w-24 me-5 backdrop-blur-sm rounded-full hover:bg-white hover:text-black text-sm">{item.name}</button>
                            </Link>
                        </li>))}
                </ul>
            </div>
        </>
    );
};

export default Navbar;
