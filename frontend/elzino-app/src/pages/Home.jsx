import "./Home.css";
import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import About from "../components/About.jsx";
import Services from "../components/Services.jsx";
import Metrics from "../components/Metrics.jsx";
import Projects from "../components/Projects.jsx";
import Clients from "../components/Clients.jsx";
import Contact from "../components/Contact.jsx";
import Footer from "../components/Footer.jsx";

function HomePage(){
    return(
        <>
            <Navbar />
            <Hero />
            <Services />
            <About />
            <Metrics />
            <Projects />
            <Clients />
            <Contact />
            <Footer />
        </>
    )
}

export default HomePage;