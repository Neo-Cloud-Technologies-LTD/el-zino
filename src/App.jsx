import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Services from "./components/services";
import About from "./components/about";
import ProjectPage from "./components/projects";
import ProjectDetail from "./components/ProjectDetail";
import Clients from "./components/clients";
import Contact from "./components/contact";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <ProjectPage />
      <Clients />
      <Contact />
    </>
  );
}

export default App;
