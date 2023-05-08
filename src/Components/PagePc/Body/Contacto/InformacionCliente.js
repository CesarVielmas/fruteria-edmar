import React, { useEffect } from 'react'
import waveInformationClient from '../../../../assets/waveInformation2.svg';
import clouds from '../../../../assets/clouds.svg';


export default function InformacionCliente() {
  let  divObjetivo = document.querySelector('.hiddenAll');
  let  waveDiv = document.querySelector('.waveInformationClient');

  const handlerSelect = ()=> {
    let posicionDivObjetivo = divObjetivo.offsetTop;
    
    let posicionScroll = window.pageYOffset || document.documentElement.scrollTop;
   
    if (posicionScroll >= posicionDivObjetivo-485) {
      divObjetivo.classList.replace('hiddenAll','informationClient');
      waveDiv.classList.add('moveWave');
    }
  }

  useEffect(() => {
  divObjetivo = document.querySelector('.hiddenAll');
  waveDiv = document.querySelector('.waveInformationClient');
  window.addEventListener('scroll',handlerSelect)
  return () => {
    window.removeEventListener('scroll',handlerSelect);
  }
}, [])
  
  return (
    <>
    <div className='hiddenAll'>
        <h1>Usted Es Lo Mas Importante</h1>
        <p>Nuestra prioridad principal es poder cumplir todas sus expectativa,por ello capacitamos a nuaestros diferentes empleados para darle un trato que usted se merece y ademas de brindarle un servicio de calidad</p>
        <div className='carruselAuto'></div>
        <img src={clouds} alt='clouds Carrusel' className='cloudsCarrusel' />
    </div>
     <img  className='waveInformationClient' src={waveInformationClient} alt='wave'/>
     </>
  )
}
