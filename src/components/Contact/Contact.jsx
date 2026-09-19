import React, { useState } from 'react';
import './Contact.css';

export const Contact = () => {
  const [formData, setFormData] = useState({
    nombreContacto: '',
    nombreEdificio: '',
    telefono: '',
    numTorres: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Configuración para el correo electrónico
    const emailDestino = 'contacto@casaseo.com'; // Reemplazar por el correo de la empresa
    const asunto = encodeURIComponent(`Solicitud de Cotización - ${formData.nombreEdificio}`);
    
    const cuerpoEmail = encodeURIComponent(
      `Hola equipo de Casaseo,\n\n` +
      `Solicito información y cotización para el servicio de aseo con los siguientes detalles:\n\n` +
      `- Nombre del Contacto/Administrador: ${formData.nombreContacto}\n` +
      `- Nombre del Edificio/Conjunto: ${formData.nombreEdificio}\n` +
      `- Teléfono / WhatsApp: ${formData.telefono}\n` +
      `- N° Torres o Apartamentos: ${formData.numTorres || 'No especificado'}\n` +
      `- Requerimientos o Mensaje: ${formData.mensaje || 'Sin mensaje adicional'}\n\n` +
      `Quedo atento a su respuesta.`
    );

    // Abre el cliente de correo predeterminado del usuario
    window.location.href = `mailto:${emailDestino}?subject=${asunto}&body=${cuerpoEmail}`;
  };

  // Enlace directo de WhatsApp con mensaje genérico de información
  const mensajeWAFlotante = encodeURIComponent(
    'Hola Casaseo, me gustaría obtener más información sobre sus servicios de aseo para edificios y copropiedades.'
  );
  const urlWhatsApp = `https://wa.me/573105170397?text=${mensajeWAFlotante}`;

  return (
    <>
      <section id="contacto" className="contact-section">
        <div className="contact-container">
          <div className="contact-info">
            <h2>Solicita un Diagnóstico para tu Edificio</h2>
            <p>
              Coordinamos una visita técnica en las instalaciones de tu edificio o conjunto residencial para presentar una propuesta formal a la administración o consejo.
            </p>
            
            <div className="contact-details-list">
              {/* Ítem 1: Teléfono */}
              <div className="contact-detail-item">
                <div className="detail-icon-wrapper">
                  <img src="/src/assets/footer_icon_2.svg" alt="Teléfono" className="detail-icon" />
                </div>
                <div className="detail-content">
                  <strong>Número</strong>
                  <span>310 5170397</span>
                </div>
              </div>

              {/* Ítem 2: Correo */}
              <div className="contact-detail-item">
                <div className="detail-icon-wrapper">
                  <img src="/src/assets/footer_icon_3.svg" alt="Correo" className="detail-icon" />
                </div>
                <div className="detail-content">
                  <strong>Correo</strong>
                  <span>contacto@casaseo.com</span>
                </div>
              </div>

              {/* Ítem 3: Horario */}
              <div className="contact-detail-item">
                <div className="detail-icon-wrapper">
                  <img src="/src/assets/footer_icon_4.svg" alt="Horario" className="detail-icon" />
                </div>
                <div className="detail-content">
                  <strong>Horario de Atención</strong>
                  <span>8:00 AM - 6:00 PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario que envía correo */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nombreContacto">Nombre del Administrador / Contacto</label>
              <input 
                type="text" 
                id="nombreContacto" 
                name="nombreContacto" 
                required 
                value={formData.nombreContacto}
                onChange={handleChange}
                placeholder="Tu nombre"
              />
            </div>

            <div className="form-group">
              <label htmlFor="nombreEdificio">Nombre del Edificio / Conjunto</label>
              <input 
                type="text" 
                id="nombreEdificio" 
                name="nombreEdificio" 
                required 
                value={formData.nombreEdificio}
                onChange={handleChange}
                placeholder="Tu edificio o conjunto"
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="telefono">Teléfono / WhatsApp</label>
                <input 
                  type="tel" 
                  id="telefono" 
                  name="telefono" 
                  required 
                  value={formData.telefono}
                  onChange={handleChange}
                  placeholder="300 0000000"
                />
              </div>

              <div className="form-group">
                <label htmlFor="numTorres">N° Torres o Apartamentos</label>
                <input 
                  type="text" 
                  id="numTorres" 
                  name="numTorres" 
                  value={formData.numTorres}
                  onChange={handleChange}
                  placeholder="Ej. 2 torres / 40 aptos"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="mensaje">Requerimientos particulares</label>
              <textarea 
                id="mensaje" 
                name="mensaje" 
                rows="4"
                value={formData.mensaje}
                onChange={handleChange}
                placeholder="Describa si requieren personal fijo, turnos específicos o aseo de áreas sociales particulares..."
              ></textarea>
            </div>

            <button type="submit" className="btn-primary btn-block">
              Enviar Solicitud por Correo
            </button>
          </form>
        </div>
      </section>

      {/* Botón flotante de WhatsApp */}
      <a 
        href={urlWhatsApp} 
        className="whatsapp-float" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        title="¿Tienes preguntas? Escríbenos por WhatsApp"
      >
        <img src="/src/assets/whatsapp_icon.svg" alt="WhatsApp Icon" className="whatsapp-icon" />
      </a>
    </>
  );
};