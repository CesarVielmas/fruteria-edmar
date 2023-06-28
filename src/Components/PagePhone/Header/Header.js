import React, { useEffect, useState } from 'react'
import './Header.css';
import { AiFillPhone, AiFillRead, AiFillShopping, AiOutlineMenu, AiOutlineUser } from 'react-icons/ai';
import Logo1 from '../../../assets/Logo2.png';
import ImageUser from '../../../assets/acountImageExample.jpg';

export default function Header({cambiarSesion}) {
    const [user, setUser] = useState(false);
    let iconPhoneMenu = document.querySelector('.iconPhoneMenu');
    let menuPhone = document.querySelector('.menuHeaderPhone');
    const handlerClick = (e) =>{
       if (e.target === iconPhoneMenu){
        menuPhone.classList.remove('menuInvisible');
        menuPhone.classList.add('menuVisible');
       } 
       else {
        if (menuPhone.classList.contains('menuVisible')) {
            menuPhone.classList.remove('menuVisible');
            menuPhone.classList.add('menuInvisible');   
        }
        
       } 
    }
    useEffect(() => {
      menuPhone = document.querySelector('.menuHeaderPhone');
      iconPhoneMenu = document.querySelector('.iconPhoneMenu');
      document.addEventListener("click",handlerClick);
    
      return () => {
        document.removeEventListener("click",handlerClick);
      }
    }, [])
    
  return (
    <>
    <div className='headerPagePhone'>
        <AiOutlineMenu className='iconPhoneMenu'/>
        <img src={Logo1} alt='logoPhone'/>
    </div>
    <div className='menuHeaderPhone'>
        <div className='menuPhoneUser'>
            {
                user
                ?<>
                <img src={ImageUser} alt='imagen usuario' className='imageHeaderPhone'/>
                <h2 className='textSesionHeader'>Cesar Vielmas</h2>
                <a className='optionSeisionHeader'>Editar Cuenta</a>
                <a className='optionSeisionHeader'>Carrito</a>
                <a className='optionSeisionHeader'>Compras Recientes</a>
                <a className='optionSeisionHeader'>Cerrar Sesion</a>
                </>
                :<><AiOutlineUser className='iconSesionHeader'/>
                <button className='buttonSesionHeader' onClick={cambiarSesion}>Iniciar Sesion</button>
                <h2 className='textSesionHeader'>Comience a Pedir <br/>Con Nosotros</h2></>
            }
            
        </div>
        <div>
            <AiFillShopping className='iconDivPhone'/>
            <h2>Productos</h2>
        </div>
        <div>
            <AiFillRead className='iconDivPhone'/>
            <h2>Avisos</h2>
        </div>
        <div >
            <AiFillPhone className='iconDivPhone'/>
            <h2>Contacto</h2>
        </div>
    </div>
    </>
  )
}
