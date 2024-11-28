import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-yellow-900 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Sección superior */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="mb-4">
          <Link href="/">
              <Image
                src="/images/logo.png"
                width={150}
                height={150}
                className="object-contain"
                alt="logo"
              />
            </Link>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-3">Enlaces</h3>
            <ul className="space-y-2">
              <li>
               <Link href="/">
                <span className="hover:text-amber-950 block md:inline-block">Inicio</span>
               </Link>
              </li>
              <li>
              <Link href="/Nosotros">
                <span className="hover:text-amber-950 block md:inline-block">Nosotros</span>
              </Link>
              </li>
              <li>
               <Link href="/Productos">
                <span className="hover:text-amber-950 block md:inline-block">Productos</span>
               </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: Redes sociales */}
          <div>
            <h3 className="text-lg font-bold mb-4">Síguenos</h3>
            <div className="flex space-x-20">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
               <Image 
               src="/images/red1.png" 
               alt="Facebook"
               width={40} 
               height={40}
               className="hover:opacity-75 transition duration-300"
               />
              </a>
              <a
                href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Image 
                 src="/images/red2.png" 
                 alt="twitter"
                 width={40} 
                 height={40}
                 className="hover:opacity-75 transition duration-300"
               />
              </a>
              <a
                href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Image 
                 src="/images/red3.png" 
                 alt="Instagram"
                 width={40} 
                 height={40}
                 className="hover:opacity-75 transition duration-300"
               />
              </a>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-gray-400 mt-8 pt-4">
  <p className="text-center text-gray-200 text-sm">
    &copy; {new Date().getFullYear()} 
    <Image src="/images/logo.png" alt="logo"  width={20} height={20}  className="w-10 h-10 rounded-full inline-block"/> 
    Todos los derechos reservados.
  </p>
</div>
      </div>
    </footer>
  );
};

export default Footer;