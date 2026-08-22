import { BrowserRouter, Routes, Route } from "react-router-dom";
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
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <Services />
              <About />
              <ProjectPage />
              <Clients />
              <Contact />
            </>
          }
        />

        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
  );
}

export default App;
