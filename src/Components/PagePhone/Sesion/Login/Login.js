import React, { useState } from 'react'
import './Login.css';
import Logo1 from '../../../../assets/Logo2.png';
import { BiArrowBack } from 'react-icons/bi';
import { AiOutlineMail } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';
import RecoverPassword from './RecoverPassword/RecoverPassword';
export default function Login({cambiarRegistro,regresarPage}) {
  const [passForg, setPassForg] = useState(false);
  const handlerPass = () =>{
    if (passForg) setPassForg(false);
    else setPassForg(true)
  }
  return (
    <>
    {
        passForg
        ?<RecoverPassword salirPass={handlerPass}/>
        :""
    }
    <div className='placeLoginPhone'>
        <BiArrowBack className='exitPhone' onClick={regresarPage}/>
        <img src={Logo1} alt='logo' className='imagePhone' onClick={regresarPage}/>
        <div className='contentPhoneLogin'>
            <h2>Iniciar Sesion</h2>
            <div>
                <div className='iconLog1'>
                    <AiOutlineMail/>
                </div>
                <label htmlFor='emailPhoneLog'>Correo Electronico</label>
                <input type='text' id='emailPhoneLog' placeholder='Ingrese aqui su correo...'/>
            </div>
            <div>
                <div className='iconLog2'>
                    <RiLockPasswordLine />
                </div>
                <label htmlFor='passwordPhoneLog'>Contraseña</label>
                <input type='password' id='passwordPhoneLog' placeholder='      Ingrese aqui su contraseña...'/>
            </div>
            <button>Entrar</button>
            <a onClick={handlerPass}>¿Olvido su contraseña?</a>
            <a onClick={cambiarRegistro}>¿No tiene una cuenta?</a>
        </div>
    </div>
    </>
  )
}
