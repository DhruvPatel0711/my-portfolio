import React, { useEffect, useState } from "react";
import '../css/Header.css';

export default function Header() {
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);

      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    const handleScroll = () => {
      setSticky(window.scrollY > (isMobile ? 20 : 50));
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    handleResize(); 
    handleScroll();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobile]);

  return (
    <div className="header-container">
      <header className={`header ${sticky ? "sticky" : ""}`}>
        <div className="logo">
          <a href="\" className="logo-link">Dhruv</a>
        </div>

        {isMobile && (
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <div className={`bar ${menuOpen ? "open" : ""}`}></div>
            <div className={`bar ${menuOpen ? "open" : ""}`}></div>
            <div className={`bar ${menuOpen ? "open" : ""}`}></div>
          </div>
        )}

        <nav className={`nav ${menuOpen && isMobile ? "show" : ""}`}>
          <a href="\" className="nav-link" onClick={() => {window.scrollTo({ top: 0, behavior: "smooth" }); setMenuOpen(false);}}>Home</a>
          <a href="#about" className="nav-link" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#projects" className="nav-link" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#skills" className="nav-link" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#contact" className="nav-link" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
      </header>
    </div>
  );
}

