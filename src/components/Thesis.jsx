import React from 'react';
import { Element } from 'react-scroll';

const Thesis = ({ darkMode }) => {
    return (
        <section className="w-full py-2 px-6 bg-[var(--background)] text-[var(--text)] font-quicksand selection:bg-[var(--accent)]">
            <Element name="thesis" className="h-screen flex items-center justify-center">
                <div className="max-w-4xl mx-auto text-center">
                    Download
                </div>
            </Element>
        </section>
    );
};

export default Thesis;
