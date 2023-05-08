import React from 'react';
import './RecoverPassword.css';
import {RiDeviceRecoverLine} from 'react-icons/ri';
import { AiOutlineClose } from 'react-icons/ai';

export default function RecoverPassword({changeLogin}) {
  return (
    <div className='recoverPassword'>

    <div className='recoverPasswordDiv'>
    <h2>Recuperar Contraseña</h2>
    <label htmlFor='recover'>Correo Electronico o Telefono</label>
    <input id='recover' type='text' placeholder='Ingrese aqui su correo o telefono vinculado...'/>

    <div className='recoverIcon'>
    <RiDeviceRecoverLine/>
    </div>
    <button>Recuperar</button>

    <div className='recoverInfo'>
    <h2>IMPORTANTE</h2>
    <p>Si usted tiene dicha cuenta vinculada a su correo entonces este al tanto de su cuenta de correo pues se le enviara su contraseña,si ese no es el caso y fue vinculado por medio de su telefono entonces este al tanto de su telefono pues se le enviara un SMS con su contraseña, usted es lo mas importante</p>
    </div>

    <div className='recoverIconOut' onClick={changeLogin}>
    <AiOutlineClose/>
    </div>

    </div>

    </div>
  )
}
