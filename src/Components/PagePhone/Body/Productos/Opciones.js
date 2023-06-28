import React from 'react'
import './Opciones.css';
export default function Opciones() {
  return (
    <>
    <h1>Lista De Productos</h1>
    <h2>Filtrar</h2>
    <hr/>
    <div className='filterOptionPhone'>
        <div>
            <label htmlFor='ofertaPhone'>Ofertas</label>
            <input type='checkbox' id='ofertaPhone' />
        </div>
        <div>
            <label htmlFor='disponibilidadPhone'>Disponibilidad</label>
            <input type='checkbox' id='disponibilidadPhone'/>
        </div>
        <div>
            <label htmlFor='temporadaPhone'>Temporada</label>
            <input type='checkbox' id='temporadaPhone'/>
        </div>
    </div>
    <h2>Ordenar</h2>
    <hr/>
    <div className='orderOptionPhone'>
        <div>
            <label htmlFor='nombrePhone1'>Nombre A-Z</label>
            <input type='checkbox' id='nombrePhone1' />
        </div>
        <div>
            <label htmlFor='nombrePhone2'>Nombre Z-A</label>
            <input type='checkbox' id='nombrePhone2'/>
        </div>
        <div>
            <label htmlFor='precioPhone1'>Precio Mayor-Menor</label>
            <input type='checkbox' id='precioPhone1'/>
        </div>
        <div>
            <label htmlFor='precioPhone2'>Precio Menor-Mayor</label>
            <input type='checkbox' id='precioPhone2'/>
        </div>
    </div>
    </>
  )
}
