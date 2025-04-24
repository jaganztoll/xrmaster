import React from 'react';
import Brainstorm from '../assets/brainstorm.png';
import { Element } from 'react-scroll';

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
        <div className="font-quicksand selection:bg-[var(--accent)]">
          <div className={`${darkMode ? '' : ''} bg-[var(--primary)] dark:bg-[var(--primary)] rounded-2xl px-4 py-4 max-w-4xl shadow-lg backdrop-blur-sm`}>
            <h2 className="text-4xl font-semibold text-[var(--text)] mb-4">Konzeptphase</h2>
            <p className="text-xl font-thin text-[var(--text)] max-w-4xl text-justify leading-relaxed">
              In der Konzeptionsphase wurden erste Ideen gesammelt, skizziert und analysiert.
              Mithilfe eines Brainstormings und thematischen Clusterns entstanden erste konkrete
              Richtungen für eine mögliche Umsetzung der MR-ZDFmediathek.
            </p>
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Concept;
