
import SocialBtn from "../components/SocialBtn"
import NormalBtn from "../components/NormalBtn"
import {FaTwitter, FaGithub, FaLinkedinIn} from "react-icons/fa"

const Home = () => {
    return (
        <>
            <section className="home-page">
                <h1>Muthumali Ranasinghe</h1>
                {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> */}
                <p>Perseverance is the hard work you put in after you've exhausted the hard work you've previously put in.
One can create a better world by realizing one's own potential and having faith in one's own abilities.</p>

                <div className="download">
                    <NormalBtn url="https://drive.google.com/drive/folders/1-K58-thM1ICHR-98Gql4e3--Ux-_PR7u?usp=sharing" text="Download Resume" class="cv-btn"/>
                    <NormalBtn url="https://drive.google.com/drive/folders/1AqTc9kCiebRQnJDYw-9-wzhyYcqj1ETo?usp=sharing" text="Download Cover Letter" class="cover-btn"/>
                </div>

                <div className="social">
                    <SocialBtn url="https://twitter.com" type={<FaTwitter/>}/>
                    <SocialBtn url="https://github.com" type={<FaGithub/>}/>
                    <SocialBtn url="https://linkedin.com" type={<FaLinkedinIn/>}/>
                </div>
            </section>
        </>
    )
}

export default Home