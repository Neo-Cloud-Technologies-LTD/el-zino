import Project1 from "../assets/pexels-jky-2207922-3866807.webp";
import Project2 from "../assets/pexels-njeromin-12314551.webp";
import Project3 from "../assets/pexels-quentin-ecrepont-1148362-3818947.webp";
import Project4 from "../assets/pexels-rescriptt-rescriptt-101153900-18162494.webp";

import { Link } from "react-router-dom";
import "./projects.css";

const ProjectPage = () => {
  return (
    <section className="project-page" id="project">
      <div className="title">
        <h1>Our Projects</h1>
        <div className="underline"></div>
      </div>
      
      <div className="project-imgs">
        <Link to="/project/1" className="project-card">
          <img src={Project1} alt="Project 1" />
          <div className="overlay">
            <h3>Project One</h3>
          </div>
        </Link>

        <Link to="/project/2" className="project-card">
          <img src={Project2} alt="Project 2" />
          <div className="overlay">
            <h3>Project Two</h3>
          </div>
        </Link>

        <Link to="/project/3" className="project-card">
          <img src={Project3} alt="Project 3" />
          <div className="overlay">
            <h3>Project Three</h3>
          </div>
        </Link>

        <Link to="/project/4" className="project-card">
          <img src={Project4} alt="Project 4" />
          <div className="overlay">
            <h3>Project Four</h3>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default ProjectPage;
