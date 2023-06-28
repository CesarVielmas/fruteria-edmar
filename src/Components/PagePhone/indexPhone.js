import React, { useState } from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Body from './Body/Body'
import IndexSesion from './Sesion/IndexSesion';

export default function IndexPhone() {
  const [sesion, setSesion] = useState(false);
  const handlerSesion = () =>{
    if (sesion) setSesion(false);
    else setSesion(true);
  }
  return (
    <>
    {
      sesion
      ?<IndexSesion regresarPage={handlerSesion}/>
      :<><Header cambiarSesion = {handlerSesion}/>
      <Body/>
      <Footer/>
      </>
    }
    </>
  )
}
