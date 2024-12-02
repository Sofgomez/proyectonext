import { useState, useEffect } from "react"; 
import Layout from "../components/main/Layout";
import Image from "next/image";
import Link from "next/link";

function Productos() {
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
  const [showCart, setShowCart] = useState(false); // Agregado aquí

  // Recuperar carrito desde localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Guardar carrito en localStorage
  const saveCartToLocalStorage = (updatedCart) => {
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Agregar producto al carrito
  const addToCart = (producto) => {
    const updatedCart = [...cart];
    const existingItem = updatedCart.find((item) => item.id === producto.id);

    if (existingItem) {
      existingItem.cantidad += 1;
    } else {
      updatedCart.push({ ...producto, cantidad: 1 });
    }

    saveCartToLocalStorage(updatedCart);
  };

  // Eliminar producto del carrito
  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    saveCartToLocalStorage(updatedCart);
  };

  // Calcular total del carrito
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.precio * item.cantidad, 0);
  };

  return (
    <Layout>
      <div className="bg-orange-100 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-extrabold text-center text-yellow-900 mb-12">
            Nuestros Productos
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {productos.map((producto) => (
              <div
                key={producto.id}
                className="bg-orange-50 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex justify-center items-center w-full h-64 bg-yellow-900 rounded-t-xl">
                  <Image
                    src={producto.imagen}
                    alt={producto.nombre}
                    width={200}
                    height={200}
                    objectFit="contain"
                    className="rounded-lg"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {producto.nombre}
                  </h2>
                  <p className="text-gray-700 mt-2">{producto.descripcion}</p>
                  <p className="text-xl font-semibold text-yellow-900 mt-3">
                    €{producto.precio.toFixed(2)}
                  </p>
                  <button
                    onClick={() => addToCart(producto)}
                    className="mt-4 bg-yellow-900 text-white px-6 py-2 rounded-full hover:bg-yellow-700 transition duration-300"
                  >
                    Agregar al carrito
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        className={`fixed top-0 right-0 h-full w-90 bg-orange-100 text-black shadow-2xl transform ${
          showCart ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 z-50`}
      >
        <div className="p-6 space-y-6">
          <h2 className="text-2xl font-bold mb-4">Carrito</h2>
          {cart.length === 0 ? (
            <p>Tu carrito está vacío</p>
          ) : (
            <ul className="space-y-4">
              {cart.map((item) => (
                <li key={item.id} className="flex items-center justify-between border-b pb-4">
                  <div className="flex items-center space-x-4">
                    <Image
                      src={item.imagen}
                      alt={item.nombre}
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                    <div>
                      <h3 className="font-semibold">{item.nombre}</h3>
                      <p className="text-sm text-gray-950">
                        €{item.precio.toFixed(2)} x {item.cantidad}
                      </p>
                    </div>
                  </div>
                  <button
                    className="text-yellow-900 hover:text-yellow-700 font-bold"
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
              Total: €{calculateTotal().toFixed(2)}
            </p>
            <Link href="/Chekaout">
              <button className="mt-4 bg-yellow-900 text-white px-6 py-2 rounded-full hover:bg-yellow-700 transition duration-300">
                Ir a pagar
              </button>
            </Link>
          </div>
        </div>
      </div>
      <button
        onClick={() => setShowCart(!showCart)}
        className="fixed bottom-4 right-4 bg-orange-100 text-yellow-900 p-4 rounded-full shadow-lg"
      >
        {showCart ? "Ocultar carrito" : "Mostrar carrito"}
      </button>
    </Layout>
  );
}

export default Productos;
