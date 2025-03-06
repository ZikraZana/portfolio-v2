
import { faFacebook, faInstagram, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

const Content_Home = () => {
    return (
        <>
            <div className="min-h-screen flex flex-col justify-between bg-bg_primary">
                <div className="grid grid-cols-[1.5fr_1fr] p-30 mt-9">
                    <div className=" flex justify-center items-center flex-col">
                        <div className="p-10 m-10">
                            <p className="font-bold text-poppins text-xl mb-3">Hello, I'm Zikra Zana</p>
                            <p className="text-4xl font-bold text-poppins mb-3">Web Developer</p>
                            <p className="text-md">I am a student of the Information Systems program at Universitas Jambi with a strong passion for web development. I am always eager to learn about the latest technologies and trends in the industry, especially in building innovative and efficient digital solutions.</p>
                        </div>
                    </div>
                    <div className="p-10 flex justify-center items-center">
                        <img
                            src="foto_diri.jpg"
                            className="rounded-full border-4 shadow-[0px_0px_15px_10px_rgba(255,255,255,0.5)] border-behind_img"
                            alt=""
                            width={"300px"}
                        />

                    </div>
                </div>
                <div className="flex justify-center ">
                    <div className="flex p-2 px-20 gap-8 bg-behind_sosmed rounded-t-6xl">
                        <FontAwesomeIcon icon={faFacebook} width={'30px'} />
                        <FontAwesomeIcon icon={faInstagram} width={'30px'} />
                        <FontAwesomeIcon icon={faGithub} width={'30px'} />
                        <FontAwesomeIcon icon={faLinkedin} width={'30px'} />
                    </div>
                </div>
            </div>
            <div className="bg-behind_sosmed px-40 min-h-screen">
                <div className="mx-10 py-15">
                    <p className="text-3xl font-bold border-b-2 w-fit text-poppins">MySkills</p>
                </div>
                <div className="mx-10 py-15">
                    
                </div>
            </div>
        </>
    )
}

export default Content_Home