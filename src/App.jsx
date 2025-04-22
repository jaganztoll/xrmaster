import Footer from './components/Footer';
import Hero from './components/Hero';
import ProjectInfo from './components/ProjectInfo';
import { HiSun, HiMoon } from "react-icons/hi2";

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
    <div className="h-screen flex flex-col items-center bg-[var(--background)] text-[var(--text)]">
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2.5 px-2.5 rounded-full focus:outline-none focus:shadow-outline"
      >
        {darkMode ? <HiSun style={{ fontSize: '2em'}} className="inline-block align-middle" /> : <HiMoon style={{ fontSize: '2em'}} className="inline-block align-middle" />}
      </button>
      <Hero />
      <ProjectInfo />
      <Footer />
    </div>
  );
};

export default App;