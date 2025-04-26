import React from 'react';
import { Element } from 'react-scroll';
import { motion } from 'framer-motion';

import Brainstorm from '../assets/brainstorm.png';

const Concept = ({ darkMode }) => {
  return (
    <section className="relative z-10 h-screen w-full">
      <Element name="concept" className="h-screen flex items-center justify-center">

        {/* Hintergrundbild */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-fixed bg-center bg-cover z-0"
          style={{ backgroundImage: `url(${Brainstorm})` }}
        />

        {/* Inhalt */}
        <div className="font-quicksand selection:bg-[var(--accent)] text-[var(--text)]">
          <div className={`${darkMode ? '' : ''} bg-[var(--primary)] dark:bg-[var(--primary)] rounded-2xl px-4 py-4 max-w-4xl shadow-lg backdrop-blur-sm`}>
            <motion.div initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true }}>
              <h2 className="text-4xl font-semibold mb-6">Konzept</h2>
              <p className="font-thin text-xl text-justify leading-[1.5]">
                Die Konzeptentwicklung war ein iterativer Prozess, der durch kreative Techniken wie Brainstorming und Mind Mapping unterstützt wurde.
                In enger Zusammenarbeit mit dem ZDF, insbesondere mit <span className='font-medium'>Rainer Kirchknopf</span> vom Innovation Office,
                sowie <span className='font-medium'>Prof. Dr. Robert Strzebkowski </span> und <span className='font-medium'>Andreas Forster</span> wurden
                die entwickelten Ideen kontinuierlich diskutiert und optimiert.
              </p>

              <p className="font-thin text-xl text-justify leading-[1.5] mt-4">
                Im Rahmen des <span className='font-medium'>Design Thinking</span>-Prozesses lag der Schwerpunkt auf der nutzerzentrierten Entwicklung von Lösungen.
                Neben der Analyse bestehender Systeme wurden kreative Ideen generiert, Prototypen entwickelt und iterativ getestet. Diese Methodik ermöglichte es,
                innovative Ansätze für die Herausforderungen von Mixed Reality zu finden, ohne auf klassische Nutzerbefragungen zurückzugreifen, da diese in diesem
                speziellen Kontext nicht zielführend waren.
              </p>

              <p className="font-thin text-xl text-justify leading-[1.5] mt-4">
                Zu Beginn wurden erste Entwürfe erstellt, um die grundlegende Struktur, Navigation und das Design der Mixed Reality Mediathek zu visualisieren.
                Dies umfasste die Definition einer klaren Content- und Navigationsstruktur sowie eine ansprechende, nutzerfreundliche visuelle Gestaltung. Ziel
                war es, eine effiziente und intuitive Benutzererfahrung zu schaffen, die sowohl den Anforderungen des ZDF als auch den spezifischen Anforderungen
                der Mixed Reality Technologie gerecht wird.
              </p>

              {/*Die Konzeption der MR-Erweiterung der ZDFmediathek folgte einem iterativen Prozess, in dem kreative Techniken wie Brainstorming und Mind Mapping 
            eine zentrale Rolle spielten. Von Beginn an stand die enge Zusammenarbeit mit dem ZDF, insbesondere mit Rainer Kirchknopf vom Innovation Office, 
            sowie mit Prof. Dr. Robert Strzebkowski und Andreas Forster im Fokus. Dieser kollaborative Ansatz ermöglichte einen kontinuierlichen Austausch und 
            die Optimierung der entwickelten Ideen unter Berücksichtigung verschiedener Expertisebereiche.
            
            Geleitet vom Design Thinking-Ansatz lag der primäre Schwerpunkt auf der nutzerzentrierten Entwicklung innovativer Lösungen. Obwohl klassische 
            Nutzerbefragungen aufgrund der neuartigen Technologie und der damit verbundenen Herausforderungen in diesem spezifischen Kontext nicht zielführend 
            waren, prägte das Prinzip der Nutzerzentrierung die gesamte Phase. Neben der detaillierten Analyse der bestehenden ZDFmediathek wurden kreative 
            Ideen generiert, um die spezifischen Herausforderungen von Mixed Reality zu adressieren.
            
            Im frühen Stadium der Konzeptentwicklung wurden erste Entwürfe visualisiert, um die grundlegende Struktur, Navigation und das Design der zukünftigen 
            Mixed Reality Mediathek zu konkretisieren. Dies umfasste die Definition einer klaren und intuitiven Content- und Navigationsstruktur sowie die 
            Entwicklung einer ansprechenden und nutzerfreundlichen visuellen Gestaltung. Das übergeordnete Ziel war es, eine effiziente und intuitive 
            Benutzererfahrung zu schaffen, die sowohl den etablierten Anforderungen des ZDF als auch den besonderen Möglichkeiten und Rahmenbedingungen der 
            Mixed Reality Technologie gerecht wird. */}

            </motion.div>
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Concept;
