import React from 'react';
import wavesLight from '../assets/waves.svg';
import wavesDark from '../assets/waves_white.svg';

const Hero = ({ darkMode }) => {
  return (
    <section
      className="relative h-screen w-full bg-no-repeat bg-bottom bg-fixed"
      style={{
        fontFamily: 'var(--font-quicksand)',
        backgroundImage: `url(${darkMode ? wavesDark : wavesLight})`,
        backgroundSize: '100% auto', // cover sieht auch cool aus
      }}
    >    
      <div className="relative z-10 h-full flex flex-col items-center justify-start pt-40">
        <div className="bg-primary p-6 rounded-xl max-w-4xl text-center">
          <h2 className="font-regular text-4xl">
            Konzeption & prototypische Entwicklung einer Mixed Reality Version der
            ZDFmediathek im Ansatz von Spatial User Interfaces
          </h2>
          <p className="font-thin text-xl mt-10">September 2024</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
