import React, { useState } from 'react'
import ProductsAdd from './ProductsAdd';
import './AcountCart.css';
import Compra from './Compra';
import Pedido from './Pedido';

export default function AcountCart() {
  const [cartProducts, setCartProducts] = useState(5);
  const [compra, setCompra] = useState(false);
  const [pedido, setPedido] = useState(false);
  const handlerCompraIn = () => setCompra(true);
  const handlerCompraOut = () => setCompra(false);
  const handlerPedidoIn = () => setPedido(true);
  const handlerPedidoOut = () => setPedido(false);

  let varArrayCart = Array.from({ length: cartProducts }, () => "valor ejemplo");
 

  return (
    <div className='acountCartAll'>
      {
        compra
        ?<Compra cancelar={handlerCompraOut}/>
        :""
      }
      {
        pedido
        ?<Pedido cancelar={handlerPedidoOut}/>
        :""
      }
    <h1 className='acountTitle'>Productos Añadidos</h1>
     {
      (cartProducts<1)
      ?<h2 className='acountNotExist'>!No hay productos en el carrito!</h2>
      :<>{varArrayCart.map(()=><ProductsAdd/>)}<p className='totalAcountCart'>Total:350$</p>
      <button className='buttonAcountCartAll' onClick={handlerCompraIn}>Comprar</button>
      <button className='buttonAcountCartAll' onClick={handlerPedidoIn}>Hacer Pedido</button>
      </>
      
      }

    </div>
  )
}
