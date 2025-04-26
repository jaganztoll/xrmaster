import React from 'react';
import { Element } from 'react-scroll';
import ReactCompareImage from 'react-compare-image';
import { motion } from 'framer-motion';

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
      <Element name="results">
        <div className="max-w-4xl mx-auto">
          <div>
            <h1 className="text-4xl font-semibold mb-6 text-left">Ergebnisse</h1>
            <p className="font-thin text-xl text-justify leading-[1.5]">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.            </p>
          </div>
        </div>

        {/* 1. Vergleichsbild */}
        <motion.h2
          initial={{ opacity: 0, x: -1000 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative max-w-4xl w-full mx-auto text-2xl font-medium text-left mb-4 mt-16"
        >
          Startseite
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, x: -1000 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative max-w-4xl w-full mx-auto"
        >
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
        </motion.div>

        {/* 2. Vergleichsbild */}
        <motion.h2
          initial={{ opacity: 0, x: 1000 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative max-w-4xl w-full mx-auto text-2xl font-medium text-left mb-4 mt-16"
        >
          Rubriken
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, x: 1000 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative max-w-4xl w-full mx-auto"
        >
          <div className="relative max-w-4xl w-full mx-auto">
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
        </motion.div>

        {/* 3. Vergleichsbild */}
        <motion.h2
          initial={{ opacity: 0, x: -1000 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative max-w-4xl w-full mx-auto text-2xl font-medium text-left mb-4 mt-16"
        >
          Übersichtsseite Serien
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, x: -1000 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative max-w-4xl w-full mx-auto"
        >
          <div className="relative max-w-4xl w-full mx-auto">
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
        </motion.div>

        {/* 4. Vergleichsbild */}
        <motion.h2
          initial={{ opacity: 0, x: 1000 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative max-w-4xl w-full mx-auto text-2xl font-medium text-left mb-4 mt-16"
        >
          Serienübersicht
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, x: 1000 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative max-w-4xl w-full mx-auto"
        >
          <div className="relative max-w-4xl w-full mx-auto">
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
        </motion.div>

        {/* 5. Vergleichsbild */}
        <motion.h2
          initial={{ opacity: 0, x: -1000 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative max-w-4xl w-full mx-auto text-2xl font-medium text-left mb-4 mt-16"
        >
          Videoübersicht Ambiente
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, x: -1000 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative max-w-4xl w-full mx-auto"
        >
          <div className="relative max-w-4xl w-full mx-auto">
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
        </motion.div>

        {/* 6. Vergleichsbild */}
        <motion.h2
          initial={{ opacity: 0, x: 1000 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative max-w-4xl w-full mx-auto text-2xl font-medium text-left mb-4 mt-16"
        >
          Videoplayer - 
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, x: 1000 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative max-w-4xl w-full mx-auto"
        >
          <div className="relative max-w-4xl w-full mx-auto">
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
        </motion.div>
      </Element>
    </section>
  );
};

export default Results;
