import { faGraduationCap, faLaptopCode, faLayerGroup, faLightbulb } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Content_About = () => {
    return (
        <>
            <div className="min-h-screen bg-bg_primary grid grid-cols-[1fr_1.8fr] ">
                <div className="flex justify-end items-end flex-col">
                    <img className="" src="profile/foto_diri.png" alt="" height={'2000px'} />
                </div>
                <div className="bg-gray-300 py-40 px-10 text-justify">
                    <h1 className="text-4xl border-b-2 w-fit">About Me</h1>
                    <p className="text-3xl font-bold">Zikra Zana</p>
                    <p className="text-xl font-light">Information System | Jambi University</p>
                    <p className="text-xl">
                        I am Zikra Zana, a student of the Information Systems program at Universitas Jambi
                        with a strong passion for web development. I am always eager to learn about the
                        latest technologies and trends in the industry, particularly in building innovative
                        and efficient digital solutions. Currently, I am focusing on mastering Laravel as my
                        primary backend framework while exploring modern technologies that enhance web application
                        performance and scalability.
                    </p>
                    <br />
                    <p>
                        Additionally, I have a keen interest in frontend development to create interactive
                        and responsive user experiences. With a solid understanding of web architecture,
                        databases, and good design principles, I strive to develop applications that are not
                        only functional but also aesthetically pleasing and user-friendly. I believe that continuous
                        learning and adaptability to technological advancements are key to making meaningful contributions
                        in the field of software development.
                    </p>

                    <div className="grid grid-cols-2 mt-10 bg-white p-5 rounded-2xl">
                        <div>
                            <div className="flex gap-2">
                                <FontAwesomeIcon icon={faLaptopCode} width={'20px'} />
                                <p>Role: Fullstack Developer</p>
                            </div>
                            <div className="flex gap-2">
                                <FontAwesomeIcon icon={faGraduationCap} width={'20px'} />
                                <p>Education: Jambi University</p>
                            </div>
                        </div>
                        <div>
                            <div className="flex gap-2">
                                <FontAwesomeIcon icon={faLightbulb} width={'20px'} />
                                <p>Learning: Machine Learning</p>
                            </div>
                            <div className="flex gap-2">
                                <FontAwesomeIcon icon={faLayerGroup} width={'20px'} />
                                <p>Other Skills: Figma, Canva, Guitar</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Content_About