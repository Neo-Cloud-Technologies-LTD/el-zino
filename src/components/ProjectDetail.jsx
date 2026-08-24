import { useState, useRef, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import slide1 from "../assets/pexels-jky-2207922-3866807.jpg";
import slide2 from "../assets/pexels-njeromin-12314551.jpg";
import slide3 from "../assets/pexels-quentin-ecrepont-1148362-3818947.jpg";
import slide4 from "../assets/pexels-rescriptt-rescriptt-101153900-18162494.jpg";
import "./projectDetailstyle.css";

const slides = [slide1, slide2, slide3, slide4];

const ProjectDetail = () => {
  const { id } = useParams();
  const [current, setCurrent] = useState(() =>
    Math.max(0, Math.min(slides.length - 1, Number(id) - 1)),
  );
  const sliderRef = useRef(null);

  useEffect(() => {
    setCurrent(Math.max(0, Math.min(slides.length - 1, Number(id) - 1)));
  }, [id]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const slide = sliderRef.current?.children[current];
    slide?.scrollIntoView({ behavior: "smooth", inline: "start" });
  }, [current]);

  return (
    <div className="project-detail-page">
      <section className="detail-header-card">
        <div>
          <h2>Project {id}</h2>
        </div>
        <div className="detail-header-copy">
          <p>Project details and gallery</p>
        </div>
      </section>

      <div className="detail-text">
        <h3>Project overview</h3>
        <p>
          This project page gives a quick overview of the work completed for
          Project {id}. Each detail page includes a short project summary on the
          left and a swipeable gallery on the right.
        </p>
        <p>
          The gallery automatically advances every few seconds and remains
          swipeable on touch devices.
        </p>
        <div className="btn">
          <Link to="/">Back to projects</Link>
        </div>
      </div>

      <div className="detail-slider">
        <div className="slider-window" ref={sliderRef}>
          {slides.map((src, index) => (
            <div className="slide" key={index}>
              <img src={src} alt={`Project ${id} slide ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
