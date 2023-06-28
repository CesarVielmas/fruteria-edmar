import React, { useState } from 'react'
import './IndexSesion.css';
import Login from './Login/Login';
import Registro from './Register/Registro';

export default function IndexSesion({regresarPage}) {
  const [register, setRegister] = useState(false);
  const handlerRegister = ()=>{
    if (register) setRegister(false);
    else setRegister(true);
  }
  return (
    <>
    {
        register
        ?<Registro cambiarLogin = {handlerRegister} regresarPage={regresarPage}/>
        :<Login cambiarRegistro={handlerRegister} regresarPage={regresarPage}/>
        
    }
    </>
  )
}
