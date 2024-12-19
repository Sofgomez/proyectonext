import React, { useState, useEffect } from "react";
import Image from "next/image";
import Layout from "../components/main/Layout";

// Simulando una API o un servicio de autenticación
const mockGetUserData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        nombre: "Ana María López",
        email: "ana.lopez@example.com",
        direccion: "Calle Ficticia 123, Ciudad, País",
        pedidosRealizados: 15,
        saldo: 250,
        puntosFidelidad: 320,
        imagenPerfil: "/images/profile-placeholder.png",
      });
    }, 1000); // Simula una carga de 1 segundo
  });
};

const Usuario = () => {
  const [userData, setUserData] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [newNombre, setNewNombre] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newDireccion, setNewDireccion] = useState("");
  const [newImagenPerfil, setNewImagenPerfil] = useState("");

  // Cargar los datos del usuario cuando el componente se monte
  useEffect(() => {
    const fetchUserData = async () => {
      const data = await mockGetUserData();
      setUserData(data);
      setNewNombre(data.nombre);
      setNewEmail(data.email);
      setNewDireccion(data.direccion);
      setNewImagenPerfil(data.imagenPerfil);
    };

    fetchUserData();
  }, []);

  // Guardar cambios en el perfil
  const handleSave = () => {
    setUserData({
      ...userData,
      nombre: newNombre,
      email: newEmail,
      direccion: newDireccion,
      imagenPerfil: newImagenPerfil,
    });
    setEditMode(false);
    alert("Perfil actualizado correctamente.");
  };

  if (!userData) {
    return <p>Cargando datos del usuario...</p>; // Muestra un mensaje mientras se cargan los datos
  }

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-100">
        <header className="bg-purple-900 text-pink-100 py-4 px-6 shadow-xl flex justify-between items-center">
          <h1 className="text-3xl font-extrabold tracking-wide">🍪 Panel del Usuario</h1>
        </header>

        <main className="container mx-auto px-4 py-8">
          {/* Perfil del usuario */}
          <section className="bg-white shadow-xl rounded-lg p-6 mb-8">
            <div className="flex items-center space-x-6">
              <Image
                src={userData.imagenPerfil}
                alt="Perfil"
                width={100}
                height={100}
                className="w-24 h-24 rounded-full border-4 border-purple-900 shadow-lg"
              />
              <div>
                <h2 className="text-2xl font-bold text-purple-900">{userData.nombre}</h2>
                <p className="text-gray-600">📧 {userData.email}</p>
                <p className="text-gray-600">🏠 Dirección: {userData.direccion}</p>
                <p className="text-gray-600">🛍️ Pedidos Realizados: {userData.pedidosRealizados}</p>
                <p className="text-sm font-semibold text-green-600">💰 Saldo: ${userData.saldo}</p>
                <p className="text-sm font-semibold text-yellow-600">🌟 Puntos de Fidelidad: {userData.puntosFidelidad}</p>
              </div>
            </div>

            {/* Botón para editar perfil */}
            <button
              onClick={() => setEditMode(true)}
              className="mt-6 bg-purple-900 text-pink-100 py-2 px-6 rounded-full hover:bg-purple-800 transition font-medium shadow-md"
            >
              Editar Perfil
            </button>
          </section>

          {/* Formulario de edición */}
          {editMode && (
            <section className="bg-white shadow-xl rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-extrabold mb-4 text-purple-900">Editar Perfil</h2>
              <div className="mb-4">
                <label htmlFor="nombre" className="block text-gray-600 font-medium mb-2">
                  Nombre:
                </label>
                <input
                  type="text"
                  id="nombre"
                  value={newNombre}
                  onChange={(e) => setNewNombre(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 shadow-inner focus:outline-none focus:ring-2 focus:ring-purple-900"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-600 font-medium mb-2">
                  Correo Electrónico:
                </label>
                <input
                  type="email"
                  id="email"
                  value={newEmail}
                  onChange={(e) => setNewEmail(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 shadow-inner focus:outline-none focus:ring-2 focus:ring-purple-900"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="direccion" className="block text-gray-600 font-medium mb-2">
                  Dirección:
                </label>
                <input
                  type="text"
                  id="direccion"
                  value={newDireccion}
                  onChange={(e) => setNewDireccion(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 shadow-inner focus:outline-none focus:ring-2 focus:ring-purple-900"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="imagenPerfil" className="block text-gray-600 font-medium mb-2">
                  Foto de Perfil:
                </label>
                <input
                  type="file"
                  id="imagenPerfil"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      const reader = new FileReader();
                      reader.onload = () => setNewImagenPerfil(reader.result);
                      reader.readAsDataURL(file);
                    }
                  }}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 shadow-inner focus:outline-none focus:ring-2 focus:ring-purple-900"
                />
              </div>
              <div className="flex space-x-4">
                <button
                  onClick={handleSave}
                  className="bg-purple-900 text-pink-100 py-2 px-6 rounded-full hover:bg-purple-800 transition font-medium shadow-md"
                >
                  Guardar Cambios
                </button>
                <button
                  onClick={() => setEditMode(false)}
                  className="bg-gray-300 text-gray-800 py-2 px-6 rounded-full hover:bg-gray-400 transition font-medium"
                >
                  Cancelar
                </button>
              </div>
            </section>
          )}
        </main>
      </div>
    </Layout>
  );
};

export default Usuario;
