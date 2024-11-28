import React from 'react';
import Link from "next/link"; 

const AcercaDeNosotros = () => {
  return (
    <div className="relative w-full xl:h-[60vh]">
      {/* Video de fondo */}
      <video
        src="/videos/nosotros.mp4"
        loop
        muted
        autoPlay
        className="absolute top-0 left-0 w-full h-full sm:h-[60vh] md:h-[70vh] lg:h-[75vh] xl:h-[60vh] object-cover"
      />

      {/* Contenedor del texto */}
      <div className="relative z-10 container mx-auto text-center py-16 sm:py-20 lg:py-24 h-full items-center flex justify-center">
        {/* Título de la sección */}
        <div className="mt-auto mb-8">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center text-yellow-900 mb-8 font-playfair">
          Cookie
        </h2>
        <Link href="/Productos">
          <button className="px-6 py-3 bg-yellow-900 text-white text-xl font-bold rounded-full hover:bg-yellow-800 transition-all">
            Ordenar
          </button>
        </Link>
        </div>
      </div>
    </div>
    
  );
};

export default AcercaDeNosotros;
