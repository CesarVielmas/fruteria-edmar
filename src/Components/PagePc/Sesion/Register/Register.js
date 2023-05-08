import React from 'react'
import logoFrut from '../../../../assets/Logo2.png';
import {AiFillFacebook, AiFillInstagram,AiOutlineMail,AiOutlineTeam,AiTwotonePhone} from 'react-icons/ai'
import {IoLogoWhatsapp} from 'react-icons/io';
import './Register.css';
import {RiLockPasswordLine,RiLockPasswordFill} from 'react-icons/ri';

export default function Register({changeToLogin,changeToHome}) {
  return (
    <>
    <div className='formLogin2'>
    <h2>Registro</h2>
    <label htmlFor='nameLogin'>Nombre Completo</label>
    <input id='nameLogin' type='text' placeholder='Ingrese aqui su nombre...'/>
    <label htmlFor='emailLogin'>Correo Electronico</label>
    <input id='emailLogin' type='email' placeholder='Ingrese aqui su correo...'/>
    <label htmlFor='passwordLogin'>Contraseña</label>
    <input type='password' id='passwordLogin' placeholder='Ingrese aqui su contraseña...'/>
    <label htmlFor='passwordConfirmLogin'>Confirmar Contraseña</label>
    <input type='password' id='passwordConfirmLogin' placeholder='Ingrese aqui su contraseña...'/>
    <label htmlFor='telLogin'>Numero De Telefono</label>
    <input id='telLogin' type='tel' placeholder='Ingrese aqui su telefono...'/>
    <button>Registrarme</button>
    <a onClick={changeToLogin}>¿Ya creo su cuenta?</a>
    
    <div className='nameIconLog'>
        <AiOutlineTeam/>
    </div>

    <div className='emailIconLog'>
    <AiOutlineMail/>
    </div>

    <div className='passwordIconLog'>
    <RiLockPasswordLine/>
    </div>

    <div className='passwordConfirmIconLog'>
    <RiLockPasswordFill/>
    </div>

    <div className='phoneIconLog'>
    <AiTwotonePhone/>
    </div>


    </div>

    <div className='loginImage'>
        <img src={logoFrut} alt='logo'  onClick={changeToHome}/>
        <button  onClick={changeToHome}>Regresar</button>
        <div className='iconsLogin'>
        <AiFillFacebook className='iconSesion'/>
        <AiFillInstagram className='iconSesion'/>
        <IoLogoWhatsapp className='iconSesion'/>
        </div>
    </div>
    </>
  )
}
