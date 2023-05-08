import React, { createRef, useEffect, useState } from 'react'
import './Footer.css';
import footerWave from '../../../assets/footerWave.svg'
import styled from 'styled-components';
import {AiFillFacebook, AiFillInstagram} from 'react-icons/ai'
import {IoLogoWhatsapp} from 'react-icons/io';


export default function FooterPage() {
  const [style1, setStyle1] = useState("auto");
  const [style2, setStyle2] = useState("auto");
  const refElements = createRef();
  
  useEffect(() => {
  let value = `${window.getComputedStyle(refElements.current).getPropertyValue('bottom')}`;

  const regex = /(-?\d+)px/;
  const matches = regex.exec(value);
  value = matches[1];

  setStyle1(`${(value-320)}px`); 
  setStyle2(`${(value-405)}px`); 
  }, [refElements])
  
  const FooterWave = styled.img`
    position: absolute;
    width: 110%;
    bottom:${style1};
    left: -.07%;
    z-index: -1;
  `;
  const CompleteWave = styled.div`
    position: absolute;
    bottom: ${style2};
    height: 30%;
    width: 100%;
    background-color: #1B4722;
    z-index: -1;
  `;
  const Example = styled.div`
  position: absolute;
  bottom: auto;
  border: none;
  background-color: transparent;
  z-index: -2;
  `;
  return (
    <>
    <Example ref={refElements}/>
    <div className='footerBackground'>
    <FooterWave src={footerWave} alt='wave'/>
    <CompleteWave/>
    <div className='waveLogo'></div>
    <div className='helperPages'> 
    <h1 className='helperPagesText'>¿Que Es Fruteria Edmar?</h1>
    <h1 className='helperPagesText'>Preguntas Frecuentes</h1>
    <h1 className='helperPagesText'>¿Como Funciona?</h1>
    <h1 className='helperPagesText'>Conocenos</h1>
    <h1 className='helperPagesText'>Obten Ayuda</h1>
    </div>
    <hr className='divide1'/>
    <div className='rules'>
    <h2 className='rulesText'>Politica De Privacidad</h2>
    <h2 className='rulesText'>Terminos y Condiciones</h2>
    </div>
    <hr className='divide2'/>
    <div className='socialMedia'>
    <AiFillFacebook className='socialMediaIcon'/>
    <AiFillInstagram className='socialMediaIcon'/>
    <IoLogoWhatsapp className='socialMediaIcon'/>
    </div>
    
    
    </div>
    </>
  )
}
