import React, { useState } from 'react'
import './Pedido.css';
import {AiOutlineFieldTime,AiOutlineSmallDash,AiOutlineExclamationCircle} from 'react-icons/ai';
import ProductoPurchase from './ProductoPurchase';
import Detalles from './Detalles';
import Aviso from './Aviso';

export default function Pedido({pendiente,pedidoDetalles}) {
    let varArrayExample = [0,1,2,3,4,5];
    const [detalles, setDetalles] = useState(false);
    const [cancelar,setCancelar] = useState(false);

    const handlerDetallesEnter = () => setDetalles(true);
    const handlerDetallesOut = () => setDetalles(false);
    const handlerCancelarIn = () => setCancelar(true);
    const handlerCancelarOut = () => setCancelar(false);

  return (
    <div className='purchasesAcountPedido'>
         {
            detalles
            ?<Detalles outDetalles = {handlerDetallesOut} pendiente={pendiente} pedido={pedidoDetalles}/>
            :""
        }
         {
            cancelar
            ?<Aviso eliminar={false} out={handlerCancelarOut}/>
            :""
        }
        <div className='flexProductsPurchasesPedido'>
        {
            varArrayExample.map((value,index)=>{
                if (index === 5) {
                   return <AiOutlineSmallDash className='iconSuspendedPointsPedido'/>;
                }
                else if(index>5){
                    return "";
                }
                else if(index<5){
                    return (varArrayExample.length<6)
                          ?<ProductoPurchase className='flexPurchasePedido' classProduct={"productCardPurchase"}/>
                          :<ProductoPurchase className='flexPurchasePedido' classProduct={"productCardPurchase2"}/>
                }
            })
        }
        </div>
        <button className='detailsPurchasesAcountPedido' onClick={handlerDetallesEnter}>Mas Detalles</button>   
        <button className='deletePurchasesAcountPedido'  onClick={handlerCancelarIn}>Cancelar</button>
        <p className='totalPurchasesAcountPedido'>Total:$600</p>
        
        <div className='timePurchaseAcountPedido'>
            <AiOutlineFieldTime className='iconTimePedido'/>
            <p>Entrega 22/02/2023</p>
        </div>
        <p className='typePurchaseAcountPedido'>Pedido</p>
        <p className='statePurchaseAcountPedido'>Pedido En Proceso</p>
        <input type='radio' className='input1PurchaseAcountPedido' checked/>
        <input type='radio' className='input2PurchaseAcountPedido' checked/>
        
    </div>
  )
}
