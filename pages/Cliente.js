import React, { useState } from "react";
import Image from "next/image";
import Layout from "../components/main/Layout";


const Usuario = () => {
  const [userData, setUserData] = useState({
    nombre: "Ana María López",
    email: "ana.lopez@example.com",
    pedidosRealizados: 15,
    saldo: 250,
    puntosFidelidad: 320,
    imagenPerfil: "/images/profile-placeholder.png",
  });

  const [editMode, setEditMode] = useState(false);
  const [newNombre, setNewNombre] = useState(userData.nombre);
  const [newEmail, setNewEmail] = useState(userData.email);
  const [newImagenPerfil, setNewImagenPerfil] = useState(userData.imagenPerfil);

  const handleSave = () => {
    setUserData({
      ...userData,
      nombre: newNombre,
      email: newEmail,
      imagenPerfil: newImagenPerfil,
    });
    setEditMode(false);
    alert("Perfil actualizado correctamente.");
  };

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
              src="/images/userss.png"
              alt="Perfil"
              width={100}
              height={100}
              className="w-24 h-24 rounded-full border-4 border-purple-900 shadow-lg"
            />
            <div>
              <h2 className="text-2xl font-bold text-purple-900">{userData.nombre}</h2>
              <p className="text-gray-600">📧 {userData.email}</p>
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

        {/* Sección de estadísticas */}
        <section className="bg-white shadow-xl rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-extrabold mb-6 text-purple-900">📊 Estadísticas de Compras</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-purple-50 p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold text-purple-900">Total Compras</h3>
              <p className="text-3xl text-purple-800">25</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold text-purple-900">Promedio de Gasto</h3>
              <p className="text-3xl text-purple-800">${userData.saldo / userData.pedidosRealizados}</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold text-purple-900">Descuentos Usados</h3>
              <p className="text-3xl text-purple-800">5</p>
            </div>
          </div>
        </section>

        {/* Historial de compras */}
        <section className="bg-white shadow-xl rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-extrabold mb-6 text-purple-900">📜 Historial de Compras</h2>
          <div className="space-y-4">
            {[...Array(5)].map((_, index) => (
              <div key={index} className="bg-purple-100 p-4 rounded-lg shadow-md flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-purple-900">Compra #{index + 1}</h3>
                  <p className="text-gray-600">🗓️ Fecha: 2024-12-01</p>
                  <p className="text-gray-600">🍪 Producto: Galletas de Vainilla</p>
                </div>
                <p className="text-sm text-purple-800 font-semibold">Estado: Enviado ✅</p>
              </div>
            ))}
          </div>
        </section>

        {/* Notificaciones */}
        <section className="bg-white shadow-xl rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-extrabold mb-6 text-purple-900">🔔 Notificaciones</h2>
          <div className="space-y-4">
            <div className="bg-purple-100 p-4 rounded-lg shadow-md">
              <p className="font-semibold text-purple-900">Nuevo Descuento Disponible</p>
              <p className="text-gray-600">Usa el código FESTIVO25 para un 25% de descuento en tu próxima compra.</p>
            </div>
            <div className="bg-purple-100 p-4 rounded-lg shadow-md">
              <p className="font-semibold text-purple-900">Recordatorio de Pedido</p>
              <p className="text-gray-600">Recuerda que tu pedido estará listo para envío en breve.</p>
            </div>
          </div>
        </section>
      </main>
      </div>
    </Layout>
  );
};

export default Usuario;
