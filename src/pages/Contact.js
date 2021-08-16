import Connect from "../components/Connect"
import InputBox from "../components/InputBox"
import {FaPhoneSquareAlt, FaMailBulk} from "react-icons/fa"

const Contact = () => {
    return (
        <>
            <section className="contact-page">
                <h1>Connect with Me</h1>
                <div className="con-form">
                    <InputBox type="text" place="Enter Your Name"/>
                    <InputBox type="email" place="Enter Your Email"/>
                    <InputBox type="text" place="Enter Subject"/>
                    <textarea placeholder="Enter Your Message" className="txtar"></textarea>
                    <button className="send-btn">Send Message</button>
                </div>
                <div className="con-box">
                    <Connect url="tel:0772618379" icon={<FaPhoneSquareAlt/>} text="+94-77-261-83379"/>
                    <Connect url="mailto:ranasinghemuthumali@gmail.com" icon={<FaMailBulk/>} text="ranasinghemuthumali@gmail.com"/>
                </div>
            </section>
        </>
    )
}

export default Contact