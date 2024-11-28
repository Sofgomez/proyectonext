import { useState } from "react";
import Layout from "../components/main/Layout";
import Image from "next/image";
import Link from "next/link";

const Productos = () => {
  const productos = [
    {
      id: 1,
      nombre: "Galleta de Chocolate",
      descripcion: "Deliciosas galletas con trozos de chocolate belga.",
      precio: 5.99,
      imagen: "/images/galleta4.png",
    },
    {
      id: 2,
      nombre: "Galletas de Red Velvet",
      descripcion:
        "Crea tus propias galletas personalizadas para cualquier ocasión.",
      precio: 8.99,
      imagen: "/images/galleta3.png",
    },
    {
      id: 3,
      nombre: "Galletas de Vainilla",
      descripcion: "Galletas suaves con un toque de vainilla natural.",
      precio: 4.99,
      imagen: "/images/galleta5.png",
    },
    {
      id: 4,
      nombre: "Galletas de Vainilla",
      descripcion: "Galletas suaves con un toque de vainilla natural.",
      precio: 4.99,
      imagen: "/images/galleta6.png",
    },
    {
      id: 5,
      nombre: "Galletas de Vainilla",
      descripcion: "Galletas suaves con un toque de vainilla natural.",
      precio: 4.99,
      imagen: "/images/galleta7.png",
    },
    {
      id: 6,
      nombre: "Galletas de Vainilla",
      descripcion: "Galletas suaves con un toque de vainilla natural.",
      precio: 4.99,
      imagen: "/images/galleta8.png",
    },
    {
      id: 7,
      nombre: "Galletas de Vainilla",
      descripcion: "Galletas suaves con un toque de vainilla natural.",
      precio: 4.99,
      imagen: "/images/galleta9.png",
    },
    {
      id: 8,
      nombre: "Galletas de Vainilla",
      descripcion: "Galletas suaves con un toque de vainilla natural.",
      precio: 4.99,
      imagen: "/images/galleta10.png",
    },
  ];

  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  // Agregar producto al carrito
  const addToCart = (producto) => {
    setCart((prevCart) => {
      const itemExists = prevCart.find((item) => item.id === producto.id);
      if (itemExists) {
        return prevCart.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...producto, cantidad: 1 }];
      }
    });
  };

  // Eliminar producto del carrito
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Calcular total
  const calculateTotal = () =>
    cart.reduce((total, item) => total + item.precio * item.cantidad, 0);

  return (
    <Layout>
      <div className="bg-orange-200 py-16">
        <div className="container mx-auto px-5">
          {/* Título */}
          <h2 className="text-5xl font-extrabold text-center text-yellow-900 mb-8 font-playfair display">
            Nuestros Productos
          </h2>

          {/* Galería de productos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {productos.map((producto) => (
              <div
                key={producto.id}
                className="bg-yellow-900 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
              >
                <div className="flex justify-center items-center w-full h-64 bg-yellow-900">
                  <Image
                    src={producto.imagen}
                    alt={producto.nombre}
                    width={150}
                    height={150}
                    objectFit="contain"
                  />
                </div>

                <div className="p-6">
                  <h2 className="text-xl font-semibold text-white">
                    {producto.nombre}
                  </h2>
                  <p className="text-gray-200 mt-2">{producto.descripcion}</p>
                  <p className="text-xl font-semibold text-black mt-3">
                    €{producto.precio.toFixed(2)}
                  </p>

                  {/* Botón de agregar al carrito */}
                  <button
                    onClick={() => addToCart(producto)}
                    className="mt-4 bg-black text-white px-4 py-2 rounded-full hover:bg-yellow-800 transition duration-300"
                  >
                    Agregar al carrito
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Carrito lateral */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-yellow-900 shadow-lg transform ${
          showCart ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 z-50`}
      >
        <div className="p-4 space-y-4">
          <h2 className="text-2xl font-bold mb-4 text-white">Carrito</h2>
          {cart.length === 0 ? (
            <p className="text-white">Tu carrito está vacío</p>
          ) : (
            <ul className="space-y-4">
              {cart.map((item) => (
                <li
                key={item.id}
                className="flex items-center justify-between mb-4 border-b pb-4"
              >
                {/* Imagen y detalles del producto */}
                <div className="flex items-center space-x-4">
                  <Image
                    src={item.imagen}
                    alt={item.nombre}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="font-bold text-sm">{item.nombre}</h3>
                    <p className="text-sm text-white">
                      €{item.precio.toFixed(2)} x {item.cantidad}
                    </p>
                  </div>
                </div>
              
                {/* Botón Eliminar */}
                <button
                  className="text-black hover:text-amber-950 font-bold ml-auto"
                  onClick={() => removeFromCart(item.id)}
                >
                  Eliminar
                </button>
              </li>
              ))}
            </ul>
          )}

          <div className="mt-6 border-t pt-4">
            <p className="text-lg font-bold text-white">
              Total: €{calculateTotal().toFixed(2)}
            </p>
          </div>
        </div>
      </div>

      {/* Botón para abrir/ocultar carrito */}
      <button
        onClick={() => setShowCart(!showCart)}
        className="fixed top-4 right-4 bg-yellow-950 text-white px-4 py-2 rounded-full z-50 "
      >
        {showCart ? "Cerrar" : `Carrito (${cart.length})`}
      </button>
    </Layout>
  );
};

export default Productos;
