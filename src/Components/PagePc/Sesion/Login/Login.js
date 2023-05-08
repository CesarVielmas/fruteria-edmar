import React, { useState } from 'react'
import './Login.css';
import logoFrut from '../../../../assets/Logo2.png';
import {AiFillFacebook, AiFillInstagram,AiOutlineMail} from 'react-icons/ai'
import {IoLogoWhatsapp} from 'react-icons/io';
import {RiLockPasswordLine} from 'react-icons/ri';
import RecoverPassword from './RecoverPassowrd/RecoverPassword';

export default function Login({changeToRegister,changeToHome}) {
  const [recover, setRecover] = useState(false);
  const handlerRecoverTrue = () =>setRecover(true);
  const handlerRecoverFalse = () =>setRecover(false);

  return (
    <>
    <div className='formLogin'>
    <h2>Iniciar Sesion</h2>
    <label htmlFor='emailLogin'>Correo Electronico</label>
    <input id='emailLogin' type='email' placeholder='Ingrese aqui su correo...'/>

    <label htmlFor='passwordLogin'>Contraseña</label>
    <input type='password' id='passwordLogin' placeholder='Ingrese aqui su contraseña...'/>

    <button>Entrar</button>
    <a onClick={handlerRecoverTrue}>¿Olvido su contraseña?</a>
    <a onClick={changeToRegister}>¿No tiene una cuenta?</a>
    
    <div className='emailIconLog'>
    <AiOutlineMail/>
    </div>

    <div className='passwordIconLog'>
    <RiLockPasswordLine/>
    </div>

    </div>
    
    <div className='loginImage'>
        <img src={logoFrut} alt='logo' onClick={changeToHome}/>
        <button onClick={changeToHome}>Regresar</button>
        <div className='iconsLogin'>
        <AiFillFacebook className='iconSesion'/>
        <AiFillInstagram className='iconSesion'/>
        <IoLogoWhatsapp className='iconSesion'/>
    </div>
    </div>
    {
      (recover)
      ?<RecoverPassword changeLogin ={handlerRecoverFalse}/>
      :""
    }
    </>
  )
}
