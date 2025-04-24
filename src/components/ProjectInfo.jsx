import React from 'react';
import { Element } from 'react-scroll';

const ProjectInfo = () => {
  return (
    <section className="w-full py-20 px-8 bg-[var(--background)] text-[var(--text)] font-quicksand selection:bg-[var(--accent)]">
      <Element name="projectinfo" className="h-screen flex items-center justify-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-semibold mb-6">Projektbeschreibung</h2>
          <p className="font-thin text-xl text-justify mb-6 leading-7">
            Diese Masterarbeit untersucht das Potenzial von Mixed Reality (MR) und Spatial User Interfaces,
            um das Angebot der ZDFmediathek durch eine innovative MR-basierte Erweiterung zu ergänzen. Aufbauend
            auf einer umfassenden Analyse der bestehenden ZDFmediathek und etablierter Designprinzipien wurden
            funktionale und nicht-funktionale Anforderungen für eine MR-Mediathek definiert. Ein High-Fidelity
            Prototyp wurde iterativ entwickelt und evaluiert, um eine intuitive und immersive Benutzererfahrung
            zu gewährleisten. Die Ergebnisse zeigen, dass MR-Technologien das Potenzial haben, das Nutzungserlebnis
            der ZDFmediathek erheblich zu steigern, indem sie räumliche Interaktionsmöglichkeiten und interaktive
            Inhalte bieten. Der entwickelte Prototyp dient als Grundlage für die zukünftige Entwicklung einer
            MR-Version der ZDFmediathek und verdeutlicht die transformative Kraft von Mixed Reality und Spatial
            User Interfaces für die Gestaltung innovativer Medienplattformen.
          </p>
        </div>
      </Element>
    </section>
  );
};

export default ProjectInfo;
