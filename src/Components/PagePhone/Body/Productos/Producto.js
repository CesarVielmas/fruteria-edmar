import React, { useState } from 'react'
import {FaApple, FaAppleAlt} from 'react-icons/fa';
import './Producto.css';
import { AiFillCloseCircle } from 'react-icons/ai';
import { BsFillBagPlusFill } from 'react-icons/bs';
import Detalles from './Detalles';
export default function Producto() {
const [buttons, setButtons] = useState(false);
const [detalles, setDetalles] = useState(false);
const [cuantity,setCuantity] = useState(0);
const handlerClick = () =>{
  if (buttons) setButtons(false);
  else setButtons(true);
}
const handlerDetalles = () =>{
  if (detalles) setDetalles(false);
  else setDetalles(true); 
}
const handlerCuantityAdd = () => {
  setCuantity(cuantity+1)
}
const handlerCuantityRemove = ()=>{
    if (cuantity === 0) return "";
    else setCuantity(cuantity-1);
}
  return (
    <>
    {
      detalles
      ?<Detalles exitDetalles={handlerDetalles}/>
      : <div className='productoPhone'>
      <h2>Platano Macho</h2>
      <div className={buttons?'buttonPhoneAccess2':'buttonPhoneAccess1'}>
        {
          buttons
          ?<AiFillCloseCircle onClick={handlerClick} className='button'/>
          :<BsFillBagPlusFill onClick={handlerClick} className='button'/>
        }
        <button className='productoAddPhone' onClick={handlerCuantityAdd}><FaAppleAlt/><span style={buttons?{color:"white",fontSize:"8vw",position:"absolute",left:"36%",top:"35%"}:{}}>+</span></button>
        <p className='productoCuantityPhone'>{cuantity}</p>
        <button className='productoRemovePhone' onClick={handlerCuantityRemove}><FaApple/><span style={buttons?{color:"white",fontSize:"8vw",position:"absolute",left:"42%",top:"80%"}:{}}>-</span></button>
      </div>
      <div className='promotionProductoPhone'><p>!Promocion 2x<span style={{color:"green"}}>$150</span>!</p></div>
      <p className='descriptionProductoPhone'>Platano macho originario de veracruz , tiene un gran y apetitoso sabor que por otro lado esta muy dulce y maduro para el uso publico el cual es una ventaja de humildad el hecho</p>
      <img src={'https://imgs.search.brave.com/Bl-2TCwmTfAboaLyu_tqP8DZiMAHX5K4t6YNognud7k/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzY5LzRi/LzhlLzY5NGI4ZWZl/NjFjMTMwZDcxZmI5/YmZhNDE3OTUyZDUz/LmpwZw'} alt='productoImagen'/>
      <div className='typesProductoPhone'>
        <p>$20.56 kg</p>
        <p>Primavera</p>
        <p>Agotado</p>
      </div>
      <button className='buttonDetailsPhone' onClick={handlerDetalles}>Mas Detalles</button>
      </div>
    }
     
    </>
  )
}
