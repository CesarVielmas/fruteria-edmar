import React from 'react';
import './indexSesion.css';
import { useState } from 'react';
import Register from './Register/Register';
import Login from './Login/Login';

export default function IndexSesion({changeToHome}) {
    const [register, setRegister] = useState(false);
    const handlerChangeRegister = () => setRegister(true);
    const handlerChangeLogin = () => setRegister(false);
  return (
    <>
    <div className='sesionLogin'></div>
    <div className='sesionImages'></div>
    <div className='formSesion'>
        {
            (register)
            ?<Register changeToLogin ={handlerChangeLogin} changeToHome={changeToHome}/>
            :<Login changeToRegister = {handlerChangeRegister} changeToHome={changeToHome}/>
        }
    </div>
    </>
  )
}
