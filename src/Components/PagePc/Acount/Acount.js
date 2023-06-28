import React from 'react';
import './Acount.css';
import { useState } from 'react';
import {AiOutlineUser,AiFillFacebook, AiFillInstagram} from 'react-icons/ai';
import {FaShoppingCart,FaRegCalendarCheck} from 'react-icons/fa'; 
import {IoLogoWhatsapp,IoMdArrowBack} from 'react-icons/io';
import AcountEdit from './AcountEdit/AcountEdit';
import AcountCart from './AcountCart/AcountCart';
import AcountPurchases from './AcountPurchases/AcountPurchases';

export default function Acount({changeToHome}) {
    const [option, setOption] = useState("Bienvenido");
    const handlerOptionEdit = () => setOption('Cuenta');
    const handlerOptionCart = () => setOption('Carrito');
    const handlerOptionPurchases = () => setOption('Compras Recientes');

  return (
    <>
    <div className='acountOptions'>
        <h2>{option}</h2>

        <div className={option==="Cuenta"?"activeOptionEdit":"acountOptionEdit"} onClick={handlerOptionEdit}>
            <h2>Cuenta</h2>
            <AiOutlineUser className='iconOption'/>
        </div>

        <div className={option==="Carrito"?"activeOptionCart":"acountOptionCart"} onClick={handlerOptionCart}>
            <h2>Carrito</h2>
            <FaShoppingCart className='iconOption'/>
        </div>

        <div className={option==="Compras Recientes"?"activeOptionPurchases":"acountOptionPurchases"} onClick={handlerOptionPurchases}>
            <h2>Compras Recientes</h2>
            <FaRegCalendarCheck className='iconOption'/>
        </div>

        <div className='acountOptionIcons'>
        <IoMdArrowBack className='iconContentAcount1' onClick={changeToHome}/>
        <AiFillFacebook className='iconContentAcount2'/>
        <AiFillInstagram className='iconContentAcount3'/>
        <IoLogoWhatsapp className='iconContentAcount4'/>
        </div>
    </div>

    <div className='acountContent'>
    {
        (option ==="Cuenta")
        ?<AcountEdit/>
        :(option ==="Carrito")
        ?<AcountCart/>
        :<AcountPurchases/>
    }
    </div>
    </>
  )
}
