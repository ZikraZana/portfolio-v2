"use client"
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Footer = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        const emailInput = form.current?.querySelector('input[name="email"]');
        const emailValue = emailInput?.value || '';

        if (!emailValue.endsWith('@gmail.com')) {
            document.getElementById("my_modal_email").close();
            swal("Sorry", "Only @gmail.com email addresses are allowed", "warning");
            return;
        }
        emailjs.sendForm("service_nsn6hz7", "template_2snjkpg", form.current, "WYBkHnumXAmSr1apC")
            .then(() => {
                if (form.current) {
                    form.current.reset();
                }
                swal("Success", "Email sent successfully!", "success");
                document.getElementById("my_modal_email").close(); // tutup modal setelah kirim
            }, (error) => {
                alert("Failed to send email: " + error.text);
            });
    };

    return (
        <>
        
            <div className=" bg-gray-900 sm:px-23 pt-15">
                <div className="">
                    <div className="grid md:grid-cols-2 gap-13">
                        <div className="text-white grid md:grid-cols-[0.5fr_1fr] gap-4">
                            <div className="flex justify-center items-center">
                                <img src="profile/foto_diri.jpg" alt="" width={'140px'} className="rounded-full" />
                            </div>
                            <div className="flex flex-col justify-center max-md:text-center gap-4 px-3">
                                <p className="text-md max-md:mt-3">Zikra Zana is a web developer and tech enthusiast committed to digital transformation. Through continuous learning and innovation, he strives to build scalable applications that empower communities.</p>
                                <p className="text-md">Email: monozikk13@gmail.com</p>
                            </div>
                        </div>
                        <div className="text-white px-10 mx-5">
                            <h3 className="text-2xl font-bold max-md:text-center mb-4">Lets Connect!</h3>
                            <div className="max-md:flex max-md:justify-center max-md:gap-7">
                                <button className="btn border-2 border-white px-4 py-2 rounded-full hover:bg-white hover:text-black text-md" onClick={() => document.getElementById('my_modal_email').showModal()}>Email Me</button>
                                <dialog id="my_modal_email" className="modal">
                                    <div className="modal-box text-black">
                                        <h3 className="font-bold text-lg mb-3">Send Email to me!</h3>
                                        <form ref={form} onSubmit={sendEmail}>
                                            <input type="text" placeholder="Name" id="name" name="name" className="w-full p-2 border border-gray-300 rounded-lg mb-3" />
                                            <input type="text" placeholder="Email" id="email" name="email" className="w-full p-2 border border-gray-300 rounded-lg mb-3" />
                                            <input type="text" placeholder="Subject" id="subject" name="subject" className="w-full p-2 border border-gray-300 rounded-lg mb-3" />
                                            <textarea className="w-full h-32 p-2 rounded-lg border border-gray-300 focus:outline-none focus:border-gray-500" name="message" id="message" placeholder="Write your message here..."></textarea>                                        <div className="modal-action">
                                                <form method="dialog">
                                                    {/* if there is a button in form, it will close the modal */}
                                                    <button className="btn bg-download_cv hover:bg-gray-900 text-white px-6 py-2 rounded-lg">Close</button>
                                                </form>
                                                {/* if there is a button in form, it will close the modal */}
                                                <button type="submit" className="btn bg-blue-800 hover:bg-blue-700 text-white px-6 py-2 rounded-lg">Submit</button>
                                            </div>
                                        </form>
                                    </div>
                                </dialog>
                                <button className="btn border-2 border-white px-4 py-2 rounded-full hover:bg-white hover:text-black text-md lg:hidden">See Another Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="text-white p-5 mt-20 flex justify-center items-end">
                        <small>© 2024 Zikra Zana. All Rights Reserved</small>
                    </div>
                </div >
            </div >
        </>
    )
}

export default Footer