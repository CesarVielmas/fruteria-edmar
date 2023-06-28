import React, { useEffect, useState } from 'react'
import './Footer.css';
import footerWave from '../../../assets/footerWave.svg';
import Logo1 from '../../../assets/Logo2.png';

export default function Footer() {
  const [style, setStyle] = useState("auto");
  let completeWavePhone = document.querySelector('.completeWavePhone');

  const handlerRezize = () =>{
    let valor = `${window.getComputedStyle(completeWavePhone).getPropertyValue('bottom')}`;
    let valorWithOutPx = parseFloat(valor)+50;
    console.log(valorWithOutPx);
    setStyle(`${valorWithOutPx}px`);
  }
  useEffect(() => {
    completeWavePhone = document.querySelector('.completeWavePhone');
    window.addEventListener('resize',handlerRezize);
  
    return () => {
      window.removeEventListener('resize',handlerRezize);
    }
  }, [])
  
  return (
    <>
    <div className='wavePhoneFooter' style={{bottom:style}}><img src={footerWave} alt='footer wave'/></div>
    <div className='completeWavePhone'>
      <img src={Logo1} alt='logo' className='waveLogoPhone'/>
      <div className='flexCompleteWavePart1'>
      <h1 className='helperPagesPhoneText phoneText1'>¿Que Es?</h1>
      <h1 className='helperPagesPhoneText phoneText3'>¿Como Funciona?</h1>
      <h1 className='helperPagesPhoneText phoneText4'>Conocenos</h1>
      <h1 className='helperPagesPhoneText'>Obten Ayuda</h1>
      </div>
      <hr className='divide1Phone'/>
      <div className='rulesPhone'>
        <h2 className='rulesTextPhone'>Politica De Privacidad</h2>
        <h2 className='rulesTextPhone'>Terminos y Condiciones</h2>
      </div>
    </div>
    </>
  )
}
