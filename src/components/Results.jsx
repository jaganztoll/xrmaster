import React from 'react';
import { Element } from 'react-scroll';
import ReactCompareImage from 'react-compare-image';
import { motion } from 'framer-motion';

import background from '../assets/adobeXD/images/background/00.jpg';
import backgroundMoon from '../assets/adobeXD/images/background/01.png';
import startseiteLight from '../assets/adobeXD/images/light/001_Startseite_light.png';
import startseiteDark from '../assets/adobeXD/images/dark/001_Startseite_dark.png';
import rubrikenLight from '../assets/adobeXD/images/light/002_Rubriken_light.png';
import rubrikenDark from '../assets/adobeXD/images/dark/002_Rubriken_dark.png';
import dokuLight from '../assets/adobeXD/images/light/011_Dokus_light.png';
import dokuDark from '../assets/adobeXD/images/dark/011_Dokus_dark.png';
import dokuDetailsLight from '../assets/adobeXD/images/light/033_Mond_F2_1_light.png';
import dokuDetailsDark from '../assets/adobeXD/images/dark/033_Mond_F2_1_dark.png';
import playerLight from '../assets/adobeXD/images/light/037_F2_VB2_light.png';
import playerDark from '../assets/adobeXD/images/dark/037_F2_VB2_dark.png';
import playerAmbientLight from '../assets/adobeXD/images/light/036_F2_VB1_light.png';
import playerAmbientDark from '../assets/adobeXD/images/dark/036_F2_VB1_dark.png';

const Results = () => {
  return (
    <section className="w-full py-20 px-6 bg-[var(--background)] text-[var(--text)] font-quicksand selection:bg-[var(--accent)]">
      <Element name="results" >
        <motion.h1 initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="mt-8">
          <div className="max-w-4xl mx-auto">
            <div>
              <h1 className="text-4xl font-semibold mb-6 text-left">Ergebnisse</h1>
              <p className="font-thin text-xl text-justify leading-[1.5]">
                Die kontinuierliche Diskussion und das Feedback führten zu einer finalen Lösung, die sowohl funktionalen als auch den ästhetischen
                Anforderungen gerecht wird. Die verschiedenen Prototypen, die während des Prozesses entwickelt wurden, wurden detailliert getestet,
                um die Benutzererfahrung zu optimieren und die Interaktivität in der Mixed Reality Mediathek zu gewährleisten.
              </p>
              <p className="font-thin text-xl text-justify leading-[1.5] mt-4">
                Im Folgenden werden einige Beispiele der finalen Designentscheidungen gezeigt. Die gesamte Masterarbeit ist am Ende der Seite verlinkt.
              </p>
            </div>
          </div>
        </motion.h1>

        {/* 1. Vergleichsbild */}
        <motion.h2
          initial={{ opacity: 0, x: -1000 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true, threshold: 0.1 }}
          className="relative max-w-4xl w-full mx-auto text-2xl font-medium text-left mb-4 mt-16"
        >
          Startseite
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, x: -1000 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true, threshold: 0.1 }}
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
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative max-w-4xl w-full mx-auto text-2xl font-medium text-left mb-4 mt-32"
        >
          Rubriken
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, x: 1000 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
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
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative max-w-4xl w-full mx-auto text-2xl font-medium text-left mb-4 mt-32"
        >
          Übersichtsseite Dokus & Rerportagen
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, x: -1000 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
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
                leftImage={dokuLight}
                rightImage={dokuDark}
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
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative max-w-4xl w-full mx-auto text-2xl font-medium text-left mb-4 mt-32"
        >
          Folgenübersicht 'Der Mond'
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, x: 1000 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
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
                leftImage={dokuDetailsLight}
                rightImage={dokuDetailsDark}
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
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative max-w-4xl w-full mx-auto text-2xl font-medium text-left mb-4 mt-32"
        >
          Videowiedergabe - Ambienteauswahl
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, x: -1000 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative max-w-4xl w-full mx-auto"
        >
          <div className="relative max-w-4xl w-full mx-auto">
            <img
              src={background}
              alt="Hintergrund"
              className="absolute top-0 left-0 w-full h-full object-cover z-0 rounded-lg brightness-20"
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
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative max-w-4xl w-full mx-auto text-2xl font-medium text-left mb-4 mt-32"
        >
          Videowiedergabe inkl. 3D-Modell
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, x: 1000 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative max-w-4xl w-full mx-auto"
        >
          <div className="relative max-w-4xl w-full mx-auto">
            <img
              src={background}
              alt="Hintergrund"
              className="absolute top-0 left-0 w-full h-full object-cover z-0 rounded-lg brightness-20"
            />
            <div className="relative z-20">
              <ReactCompareImage
                leftImage={playerLight}
                rightImage={playerDark}
                sliderLineColor="var(--accent)"
                alt="Vergleich zwischen Light und Dark Mode"
              />
              <img
                src={backgroundMoon}
                alt="Hintergrund Mond"
                className="absolute top-50 left-0 -translate-x-[20%] h-100 w-100 z-10"
              />
            </div>
          </div>
        </motion.div>
      </Element>
    </section>
  );
};

export default Results;
