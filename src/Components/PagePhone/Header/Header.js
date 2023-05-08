import React, { useEffect, useState } from 'react'
import styled from 'styled-components'


export default function Header() {
const [registrado, setRegistrado] = useState(0);
const [vista,setVista] = useState(window.screenX);

window.addEventListener("resize",()=>setVista(window.screenX));
console.log(vista);
const Head = styled.header`
    width: 100%;
    height: 30%;
    text-align: right;
`;

const Link = styled.a`
    position: relative;
    top: 7%;
    margin-right: 12vw;
`;

const LinkSesion = styled.a`
    display: inline-block;
    border: 3px solid black;
    
`;
const Logo = styled.img`
    position: relative;
    display: inline-block;
    margin-right: 17vw;
    src: url(${props => props.url});
   
`;

  return (
    <Head>
        <Logo url = '' alt='Logo'/>
        <Link>Productos</Link>
        <Link>Ofertas</Link>
        <Link>Noticias</Link>
        <Link>Contacto</Link>
         {
            //Condicional
            (registrado === 0)
            ?<LinkSesion>Registrarse</LinkSesion>
            :<LinkSesion>Iniciar Sesion</LinkSesion>
         }
    </Head>
  )
}
