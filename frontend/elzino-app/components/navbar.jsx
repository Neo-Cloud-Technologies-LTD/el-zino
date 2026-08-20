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
<li className='list'>  <a href="/" className="active">Home</a></li>
  <li className='list'><a href="/services" className="active">Services</a></li>
  <li className='list'><a href="/about" className="active">About</a></li>
  <li className='list'> <a href="/projects" className="active">Projects</a></li>
  <li className='list'> <a href="/contact" className="active">Contact</a></li>
</nav>
</header>
    </div>
    );
}

export default Navbar;
