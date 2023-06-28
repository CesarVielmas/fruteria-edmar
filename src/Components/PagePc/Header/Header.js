import React, { useState } from 'react'
import styled from 'styled-components'
import Logo1 from '../../../assets/Logo2.png';
import './Header.css';
import userImage from '../../../assets/acountImageExample.jpg';
import { AiFillRead, AiFillShopping,AiFillPhone, AiOutlineUser, AiFillCaretDown} from 'react-icons/ai';
import {FaShoppingCart,FaRegCalendarCheck} from 'react-icons/fa'; 
import {BsFillDoorOpenFill} from 'react-icons/bs';

export default function HeaderPage({changeToSesion,changeToAcount}) {
const [registrado, setRegistrado] = useState(1);
const [acount, setAcount] = useState(false);

const handlerRegistrado = () => setRegistrado(0);

const handlerAcount = () => acount?setAcount(false):setAcount(true);
document.addEventListener("mouseover",(e)=>{
        if (e.target.id.includes("registerHover"))document.documentElement.style.setProperty("--color-logo",'#005051');
        else document.documentElement.style.setProperty("--color-logo","white");
       
});

const Head = styled.header`
    width: 100%;
    display: flex;
    background-image: linear-gradient(#56f056,#40b840);
    height: 88px;
    border-bottom: 2px solid #005051;
`;

const Link = styled.a`
    flex: 1;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: #005051;
    font-size: 20px;
    padding-top:12px;
    text-align: center;
    //Pendiente
    border-top: none;
    border-bottom: none;
    border-left:thin dotted #005051;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;

    border-right:thin dotted #005051;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
    //Pendiente

    margin-right: 30px;
    :hover{
        cursor: pointer;
        color: whitesmoke;
    }
`;

const LinkSesion = styled.a`
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: #005051;
    font-size: 20px;
    margin-left: 3%;
    border: thin solid #005051;
    border-radius: 5px;
    width: 300px;
    text-align: center;
    height: 25px;
    padding-bottom: 10px;
    padding-top: 10px;
    margin-top: 20px;
    margin-right: 10px;
    :hover{
        --color-logo:white;
        background-color: white;
        cursor: pointer;
    }
    
`;
const LinkSesionIn = styled.a`
    position: relative;
    color: #005051;
    top: -15%;
    right: 2%;
    font-size: 60px;
    margin-left: 3%;
    border: thin solid #005051;
    border-radius: 60%;
    width: 75px;
    text-align: center;
    height: 70px;
    margin-top: 20px;
    margin-right: 10px;
    overflow:hidden;
    :hover{
        cursor: pointer;
    }
    img{
        height: 100%;
        width: 100%;
        background-size: 100%;
    }
`;
const LinkSesionIcon = styled.div`
    position: relative;
    border-radius: 60%;
    height: 20px;
    width: 25px;
    right: 4.5%;
    top: 60%;
    font-size: 20px;
    text-align: center;
    padding-top: 6px;
    color: rgb(204, 204, 204);
    background-color: rgb(110, 110, 110);
    :hover{
        cursor: pointer;
        color: white;
    }
`;
const LogoLoggin = styled.div `
    font-size: 40px;
    border: thin solid #005051;
    border-radius: 50%;
    width: 94px;
    height: 70%;
    margin-top: 2px;
    position: relative;
    left: 5%;
    background-color: var(--color-logo);
    text-align: center;
    padding-top: 20px;
    color: black;
  
`;
const Logo = styled.img`
    
    padding-top: 5px;
    margin-left: 1%;
    height: 70px;
    width: 80px;
    margin-left: 4%;
    margin-right: 8%;

    :hover{
        cursor: pointer;
    }
`;
const AccountSettings = styled.div`
    position: absolute;
    width: 350px;
    height: 450px;
    left: 70.5%;
    top: 12%;
    z-index: 10;
    border-radius: 30px;
    background-color: rgb(6, 53, 4);
    overflow: hidden;
    box-shadow: 0px 3px 10px 2px black;

`;
  return (
    <Head>
        <Logo src = {Logo1} alt='Logo'/>

        <Link>Productos
        <br/>
        <AiFillShopping/>
        </Link>
        
        <Link>Avisos
        <br/>
        <AiFillRead/>
        </Link>

        <Link>Contacto
        <br/>
        <AiFillPhone/>
        </Link>
         {
            //Condicional
            (registrado === 0)
            ?<><LogoLoggin><AiOutlineUser/></LogoLoggin><LinkSesion id='registerHover' onClick={changeToSesion}>Iniciar Sesion</LinkSesion></>
            //Cuando el usuario esta registrado
            :<><LinkSesionIn><img src={userImage} alt='imagen del usuario'/></LinkSesionIn> <LinkSesionIcon onClick={handlerAcount}><AiFillCaretDown onClick={handlerAcount}/></LinkSesionIcon> </>
         }
         {
            (acount)
            ?<AccountSettings>
                <div className='acountUser'>
                    <img src={userImage} alt='foto de la cuenta' />
                    <h2>Cesar Vielmas</h2>
                    <a onClick={changeToAcount}>Editar Cuenta</a>
                </div>

                <div className='acountCart' onClick={changeToAcount}>
                    <FaShoppingCart className='iconAcount1'/>
                    <h2>Carrito</h2>
                </div>

                <div className='acountPurchases' onClick={changeToAcount}>
                    <FaRegCalendarCheck className='iconAcount2'/>
                    <h2>Compras Recientes</h2>
                </div>

                <div className='acountOut' onClick={()=>{handlerRegistrado(); handlerAcount(); }}>
                    <BsFillDoorOpenFill className='iconAcount3'/>
                    <h2>Cerrar Sesion</h2>
                </div>
            </AccountSettings>
            :""
         }
    </Head>

  )
}
