import { useState, useRef, useEffect } from "react";
import "./about.css";
import aboutImage from "../assets/about-image.webp";

function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
      },
    );
    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section className="about" id="about">
      <div className="about-content">
        <div className={`about-text ${isVisible? "animate": ""}`} ref={aboutRef}>
          <h1>
            ABOUT EL-
            <br />
            ZINO
          </h1>
          <div className="heading-underline"></div>
          <p>
            El Zino Projects is a forward-thinking general contracting company
            dedicated to delivering high-quality construction solutions across
            residential, commercial and industrial sectors. With a team of
            skilled professionals and a commitment to excellence, we bring
            projects to life with precision, efficiency and innovation.
          </p>
        </div>

        <div className="about-img">
          <img src={aboutImage} alt="construction site" />
        </div>
      </div>

      <div className="about-metrics">
        <div className="overlay"></div>
        <div className="metric" id="first">
          <h2>2023</h2>
          <p>
            Year <br /> Established
          </p>
        </div>

        <div className="metric" id="second">
          <h2>150</h2>
          <p>
            Projects <br /> Completed
          </p>
        </div>

        <div className="metric" id="third">
          <h2>200</h2>
          <p>
            Contractors <br /> Appointed
          </p>
        </div>

        <div className="metric" id="fourth">
          <h2>15</h2>
          <p>
            Awards <br /> Won
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
