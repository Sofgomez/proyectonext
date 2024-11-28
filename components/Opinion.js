import React from 'react'

function Opinion() {
  return (
    <section id="testimonials" className="py-20 bg-orange-200">
    <div className="container mx-auto text-center">
    <h2 className="text-5xl font-extrabold text-center text-yellow-900 mb-20 font-playfair display">
     Lo Que opinan Nuestros Clientes
    </h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-yellow-900  p-10 rounded-lg shadow-lg">
          <p className="italic text-white">
            La experiencia con esta empresa ha sido increíble. ¡Los
            recomiendo 100%!
          </p>
          <h4 className="font-bold mt-4 text-orange-200" >- Cliente 1</h4>
        </div>
        <div className="bg-yellow-900  p-6 rounded-lg shadow-lg">
          <p className="italic text-white">
            Gracias a su equipo, nuestro negocio ha crecido
            exponencialmente.
          </p>
          <h4 className="font-bold mt-4 text-orange-200">- Cliente 2</h4>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Opinion