import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Services from "./components/services";
import About from "./components/about";
import ProjectPage from "./components/projects";
import ProjectDetail from "./components/ProjectDetail";
import Clients from "./components/clients";
import Contact from "./components/contact";
import heroVideo from "./assets/hero.mp4";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="app">
            <video className="video" autoPlay muted loop playsInline>
              <source src={heroVideo} type="video/mp4" />
            </video>

            <div className="content">
              <Navbar />
              <Hero />
              <Services />
              <About />
              <ProjectPage />
              <Clients />
              <Contact />
            </div>
          </div>
        }
      />

      <Route path="/project/:id" element={<ProjectDetail />} />
    </Routes>
  );
}

export default App;
