import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { RiDeviceRecoverLine } from 'react-icons/ri'
import './RecoverPassword.css';
export default function RecoverPassword({salirPass}) {
  return (
    <div className='recoverPasswordPhone'>

    <div className='recoverPasswordDivPhone'>
    <h2>Recuperar Contraseña</h2>
    <label htmlFor='recoverPhone'>Correo Electronico</label>
    <input id='recoverPhone' type='text' placeholder='     Ingrese su correo vinculado...'/>

    <div className='recoverIconPhone'>
    <RiDeviceRecoverLine/>
    </div>
    <button>Recuperar</button>

    <div className='recoverInfoPhone'>
    <h2>IMPORTANTE</h2>
    <p>Si usted tiene dicha cuenta vinculada a su correo entonces este al tanto de su cuenta de correo pues se le enviara su contraseña, estar atento a su correo electronico</p>
    </div>

    <div className='recoverIconOutPhone'>
    <AiOutlineClose onClick={salirPass}/>
    </div>

    </div>

    </div>
  )
}
