import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectInfo from './components/ProjectInfo';
import Footer from './components/Footer';

import { useState, useEffect } from "react";

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
        <ProjectInfo />
        <Footer />
      </div>
    </>
  );
};

export default App;
