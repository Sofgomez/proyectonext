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
        saldo: 0, // El saldo se calculará dinámicamente
        puntosFidelidad: 0, // Se calcularán según las facturas
        imagenPerfil: "/images/userss.png",
      });
    }, 1000);
  });
};

const mockGetFacturas = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: "F001",
          fecha: "2024-12-01",
          productos: [
            { nombre: "Galleta Choco", cantidad: 2, precio: 5.0 },
            { nombre: "Galleta Vainilla", cantidad: 1, precio: 3.5 },
          ],
          total: 13.5,
        },
        {
          id: "F002",
          fecha: "2024-12-10",
          productos: [
            { nombre: "Brownie", cantidad: 3, precio: 7.0 },
          ],
          total: 21.0,
        },
      ]);
    }, 1000);
  });
};

const Usuario = () => {
  const [userData, setUserData] = useState(null);
  const [facturas, setFacturas] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [newNombre, setNewNombre] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newDireccion, setNewDireccion] = useState("");

  useEffect(() => {
    // Simula la carga de datos del usuario y facturas
    const fetchUserData = async () => {
      const user = await mockGetUserData();
      const facturas = await mockGetFacturas();

      // Calcular saldo total y puntos de fidelidad
      const saldo = facturas.reduce((sum, factura) => sum + factura.total, 0);
      const puntosFidelidad = saldo * 0.1; // Por ejemplo, 10% del gasto total

      setUserData({ ...user, saldo, puntosFidelidad });
      setFacturas(facturas);
      setNewNombre(user.nombre);
      setNewEmail(user.email);
      setNewDireccion(user.direccion);
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
    });
    setEditMode(false);
    alert("Perfil actualizado correctamente.");
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-100">
        <main className="container mx-auto px-4 py-8">
          {/* Perfil del usuario */}
          <section className="bg-white shadow-xl rounded-lg p-6 mb-8">
  {/* Verifica si userData está cargado */}
  {userData ? (
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
  ) : (
    <div className="text-1xl font-extrabold mb-4 text-purple-800">
      <p>Cargando perfil...</p> 
    </div>
  )}

  {/* Botón para editar perfil */}
  <button
    onClick={() => setEditMode(true)}
    className="mt-6 bg-purple-900 text-pink-100 py-2 px-6 rounded-full hover:bg-purple-800 transition font-medium shadow-md"
  >
    Editar Perfil
  </button>
</section>

 {/* Historial de facturas */}
 <section className="bg-white shadow-xl rounded-lg p-6">
            <h2 className="text-2xl font-bold text-purple-900 mb-4">Historial de Facturas</h2>
            {facturas.length > 0 ? (
              <ul className="space-y-4">
                {facturas.map((factura) => (
                  <li
                    key={factura.id}
                    className="p-4 border border-purple-300 rounded-lg shadow-sm"
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold text-purple-800">
                        Factura #{factura.id}
                      </h3>
                      <p className="text-sm text-gray-500">{factura.fecha}</p>
                    </div>
                    <ul className="mt-2 space-y-1">
                      {factura.productos.map((producto, index) => (
                        <li key={index} className="text-sm text-gray-700">
                          {producto.cantidad}x {producto.nombre} - ${producto.precio.toFixed(2)}
                        </li>
                      ))}
                    </ul>
                    <p className="text-right font-semibold text-purple-900 mt-2">
                      Total: ${factura.total.toFixed(2)}
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-purple-800">No hay facturas disponibles.</p>
            )}
          </section>

          {/* Formulario de edición */}
          {editMode && (
            <section className="bg-white shadow-xl rounded-lg p-6 mb-8">
              <h2 className="text-1xl font-extrabold mb-4 text-purple-900">Editar Perfil</h2>
              <div className="mb-4">
                <label htmlFor="nombre" className="block text-purple-900 font-medium mb-2">
                  Nombre:
                </label>
                <input
                  type="text"
                  id="nombre"
                  value={newNombre}
                  onChange={(e) => setNewNombre(e.target.value)}
                  className="w-full border border-purple-900 rounded-lg px-4 py-2 shadow-inner focus:outline-none focus:ring-2 focus:ring-purple-900"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-purple-900 font-medium mb-2">
                  Correo Electrónico:
                </label>
                <input
                  type="email"
                  id="email"
                  value={newEmail}
                  onChange={(e) => setNewEmail(e.target.value)}
                  className="w-full border border-purple-900 rounded-lg px-4 py-2 shadow-inner focus:outline-none focus:ring-2 focus:ring-purple-900"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="direccion" className="block text-purple-900 font-medium mb-2">
                  Dirección:
                </label>
                <input
                  type="text"
                  id="direccion"
                  value={newDireccion}
                  onChange={(e) => setNewDireccion(e.target.value)}
                  className="w-full border border-purple-900 rounded-lg px-4 py-2 shadow-inner focus:outline-none focus:ring-2 focus:ring-purple-900"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="imagenPerfil" className="block text-purple-900 font-medium mb-2">
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
                  className="w-full border border-purple-900 rounded-lg px-4 py-2 shadow-inner focus:outline-none focus:ring-2 focus:ring-purple-900"
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
                  className="bg-purple-900 text-pink-100 py-2 px-6 rounded-full hover:bg-purple-800 transition font-medium"
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
