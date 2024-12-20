import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Layout from "@/components/main/Layout";

function Factura() {
  const router = useRouter();
  const { cart, total, deliveryOption } = router.query;

  // Convertir carrito desde string a objeto
  const parsedCart = cart ? JSON.parse(cart) : [];

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
                 <h1 className="text-4xl font-bold text-purple-900 text-center mb-8">
                 Factura de Compra
                 </h1>
        <div className="relative bg-purple-900 rounded-lg p-6 mb-8 shadow-md">
                    <h2 className="text-2xl font-semibold text-pink-100 mb-4">
                      Resumen de tu Pedido
                    </h2>
                    {parsedCart.length === 0 ? (
                      <p className="text-pink-100 text-center">Tu carrito está vacío.</p>
                    ) : (
                      <ul className="space-y-6">
                        {parsedCart.map((item) => (
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
        <div className="bg-purple-800 rounded-lg p-6 text-white">
          <p className="text-lg">
            <strong>Total:</strong> €{total}
          </p>
          <p className="text-lg mt-2">
            <strong>Método de entrega:</strong>{" "}
            {deliveryOption === "envio" ? "Envío a domicilio" : "Recoger en tienda"}
          </p>
          </div>
            </div>
        </div>
    </Layout>
   
  );
}

export default Factura;
