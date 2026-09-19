import React, { useState } from 'react';
import { ServiceModal } from './ServiceModal';
import './Services.css';

const servicesData = [
  {
    id: 'limpieza-sencilla',
    title: 'Limpieza Sencilla',
    shortDescription: 'Mantenimiento esencial y rutinario para conservar el orden y la frescura diaria en las instalaciones.',
    fullDescription: 'Ideal para la conservación diaria de pasillos, recepción y accesos principales. Enfocado en tareas clave de mantenimiento básico para garantizar un entorno limpio y ordenado de forma constante.',
    items: [
      'Barrido y trapeado de superficies y accesos principales',
      'Sacudido de pasamanos, carteles y mobiliario de áreas comunes',
      'Limpieza de aceras y zonas exteriores'
    ]
  },
  {
    id: 'limpieza-general',
    title: 'Limpieza General',
    shortDescription: 'Atención integral e higienización periódica de zonas comunes y áreas de alto tránsito.',
    fullDescription: 'Servicio equilibrado diseñado para copropiedades que requieren desinfección continua y cuidado detallado de áreas comunes, pasillos de torres, ascensores y pasamanos para asegurar la higiene de los residentes.',
    items: [
      'Limpieza y desinfección de ascensores, espejos y botoneras',
      'Aseo profundo de pasillos, escaleras y pasamanos',
      'Limpieza de vidrios interiores, ventanas y mobiliario de áreas comunes'
    ]
  },
  {
    id: 'limpieza-completa',
    title: 'Limpieza Completa',
    shortDescription: 'Cuidado exhaustivo y desinfección especializada para todo el edificio y sus zonas recreativas.',
    fullDescription: 'Cobertura total para la copropiedad. Incluye el mantenimiento detallado de salones sociales, parqueaderos, shuts de basura y preparación/alistamiento de áreas para eventos.',
    items: [
      'Higienización de pasillos, escaleras, ascensores y pasamanos',
      'Aseo previo y posterior a eventos en salones comunales',
      'Desinfección de shuts de basura, parqueaderos y áreas sociales'
    ]
  }
];

export const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section id="servicios" className="services-section">
      <div className="services-container">
        <div className="section-title">
          <h2>Nuestros Servicios de Aseo</h2>
          <p>Cobertura integral para el mantenimiento de copropiedades y conjuntos residenciales</p>
        </div>

        <div className="services-grid">
          {servicesData.map((service) => (
            <div key={service.id} className="service-card">
              <h3>{service.title}</h3>
              <p>{service.shortDescription}</p>
              <button 
                className="btn-card-details"
                onClick={() => setSelectedService(service)}
              >
                Ver detalles del servicio
              </button>
            </div>
          ))}
        </div>
      </div>

      {selectedService && (
        <ServiceModal 
          service={selectedService} 
          onClose={() => setSelectedService(null)} 
        />
      )}
    </section>
  );
};