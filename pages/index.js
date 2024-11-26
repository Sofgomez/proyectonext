import Layout from "@/components/main/Layout";
import Image from "next/image";

export default function Home() {
  return (
   <Layout>
     <section className="bg-yellow-800 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Bienvenido a Mi Empresa
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Ofrecemos servicios de alta calidad para llevar tu negocio al
            siguiente nivel.
          </p>
        </div>
      </section>

      {/* Acerca de nosotros */}
      <section id="about" className="py-20 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Acerca de nosotros</h2>
          <p className="text-lg text-gray-600 mb-8">
            Somos una empresa dedicada a brindar soluciones personalizadas para
            nuestros clientes. Nuestra misión es ayudarte a alcanzar tus metas.
          </p>
          <div className="flex flex-wrap justify-center space-x-6">
            <Image
              src="/images/team.jpg"
              alt="Nuestro equipo"
              width={400}
              height={250}
              className="rounded-lg shadow-lg"
            />
            <Image
              src="/images/office.jpg"
              alt="Nuestra oficina"
              width={400}
              height={250}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Servicios destacados */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Nuestros Servicios</h2>
          <p className="text-lg text-gray-600 mb-8">
            Conoce las soluciones que ofrecemos.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Consultoría</h3>
              <p className="text-gray-600">
                Te ayudamos a desarrollar estrategias ganadoras.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Desarrollo Web</h3>
              <p className="text-gray-600">
                Creamos sitios web modernos y funcionales.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Marketing Digital</h3>
              <p className="text-gray-600">
                Lleva tu marca al siguiente nivel con campañas efectivas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section id="testimonials" className="py-20 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Lo que dicen nuestros clientes</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="italic text-gray-600">
                La experiencia con esta empresa ha sido increíble. ¡Los
                recomiendo al 100%!
              </p>
              <h4 className="font-bold mt-4">- Cliente 1</h4>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="italic text-gray-600">
                Gracias a su equipo, nuestro negocio ha crecido
                exponencialmente.
              </p>
              <h4 className="font-bold mt-4">- Cliente 2</h4>
            </div>
          </div>
        </div>
      </section>

   </Layout>
  );
}
