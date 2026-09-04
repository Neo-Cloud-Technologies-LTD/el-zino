import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import menuIcon from "/menu.svg";
import closeIcon from "/cancel.svg";

function Nav() {
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
  };

  const scrollWhenReady = (selector) => {
    let attempts = 0;

    const scrollToTarget = (behavior = "smooth") => {
      const target = document.querySelector(selector);
      if (!target) return false;

      const navbarHeight =
        document.querySelector(".navbar")?.offsetHeight || 100;

      const targetPosition =
        target.getBoundingClientRect().top + window.scrollY - navbarHeight;

      window.scrollTo({
        top: targetPosition,
        behavior,
      });

      return true;
    };

    const check = () => {
      const found = scrollToTarget("smooth");

      if (!found && attempts < 30) {
        attempts += 1;
        setTimeout(check, 100);
        return;
      }

      // Correct again after layout/images settle.
      setTimeout(() => scrollToTarget("auto"), 400);
      setTimeout(() => scrollToTarget("auto"), 900);
    };

    setTimeout(check, 100);
  };

  return (
    <div>
      <header className="navbar">
        <div className="logo">
          <img src="/Elzino logo copy.png" alt="El-Zino Logo" />
        </div>

        <div className="nav-right">
          <nav>
            <Link
              to="/"
              className={active === "home" ? "active" : ""}
              onClick={() => scrollWhenReady("#home")}
            >
              HOME
            </Link>
            <Link
              to="/"
              className={active === "services" ? "active" : ""}
              onClick={() => scrollWhenReady("#services")}
            >
              SERVICES
            </Link>
            <Link
              to="/"
              className={active === "about" ? "active" : ""}
              onClick={() => scrollWhenReady("#about")}
            >
              ABOUT
            </Link>
            <Link
              to="/"
              className={active === "project" ? "active" : ""}
              onClick={() => scrollWhenReady("#project")}
            >
              PROJECTS
            </Link>
            <Link
              to="/"
              className={active === "contact" ? "active" : ""}
              onClick={() => scrollWhenReady("#contact")}
            >
              CONTACT
            </Link>
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
        <div className="mobile-menu">
          <Link
            to="/"
            onClick={() => {
              handleLinkClick();
              scrollWhenReady("#home");
            }}
          >
            HOME
          </Link>
          <Link
            to="/"
            onClick={() => {
              handleLinkClick();
              scrollWhenReady("#services");
            }}
          >
            SERVICES
          </Link>
          <Link
            to="/"
            onClick={() => {
              handleLinkClick();
              scrollWhenReady("#about");
            }}
          >
            ABOUT
          </Link>
          <Link
            to="/"
            onClick={() => {
              handleLinkClick();
              scrollWhenReady("#project");
            }}
          >
            PROJECTS
          </Link>
          <Link
            to="/"
            onClick={() => {
              handleLinkClick();
              scrollWhenReady("#contact");
            }}
          >
            CONTACT
          </Link>
        </div>
      )}
    </div>
  );
}

export default Nav;
