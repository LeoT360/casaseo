import React, { useState } from 'react';
import './Faq.css';

export const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: '¿Qué tipo de inmuebles o propiedades atienden?',
      answer: 'Nos especializamos en propiedad horizontal: conjuntos residenciales, edificios de apartamentos, condominios, áreas comunes comerciales y oficinas corporativas en el Oriente Antioqueño.'
    },
    {
      question: '¿El personal cuenta con prestaciones y seguridad social al día?',
      answer: 'Sí, absolutamente.'
    },
    {
      question: '¿Cómo solicitamos una cotización o visita diagnóstica?',
      answer: 'Puedes solicitar una visita totalmente sin costo a través de nuestro formulario de contacto o botón de WhatsApp. Realizamos una inspección de las instalaciones para evaluar el área y presentar una propuesta ajustada a las necesidades del conjunto.'
    },
    {
      question: '¿Ustedes suministran los insumos y maquinaria de aseo?',
      answer: 'No se.'
    },
    {
      question: '¿Qué sucede si un operario de aseo incapacita o se ausenta?',
      answer: 'Contamos con un esquema de reemplazos garantizados. Ante cualquier novedad, incapacidad o permiso del personal, enviamos un operario de reemplazo capacitado para asegurar que la limpieza del edificio no se interrumpa.'
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq-section">
      <div className="faq-container">
        <div className="faq-header">
          <span className="faq-badge">Resolvemos tus dudas</span>
          <h2>Preguntas Frecuentes</h2>
          <p>Encuentra respuestas claras sobre nuestros servicios de aseo para copropiedades y edificios.</p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div 
                key={index} 
                className={`faq-item ${isOpen ? 'open' : ''}`}
                onClick={() => toggleAccordion(index)}
              >
                <div className="faq-question">
                  <h3>{faq.question}</h3>
                  <span className="faq-icon">{isOpen ? '−' : '+'}</span>
                </div>
                {isOpen && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};