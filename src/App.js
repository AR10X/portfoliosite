import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';
import ProjectDetail from './pages/Projects/ProjectDetail';
import './assets/styles/mediaQuery.css';
import rotateDevice from './assets/images/projects/icons/rotate-device.svg';

function App() {
  return (
    <div>
      <div className="main-content">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="projects" element={<Projects />} />
              <Route path="projects/:projectName" element={<ProjectDetail />} /> {/* Dynamic project detail route */}
              <Route path="contact" element={<Contact />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
      <div className="rotate-message">
        <div className="rotate-icon">
          <img src={rotateDevice} alt="Rotate Phone" />
        </div>
        <p>Please rotate your device to landscape or view on a larger screen.</p>
      </div>
    </div>
  );
}

export default App;
