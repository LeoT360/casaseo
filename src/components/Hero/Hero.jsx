import React, { useState, useEffect, useCallback } from 'react';
import './Hero.css';

export const Hero = () => {
  // Arreglo con tus imágenes del carrusel
  const carouselImages = [
    { src: '/src/assets/hero_graphic_1.jpg', alt: 'Aseo de zonas comunes' },
    { src: '/src/assets/hero_graphic_2.jpg', alt: 'Mantenimiento de áreas sociales' },
    { src: '/src/assets/hero_graphic_3.jpg', alt: 'Limpieza profesional para copropiedades' }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Función para avanzar a la siguiente imagen
  const handleNextImage = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
  }, [carouselImages.length]);

  // Autoplay: Cambia de imagen automáticamente cada 4 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      handleNextImage();
    }, 4000);

    return () => clearInterval(interval);
  }, [handleNextImage]);

  return (
    <section id="inicio" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <span className="hero-badge">Servicio de Limpieza de Calidad</span>
          <h1>Especialistas en Aseo y Mantenimiento de Áreas Sociales</h1>
          <p>
            Mantenemos las zonas comunes de tu propiedad en perfectas condiciones. 
            Garantizamos espacios limpios, higiénicos y agradables para la tranquilidad de todos los residentes.
          </p>
          <div className="hero-actions">
            <a href="#contacto" className="btn-primary">Solicitar Visita Diagnóstica</a>
            <a href="#servicios" className="btn-secondary">Ver Servicios</a>
          </div>
        </div>

        {/* Carrusel de Imágenes */}
        <div className="hero-graphic">
          <div 
            className="carousel-wrapper" 
            onClick={handleNextImage} 
            title="Haz clic para ver la siguiente imagen"
          >
            {carouselImages.map((image, index) => (
              <img
                key={index}
                src={image.src}
                alt={image.alt}
                className={`hero_graphic ${index === currentIndex ? 'active' : ''}`}
              />
            ))}

            {/* Indicadores de puntos (Dots) */}
            <div className="carousel-dots">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === currentIndex ? 'active' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation(); // Evita que se active el click de la imagen contenedora
                    setCurrentIndex(index);
                  }}
                  aria-label={`Ir a la imagen ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};