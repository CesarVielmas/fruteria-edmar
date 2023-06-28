import React from 'react'
import './ProductoPurchase.css';
import imageProduct from '../../../../assets/piña.webp'
export default function ProductoPurchase({classProduct}) {
  return (
    <div className={classProduct}>
      <img src={imageProduct} alt='imagen producto' className='imageProduct'/>
      <p className='productNamePurchase'>2kg Piña</p>
      <p className='productCuantityPurchase'>Total:$150</p>
    </div>
  )
}
