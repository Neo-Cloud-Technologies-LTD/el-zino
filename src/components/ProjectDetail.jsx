import { useState, useRef, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import slide1 from "../assets/pexels-jky-2207922-3866807.webp";
import slide2 from "../assets/pexels-njeromin-12314551.webp";
import slide3 from "../assets/pexels-quentin-ecrepont-1148362-3818947.webp";
import slide4 from "../assets/pexels-rescriptt-rescriptt-101153900-18162494.webp";
import "./projectDetailstyle.css";

const slides = [slide1, slide2, slide3, slide4];

const getProjectIndex = (id) => {
  const projectNumber = Number(id);
  if (!Number.isFinite(projectNumber)) return 0;
  return Math.max(0, Math.min(slides.length - 1, projectNumber - 1));
};

const ProjectDetail = () => {
  const { id } = useParams();
  const [current, setCurrent] = useState(() => getProjectIndex(id));
  const sliderRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [id]);

  useEffect(() => {
    setCurrent(getProjectIndex(id));
  }, [id]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    slider.scrollTo({
      left: slider.clientWidth * current,
      behavior: "smooth",
    });
  }, [current]);

  return (
    <main className="project-detail-page">
      <section className="project-title-header">
        <div className="project-title-inner">
          <h1>Project {id}</h1>
          <span></span>
        </div>
      </section>

      <section className="project-detail-content">
        <article className="project-detail-text">
          <p>
            This project showcases El-Zino's commitment to quality construction,
            thoughtful design, and exceptional workmanship. Every stage of the
            project was carefully planned and executed to create a structure
            that combines functionality, durability, and modern aesthetics.
          </p>

          <p>
            From the initial groundwork to the finishing details, our team
            focused on maintaining high construction standards while ensuring
            that the project stayed on schedule and met the required
            specifications. The result is a well-crafted space designed to serve
            its purpose while standing the test of time.
          </p>
          <Link
            className="back-projects-btn"
            to="/"
            onClick={() => {
              setTimeout(() => {
                document.querySelector("#home")?.scrollIntoView({
                  behavior: "smooth",
                });
              }, 100);
            }}
          >
            Back to Home
          </Link>
        </article>

        <div className="project-detail-slider">
          <div className="slider-window" ref={sliderRef}>
            {slides.map((src, index) => (
              <div className="slide" key={index}>
                <img src={src} alt={`Project ${id} slide ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="project-footer">
        <p>© 2026 by EL-Zino Construction. All rights reserved.</p>

        <div className="footer-socials">
          <a href="/" aria-label="Facebook">
            f
          </a>
          <a href="/" aria-label="LinkedIn">
            in
          </a>
        </div>
      </footer>
    </main>
  );
};

export default ProjectDetail;
