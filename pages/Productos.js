import { useState, useEffect } from "react"; 
import { useRouter } from "next/router"; 
import Layout from "../components/main/Layout";
import Image from "next/image";
import Link from "next/link";

function Productos() {
  const productos = [
    {
      id: 1,
      nombre: "Galleta de Oreo",
      descripcion: "Deliciosas galletas con trozos de chocolate belga.",
      precio: 3.00,
      imagen: "/images/galleta4.png",
    },
    {
      id: 2,
      nombre: "Galleta Red Velvet",
      descripcion: "Galleta de Red Velvet con una textura suave, cubierta con un glaseado de queso crema.",
      precio: 8.99,
      imagen: "/images/galleta3.png",
    },
    {
      id: 3,
      nombre: "Galleta de avena",
      descripcion: "Galletas suaves con un toque de vainilla natural.",
      precio: 4.99,
      imagen: "/images/galleta5.png",
    },
    {
      id: 4,
      nombre: "Galleta de Vainilla",
      descripcion: "Galletas suaves con un toque de vainilla natural.",
      precio: 4.99,
      imagen: "/images/galleta6.png",
    },
    {
      id: 5,
      nombre: "Galleta de yogurt",
      descripcion: "Galletas suaves con un toque de vainilla natural.",
      precio: 4.99,
      imagen: "/images/galleta7.png",
    },
    {
      id: 6,
      nombre: "Galleta de limon",
      descripcion: "Galletas suaves con un toque de vainilla natural.",
      precio: 4.99,
      imagen: "/images/galleta8.png",
    },
    {
      id: 7,
      nombre: "Galleta de Avena",
      descripcion: "Galletas suaves con un toque de vainilla natural.",
      precio: 4.99,
      imagen: "/images/galleta9.png",
    },
    {
      id: 8,
      nombre: "Galleta de Vainilla",
      descripcion: "Galletas suaves con un toque de vainilla natural.",
      precio: 4.99,
      imagen: "/images/galleta10.png",
    },
  ];

  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // Para el buscador
  const [sortedAsc, setSortedAsc] = useState(true);

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

  // Filtrar productos según el buscador
  const filteredProducts = productos.filter((producto) =>
    producto.nombre.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortProducts = () => {
    return [...filteredProducts].sort((a, b) => {
      const nameA = a.nombre.toLowerCase();
      const nameB = b.nombre.toLowerCase();
      if (sortedAsc) {
        return nameA.localeCompare(nameB);
      } else {
        return nameB.localeCompare(nameA);
      }
    });
  };

  return (
    <Layout>
      {/* Encabezado */}
      <div className="bg-purple-100 py-10">
       <div className="container mx-auto px-6 flex flex-col md:flex-row justify-center items-center">
         <div className="text-center md:text-left md:w-1/2">
           <h1 className="text-4xl font-extrabold text-purple-900 mb-4">PRUEBA NUESTRAS GALLETAS</h1>
             <p className="text-xl text-purple-600">¡Las mejores galletas ahora disponibles para ti! Pruébalas hoy mismo.</p>
          </div>
          <div className="w-full h-96 relative mt-6 md:mt-0 md:w-96">
           <Image
           src="/images/product.png" // Imagen de galleta
           alt="Galleta"
           layout="fill"
           objectFit="contain"
           className="mx-auto"
           />
          </div>
        </div>
      </div>
    <div className="bg-purple-800 py-4">
  <div className="container mx-auto px-6 flex justify-between items-center">
    {/* Buscador */}
    <input
      type="text"
      placeholder="Buscar productos..."
      className="w-full max-w-md px-4 py-2 border rounded-lg text-purple-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />

     {/* Botón para ordenar */}
     <button
            onClick={() => setSortedAsc(!sortedAsc)}
            className="ml-6 bg-purple-800 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
          >
            {sortedAsc ? "Ordenar Z-A" : "Ordenar A-Z"}
          </button>
    {/* Carrito */}
    <div className="ml-6 relative flex items-center">
      <button
        onClick={() => setShowCart(!showCart)}
        className="bg-purple-800 text-white px-4 py-2 rounded-full shadow-lg hover:bg-purple-700 transition flex items-center"
      >
        🛒
        {cart.length > 0 && (
          <span className="ml-2 text-sm font-bold bg-white text-purple-800 px-2 py-1 rounded-full">
            {cart.length}
          </span>
        )}
      </button>

      {showCart && (
        <div
        className={`fixed top-0 right-0 h-full w-80 bg-purple-100 text-purple-900 shadow-xl transform ${
          showCart ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 z-50`}
      >
        {/* Botón de cerrar con la "X" */}
        <button
          onClick={() => setShowCart(false)}
          className="absolute top-4 right-4 font-bold"
        >
          🛒
        </button>
        <div className="p-6 space-y-6">
          <h2 className="text-2xl font-bold">Carrito</h2>
          {cart.length === 0 ? (
            <p>Tu carrito está vacío</p>
          ) : (
            <ul className="space-y-4">
              {cart.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center justify-between border-b pb-4"
                >
                  <div className="flex items-center space-x-4">
                    <Image
                      src={item.imagen}
                      alt={item.nombre}
                      width={50}
                      height={50}
                      className="rounded-lg"
                    />
                    <div>
                      <h3 className="font-semibold">{item.nombre}</h3>
                      <p className="text-sm">
                        €{item.precio.toFixed(2)} x {item.cantidad}
                      </p>
                    </div>
                  </div>
                  <button
                    className=" top-4 right-4 text-purple-800 hover:text-purple-600  font-bold"
                    onClick={() => removeFromCart(item.id)}
                  >
                    X
                  </button>
                </li>
              ))}
            </ul>
          )}
          <div className="border-t pt-4">
            <p className="text-lg font-bold">Total: €{calculateTotal().toFixed(2)}</p>
            <Link href="/Chekaout">
              <button className="mt-4 w-full bg-purple-800 text-white py-2 rounded-lg hover:bg-purple-700 transition">
                Ir a pagar
              </button>
            </Link>
          </div>
        </div>
      </div>      
      )}
    </div>
  </div>
</div>
      {/* Productos */}
      <div className="bg-gradient-to-br from-purple-50 to-purple-100 py-10">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-purple-900 mb-8">Productos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {sortProducts().map((producto) => (
              <div
                key={producto.id}
                className="bg-white rounded-lg shadow hover:shadow-lg transition-all duration-300"
              >
                <div className="flex justify-center items-center w-full h-64 bg-purple-200 rounded-t-lg">
                  <Image
                    src={producto.imagen}
                    alt={producto.nombre}
                    width={200}
                    height={200}
                    objectFit="contain"
                    className="rounded-lg"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-purple-900">{producto.nombre}</h3>
                  <p className="text-purple-600 mt-1">{producto.descripcion}</p>
                  <p className="text-lg font-bold text-purple-900 mt-3">€{producto.precio.toFixed(2)}</p>
                  <button
                    onClick={() => addToCart(producto)}
                    className="mt-4 w-full bg-purple-800 text-white py-2 rounded-lg hover:bg-purple-700 transition"
                  >
                    Agregar al carrito
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Productos;
