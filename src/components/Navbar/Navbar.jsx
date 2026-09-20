import React, { useRef, useState, useEffect } from 'react';
import './Navbar.css';
import topbarIcon1 from '../../assets/topbar_icon_1.svg';
import topbarIcon2 from '../../assets/topbar_icon_2.svg';
import topbarIcon3 from '../../assets/topbar_icon_3.svg';
import casaseoTitle from '../../assets/casaseo_title.svg';
import menuIcon from '../../assets/menu_icon.svg';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    const navbar = navbarRef.current;
    if (!navbar) return undefined;

    const updateNavbarHeight = () => {
      document.documentElement.style.setProperty(
        '--navbar-height',
        `${navbar.getBoundingClientRect().height}px`
      );
    };

    updateNavbarHeight();
    const resizeObserver = new ResizeObserver(updateNavbarHeight);
    resizeObserver.observe(navbar);

    return () => resizeObserver.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Activa la sombra del navbar cuando el top-bar ya salió de la pantalla
      if (window.scrollY > 35) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Banda Superior: Elemento normal que sube con el scroll */}
      <div className="top-bar">
        <img src={topbarIcon1} alt="Topbar Icon" className="topbar-icon" />
        <span>AMABILIDAD</span>
        <img src={topbarIcon2} alt="Topbar Icon" className="topbar-icon" />
        <span>PULCRITUD</span>
        <img src={topbarIcon3} alt="Topbar Icon" className="topbar-icon" />
        <span>BUENOS PRECIOS</span>
      </div>

      {/* Navegación Principal: Elemento sticky que se fija arriba */}
      <header className="navbar-wrapper">
        <div ref={navbarRef} className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
          <div className="navbar-container">
          {/* Izquierda: Logo */}
          <a href="#inicio" className="navbar-brand">
            <img src={casaseoTitle} alt="Casaseo Title" className="navbar-logo" />
          </a>

          {/* Botón menú hamburguesa (Móvil) */}
          <button 
            className="menu-toggle" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isMenuOpen}
          >
            <img src={menuIcon} alt="" className="menu-icon" />
          </button>

          {/* Centro: Links de Navegación */}
          <nav className={`navbar-nav ${isMenuOpen ? 'active' : ''}`}>
            <a href="#nosotros" onClick={() => setIsMenuOpen(false)}>Nosotros</a>
            <a href="#servicios" onClick={() => setIsMenuOpen(false)}>Servicios</a>
            <a href="#beneficios" onClick={() => setIsMenuOpen(false)}>¿Por qué elegirnos?</a>
            <a href="#faq" onClick={() => setIsMenuOpen(false)}>Preguntas</a>
            <a href="#opiniones" onClick={() => setIsMenuOpen(false)}>Opiniones</a>
            
            <a 
              href="#contacto" 
              className="btn-nav-contact mobile-only" 
              onClick={() => setIsMenuOpen(false)}
            >
              Solicitar Diagnóstico
            </a>
          </nav>

          {/* Derecha: Botón de Acción (Escritorio) */}
          <div className="navbar-action desktop-only">
            <a href="#contacto" className="btn-nav-contact">
              Solicitar Diagnóstico
            </a>
          </div>
          </div>
        </div>
      </header>
    </>
  );
};