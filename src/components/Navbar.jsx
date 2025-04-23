import { useState, useEffect } from "react";
import { HiSun, HiMoon, HiBars3, HiXMark } from "react-icons/hi2";
import logoLight from '../assets/JG_logo_ohne_Name_light.png';
import logoDark from '../assets/JG_logo_ohne_Name_dark.png';
import { Link } from 'react-scroll';

const Navbar = ({ darkMode, setDarkMode }) => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav className={`fixed top-0 w-full z-50 px-6 py-4 transition-colors duration-300 ${scrolled ? "bg-[var(--secondary)] bg-opacity-80 shadow-md" : "bg-transparent"} text-[var(--text)]`}>
            <div className="w-full max-w-screen-xl mx-auto flex justify-between items-center">
                {/* Logo */}
                <div>
                    <img
                        src={darkMode ? logoLight : logoDark}
                        //src={darkMode ? (scrolled ? logoDark : logoLight) : (scrolled ? logoLight : logoDark)} //Logozustand ändert sich mit Scrollen
                        alt="Logo"
                        className="h-10 w-auto"
                        style={{ imageRendering: "crisp-edges" }}
                    />
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex space-x-6 items-center">
                    <Link to="projectinfo" smooth={true} duration={500} className="hover:text-[var(--accent)] font-quicksand font-medium">
                        Projektinfo
                    </Link>
                    <Link to="concept" smooth={true} duration={500} className="hover:text-[var(--accent)] font-quicksand font-medium">
                        Konzept
                    </Link>
                    <Link to="results" smooth={true} duration={500} className="hover:text-[var(--accent)] font-quicksand font-medium">
                        Ergebnisse
                    </Link>
                    <Link to="about" smooth={true} duration={500} className="hover:text-[var(--accent)] font-quicksand font-medium">
                        Über mich
                    </Link>
                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className="hover:bg-[var(--accent)] p-2 rounded-full"
                    >
                        {darkMode ? (
                            <HiSun className="text-[var(--text)] text-2xl" />
                        ) : (
                            <HiMoon className="text-[var(--text)] text-2xl" />
                        )}
                    </button>
                </div>

                {/* Mobile Burger Icon */}
                <div className="md:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <HiXMark className="text-3xl" /> : <HiBars3 className="text-3xl" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden mt-4 flex flex-col space-y-4 px-6">
                    <Link to="projectinfo" smooth={true} duration={500} className="hover:text-[var(--accent)] font-quicksand font-medium" onClick={() => setMenuOpen(false)}>
                        Projektinfo
                    </Link>
                    <Link to="concept" smooth={true} duration={500} className="hover:text-[var(--accent)] font-quicksand font-medium" onClick={() => setMenuOpen(false)}>
                        Konzept
                    </Link>
                    <Link to="results" smooth={true} duration={500} className="hover:text-[var(--accent)] font-quicksand font-medium" onClick={() => setMenuOpen(false)}>
                        Ergebnisse
                    </Link>
                    <Link to="about" smooth={true} duration={500} className="hover:text-[var(--accent)] font-quicksand font-medium" onClick={() => setMenuOpen(false)}>
                        Über mich
                    </Link>
                    <button
                        onClick={() => {
                            setDarkMode(!darkMode);
                            setMenuOpen(false);
                        }}
                        className="hover:bg-[var(--accent)] p-2 rounded-full self-start"
                    >
                        {darkMode ? (
                            <HiSun className="text-[var(--text)] text-2xl" />
                        ) : (
                            <HiMoon className="text-[var(--text)] text-2xl" />
                        )}
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
