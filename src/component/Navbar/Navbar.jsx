import Link from "next/link"

const Navbar = () => {
    return (
        <div className="w-full fixed text-black">
            <nav className="p-5 flex justify-between">
                <div className="">
                    <h1 className="text-poppins font-bold">MonoZikk</h1>
                </div>
                <div className="">
                    <ul className="flex gap-5">
                        <li className="">
                            <Link href={"/"}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href={"/blog"}>
                                My Blog
                            </Link>
                        </li>
                        <li>
                            <Link href={"/my-project"}>
                                My Project
                            </Link>
                        </li>
                        <li>
                            <Link href={"/about"}>
                                About
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="divider">
                    <svg width="100" height="0" >
                    </svg>
                </div>
            </nav>
        </div>
    )
}

export default Navbar