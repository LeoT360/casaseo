import React from 'react';

export const ServiceModal = ({ service, onClose }) => {
  if (!service) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        <h3>{service.title}</h3>
        <p className="modal-description">{service.fullDescription}</p>
        <h4>Labores incluidas:</h4>
        <ul>
          {service.items.map((item, index) => (
            <li key={index}>✓ {item}</li>
          ))}
        </ul>
        <div className="modal-actions">
          <a 
            href={`https://wa.me/?text=Hola,%20quisiera%20más%20información%20sobre%20el%20servicio%20de%20${encodeURIComponent(service.title)}`}
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Consultar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};