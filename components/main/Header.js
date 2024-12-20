import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // Estado para el menú móvil
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para la ventana modal
  const [isLogin, setIsLogin] = useState(true); // Estado para alternar entre login y registro
  const [user, setUser] = useState(null); // Estado para simular el usuario autenticado
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const router = useRouter();

  // Función para obtener el usuario autenticado desde el almacenamiento local
  const getUserFromLocalStorage = () => {
    const storedUser  = localStorage.getItem("user");
    if (storedUser ) {
      setUser(JSON.parse(storedUser ));
    }
  };

  // Función para actualizar el usuario autenticado en el almacenamiento local
  const updateUserInLocalStorage = (newUser ) => {
    localStorage.setItem("user", JSON.stringify(newUser));
    setUser(newUser);
  };

  useEffect(() => {
    getUserFromLocalStorage();
  }, []);

  const handleAuthSubmit = (e) => {
    e.preventDefault();
  
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");
    const userType = formData.get("userType");
  
    // Validaciones básicas
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      alert("Por favor, ingresa un correo válido.");
      return;
    }

      if (password.length < 6) {
      setShowErrorMessage(true); // Muestra el mensaje de error si la contraseña es inválida
      return;
    }
  
    // Simulación de autenticación o registro
    if (isLogin) {
      if (email && password) {
        const mockUser = {
          email,
          userType: "user", // Cambiar manualmente a "delivery" para probar
        };
        updateUserInLocalStorage(mockUser);
        setIsModalOpen(false);
  
        // Redirección después del inicio de sesión
        router.push(mockUser.userType === "user" ? "/Cliente" : "/Domiciliario");
      }
    } else {
      if (email && password && userType) {
        const newUser = { email, userType };
        updateUserInLocalStorage(newUser);
        setIsModalOpen(false);
  
        // Redirección después del registro
        router.push(userType === "user" ? "/Cliente" : "/Domiciliario");
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    router.push("/"); // Redirigir a inicio al cerrar sesión
  };

  const handleProfileClick = () => {
    if (user?.userType === "user") {
      router.push("/Cliente");
    } else if (user?.userType === "delivery") {
      router.push("/Domiciliario");
    }
  };

  return (
    <>
      <header className="bg-purple-900 text-purple-100 shadow-md">
        <div className="container mx-auto px-5 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-5">
            {/* Enlace al logo */}
            <Link href="/">
              <Image
                src="/images/log.png"
                width={120}
                height={120}
                className="object-contain"
                alt="logo"
              />
            </Link>
          </div>

          <nav
            className={`md:flex items-center space-x-10 ${isOpen ? "block" : "hidden"} md:block`}
          >
            <Link href="/">
              <span className="hover:text-purple-200 block md:inline-block">Inicio</span>
            </Link>
            <Link href="/Nosotros">
              <span className="hover:text-purple-200 block md:inline-block">Nosotros</span>
            </Link>
            <Link href="/Productos">
              <span className="hover:text-purple-200 block md:inline-block">Productos</span>
            </Link>

            {/* Si el usuario no está autenticado */}
            {!user && (
              <button
                onClick={() => setIsModalOpen(true)} // Abre el modal al hacer clic
                className="bg-purple-900 text-purple-100 py-2 px-4 rounded-lg hover:bg-purple-800 transition duration-300 block md:inline-block"
              >
                Sesión
              </button>
            )}

            {/* Si el usuario está autenticado */}
            {user && (
              <div className="flex items-center space-x-4">
                {/* Foto de perfil y nombre */}
                <button
                  onClick={handleProfileClick}
                  className="flex items-center space-x-2 text-purple-100 hover:text-purple-200"
                >
                  <Image
                    src="/images/userss.png" // Imagen predeterminada para el usuario
                    alt="Imagen"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <span className="hidden sm:block">{user.email.split('@')[0]}</span> {/* Mostrar solo el nombre de usuario */}
                </button>
                <button
                  onClick={handleLogout}
                  className="text-purple-400 hover:underline"
                >
                  Cerrar Sesión
                </button>
              </div>
            )}
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
              <h2 className="text-3xl font-extrabold text-center text-purple-100 mb-3 font-playfair display">
                {isLogin ? "Iniciar Sesión" : "Registro"}
              </h2>
              <button
                className="text-black hover:text-purple-800"
                onClick={() => setIsModalOpen(false)}
              >
                ✖
              </button>
            </div>

            <form onSubmit={handleAuthSubmit}>
              {!isLogin && (
                <div className="mb-4">
                  <label htmlFor="username" className="block text-purple-100 font-medium mb-2">
                    Nombre de Usuario:
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2"
                    placeholder="Ingrese su nombre de usuario"
                    required
                  />
                </div>
              )}
              <div className="mb-4">
                <label htmlFor="email" className="block text-purple-100 font-medium mb-2">
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
                <label htmlFor="password" className="block text-purple-100 font-medium mb-2">
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
              {!isLogin && (
                <div className="mb-4">
                  <label htmlFor="userType" className="block text-purple-100 font-medium mb-2">
                    Tipo de Usuario:
                  </label>
                  <select
                    id="userType"
                    name="userType"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2"
                    required
                  >
                    <option value="user">Cliente</option>
                    <option value="delivery">Domiciliario</option>
                  </select>
                </div>
              )}
              <button
                type="submit"
                className="w-full bg-purple-950 text-purple-100 py-2 px-4 rounded-lg hover:bg-purple-900 transition duration-300"
              >
                {isLogin ? "Iniciar Sesión" : "Registrarse"}
              </button>
            </form>

             {/* Mensaje de error */}
             {showErrorMessage && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                  <div className="bg-white p-8 rounded-lg text-center text-purple-700 shadow-lg transform transition-all scale-95 animate-popup">
                    <p className="text-xl font-semibold mb-4">Error</p>
                    <p className="text-lg font-medium mb-6">
                      La contraseña debe tener al menos 6 caracteres.
                    </p>
                    <button
                      onClick={() => setShowErrorMessage(false)}
                      className="bg-purple-700 text-white py-2 px-8 rounded-md hover:bg-purple-800 transition duration-300"
                      >
                      Cerrar
                    </button>
                  </div>
                </div>
              )}
            {/* Alternar entre login y registro */}
            <p className="mt-4 text-center text-purple-100">
              {isLogin ? "¿No tienes una cuenta?" : "¿Ya tienes una cuenta?"}{" "}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-purple-400 hover:underline"
              >
                {isLogin ? "Regístrate aquí" : "Inicia sesión aquí"}
              </button>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
