import React from 'react';
import { Element } from 'react-scroll';
import ReactCompareImage from 'react-compare-image';

import background from '../assets/adobeXD/images/background/00.jpg';

import startseiteLight from '../assets/adobeXD/images/light/001_Startseite_light.png';
import startseiteDark from '../assets/adobeXD/images/dark/001_Startseite_dark.png';
import rubrikenLight from '../assets/adobeXD/images/light/002_Rubriken_light.png';
import rubrikenDark from '../assets/adobeXD/images/dark/002_Rubriken_dark.png';
import serienLight from '../assets/adobeXD/images/light/006_Serien_light.png';
import serienDark from '../assets/adobeXD/images/dark/006_Serien_dark.png';
import serienDetailsLight from '../assets/adobeXD/images/light/014_Rookie_S1_light.png';
import serienDetailsDark from '../assets/adobeXD/images/dark/014_Rookie_S1_dark.png';
import playerAmbientLight from '../assets/adobeXD/images/light/020_S1_VB1_light.png';
import playerAmbientDark from '../assets/adobeXD/images/dark/020_S1_VB1_dark.png';
import playerLight from '../assets/adobeXD/images/light/022_S1_VB2_light.png';
import playerDark from '../assets/adobeXD/images/dark/022_S1_VB2_dark.png';

const Results = () => {
  return (
    <section className="w-full py-20 px-6 bg-[var(--background)] text-[var(--text)] font-quicksand selection:bg-[var(--accent)]">
      <Element name="results" className="flex flex-col items-center justify-start min-h-screen py-20">

        {/* 1. Vergleichsbild */}
        <div className="relative max-w-4xl w-full mx-auto my-8">
          <img
            src={background}
            alt="Hintergrund"
            className="absolute top-0 left-0 w-full h-full object-cover z-0 rounded-lg"
          />
          <div className="relative z-20">
            <ReactCompareImage
              leftImage={startseiteLight}
              rightImage={startseiteDark}
              sliderLineColor="var(--accent)"
              alt="Vergleich zwischen Light und Dark Mode"
            />
          </div>
        </div>

        {/* 2. Vergleichsbild */}
        <div className="relative max-w-4xl w-full mx-auto my-8">
          <img
            src={background}
            alt="Hintergrund"
            className="absolute top-0 left-0 w-full h-full object-cover z-0 rounded-lg"
          />
          <div className="relative z-20">
            <ReactCompareImage
              leftImage={rubrikenLight}
              rightImage={rubrikenDark}
              sliderLineColor="var(--accent)"
              alt="Vergleich zwischen Light und Dark Mode"
            />
          </div>
        </div>

        {/* 3. Vergleichsbild */}
        <div className="relative max-w-4xl w-full mx-auto my-8">
          <img
            src={background}
            alt="Hintergrund"
            className="absolute top-0 left-0 w-full h-full object-cover z-0 rounded-lg"
          />
          <div className="relative z-20">
            <ReactCompareImage
              leftImage={serienLight}
              rightImage={serienDark}
              sliderLineColor="var(--accent)"
              alt="Vergleich zwischen Light und Dark Mode"
            />
          </div>
        </div>

        {/* 4. Vergleichsbild */}
        <div className="relative max-w-4xl w-full mx-auto my-8">
          <img
            src={background}
            alt="Hintergrund"
            className="absolute top-0 left-0 w-full h-full object-cover z-0 rounded-lg"
          />
          <div className="relative z-20">
            <ReactCompareImage
              leftImage={serienDetailsLight}
              rightImage={serienDetailsDark}
              sliderLineColor="var(--accent)"
              alt="Vergleich zwischen Light und Dark Mode"
            />
          </div>
        </div>

        {/* 5. Vergleichsbild */}
        <div className="relative max-w-4xl w-full mx-auto my-8">
          <img
            src={background}
            alt="Hintergrund"
            className="absolute top-0 left-0 w-full h-full object-cover z-0 rounded-lg"
          />
          <div className="relative z-20">
            <ReactCompareImage
              leftImage={playerAmbientLight}
              rightImage={playerAmbientDark}
              sliderLineColor="var(--accent)"
              alt="Vergleich zwischen Light und Dark Mode"
            />
          </div>
        </div>

        {/* 6. Vergleichsbild */}
        <div className="relative max-w-4xl w-full mx-auto my-8">
          <img
            src={background}
            alt="Hintergrund"
            className="absolute top-0 left-0 w-full h-full object-cover z-0 rounded-lg"
          />
          <div className="relative z-20">
            <ReactCompareImage
              leftImage={playerLight}
              rightImage={playerDark}
              sliderLineColor="var(--accent)"
              alt="Vergleich zwischen Light und Dark Mode"
            />
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Results;
