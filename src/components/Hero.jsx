import React from 'react';
import wavesLight from '../assets/waves.svg';
import wavesDark from '../assets/waveswhite.svg';

const Hero = ({ darkMode }) => {
  return (
    <section
      className="h-screen w-full bg-no-repeat bg-bottom bg-fixed"
      style={{
        fontFamily: 'var(--font-quicksand)',
        backgroundImage: `url(${darkMode ? wavesDark : wavesLight})`,
        backgroundSize: '100% auto', // cover sieht auch cool aus
      }}
    >
      <div className="h-full flex flex-col items-center justify-start pt-40 selection:bg-[var(--accent)]">
        <div className="bg-primary p-6 rounded-xl max-w-4xl text-center">
          <h1 className="font-regular text-4xl">
            Konzeption & prototypische Entwicklung einer Mixed Reality Version der
            ZDFmediathek im Ansatz von Spatial User Interfaces
          </h1>
          <p className="font-thin text-2xl mt-10">September 2024</p>
          <p className="font-thin text-xl">Julian Gruber</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
