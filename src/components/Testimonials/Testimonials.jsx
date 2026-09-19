import React from 'react';
import './Testimonials.css';

const testimonials = [
  {
    quote: "Casaseo transformó mi edificio con su servicio de aseo.",
    author: "Hermelinda Mitagoza",
    role: "Inquilina de Edificio Residencial"
  },
  {
    quote: "Destaco mucho el buen trato del personal y la amabilidad. Como consejo de administración, nos da total tranquilidad.",
    author: "Eufrasio Cacharro",
    role: "Presidente de Consejo de Administración"
  },
  {
    quote: "El equipo de Casaseo es muy profesional y confiable. Siempre cumplen con los horarios y dejan todo impecable.", 
    author: "Petra Narcisa",
    role: "Directora de Administración"
  }
];

export const Testimonials = () => {
  return (
    <section id="opiniones" className="testimonials-section">
      <div className="testimonials-container">
        <div className="section-title">
          <h2>Opiniones de Nuestros Clientes</h2>
          <p>Personas que confían la imagen de sus edificios en nosotros</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((item, idx) => (
            <div key={idx} className="testimonial-card">
              <p className="quote">"{item.quote}"</p>
              <div className="author-info">
                <strong>{item.author}</strong>
                <span>{item.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};