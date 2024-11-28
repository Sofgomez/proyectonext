import { useState } from "react";
import Image from "next/image";

const cookies = [
  {
    id: 1,
    name: "Chocolate Chip Cookie",
    price: 3.5,
    image: "/images/galleta1", 
  },
  {
    id: 2,
    name: "Sugar Cookie",
    price: 3.0,
    image: "/images/galleta1",
  },
  {
    id: 3,
    name: "Peanut Butter Cookie",
    price: 4.0,
    image: "/images/galleta1",
  },
];

export default function Servicios() {
  const [cart, setCart] = useState([]);

  const addToCart = (cookie) => {
    setCart((prevCart) => {
      const itemExists = prevCart.find((item) => item.id === cookie.id);
      if (itemExists) {
        return prevCart.map((item) =>
          item.id === cookie.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...cookie, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.id !== id)
    );
  };

  const calculateTotal = () =>
    cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="bg-orange-200 min-h-screen">
      {/* Encabezado */}
      <header className="bg-yellow-900 p-4 flex justify-between items-center shadow-md">
        <h1 className="text-2xl font-bold text-black">Crumbl Inspired</h1>
        <button className="relative">
          <span className="text-lg font-bold text-black">Carrito</span>
          {cart.length > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white text-sm rounded-full w-5 h-5 flex items-center justify-center">
              {cart.length}
            </span>
          )}
        </button>
      </header>

      {/* Galería de productos */}
      <main className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cookies.map((cookie) => (
          <div
            key={cookie.id}
            className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center"
          >
            <Image
              src={cookie.image}
              alt={cookie.name}
              width={150}
              height={150}
              className="rounded"
            />
            <h2 className="text-xl font-bold mt-4">{cookie.name}</h2>
            <p className="text-lg text-gray-700 mt-2">${cookie.price.toFixed(2)}</p>
            <button
              className="bg-black text-white px-4 py-2 rounded-full mt-4 hover:bg-gray-800"
              onClick={() => addToCart(cookie)}
            >
              Agregar al carrito
            </button>
          </div>
        ))}
      </main>

      {/* Carrito */}
      <aside className="fixed top-0 right-0 bg-white w-80 h-full shadow-lg p-4 transform translate-x-full transition-transform duration-300">
        <h2 className="text-2xl font-bold mb-4">Carrito de Compras</h2>
        {cart.length === 0 ? (
          <p className="text-gray-500">Tu carrito está vacío</p>
        ) : (
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between items-center mb-4">
                <div>
                  <h3 className="font-bold">{item.name}</h3>
                  <p className="text-sm text-gray-600">
                    ${item.price.toFixed(2)} x {item.quantity}
                  </p>
                </div>
                <button
                  className="text-red-500 font-bold"
                  onClick={() => removeFromCart(item.id)}
                >
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
        )}
        <div className="mt-6 border-t pt-4">
          <p className="text-lg font-bold">
            Total: ${calculateTotal().toFixed(2)}
          </p>
        </div>
      </aside>
    </div>
  );
}
