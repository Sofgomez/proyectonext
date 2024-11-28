import Layout from "../components/main/Layout";
import Footer from "../components/main/Footer";
import Header from "../components/main/Header";
import Image from 'next/image';

const Nosotros = () => {
  return (
    <Layout>
      <div className="bg-orange-200">
        {/* Sección principal de "Nosotros" */}
        <div className="container mx-auto px-5 py-16">
          {/* Título principal */}
          <h1 className="text-5xl font-bold text-center text-yellow-900 mb-12">
            Nosotros
          </h1>

          {/* Sección de Introducción */}
          <div className="lg:flex lg:items-center lg:justify-between mb-16">
            {/* Imagen de la empresa */}
            <div className="lg:w-1/2 w-full mb-8 lg:mb-0">
              <div className="relative w-full h-96">
                <Image
                  src="/images/team1.png" // Reemplaza con tu imagen
                  alt="Nosotros"
                  width={350} 
                  height={350}
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </div>

            {/* Descripción */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <p className="text-lg text-gray-700 mb-6">
                En La Cookie, somos apasionados por crear experiencias únicas a través de nuestras deliciosas galletas.
                Nuestra misión es ofrecer productos frescos y personalizados que marquen la diferencia en cada bocado.
              </p>
              <p className="text-lg text-gray-700">
                Estamos comprometidos con la calidad, el sabor y el diseño de cada galleta que sale de nuestro horno.
              </p>
            </div>
          </div>

          {/* Sección con más detalles sobre la historia */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-yellow-900 mb-6">Nuestra Historia</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              La Cookie comenzó con el sueño de ofrecer galletas de calidad, personalizadas para cada ocasión. Desde sus inicios, nuestra empresa se ha enfocado en ofrecer lo mejor, con un proceso artesanal que hace de nuestras galletas un producto único. Nos enorgullece trabajar con los mejores ingredientes y en una atmósfera de creatividad y dedicación.
            </p>
          </div>

          {/* Sección del equipo */}
          <div className="lg:flex lg:items-center lg:justify-between mb-16">
            <div className="lg:w-1/2 w-full mb-8 lg:mb-0">
              <div className="relative w-full h-96">
                <Image
                  src="/images/team2.png" 
                  alt="Nuestro equipo"
                  width={350} 
                  height={350}
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </div>

            <div className="lg:w-1/2 text-center lg:text-left">
              <h3 className="text-3xl font-semibold text-yellow-900 mb-4">Nuestro Equipo</h3>
              <p className="text-lg text-gray-700 mb-6">
                Nuestro equipo está formado por expertos en repostería, creativos y apasionados por hacer las mejores galletas del mercado. Cada miembro aporta su talento y dedicación para ofrecer productos frescos, de calidad y que superen las expectativas de nuestros clientes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Nosotros;
