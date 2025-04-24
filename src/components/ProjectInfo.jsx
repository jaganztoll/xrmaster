import React from 'react';
import { Element } from 'react-scroll';

const ProjectInfo = () => {
  return (
    <section className="w-full py-20 px-8 bg-[var(--background)] text-[var(--text)] font-quicksand selection:bg-[var(--accent)]">
      <Element name="projectinfo" className="h-screen flex items-center justify-center">
        <div className="max-w-4xl mx-auto">
        //ToDo: Text überarbeiten
          <h2 className="text-4xl font-semibold mb-6">Projektbeschreibung</h2>
          <p className="font-thin text-xl text-justify leading-[1.5]">
          Die Masterarbeit untersuchte das Potenzial von Mixed Reality (MR) und Spatial User Interfaces, um das Nutzererlebnis der ZDFmediathek durch eine MR-basierte Erweiterung zu verbessern. Ausgehend von einer Analyse der bestehenden ZDFmediathek und relevanter Designprinzipien wurden funktionale und nicht-funktionale Anforderungen definiert. Daraufhin wurde ein interaktiver High-Fidelity-Prototyp entwickelt, um eine intuitive und immersive Benutzererfahrung zu ermöglichen. Die Ergebnisse des Projekts zeigen, wie MR-Technologien das Nutzungserlebnis durch neue Interaktionsmöglichkeiten und interaktive Inhalte erweitern können.
          </p>
        </div>
      </Element>
    </section>
  );
};

export default ProjectInfo;
