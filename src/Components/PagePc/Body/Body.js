import React from 'react'
import Productos from './Productos/Productos'
import Contacto from './Contacto/Contacto'
import Avisos from './Avisos/Avisos'
import Home from './Home/Home'

export default function BodyPage({changeToSesion}) {
  return (
    <>
    <Home changeToSesion = {changeToSesion}/>
    </>
  )
}
