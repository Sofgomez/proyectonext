import Layout from "../components/main/Layout";
import Image from "next/image";
import Link from "next/link"; 
import { useState } from "react";

const Nosotros = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Layout>
      <div className="bg-gradient-to-r bg-orange-100 flex flex-col items-center justify-center py-16">
        {/* Sección de introducción */}
        <div className="relative w-full max-w-6xl px-6 md:px-16 text-center">
          <h1 className="text-5xl font-extrabold text-yellow-900 mb-4 animate__animated animate__fadeIn">
            Bienvenidos a La Cookie
          </h1>
          <p className="text-lg text-black leading-relaxed mb-6 animate__animated animate__fadeIn animate__delay-1s">
            En La Cookie, transformamos momentos especiales en experiencias inolvidables con nuestras galletas personalizadas. 
            Estamos comprometidos con la calidad, la creatividad y, por supuesto, el sabor.
          </p>

          {/* Imagen principal de la empresa */}
          <div className="relative mb-8">
            <Image
              src="/images/nosotros2.png"
              alt="Imagen principal de La Cookie"
              className="rounded-lg shadow-2xl transform transition duration-500 hover:scale-105 hover:shadow-xl"
              width={800}
              height={600}
              priority
            />
            <div className="absolute inset-0 flex items-center justify-center bg-yellow-950 bg-opacity-50 text-white text-lg font-bold rounded-lg p-4 opacity-0 hover:opacity-100 transition-opacity duration-500">
              ¡Descubre nuestra historia y productos!
            </div>
          </div>

          <Link href="/Productos">
            <button className="px-8 py-4 bg-yellow-900 text-white text-xl font-bold rounded-full hover:bg-yellow-800 transition-all">
              Explora nuestras Galletas
            </button>
          </Link>
        </div>

        {/* Sección de Historia */}
        <div className="relative w-full max-w-6xl px-6 md:px-16 mt-16 mb-8">
          <h2 className="text-4xl font-extrabold text-yellow-900 text-center mb-6">Nuestra Historia</h2>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2">
              <p className="text-lg text-yellow-950 leading-relaxed mb-4 animate__animated animate__fadeIn animate__delay-1s">
                La Cookie comenzó como un sueño pequeño: ofrecer galletas que no solo fueran deliciosas, sino que también contaran una historia. 
                Hoy, seguimos comprometidos con crear productos que celebren cada ocasión especial, desde la primera mordida hasta el último detalle.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="relative">
                <Image
                  src="/images/nosotros4.png"
                  alt="Imagen de la historia de La Cookie"
                  className="rounded-lg shadow-2xl transform transition duration-500 hover:scale-105"
                  width={600}
                  height={400}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-yellow-950 bg-opacity-50 text-white text-lg font-bold rounded-lg p-4 opacity-0 hover:opacity-100 transition-opacity duration-500">
                  Artesanía en cada galleta.
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Sección del equipo */}
        <div className="relative w-full max-w-6xl px-6 md:px-16 mb-16">
          <h2 className="text-4xl font-extrabold text-yellow-900 text-center mb-6">Nuestro Equipo</h2>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2">
              <p className="text-lg text-yellow-950 leading-relaxed mb-4 animate__animated animate__fadeIn animate__delay-1s">
                Nuestro equipo está formado por reposteros apasionados y creativos que buscan siempre la perfección. 
                Cada miembro tiene una historia que contar a través de nuestras galletas, haciendo de cada producto una obra de arte única.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="relative">
                <Image
                  src="/images/nosotros5.png"
                  alt="Imagen del equipo de La Cookie"
                  className="rounded-lg shadow-2xl transform transition duration-500 hover:scale-105"
                  width={600}
                  height={400}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-yellow-950 bg-opacity-50 text-white text-lg font-bold rounded-lg p-4 opacity-0 hover:opacity-100 transition-opacity duration-500">
                  Un equipo dedicado a la excelencia.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Imagen final con invitación */}
        <div className="relative w-full max-w-6xl px-6 md:px-16">
          <h2 className="text-4xl font-extrabold text-yellow-900 text-center mb-6">Únete a la Experiencia</h2>
          <div className="relative">
            <Image
              src="/images/nosotros6.png"
              alt="Imagen final"
              className="rounded-lg shadow-2xl transform transition duration-500 hover:scale-105"
              width={800}
              height={600}
            />
             <Link href="/Chekaout">
              <div className="absolute inset-0 flex items-center justify-center bg-yellow-950 bg-opacity-50 text-white text-lg font-bold rounded-lg p-4 opacity-0 hover:opacity-100 transition-opacity duration-500">
               ¡Haz tu pedido ahora!
              </div>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Nosotros;
