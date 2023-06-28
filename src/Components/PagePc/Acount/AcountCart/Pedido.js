import React, { useState } from 'react';
import './Pedido.css';
import { AiOutlineCreditCard } from 'react-icons/ai';
import { BsCashCoin } from 'react-icons/bs';

export default function Pedido({ cancelar }) {
  const [fechaInvalida, setFechaInvalida] = useState(false);

  function validarFecha(event) {
    event.preventDefault();
    const fechaSeleccionada = new Date(event.target.value);
    const fechaActual = new Date();

    if (fechaSeleccionada < fechaActual) {
      setFechaInvalida(true);
    } else {
      setFechaInvalida(false);
    }
  }

  return (
    <div className='pedidoContentAcount'>
      <div className='pedidoContentSelect'>
        <h1>Seleccione Su Metodo De Pago y Fecha</h1>
        <div className='fechaMethodPedido'>
          <label htmlFor='fecha'>Seleccione Una Fecha</label>
          <input
            type='date'
            id='fecha'
            name='fecha'
            onChange={validarFecha}
          />
          {fechaInvalida && (
            <div className='error-message'>La fecha seleccionada es inválida.</div>
          )}
        </div>
        <div className='pedidoMethodContentSelect'>
          <AiOutlineCreditCard className='iconMethodContentSelectPedido' />
          <h2>Pago Con Tarjeta</h2>
        </div>
        <div className='pedidoMethodContentSelect'>
          <BsCashCoin className='iconMethodContentSelectPedido' />
          <h2>Pago En Efectivo</h2>
        </div>
      </div>
      <button className='buttonCancelPedido' onClick={cancelar}>
        Cancelar
      </button>
    </div>
  );
}
