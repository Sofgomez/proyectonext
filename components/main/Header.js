import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link"; 

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // Estado para el menú móvil
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para la ventana modal

  return (
    <>
      <header className="bg-yellow-900 text-orange-100 shadow-md">
        <div className="container mx-auto px-5 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-5">
            {/* Enlace al logo */}
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

          <nav
            className={`md:flex items-center space-x-10 ${isOpen ? "block" : "hidden"} md:block`}
          >
            {/* Enlace para la página principal */}
            <Link href="/">
              <span className="hover:text-amber-950 block md:inline-block">Inicio</span>
            </Link>

            {/* Otros enlaces */}
            <Link href="/Nosotros">
              <span className="hover:text-amber-950 block md:inline-block">Nosotros</span>
            </Link>

            {/* Enlace para la página de productos */}
            <Link href="/Productos">
              <span className="hover:text-amber-950 block md:inline-block">Productos</span>
            </Link>

            {/* Botón de Inicio de Sesión */}
            <button
              onClick={() => setIsModalOpen(true)} // Abre el modal al hacer clic
              className="bg-yellow-900 text-orange-100 py-2 px-4 rounded-lg hover:bg-yellow-800 transition duration-300 block md:inline-block"
            >
              Sesión
            </button>
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

      {/* Modal del formulario */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-transparent rounded-lg p-10 shadow-lg relative backdrop-blur-lg">
            {/* Formulario */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-5xl font-extrabold text-center text-orange-100 mb-3 font-playfair display">
                Sesion
              </h2>
              {/* Botón para cerrar el modal */}
              <button
                className="text-black hover:text-yellow-800"
                onClick={() => setIsModalOpen(false)}
              >
                ✖
              </button>
            </div>

            <form>
              <div className="mb-4">
                <label htmlFor="email" className="block text-orange-100 font-medium mb-2">
                  Correo Electrónico:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2"
                  placeholder="Ingrese su correo"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-orange-100 font-medium mb-2">
                  Contraseña:
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2"
                  placeholder="Ingrese su contraseña"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-yellow-950 text-orange-100 py-2 px-4 rounded-lg hover:bg-yellow-900 transition duration-300">
                Iniciar Sesión
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
