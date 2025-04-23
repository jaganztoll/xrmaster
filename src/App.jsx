import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectInfo from './components/ProjectInfo';
import Footer from './components/Footer';

import { useState, useEffect } from "react";
import Concept from './components/Concept';
import Results from './components/Results';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="bg-[var(--background)] text-[var(--text)]">
        <Hero darkMode={darkMode} setDarkMode={setDarkMode} />
        <ProjectInfo darkMode={darkMode} setDarkMode={setDarkMode} />
        <Concept darkMode={darkMode} setDarkMode={setDarkMode} />
        <Results />
        <Footer />
      </div>
    </>
  );
};

export default App;
