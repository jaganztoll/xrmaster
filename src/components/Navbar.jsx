import { useState, useEffect } from "react";
import { HiSun, HiMoon } from "react-icons/hi2";
import logoLight from '../assets/JG_logo_ohne_Name_light.png';
import logoDark from '../assets/JG_logo_ohne_Name_dark.png';


const Navbar = ({ darkMode, setDarkMode }) => {
    const [scrolled, setScrolled] = useState(false);

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
        <nav
            className={`fixed top-0 w-full z-50 px-6 py-4 transition-colors duration-300 ${scrolled ? "bg-[var(--primary)] bg-opacity-80 shadow-md" : "bg-transparent"
                } text-[var(--text)]`}
        >
            <div className="w-full max-w-screen-xl mx-auto flex justify-between items-center">
                {/* Logo auf der linken Seite */}
                <div>
                    <img
                        src={darkMode ? (scrolled ? logoDark : logoLight) : (scrolled ? logoLight : logoDark)}
                        alt="Logo"
                        className="h-10 w-auto"
                        style={{ imageRendering: "crisp-edges" }}
                    />
                </div>
                {/* Button auf der rechten Seite */}
                <div>
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
            </div>
        </nav>
    );
};

export default Navbar;
