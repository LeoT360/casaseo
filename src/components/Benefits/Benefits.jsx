import React from 'react';
import './Benefits.css';

const benefitsData = [
  {
    title: 'Personal Capacitado y Uniformado',
    description: 'Nuestro equipo cuenta con presentación impecable e inducción en servicio de aseo para la limpieza.'
  },
  {
    title: 'Cumplimiento Normativo y SST',
    description: 'Cumplimos con todas las normativas vigentes y implementamos protocolos de seguridad y salud en el trabajo (SST).'
  },
  {
    title: 'Supervisión Periódica de Calidad',
    description: 'Realizamos inspecciones presenciales y seguimiento continuo para certificar que cada espacio conserve el estándar acordado.'
  },
  {
    title: 'Insumos y Maquinaria Profesional',
    description: 'Utilizamos insumos amigables con las superficies y maquinaria industrial para el mantenimiento de pisos y grandes áreas.'
  }
];

export const Benefits = () => {
  return (
    <section id="beneficios" className="benefits-section">
      <div className="benefits-container">
        <div className="section-title">
          <h2>¿Por qué elegir Casaseo?</h2>
          <p>Tranquilidad y respaldo para la administración de tu propiedad</p>
        </div>

        <div className="benefits-grid">
          {benefitsData.map((item, index) => (
            <div key={index} className="benefit-card">
              <div className="benefit-badge">{index + 1}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};