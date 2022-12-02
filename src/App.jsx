import { useState } from 'react'
import Galeria from './components/Galeria'


function App() {


  return (
    <>
      <header className='bg-dark text-light text-center py-5'>
        <p className='h1'>Práctica buscador de fotos con API-PEXELS y REACT</p>
      </header>

      <main className='container my-5'>
        {/* FORMULARIO */}
        <Galeria />
        {/* GRID CON DIV DE CADA CATEGORIA */}
      </main>

      <footer className='bg-dark text-light text-center py-1'>
        <p className='h6'>footer</p>
      </footer>
    </>
  )
}

export default App
