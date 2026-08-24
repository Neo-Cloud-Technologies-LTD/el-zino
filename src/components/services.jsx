import { useState, useRef, useEffect } from "react";
import "./services.css";
import residential from "../assets/residential.png";
import commercial from "../assets/commercial.png";
import renovation from "../assets/renovation.png";

function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const servicesRef = useRef(null);
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
    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }
    return () => observer.disconnect();
  }, []);
  return (
    <>
      <section className="services" id="services" >
        <h1>OUR SERVICES</h1>
        <div className="underline"></div>

        <div className="service-container">
          <div className={`service-card ${isVisible? "animate": ""}`} ref={servicesRef}>
            <img
              src={residential}
              alt="Residential Construction"
            />
            <div className="text-container">
              <h3>
                Residential <br /> Construction
              </h3>
              <p>
                At EL-ZINO, we specialize in building beautiful and functional
                homes that meet the needs of families. Our team works closely
                with clients to ensure every detail is perfect.
              </p>
            </div>
          </div>

          <div className={`service-card ${isVisible? "animate": ""}`} ref={servicesRef}>
            <img src={commercial} alt="Commercial Development" />
            <div className="text-container">
              <h3>Commercial Development</h3>
              <p>
                We offer comprehensive commercial construction services, from
                office buildings to retail spaces. Our focus is on delivering
                quality structures that enhance your business.
              </p>
            </div>
          </div>

          <div className={`service-card ${isVisible? "animate": ""}`} ref={servicesRef}>
            <img
              src={renovation}
              alt="Renovation and Remodeling"
            />
            <div className="text-container">
              <h3>Renovation and Remodeling</h3>
              <p>
                Our renovation services breathe new life into your existing
                spaces. Whether it's a kitchen remodel or a complete home
                renovation, we bring your vision to reality.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ServicesSection;
