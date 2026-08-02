import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProjectPage from "./components/projects.jsx";
import ProjectDetail from "./components/ProjectDetail.jsx";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProjectPage />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
