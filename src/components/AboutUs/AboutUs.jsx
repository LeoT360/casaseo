import React from 'react';
import './AboutUs.css';

export const AboutUs = () => {
  return (
    <section id="nosotros" className="about-section">
      <div className="about-container">
        <div className="about-image-wrapper">
          <img src="/src/assets/casaseo_logo.svg" alt="Casaseo Corporativo" className="about-logo" />
        </div>
        <div className="about-content">
          <span className="section-subtitle">Sobre Nosotros</span>
          <h2>Empresa de Servicios de Aseo</h2>
          <p>
            En <strong>Casaseo</strong> nos especializamos exclusivamente en brindar soluciones de aseo, desinfección y mantenimiento para áreas comunes en edificios de apartamentos y conjuntos residenciales.
          </p>
          <p>
            Entendemos el valor que tiene el cuidado de los espacios compartidos para valorizar la propiedad y garantizar la convivencia armoniosa. Nos encargamos de toda la gestión del personal, suministros y supervisión para que la administración pueda enfocarse en la gestión integral del inmueble.
          </p>
          
          <div className="about-stats">
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Satisfacción del Cliente</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">Garantizada</span>
              <span className="stat-label">Continuidad del Servicio</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};