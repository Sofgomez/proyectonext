import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "../components/main/Layout"; 
import Image from "next/image";

function Chekaout() {
  const [cart, setCart] = useState([]);
  const [deliveryOption, setDeliveryOption] = useState("envio"); // Estado para controlar la opción seleccionada
  const router = useRouter(); // Hook de enrutamiento

  // Recuperar el carrito de LocalStorage al cargar la página
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Calcular el total
  const calculateTotal = () =>
    cart.reduce((total, item) => total + item.precio * item.cantidad, 0);

  // Enviar datos del pago
  const handlePayment = (e) => {
    e.preventDefault();
    alert("¡Pago procesado con éxito!");
    // Limpiar carrito tras el pago
    localStorage.removeItem("cart");
    setCart([]);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-yellow-950 via-yellow-900 to-yellow-950 flex items-center justify-center p-4">
        <div className="relative bg-orange-100 shadow-2xl rounded-lg w-full max-w-4xl p-8">
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
          <h1 className="text-4xl font-bold text-yellow-900 text-center mb-8">
            Finaliza tu Compra
          </h1>

          {/* Resumen del Pedido */}
          <div className="relative bg-yellow-900 rounded-lg p-6 mb-8 shadow-md">
            <h2 className="text-2xl font-semibold text-orange-100 mb-4">
              Resumen de tu Pedido
            </h2>
            {cart.length === 0 ? (
              <p className="text-orange-100 text-center">Tu carrito está vacío.</p>
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
                        <p className="text-lg font-medium text-orange-100">
                          {item.nombre}
                        </p>
                        <p className="text-sm text-orange-200">
                          €{item.precio.toFixed(2)} x {item.cantidad}
                        </p>
                      </div>
                    </div>
                    <p className="text-lg font-semibold text-yellow-900">
                      €{(item.precio * item.cantidad).toFixed(2)}
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Total y Formulario */}
          <div className="bg-yellow-900 rounded-lg p-6 mb-8">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-orange-100">Total:</h3>
              <p className="text-2xl font-bold text-orange-100">
                €{calculateTotal().toFixed(2)}
              </p>
            </div>
            <form onSubmit={handlePayment} className="space-y-6">
              {/* Opción de envío o recogida */}
              <div>
                <p className="text-orange-100 font-medium mb-2">Método de entrega:</p>
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
                    <span className="text-orange-100">Envío a domicilio</span>
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
                    <span className="text-orange-100">Recoger en tienda</span>
                  </label>
                </div>
              </div>

              {/* Campos dinámicos según la opción seleccionada */}
              {deliveryOption === "envio" && (
                <div>
                  <label
                    htmlFor="direccion"
                    className="block text-sm font-medium text-orange-100"
                  >
                    Dirección
                  </label>
                  <input
                    type="text"
                    id="direccion"
                    placeholder="Ingresa tu dirección"
                    className="mt-1 block w-full rounded-md border-orange-300 shadow-sm"
                    required
                  />
                </div>
              )}

              <div>
                <label
                  htmlFor="nombre"
                  className="block text-lg font-small text-orange-100"
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
                  className="block text-sm font-medium text-orange-100"
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
                    className="block text-sm font-medium text-orange-100"
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
                    className="block text-sm font-medium text-orange-100"
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
                className="w-full bg-yellow-800 text-white py-3 rounded-md shadow-md hover:bg-yellow-950 transition duration-300"
              >
                Realizar Pago
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Chekaout;
