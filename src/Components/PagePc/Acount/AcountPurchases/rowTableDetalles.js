import React from 'react'

export default function RowTableDetalles({productos}) {
   const {id,producto,precio,total,cantidad} = productos;
  return (
    <tr>
        <td className='tdTableContent'>{id}</td>
        <td className='tdTableContent'>{producto} <span style={{marginLeft:"2%",color:"red"}}>x{cantidad}kg</span></td>
        <td className='tdTableContent'>{precio}</td>
        <td className='tdTableContent'>{total}</td>
    </tr>
  )
}
