import React from 'react'
import Informacion from './Informacion'
import Formulario from './Formulario'
import './Contacto.css';
import InformacionCliente from './InformacionCliente';

export default function Contacto() {
  return (
    <>
    <div className='contact'>
      <Informacion/>
    </div>
    <div className='contact'>
    <InformacionCliente/>
    </div>
    <div className='contactForm'>
    <Formulario/>
    </div>
    </>
  )
}
