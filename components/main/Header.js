import React from 'react'
import Link from 'next/link'


const Header = () => {
  return (
    <header>
        <div className='contenedor'>
           
        </div>

        <nav>
          <Link href="/">Inicio</Link>
          <Link href="/nosotros">Nosotros</Link>
          <Link href="/tienda">Tienda</Link>
        </nav>
    </header>
  )
}

export default Header