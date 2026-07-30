import './navbar.css';

function Navbar() {
    const links = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];
    return (
         <div>
      <header>
 <a href="El-Zino/src/App.jsx" className='logo'> <img src="/Elzino logo copy.png" alt="El-Zino Logo"className="logo-box"/></a>
  <nav>
  <a href="/" className="active">Home</a>
  <a href="/services">Services</a>
  <a href="/about">About</a>
  <a href="/projects">Projects</a>
  <a href="/contact">Contact</a>
</nav>
</header>
    </div>
    );
}

export default Navbar;
