import React, { useState,useEffect} from 'react'
import throttle from 'lodash/throttle';
import './Opciones.css'

const initialStyleS = {
  width: '14%',
  height: '98%',
  borderRight: '2px solid #005051',
  zIndex: 1,
  display:'inline-block',
  position:'absolute',
  top: '172.4px',
  boxShadow: '0px 5px 8px black',
  backgroundColor: 'white',
  paddingTop: '13px',
  textAlign: 'center'
}

const styleStatic = {
  position: 'fixed',
  top: '0px',
  paddingTop: '13px',
  textAlign: 'center',
  borderRight: '2px solid #005051',
  display:'inline-block',
  boxShadow: '0px 5px 8px black',
  width: '14%',
  height: '98%',
  backgroundColor: 'white',
  borderTop: '4px solid #005051',
  zIndex: -2
}
let topHeight = 0;

export default function Opciones() {
  const [stylesOptionBar, setStylesOptionBar] = useState(initialStyleS);
  
  const handlerScroll = ()=>{
      // Obtener la altura total del documento
  const alturaTotal = document.documentElement.scrollHeight;
  // Obtener la altura de la ventana de visualización
  const alturaVentana = window.innerHeight;
  
  if (window.scrollY<170) setStylesOptionBar(initialStyleS);
  
  else if (window.scrollY>170&&window.scrollY<=(alturaTotal-(alturaVentana*1.48))){
    topHeight = (alturaTotal-(alturaVentana*1.48))+"px"
    setStylesOptionBar(styleStatic)
    console.log("altura top:",topHeight);
    console.log("altura total:",alturaTotal);
  }
  else if(window.scrollY>=(alturaTotal-(alturaVentana*1.48)))
  {
    const initialPosition = {
      width: '14%',
      height: '100%',
      zIndex: -1,
      display:'inline-block',
      position:'absolute',
      top: topHeight,
      boxShadow: '5px -7px 6px black',
      backgroundColor: 'white',
      paddingTop: '13px',
      textAlign: 'center',
      borderTop: '4px solid #005051',
      borderRight: '2px solid #005051'
    }
    setStylesOptionBar(initialPosition);
  }

}
useEffect(() => {
  const handlerThrottlerScroll = throttle(handlerScroll,10);
  window.addEventListener("scroll",handlerThrottlerScroll);

  return () => {
    window.removeEventListener('scroll', handlerThrottlerScroll);
  };
}, []);



 
  return (
    <>
    
    <div style={stylesOptionBar}>
    <h2 className='optionBarTitle'>Lista De Productos</h2>
    <h3 className='optionBarFilter'>Filtrar</h3>
    <hr className='optionBarHr'/>
    <div className='filterBar'>
    <label>Ofertas</label>
    <input type='checkbox' value={"filtarOfertaOn"} className='filterBarInput1'/>
    <label className='filterBarDisp'>Disponibilidad</label>
    <input type='checkbox' value={"filtrarDisponibilidadOn"}  className='filterBarInput2'/>
    <label>Temporada</label>
    <input type='checkbox' value={"filtrarTemporadaOn"}  className='filterBarInput3'/>
    </div>
    <h3 className='optionBarOrder'>Ordenar</h3>
    <hr className='optionBarHr'/>
    <div className='orderBar'>
    <label>Nombre A-Z</label>
    <input type='checkbox' value={"ordenarNombre1On"}  className='filterBarInput4'/>
    <label>Nombre Z-A</label>
    <input type='checkbox' value={"ordenarNombre2On"}  className='filterBarInput5'/>
    <label>Precio Mayor-Menor</label>
    <input type='checkbox' value={"ordenarNombreOn"}  className='filterBarInput6'/>
    <label>Precio Menor-Mayor</label>
    <input type='checkbox' value={"ordenarNombreOn"} className='filterBarInput7'/>
    </div>
   </div>
   </>
  )
}
