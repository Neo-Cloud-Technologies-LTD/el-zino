import "./navbar.css";

function Navbar() {
  const links = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];
  return (
    <div>
      <header className="navbar">
        <div className="logo">
          <img src="/Elzino logo copy.png" alt="El-Zino Logo"/>
        </div>

        <nav>
          <a href="#" className="active">
            HOME
          </a>
          <a href="#">SERVICES</a>
          <a href="#">ABOUT</a>
          <a href="#">PROJECTS</a>
          <a href="#">CONTACT</a>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
