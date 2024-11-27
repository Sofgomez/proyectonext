import React, { useState } from "react";
import Image from "next/image";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-yellow-900 text-white shadow-md">
      <div className="container mx-auto px-10 py-3 flex items-center justify-between">
      <div className="flex items-center">
          <Image src="/images/logo.png" width={150} height={150} className="object-contain" alt="logo"/>
      </div>


        {/* Navegación */}
        <nav className={`md:flex space-x-20 ${isOpen ? "block" : "hidden"} md:block`}>
          <a href="#home" className="hover:text-amber-950 block md:inline-block">Inicio</a>
          <a href="#about" className="hover:text-amber-950 block md:inline-block">Acerca</a>
          <a href="#services" className="hover:text-amber-950 block md:inline-block">Servicios</a>
          <a href="#contact" className="hover:text-amber-950 block md:inline-block">Contacto</a>
        </nav>

        {/* Botón para móvil */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>
    </header>
  );
};

export default Header;
