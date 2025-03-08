const Footer = () => {
    return (
        <>
            <div className=" bg-gray-900 px-23 pt-15">
                <div className="grid grid-rows-2">
                    <div className="grid grid-cols-2 gap-13">
                        <div className="text-white grid grid-cols-[0.5fr_1fr] gap-4">
                            <div className="flex justify-center items-center">
                                <img src="profile/foto_diri.jpg" alt="" width={'140px'} className="rounded-full" />
                            </div>
                            <div className="flex flex-col justify-center gap-4 px-3">
                                <p className="text-md">Zikra Zana is a web developer passionate about exploring the latest technologies and committed to creating innovative and efficient digital solutions.</p>
                                <p className="text-md">Email: monozikk13@gmail.com</p>
                            </div>
                        </div>
                        <div className="text-white px-10 mx-5">
                            <h3 className="text-2xl font-bold mb-4">Lets Connect!</h3>
                            <button className="btn border-2 border-white px-4 py-2 rounded-full hover:bg-white hover:text-black text-md">Email Me</button>
                        </div>
                    </div>
                    <div className="text-white p-5 flex justify-center items-end">
                        <small>© 2024 Zikra Zana. All Rights Reserved</small>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer