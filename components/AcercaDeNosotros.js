import React from 'react';
import Link from "next/link"; 

const AcercaDeNosotros = () => {
  return (
    <div className="relative w-full xl:h-[90vh]">
      {/* Video de fondo */}
      <video
        src="/videos/nosotros.mp4"
        loop
        muted
        autoPlay
        className="absolute top-0 left-0 w-full h-full sm:h-[100vh] md:h-[80vh] lg:h-[85vh] xl:h-[90vh] object-cover"
      />

      {/* Contenedor del texto */}
      <div className="relative z-10 container mx-auto text-center py-16 sm:py-20 lg:py-24 h-full items-center flex justify-center">
        {/* Título de la sección */}
        <div className="mt-auto mb-8">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center text-purple-950 mb-8 font-playfair">
          BORCELLE
        </h2>
        <Link href="/Productos">
          <button className="px-6 py-3 bg-purple-950 text-purple-100 text-xl font-bold rounded-full hover:bg-purple-800 transition-all">
            Ordenar
          </button>
        </Link>
        </div>
      </div>
    </div>
    
  );
};

export default AcercaDeNosotros;
