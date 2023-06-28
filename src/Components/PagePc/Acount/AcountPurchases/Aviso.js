import React from 'react'
import './Aviso.css';
export default function Aviso({eliminar,out}) {

  return (
    <div className='avisoContent'>
    {
        eliminar
        ?<h1>¿Esta seguro que desea eliminar este registro?</h1>
        :<h1>¿Esta seguro que desea cancelar la compra?</h1>
    }    
    <button className='avisoButtonSi'>Si</button>
    <button className='avisoButtonNo' onClick={out}>No</button>
    </div>
  )
}
