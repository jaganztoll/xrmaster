import React from 'react';
import Brainstorm from '../assets/brainstorm.jpg';

const Concept = () => {
  return (
    <section className="relative z-10 h-screen w-full">
      {/* Fixiertes Hintergrundbild */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-fixed bg-center bg-cover z-0"
        style={{ backgroundImage: `url(${Brainstorm})` }}
      />

      {/* Inhalt über dem Bild */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 font-quicksand">
        <h2 className="text-4xl font-semibold text-[var(--text)] mb-4">Konzeptphase</h2>
        <p className="text-xl font-thin text-[var(--text)] max-w-3xl leading-relaxed">
          In der Konzeptionsphase wurden erste Ideen gesammelt, skizziert und analysiert.
          Mithilfe eines Brainstormings und thematischen Clusterns entstanden erste konkrete
          Richtungen für eine mögliche Umsetzung der MR-ZDFmediathek.
        </p>
      </div>
    </section>
  );
};

export default Concept;
