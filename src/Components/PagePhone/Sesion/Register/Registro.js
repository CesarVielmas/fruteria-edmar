import React from 'react'
import './Registro.css';
import Logo1 from '../../../../assets/Logo2.png';
import { BiArrowBack } from 'react-icons/bi';
import { AiOutlineMail, AiOutlineTeam } from 'react-icons/ai';
import { RiLockPasswordFill, RiLockPasswordLine } from 'react-icons/ri';

export default function Registro({cambiarLogin,regresarPage}) {
  return (
    <>
    <div className='placeRegisterPhone'>
        <BiArrowBack className='exitPhone' onClick={cambiarLogin}/>
        <img src={Logo1} alt='logo' className='imagePhone' onClick={regresarPage}/>
        <div  className='contentPhoneRegister'>
          <h2>Registro</h2>
          <div>
                <div className='iconReg1'>
                  <AiOutlineTeam/>
                </div>
                <label htmlFor='namePhoneLog'>Nombre Completo</label>
                <input type='text' id='namePhoneLog' placeholder='Ingrese aqui su nombre...'/>
          </div>

          <div>
                <div className='iconReg2'>
                  <AiOutlineMail/>
                </div>
                <label htmlFor='emailPhoneLog'>Correo Electronico</label>
                <input type='text' id='emailPhoneLog' placeholder='Ingrese aqui su correo...'/>
          </div>

          <div>
                <div className='iconReg3'>
                  <RiLockPasswordLine/>
                </div>
                <label htmlFor='passwordPhoneLog'>Contraseña</label>
                <input type='password' id='passwordPhoneLog' placeholder='      Ingrese aqui su contraseña...'/>
          </div>

          <div>
                <div className='iconReg4'>
                  <RiLockPasswordFill/>
                </div>
                <label htmlFor='passwordConfPhoneLog'>Confirmar Contraseña</label>
                <input type='password' id='passwordConfPhoneLog' placeholder='      Ingrese aqui su contraseña...'/>
          </div>
          <button>Registrarme</button>
          <a onClick={cambiarLogin}>¿Ya creo su cuenta?</a>
        </div>
    </div>
      </>
  )
}
