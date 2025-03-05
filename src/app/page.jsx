import Navbar from "@/component/Navbar/Navbar";
import { faFacebook, faInstagram, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";


export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex flex-col justify-between">
        <div className="grid grid-cols-[1.5fr_1fr] p-30">
          <div className=" flex justify-center items-center flex-col">
            <div className="p-10 m-10">
              <p className="font-bold text-poppins text-xl">Hello, I'm Zikra Zana</p>
              <p className="text-4xl font-bold mb-1">Web Developer</p>
              <p className="text-md">I am a student of the Information Systems program at Universitas Jambi with a strong passion for web development. I am always eager to learn about the latest technologies and trends in the industry, especially in building innovative and efficient digital solutions.</p>
            </div>
          </div>
          <div className="p-10 flex justify-center items-center">
            <img src="foto_diri.jpg" className="rounded-full" alt="" width={"300px"} />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex bg-slate-400 p-5 px-30 gap-8 rounded-t-6xl">
            <FontAwesomeIcon icon={faFacebook} width={'50px'} />
            <FontAwesomeIcon icon={faInstagram} width={'50px'} />
            <FontAwesomeIcon icon={faGithub} width={'50px'} />
            <FontAwesomeIcon icon={faLinkedin} width={'50px'} />
          </div>
        </div>
      </div>
    </div>
  );
}
