import Layout from "../components/main/Layout";
import Image from 'next/image';
import Link from "next/link"; 

const Nosotros = () => {
  return (
    <Layout>
      <div className="bg-orange-200 min-h-screen flex items-center justify-center">
      <main className="flex flex-col md:flex-row items-center md:justify-center px-6 md:px-16 py-10 md:py-20 gap-10">
        {/* Contenido de texto */}
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-900 mb-4">
            Nosotros
          </h1>
          <p className="text-lg text-black mb-6 leading-relaxed">
            En La Cookie, somos apasionados por crear experiencias únicas a través de nuestras deliciosas galletas. 
            Nuestra misión es ofrecer productos frescos y personalizados que marquen la diferencia en cada bocado.
            Estamos comprometidos con la calidad, el sabor y el diseño de cada galleta que sale de nuestro horno.
          </p>
          <div className="flex flex-col items-center md:justify-center">
           <Image
            src="/images/nosotros4.png"
            alt="Imagen"
            className="rounded-lg"
            width={100} 
            height={100}
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-900 mb-4">
           Nuestra Historia
          </h1>
          <p className="text-lg text-black mb-6 leading-relaxed">
          La Cookie comenzó con el sueño de ofrecer galletas de calidad, personalizadas para cada ocasión. Desde sus inicios, 
          nuestra empresa se ha enfocado en ofrecer lo mejor, con un proceso artesanal que hace de nuestras galletas un producto único. 
          Nos enorgullece trabajar con los mejores ingredientes y en una atmósfera de creatividad y dedicación.
          </p>
          <div className="flex flex-col items-center md:justify-center">
           <Image
            src="/images/nosotros5.png"
            alt="Imagen"
            className="rounded-lg"
            width={100} 
            height={100}
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-900 mb-4">
           Nuestro Equipo
          </h1>
          <p className="text-lg text-black mb-6 leading-relaxed">
          Nuestro equipo está formado por expertos en repostería, creativos y apasionados por hacer las mejores galletas del mercado. 
          Cada miembro aporta su talento y dedicación para ofrecer productos frescos, de calidad y que superen las expectativas de nuestros clientes.
          </p>
          <div className="flex flex-col items-center md:justify-center">
           <Image
            src="/images/nosotros6.png"
            alt="Imagen"
            className="rounded-lg"
            width={100} 
            height={100}
            />
          </div>
          
          <Link href="/Productos">
          <button className="px-6 py-3 bg-yellow-900 text-white text-xl font-bold rounded-full hover:bg-yellow-800 transition-all">
            Ordenar
          </button>
        </Link>

        </div>
        <div className="md:w-1/2">
          <Image
            src="/images/nosotros2.png"
            alt="Imagen"
            className="rounded-lg"
            width={800} 
            height={800}
            priority={true} 
          />
        </div>
      </main>
    </div>
    </Layout>
  );
};
export default Nosotros;
