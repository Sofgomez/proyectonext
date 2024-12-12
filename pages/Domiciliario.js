import React, { useState } from "react";
import Image from "next/image";
import Layout from "../components/main/Layout"; 
import Link from "next/link";

const Domiciliario = () => {
  const [userData, setUserData] = useState({
    nombre: "Carlos Gómez",
    email: "carlos.gomez@example.com",
    pedidosAsignados: 8,
    imagenPerfil: "/images/profile-placeholder.png",
    estado: "Activo", // estado de disponibilidad
  });

  const [editMode, setEditMode] = useState(false);
  const [newNombre, setNewNombre] = useState(userData.nombre);
  const [newImagenPerfil, setNewImagenPerfil] = useState(userData.imagenPerfil);

  const handleSave = () => {
    setUserData({
      ...userData,
      nombre: newNombre,
      imagenPerfil: newImagenPerfil,
    });
    setEditMode(false);
    alert("Perfil actualizado correctamente.");
  };

  const handleCerrarSesion = () => {
    alert("Sesión cerrada");
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-purple-100">
      <header className="bg-purple-900 text-pink-100 py-4 px-6 shadow-xl flex justify-between items-center">
        <h1 className="text-3xl font-extrabold tracking-wide">🚚 Panel del Domiciliario</h1>
        <Link href="./">
        <button
          onClick={handleCerrarSesion}
          className="bg-pink-100 text-purple-900 px-6 py-2 rounded-full hover:bg-pink-200 transition font-medium"
        >
          Cerrar Sesión
        </button> 
        </Link>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Perfil del domiciliario */}
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
              <p className="text-gray-600">🛍️ Pedidos Asignados: {userData.pedidosAsignados}</p>
              <p className="text-sm font-semibold text-green-600">📍 Estado: {userData.estado}</p>
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
                Nombre de Usuario:
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
          <h2 className="text-2xl font-extrabold mb-6 text-purple-900">📊 Estadísticas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-purple-50 p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold text-purple-900">Total Entregas</h3>
              <p className="text-3xl text-purple-800">45</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold text-purple-900">Promedio de Entrega</h3>
              <p className="text-3xl text-purple-800">30 Minutos</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold text-purple-900">Calificación Promedio</h3>
              <p className="text-3xl text-purple-800">4.8 ⭐</p>
            </div>
          </div>
        </section>

        {/* Historial de pedidos */}
        <section className="bg-white shadow-xl rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-extrabold mb-6 text-purple-900">📜 Historial de Pedidos</h2>
          <div className="space-y-4">
            {[...Array(5)].map((_, index) => (
              <div key={index} className="bg-purple-100 p-4 rounded-lg shadow-md flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-purple-900">Pedido #{index + 1}</h3>
                  <p className="text-gray-600">🗓️ Fecha: 2024-12-01</p>
                  <p className="text-gray-600">🍪 Producto: Galletas de Chocolate</p>
                </div>
                <p className="text-sm text-purple-800 font-semibold">Estado: Entregado ✅</p>
              </div>
            ))}
          </div>
        </section>

        {/* Notificaciones */}
        <section className="bg-white shadow-xl rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-extrabold mb-6 text-purple-900">🔔 Notificaciones</h2>
          <div className="space-y-4">
            <div className="bg-purple-100 p-4 rounded-lg shadow-md">
              <p className="font-semibold text-purple-900">Nuevo Pedido Asignado</p>
              <p className="text-gray-600">Tienes un nuevo pedido para entregar en la zona 5.</p>
            </div>
            <div className="bg-purple-100 p-4 rounded-lg shadow-md">
              <p className="font-semibold text-purple-900">Recordatorio de Entrega</p>
              <p className="text-gray-600">Recuerda que tu próxima entrega es en 15 minutos.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
    </Layout>
    
  );
};

export default Domiciliario;
