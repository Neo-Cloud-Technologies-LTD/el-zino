import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import menuIcon from "/menu.svg";
import closeIcon from "/cancel.svg";

function Navbar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sectionIds = [
      "home",
      "services",
      "about",
      "project",
      "clients",
      "contact",
    ];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;
      let current = "home";
      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (section && scrollPosition >= section.offsetTop) {
          current = id;
        }
      });
      setActive(current);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
  document.body.style.overflow = menuOpen ? "hidden" : "auto";

  return () => {
    document.body.style.overflow = "auto";
  };
}, [menuOpen]);
  
  const handleLinkClick = () => {
    setMenuOpen(false);
  }

  return (
    <div>
      <header className="navbar">
        <div className="logo">
          <img src="/Elzino logo copy.png" alt="El-Zino Logo" />
        </div>

        <div className="nav-right">
          <nav>
            <a href="#home" className={active === "home" ? "active" : ""}>
              HOME
            </a>
            <a
              href="#services"
              className={active === "services" ? "active" : ""}
            >
              SERVICES
            </a>
            <a href="#about" className={active === "about" ? "active" : ""}>
              ABOUT
            </a>
            <a href="#project" className={active === "project" ? "active" : ""}>
              PROJECTS
            </a>
            <a href="#contact" className={active === "contact" ? "active" : ""}>
              CONTACT
            </a>
          </nav>

          <img
            src={menuOpen ? closeIcon : menuIcon}
            alt={menuOpen ? "Close Menu" : "Open Menu"}
            className="menu-icon"
            onClick={() => setMenuOpen(!menuOpen)}
          />
        </div>
      </header>

      {menuOpen && (
        <header className="mobile-menu">
          <a href="#home" onClick={handleLinkClick}>
            HOME
          </a>
          <a href="#services" onClick={handleLinkClick}>
            SERVICES
          </a>
          <a href="#about" onClick={handleLinkClick}>
            ABOUT
          </a>
          <a href="#project" onClick={handleLinkClick}>
            PROJECTS
          </a>
          <a href="#contact" onClick={handleLinkClick}>
            CONTACT
          </a>
        </header>
      )}
    </div>
  );
}

export default Navbar