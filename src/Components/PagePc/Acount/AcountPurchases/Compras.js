import React, { useState } from 'react'
import './Compras.css';
import {AiOutlineFieldTime,AiOutlineSmallDash,AiOutlineExclamationCircle} from 'react-icons/ai';
import ProductoPurchase from './ProductoPurchase';
import Detalles from './Detalles';
import Aviso from './Aviso';

export default function Compras({compraRealizada,pedido,pendiente,pedidoDetalles}) {
    let varArrayExample = [0,1,2,3,4,5];
    const [detalles, setDetalles] = useState(false);
    const [cancelar,setCancelar] = useState(false);
    const [eliminar,setEliminar] = useState(false);

    const handlerDetallesEnter = () => setDetalles(true);
    const handlerDetallesOut = () => setDetalles(false);
    const handlerCancelarIn = () => setCancelar(true);
    const handlerCancelarOut = () => setCancelar(false);
    const handlerDeleteIn = () =>   setEliminar(true);
    const handlerDeleteOut = () =>   setEliminar(false);

  return (
    <div className='purchasesAcount'>
        {
            detalles
            ?<Detalles outDetalles = {handlerDetallesOut} pendiente={pendiente} pedido={pedidoDetalles}/>
            :""
        }
        {
            eliminar
            ?<Aviso eliminar={true} out={handlerDeleteOut}/>
            :""
        }
        {
            cancelar
            ?<Aviso eliminar={false} out={handlerCancelarOut}/>
            :""
        }
        <div className='flexProductsPurchases'>
        {
            varArrayExample.map((value,index)=>{
                if (index === 5) {
                   return <AiOutlineSmallDash className='iconSuspendedPoints'/>;
                }
                else if(index>5){
                    return "";
                }
                else if(index<5){
                    return (varArrayExample.length<6)
                          ?<ProductoPurchase className='flexPurchase' classProduct={"productCardPurchase"}/>
                          :<ProductoPurchase className='flexPurchase' classProduct={"productCardPurchase2"}/>
                }
            })
        }
        </div>
        <button className='detailsPurchasesAcount' onClick={handlerDetallesEnter}>Mas Detalles</button>
        {
            compraRealizada
            ?<button className='deletePurchasesAcount' onClick={handlerDeleteIn}>Eliminar</button>
            :<button className='deletePurchasesAcount' onClick={handlerCancelarIn}>Cancelar</button>
        }
        <p className='totalPurchasesAcount'>Total:$600</p>
        {
            compraRealizada
            ?<div className='timePurchaseAcount'>
            <AiOutlineFieldTime className='iconTime'/>
            <p>22/02/2023</p>
            </div>
            :<div className='timePurchaseAcount'>
            <AiOutlineExclamationCircle className='iconTime' style={{color:"rgb(255, 164, 45)"}}/>
            <p><span style={{color:"rgb(255, 164, 45)"}}>En Proceso</span></p>
            </div>
        }
        {
            compraRealizada
            ?pedido
                ?<>
                <p className='typePurchaseAcount'>Pedido</p>
                <p className='statePurchaseAcount'>Pedido Realizado</p>
                </>
                :<>
                <p className='typePurchaseAcount'>Compra Tradicional</p>
                <p className='statePurchaseAcount'>Compra Realizada</p>
                </>
            :<>
            <p className='typePurchaseAcount'>Compra Tradicional</p>
            <p className='statePurchaseAcount'>Compra Activa</p>
            </>
        
        }
        <input type='radio' className='input1PurchaseAcount' checked/>
        <input type='radio' className='input2PurchaseAcount' checked/>
        
    </div>
  )
}
