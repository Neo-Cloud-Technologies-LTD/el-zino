import "./about.css";
import aboutImage from "../assets/pexels-sirokad-37687676.jpg";

function AboutSection(){
    return(
        <section className="about">
            <div className="about-content">
                <div className="about-text">
                    <h1>ABOUT EL-ZINO</h1>
                    <div className="heading-underline"></div>
                    <p>El Zino Projects is a forward-thinking general contracting company dedicated to delivering high-quality construction solutions across residential, commercial and industrial sectors. With a team of skilled professionals and a commitment to excellence, we bring projects to life with precision, efficiency and innovation.</p>
                </div>

                <div className="about-img">
                    <img src={aboutImage} alt="construction site" />
                </div>
            </div>
            <div className="about-metrics">
                <div className="metric">
                    <h2>2023</h2>
                    <p>Year Established</p>
                </div>

                <div className="metric">
                    <h2>150</h2>
                    <p>Projects Completed</p>
                </div>

                <div className="metric">
                    <h2>200</h2>
                    <p>Contractors Appointed</p>
                </div>

                <div className="metric">
                    <h2>15</h2>
                    <p>Awards Won</p>
                </div>
            </div>
        </section>  
    )
}

export default AboutSection;