import React from 'react'
import './Compra.css';
import {AiOutlineCreditCard} from 'react-icons/ai';
import {BsCashCoin} from 'react-icons/bs';

export default function Compra({cancelar}) {
  return (
    <div className='compraContentAcount'>
    
    <div className='compraContentSelect'>
    <h1>Seleccione Su Metodo De Pago</h1>
    <div className='methodContentSelect'>
    <AiOutlineCreditCard className='iconMethodContentSelect'/>
    <h2>Pago Con Tarjeta</h2>
    </div>
    <div className='methodContentSelect'>
    <BsCashCoin className='iconMethodContentSelect'/>
    <h2>Pago En Efectivo</h2>
    </div>
    </div>

    <button className='buttonCancelCompra' onClick={cancelar}>Cancelar</button>
        
    </div>
  )
}
