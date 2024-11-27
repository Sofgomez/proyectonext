import React from 'react'
import Image from "next/image";

const AcercaDeNosotros = () => {
  return (
    <section id="about" className="py-20 bg-gray-100">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6" >Acerca de nosotros</h2>
      <p className="text-lg text-gray-600 mb-8">
       Somos una tienda dedicada a crear galletas únicas y personalizadas que endulzan tus momentos y convierten tus ideas en deliciosas realidades.
      </p>
      <div className="flex flex-wrap justify-center space-x-6">
        <Image
          src="/images/team.jpg"
          alt="Nuestro equipo"
          width={400}
          height={250}
          className="rounded-lg shadow-lg"
        />
        <Image
          src="/images/office.jpg"
          alt="Nuestra oficina"
          width={400}
          height={250}
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  </section>
  )
}

export default AcercaDeNosotros