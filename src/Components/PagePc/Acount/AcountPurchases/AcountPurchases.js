import React, { useState } from 'react'
import Compras from './Compras'
import './AcountPurchases.css'
import {AiOutlineShopping,AiOutlineAudit} from 'react-icons/ai';
import Pedido from './Pedido';

export default function AcountPurchases() {
  const [pedidos, setPedidos] = useState(false)
const handlerClickPedidos = () =>setPedidos(true);
const handlerClickCompras = () =>setPedidos(false);
  return (
    <>
    <h2 className='titlePurchasesAcount'>Compras Recientes</h2>
    <div className='pedidosComprasPurchasesAcount'>

      <div className='pedidosComprasIconPurchases' onClick={handlerClickCompras}>
      Compras
      <br/>
      <AiOutlineShopping style={{fontSize:"35px"}}/>
      </div>

      <div className='pedidosComprasIconPurchases' onClick={handlerClickPedidos}>
      Pedidos
      <br/>
      <AiOutlineAudit  style={{fontSize:"35px"}}/>
      </div>

    </div>
    {
      pedidos
      ?<><Pedido pendiente={true} pedidoDetalles={true}/> 
        <Pedido pendiente={false} pedidoDetalles={true}/> </>
      :<><Compras compraRealizada={false} pedido={false} pendiente={true} pedidoDetalles={false}/>
      <Compras compraRealizada={true} pedido={true} pendiente={false} pedidoDetalles={false}/> </>
    }
    
    </>
  )
}
