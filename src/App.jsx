import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Education,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        {/* Subtle global tech grid behind all content */}
        <div className="pointer-events-none fixed inset-0 bg-grid opacity-[0.04] z-0" />

        <div className="relative">
          <Navbar />
          <Hero />
        </div>

        <About />
        <Experience />
        <Education />
        <Tech />
        <Works />

        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
