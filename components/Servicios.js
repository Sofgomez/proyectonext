import React from 'react';
import Image from 'next/image'; 

const Servicios = () => {
  return (
    <section id="services" className="py-20 bg-yellow-900">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-extrabold text-center text-orange-200 mb-8 font-playfair display">
          Nuestros Servicios
        </h2>
        <p className="text-lg text-white mb-8">
          Descubre los deliciosos servicios que ofrecemos para endulzar tus momentos.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Servicio 1 */}
          <div className="bg-orange-200 p-6 rounded-lg shadow-lg flex flex-col items-center justify-center">
            <div className="w-80 h-80 overflow-hidden rounded-lg mb-4">
              <Image
                src="/images/personalizadaa.png"
                alt="Galletas Personalizadas"
                width={200}
                height={200}
                className="object-cover w-full h-full"
              />
            </div>
            <h3 className="text-yellow-900 mb-4">Galletas Personalizadas</h3>
            <p className="text-black text-xl">
              Creamos galletas únicas con diseños personalizados para cada ocasión. ¡Haz tus eventos aún más especiales!
            </p>
          </div>
          {/* Servicio 2 */}
          <div className="bg-orange-200 p-6 rounded-lg shadow-lg flex flex-col items-center justify-center">
            <div className="w-80 h-80 overflow-hidden rounded-lg mb-4">
              <Image
                src="/images/domicilio.png"
                alt="Envíos a Domicilio"
                width={240}
                height={240}
                className="object-cover w-full h-full"
              />
            </div>
            <h3 className="text-yellow-900 mb-4">Envíos a Domicilio</h3>
            <p className="text-black text-xl">
              Ofrecemos entregas rápidas y seguras de nuestras galletas frescas y deliciosas directamente a tu puerta.
            </p>
          </div>
          {/* Servicio 3 */}
          <div className="bg-orange-200 p-6 rounded-lg shadow-lg flex flex-col items-center justify-center">
            <div className="w-80 h-50 overflow-hidden rounded-lg mb-4">
              <Image
                src="/images/decoracion.png"
                alt="Talleres de Decoración"
                width={200}
                height={200}
                className="object-cover w-full h-full"
              />
            </div>
            <h3 className="text-yellow-900 mb-4">Talleres de Decoración</h3>
            <p className="text-black text-xl">
              Aprende a decorar tus propias galletas con nuestros divertidos y creativos talleres.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Servicios;
