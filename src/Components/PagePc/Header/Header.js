import React, { useState } from 'react'
import styled from 'styled-components'
import Logo1 from '../../../assets/Logo2.png';
import { AiFillRead, AiFillShopping,AiFillPhone, AiOutlineUser} from 'react-icons/ai'

export default function HeaderPage({changeToSesion}) {
const [registrado, setRegistrado] = useState(0);

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
        padding-top: 15px;
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
            :<LinkSesion>Usuario Registrado</LinkSesion>
         }
    </Head>
  )
}
