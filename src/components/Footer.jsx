import React from 'react';
import bhtDark from '../assets/bhtLogo_dark.png';
import bhtLight from '../assets/bhtLogo_light.png';

const Footer = ({ darkMode }) => {
  return (
    <footer className="w-full py-2 px-6 bg-[var(--background)] text-[var(--text)] font-quicksand selection:bg-[var(--accent)]">
      <div className="max-w-4xl mx-auto text-center">
        © 2025 Julian Gruber
        <img
          src={darkMode ? bhtLight : bhtDark}
          alt="BHT Logo"
          className="h-14 w-auto mx-auto inline select-none"
        />
      </div>
    </footer>
  );
};

export default Footer;
