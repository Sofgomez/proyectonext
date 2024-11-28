import Layout from "../components/main/Layout";
import Image from 'next/image'; 
import Link from 'next/link';

const Productos = () => {
  const productos = [
    {
      nombre: 'Galleta de Chocolate',
      descripcion: 'Deliciosas galletas con trozos de chocolate belga.',
      precio: '€5.99',
      imagen: '/images/galleta4.png'  
    },
    {
      nombre: 'Galletas de Red Velvet',
      descripcion: 'Crea tus propias galletas personalizadas para cualquier ocasión.',
      precio: '€8.99',
      imagen: '/images/galleta3.png'  
    },
    {
      nombre: 'Galletas de Vainilla',
      descripcion: 'Galletas suaves con un toque de vainilla natural.',
      precio: '€4.99',
      imagen: '/images/galleta5.png'  
    },
    {
      nombre: 'Galletas Sin Azúcar',
      descripcion: 'Galletas sin azúcar añadida para quienes buscan una opción más saludable.',
      precio: '€6.49',
      imagen: '/images/galleta6.png'  
    },
    {
      nombre: 'Galletas Sin Azúcar',
      descripcion: 'Galletas sin azúcar añadida para quienes buscan una opción más saludable.',
      precio: '€6.49',
      imagen: '/images/galleta7.png'  
    },
    {
      nombre: 'Galletas Sin Azúcar',
      descripcion: 'Galletas sin azúcar añadida para quienes buscan una opción más saludable.',
      precio: '€6.49',
      imagen: '/images/galleta8.png'  
    },
    {
      nombre: 'Galletas Sin Azúcar',
      descripcion: 'Galletas sin azúcar añadida para quienes buscan una opción más saludable.',
      precio: '€6.49',
      imagen: '/images/galleta9.png' 
    },
    {
      nombre: 'Galletas Sin Azúcar',
      descripcion: 'Galletas sin azúcar añadida para quienes buscan una opción más saludable.',
      precio: '€6.49',
      imagen: '/images/galleta10.png'  
    }
  ];

  return (
    <Layout>
      <div className="bg-orange-200 py-16">
        <div className="container mx-auto px-5">
          {/* Título de la página */}
          <h2 className="text-5xl font-extrabold text-center text-yellow-900 mb-8 font-playfair display">
           nuestros Productos
          </h2>

          {/* Galería de productos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {productos.map((producto, index) => (
              <div
                key={index}
                className="bg-yellow-900 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
              >
                {/* Contenedor de la imagen, ahora centrado */}
                <div className="flex justify-center items-center w-full h-64 bg-yellow-900">
                  <Image
                    src={producto.imagen}
                    alt={producto.nombre}
                    width={150}  // Ajusta el tamaño de la imagen según sea necesario
                    height={150} // Ajusta el tamaño de la imagen según sea necesario
                    objectFit="contain"  // Evita que la imagen se distorsione
                  />
                </div>

                <div className="p-6">
                  {/* Nombre del producto */}
                  <h2 className="text-xl font-semibold text-white">{producto.nombre}</h2>

                  {/* Descripción del producto */}
                  <p className="text-gray-200 mt-2">{producto.descripcion}</p>

                  {/* Precio del producto */}
                  <p className="text-xl font-semibold text-black mt-3">{producto.precio}</p>

                  {/* Enlace para más detalles */}
                  <Link href="/producto/[id]" as={`/producto/${producto.nombre}`}>
                    <span className="text-white mt-4 inline-block hover:text-orange-200 transition duration-300">
                      Ver detalles
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Productos;
