import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const AcercaDeNosotros = () => {
  const images = [
    { src: '/images/tienda.png', alt: 'Nuestra tienda' },
    { src: '/images/galletas.png', alt: 'Nuestras galletas' },
    { src: '/images/equipo.png', alt: 'Nuestro equipo' },
    { src: '/images/galletas2.png', alt: 'Nuestras galletas' },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Cambiar imagen automáticamente cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="about" className="py-20 bg-orange-200">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-extrabold text-center text-yellow-900 mb-8 font-playfair display">
          Acerca de nosotros
        </h2>

        <p className="text-lg font-roboto text-black-600 mb-8">
          Somos una tienda dedicada a crear galletas únicas y personalizadas que endulzan tus momentos y convierten tus ideas en deliciosas realidades.
        </p>

        {/* Contenedor del Carrusel */}
        <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-lg">
          {/* Imagen activa */}
          <Image
            src={images[currentImageIndex].src}
            alt={images[currentImageIndex].alt}
            layout="fill" // Ocupar todo el contenedor
            objectFit="cover" // Asegura que la imagen se ajuste proporcionalmente
            priority // Asegura que se cargue más rápido
          />

          {/* Indicadores */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <div
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-4 h-4 rounded-full cursor-pointer ${
                  index === currentImageIndex
                    ? 'bg-yellow-900'
                    : 'bg-gray-300'
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcercaDeNosotros;