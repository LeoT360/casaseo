import React from 'react';
import './Footer.css';
import casaseoTitle from '../../assets/casaseo_title.svg';
import footerIconLocation from '../../assets/footer_icon_1.svg';
import footerIconPhone from '../../assets/footer_icon_2.svg';
import footerIconEmail from '../../assets/footer_icon_3.svg';

const urlWhatsApp = 'https://wa.me/573105170397';
const emailDestino = 'contacto@casaseo.com';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-col">
          <a href="#inicio"><img src={casaseoTitle} alt="Casaseo" className="footer-logo" /></a>
          <p className="footer-text">
            Servicio de limpieza y mantenimiento especializado en áreas comunes de copropiedades y edificios residenciales.
          </p>
        </div>

        <div className="footer-col">
          <h4>Oficio</h4>
          <ul className="footer-links">
            <li><a href="#servicios">Servicios</a></li>
            <li><a href="#faq">Preguntas</a></li>
            <li><a href="#opiniones">Opiniones</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Empresa</h4>
          <ul className="footer-links">
            <li><a href="#nosotros">Nosotros</a></li>
            <li><a href="#beneficios">¿Por qué elegirnos?</a></li>
            <li><a href="#contacto">Contactactanos</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contacto</h4>
          <ul className="footer-links">
            <li><a href="https://www.google.com/maps/place/La+Ceja,+Antioquia/@6.0276532,-75.4419178,15z/data=!3m1!4b1!4m6!3m5!1s0x8e469752ffcf9c09:0xaddcc0000c4e858!8m2!3d6.0298998!4d-75.4305712!16zL20vMDdodl80?entry=ttu&g_ep=EgoyMDI2MDkxNi4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noreferrer" className="footer-contact-item"><img src={footerIconLocation} alt="Contact Icon" className="footer-contact-icon" /> La Ceja, Antioquia</a></li>
            <li><a href={urlWhatsApp} target="_blank" rel="noreferrer" className="footer-contact-item"><img src={footerIconPhone} alt="Contact Icon" className="footer-contact-icon" /> 310 5170397</a></li>
            <li><a href={`mailto:${emailDestino}`} className="footer-contact-item"><img src={footerIconEmail} alt="Contact Icon" className="footer-contact-icon" /> {emailDestino}</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Desarrollado por OvniWeb | © {new Date().getFullYear()} Casaseo - Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};