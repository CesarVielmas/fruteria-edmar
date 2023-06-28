import React from 'react'
import './Detalles.css';
import logoImage from '../../../../assets/logo2Content.png';
import RowTableDetalles from './rowTableDetalles';
import {AiFillCloseCircle} from 'react-icons/ai';

var frutas = [
    {
      id: 1,
      producto: "Manzana",
      precio: 1.50,
      cantidad:4,
      total: 6.00
    },
    {
      id: 2,
      producto: "Plátano",
      precio: 0.75,
      cantidad:4,
      total: 3.00
    },
    {
      id: 3,
      producto: "Naranja",
      precio: 0.90,
      cantidad:3,
      total: 2.70
    },
    {
        id: 4,
        producto: "Aceituna",
        precio: 0.70,
        cantidad:4,
        total: 5.70
      },
      {
        id: 5,
        producto: "Cemento",
        precio: 10.50,
        cantidad:6,
        total: 80.70
      },
      {
        id: 6,
        producto: "Pepino",
        precio: 7.90,
        cantidad:6,
        total: 22.70
      }
  ];
export default function Detalles({outDetalles,pendiente,pedido}) {
  return (
    <div className='detallesContentAcount'>
        <div className='detallesContentEnter'>
        <img src={logoImage} alt='logo' className='logoDetallesContent'/>
        <h1 className='nameDetallesContent'>Fruteria EDMAR</h1>
        <h2 className='directionDetallesContent'>Av Villa de San Carlos, Misión Real, 66640 Cd Apodaca, N.L.</h2>
        <h2 className='directionDetallesContent'>NIF:SWSCHPG RIKP</h2>
        <hr className='separationDetallesContent'/>
        <h1 className='clientDataContent'>Datos Del Cliente</h1>
        <h2 className='clientDataDetallesContent'>Cesar Vielmas</h2>
        <h2 className='clientDataDetallesContent'>J.Clemente Orozco #422,Mision Real,Nuevo Leon,Mexico</h2>
        <h2 className='clientDataDetallesContent'>Tel:10882414</h2>
        <h2 className='clientDataDetallesContent'>Email:vielmassalais023@gmail.com</h2>
        <hr className='separationDetallesContent'/>
        <h1 className='clientDataContent'>Factura Simplificada</h1>
        <h2 className='clientDataDetallesContent'>Numero de factura: 1305</h2>
        <h2 className='clientDataDetallesContent'>Compra En Linea</h2>
        <h2 className='clientDataDetallesContent'>Fecha:22/04/2023</h2>
        <h2 className='clientDataDetallesContent'>Le atendio:Edgar Arriaga</h2>
        <hr className='separationPurchasesDetalles' />
        <div className='tableContentDetallesAcount'>
        <table className='tableDetallesContent'>
            <thead>
                <tr>
                <td className='tdTableContentHeader'>Id</td>
                <td className='tdTableContentHeader'>Producto</td>
                <td className='tdTableContentHeader'>Precio c/kg</td>
                <td className='tdTableContentHeader'>Total</td>
                </tr>
            </thead>
            <tbody>
                {
                    frutas.map((valor)=><RowTableDetalles productos={valor}/>)
                }
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan={3} style={{textAlign:"end"}} className='tdTableContentFinal'>IVA 16%</td>
                    <td style={{borderLeft:"thin solid black"}} className='tdTableContentFinal'>$150</td>
                </tr>
                <tr>
                    <td colSpan={3} style={{textAlign:"end"}} className='tdTableContentFinal'>Total</td>
                    <td style={{borderLeft:"thin solid black"}} className='tdTableContentFinal'>$1300</td>
                </tr>
                
            </tfoot>
        </table>
        </div>
        {
            pendiente
            ?<h2 className='clientDataDetallesContent'>Pago En Efectivo Pendiente</h2>
            :pedido
            ?<h2 className='clientDataDetallesContent'>Pedido Realizado Con Tarjeta<br/>En Espera...</h2>
            :<h2 className='clientDataDetallesContent'>Pago Realizado Con Tarjeta</h2>
        }
        <h1 className='clientDataContent'>**Gracias Por Su Preferencia**</h1>
        </div>
        <button className='buttonOutDetallesAcount' onClick={outDetalles}><AiFillCloseCircle/></button>
    </div>
  )
}
