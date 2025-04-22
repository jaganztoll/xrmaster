import React from 'react';
import wavesLight from '../assets/waves.svg';
import wavesDark from '../assets/waves_white.svg';

const Hero = ({ darkMode }) => {
  return (
    <section className="relative h-screen w-full" style={{ fontFamily: 'var(--font-quicksand)' }}>
      <div className="relative z-10 h-full flex flex-col items-center justify-start pt-40">
        <div className="bg-primary p-6 rounded-xl max-w-4xl text-center">
          <h2 className="font-regular text-3xl">
            Konzeption & prototypische Entwicklung einer Mixed Reality Version der
            ZDFmediathek im Ansatz von Spatial User Interfaces
          </h2>
          <p className="text-sm mt-10">Julian Gruber</p>
        </div>
      </div>

      {/* Fixiertes Hintergrundbild */}
      <img
        src={darkMode ? wavesDark : wavesLight}
        alt="Waves"
        className="fixed bottom-0 left-0 w-full z-0 pointer-events-none"
      />
    </section>
  );
};

export default Hero;
