import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "../components/main/Layout"; 
import Image from "next/image";

function Chekaout() {
  const [cart, setCart] = useState([]);
  const [deliveryOption, setDeliveryOption] = useState("envio"); // Estado para controlar la opción seleccionada
  const [showLoginMessage, setShowLoginMessage] = useState(false); // Estado para mostrar el mensaje de inicio de sesión
  const router = useRouter(); // Hook de enrutamiento

  // Recuperar el carrito de LocalStorage al cargar la página
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Verificar si el usuario está autenticado
  const isUserAuthenticated = () => {
    const user = localStorage.getItem("user");
    return user ? true : false;
  };

  // Calcular el total
  const calculateTotal = () =>
    cart.reduce((total, item) => total + item.precio * item.cantidad, 0);

  // Enviar datos del pago
  const handlePayment = (e) => {
    e.preventDefault();
    
    if (!isUserAuthenticated()) {
      setShowLoginMessage(true);
      setTimeout(() => setShowLoginMessage(false), 3000); // Mostrar el mensaje por 3 segundos
      return;
    }

    alert("¡Pago procesado con éxito!");
    // Limpiar carrito tras el pago
    localStorage.removeItem("cart");
    setCart([]);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br  from-purple-50 to-purple-100 flex items-center justify-center p-4">
        <div className="relative bg-purple-200 shadow-2xl rounded-lg w-full max-w-4xl p-8">
          {/* Imagen superior izquierda */}
          <Image
            src="/images/check.png"
            alt="Imagen 1"
            className="absolute top-[-60px] left-[-60px] w-48 h-48 md:w-56 md:h-56 z-10"
            width={150} 
            height={150}
            priority
          />

          {/* Imagen inferior derecha */}
          <Image
            src="/images/check1.png"
            alt="Imagen 2"
            className="absolute bottom-[-40px] right-[-40px] w-48 h-48 md:w-56 md:h-56"
            width={150}
            height={150}
            priority
          />

          {/* Título */}
          <h1 className="text-4xl font-bold text-purple-900 text-center mb-8">
            Finaliza tu Compra
          </h1>

          {/* Resumen del Pedido */}
          <div className="relative bg-purple-900 rounded-lg p-6 mb-8 shadow-md">
            <h2 className="text-2xl font-semibold text-pink-100 mb-4">
              Resumen de tu Pedido
            </h2>
            {cart.length === 0 ? (
              <p className="text-pink-100 text-center">Tu carrito está vacío.</p>
            ) : (
              <ul className="space-y-6">
                {cart.map((item) => (
                  <li
                    key={item.id}
                    className="flex items-center justify-between border-b pb-4"
                  >
                    {/* Imagen del producto */}
                    <div className="flex items-center space-x-4">
                      <Image
                        src={item.imagen}
                        alt={item.nombre}
                        width={70}
                        height={70}
                        className="rounded-md shadow-lg"
                      />
                      <div>
                        <p className="text-lg font-medium text-pink-100">
                          {item.nombre}
                        </p>
                        <p className="text-sm text-purple-100">
                          €{item.precio.toFixed(2)} x {item.cantidad}
                        </p>
                      </div>
                    </div>
                    <p className="text-lg font-semibold text-purple-200">
                      €{(item.precio * item.cantidad).toFixed(2)}
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Total y Formulario */}
          <div className="bg-purple-900 rounded-lg p-6 mb-8">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-pink-100">Total:</h3>
              <p className="text-2xl font-bold text-purple-200">
                €{calculateTotal().toFixed(2)}
              </p>
            </div>
            <form onSubmit={handlePayment} className="space-y-6">
              {/* Opción de envío o recogida */}
              <div>
                <p className="text-pink-100 font-medium mb-2">Método de entrega:</p>
                <div className="flex items-center space-x-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="delivery"
                      value="envio"
                      checked={deliveryOption === "envio"}
                      onChange={() => setDeliveryOption("envio")}
                      className="mr-2"
                    />
                    <span className="text-pink-100">Envío a domicilio</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="delivery"
                      value="recoger"
                      checked={deliveryOption === "recoger"}
                      onChange={() => setDeliveryOption("recoger")}
                      className="mr-2"
                    />
                    <span className="text-pink-100">Recoger en tienda</span>
                  </label>
                </div>
              </div>

              {/* Campos dinámicos según la opción seleccionada */}
              {deliveryOption === "envio" && (
                <div>
                  <label
                    htmlFor="direccion"
                    className="block text-sm font-medium text-pink-100"
                  >
                    Dirección
                  </label>
                  <input
                    type="text"
                    id="direccion"
                    placeholder="Ingresa tu dirección"
                    className="mt-1 block w-full rounded-md border-pink-100 shadow-sm"
                    required
                  />
                </div>
              )}

              <div>
                <label
                  htmlFor="nombre"
                  className="block text-lg font-small text-pink-100"
                >
                  Nombre Completo
                </label>
                <input
                  type="text"
                  id="nombre"
                  placeholder="Tu Nombre"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="tarjeta"
                  className="block text-sm font-medium text-pink-100"
                >
                  Número de Tarjeta
                </label>
                <input
                  type="text"
                  id="tarjeta"
                  placeholder="0000 0000 0000 0000"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                  required
                />
              </div>
              <div className="flex space-x-4">
                <div className="w-1/2">
                  <label
                    htmlFor="expiracion"
                    className="block text-sm font-medium text-pink-100"
                  >
                    Fecha de Expiración
                  </label>
                  <input
                    type="text"
                    id="expiracion"
                    placeholder="MM/AA"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                    required
                  />
                </div>
                <div className="w-1/2">
                  <label
                    htmlFor="cvc"
                    className="block text-sm font-medium text-pink-100"
                  >
                    Código de Seguridad (CVC)
                  </label>
                  <input
                    type="text"
                    id="cvc"
                    placeholder="123"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-purple-800 text-white py-3 rounded-md shadow-md hover:bg-purple-950 transition duration-300"
              >
                Realizar Pago
              </button>
            </form>
          </div>
        </div>

        {showLoginMessage && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white p-12 rounded-lg text-center text-purple-700 shadow-lg transform transition-all scale-95 opacity-0 animate-popup">
      <p className="text-2xl font-semibold mb-4">¡Ups!</p>
      <p className="text-lg font-medium mb-6">Inicia sesión para completar tu compra</p>
      <button
        onClick={() => setShowLoginMessage(false)}
        className="bg-purple-700 text-white py-3 px-10 rounded-md hover:bg-purple-800 transition duration-300"
      >
        Cerrar
      </button>
    </div>
  </div>
)}
      </div>
    </Layout>
  );
}

export default Chekaout;
