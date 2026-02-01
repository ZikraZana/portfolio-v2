import Content_Achievements from "@/component/Achievements/Content_Achievements";
import Footer from "@/component/Footer/Footer";
import Navbar from "@/component/Navbar/Navbar";

export const metadata = {
    title: "Achievements & Certifications",
    description: "A collection of Zikra Zana's achievements, competitions, and certifications.",
};

export default function Achievements() {
    return (
        <div>
            <Navbar />
            <Content_Achievements />
            <Footer />
        </div>
    );
}