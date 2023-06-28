import React, { useEffect } from 'react'
import './AcountEdit.css';
import exampleImage from '../../../../assets/acountImageExample.jpg';
import {BiImageAdd} from 'react-icons/bi';
import { useState } from 'react';
import {HiOutlinePencilAlt} from 'react-icons/hi'
export default function AcountEdit() {
  const [imageAdd, setImageAdd] = useState(false)
  let image = document.querySelector('.imageAcountEditXImg');

  const handlerOver = (e) =>{
    console.log(e.target);
    if (e.target.classList.contains("imageAcountEditXImage")===true|| e.target.matches('path[d="M4 5h13v7h2V5c0-1.103-.897-2-2-2H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h8v-2H4V5z"]')||e.target.matches('path[d="m8 11-3 4h11l-4-6-3 4z"]')||e.target.classList.contains('imageAddAcountEditX')===true||e.target.matches('path[d="M19 14h-2v3h-3v2h3v3h2v-3h3v-2h-3z"]')||e.target.classList.contains("imageAcountEditXImage1")){
      setImageAdd(true);
      image.classList.replace('imageAcountEditXImage','imageAcountEditXImage1')
    }
    else {
      setImageAdd(false);
      image.classList.replace('imageAcountEditXImage1','imageAcountEditXImage')
    }
  }

  useEffect(() => {
    image = document.querySelector('.imageAcountEditXImg');
    document.addEventListener('mouseover',handlerOver);
    return () => {
     document.removeEventListener('mouseover',handlerOver)
    }
  }, [])
  
  return (
    <div className='acountEditX'>
      <div className='imageAcountEditX'>      
        <img src={exampleImage} alt='imagen perfil' className='imageAcountEditXImage imageAcountEditXImg' />
      {
        imageAdd
        ?<BiImageAdd className='imageAddAcountEditX'/>
        :""
      }
      </div>
      <label>Nombre</label>
      <input type='text' value='Cesar Vielmas' disabled/>
      <HiOutlinePencilAlt className='iconForm'/>
      <label>Correo</label>
      <input type='text' value='vielmassalais023@gmail.com' disabled/>
      <HiOutlinePencilAlt className='iconForm'/>
      <label>Direccion</label>
      <input type='text' value='J.Clemente Orozco #422,Mision Real,Nuevo Leon,Mexico' disabled/>
      <HiOutlinePencilAlt className='iconForm'/>
      <label>Telefono</label>
      <input type='tel' value='10882414' disabled/>
      <HiOutlinePencilAlt className='iconForm'/>
      <label>Contraseña</label>
      <input type='password' value='6VU7c3nU56' disabled/>
      <HiOutlinePencilAlt className='iconForm'/>
      <button className='changesCanceled' disabled>Cancelar</button>
      <button className='changesSaved' disabled>Guardar Cambios</button>
    </div>
  )
}
