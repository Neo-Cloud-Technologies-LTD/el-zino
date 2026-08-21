import "./hero.css";
import heroVideo from "../assets/hero.mp4"

function HeroSection() {
  return (
    <>
        <section className="hero">
          <video className="background-video" autoPlay muted loop playsInline>
            <source
              src={heroVideo}
              type="video/mp4"
            />
          </video>

          <div className="overlay"></div>

          <div className="hero-content">
            <h1>
              EXCELLENCE IN
              <br />
              CONSTRUCTION
              <br />
              AND ENGINEERING
              <br />
              SOLUTIONS
            </h1>

            <div className="arrow">↓</div>
          </div>
        </section>
    </>
  );
}

export default HeroSection;
