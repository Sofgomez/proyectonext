import React from 'react';
import Link from "next/link"; 
import Image from 'next/image';

function Servicios() {
  return (
    <div className="relative min-h-screen flex flex-col items-center bg-yellow-900 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-yellow-950 opacity-70 z-10"></div>

      {/* Encabezado con tipografía grande y centrada */}
      <header className="relative z-20 text-center text-orange-100 py-16">
        <h1 className="text-6xl font-bold leading-tight mb-4 transform animate__animated animate__fadeIn animate__delay-1s">
          ¡Las Mejores Galletas, Directo a tu Puerta!
        </h1>
        <p className="text-xl sm:text-2xl mb-8 transform animate__animated animate__fadeIn animate__delay-1.5s">
          Conoce nuestra nueva colección, recién horneada y lista para disfrutar.
        </p>
      </header>

      {/* Cuadrícula de imágenes con hover y sombras */}
      <div className="relative z-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-5xl px-4 mb-16">
        {/* Card 1 */}
        <div className="group relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
          <Image
            src="/images/ta7.png"
            alt="Mini Hershey's Chocolate Bar"
            width={600}
            height={600}
            className="object-cover w-full h-full transform group-hover:scale-105 transition duration-500 ease-in-out"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-yellow-950 bg-opacity-50 text-orange-100 text-center py-4 px-6">
            <h3 className="text-2xl font-semibold">Mini Hersheys</h3>
          </div>
        </div>

        {/* Card 2 */}
        <div className="group relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
          <Image
            src="/images/ta2.png"
            alt="Roasted Marshmallow"
            width={600}
            height={600}
            className="object-cover w-full h-full transform group-hover:scale-105 transition duration-500 ease-in-out"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-yellow-950 bg-opacity-50 text-orange-100 text-center py-4 px-6">
            <h3 className="text-2xl font-semibold">Malvavisco Tostado</h3>
          </div>
        </div>

        {/* Card 3 */}
        <div className="group relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
          <Image
            src="/images/ta1.png"
            alt="Chocolate Chips"
            width={600}
            height={600}
            className="object-cover w-full h-full transform group-hover:scale-105 transition duration-500 ease-in-out"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-yellow-950 bg-opacity-50 text-orange-100 text-center py-4 px-6">
            <h3 className="text-2xl font-semibold">Chispas de Chocolate</h3>
          </div>
        </div>
      </div>
      {/* Descripción con fondo oscuro y efecto de imagen sobrepuesta */}
      <div className="relative z-20 bg-yellow-950 bg-opacity-70 text-orange-100 px-6 py-16 w-full">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">¡Todo lo que necesitas, a un solo clic!</h2>
        <p className="text-lg sm:text-xl text-center max-w-3xl mx-auto">
          Imagina disfrutar de galletas frescas y deliciosas, sin tener que encender el horno. Nuestra colección ofrece todo lo que necesitas para deleitar tu paladar sin esfuerzo. ¡Compra ahora y siente el sabor de lo recién horneado!
        </p>
      </div>
      <div className="relative z-20 py-8">
        <Link href="/Productos">
          <button className="text-lg bg-yellow-950 text-orange-100 px-8 py-4 rounded-full font-semibold transform hover:scale-110 transition duration-300 ease-in-out">
            ¡Explora la Colección!
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Servicios;
