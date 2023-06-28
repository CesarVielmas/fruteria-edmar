import React, { useEffect, useState } from 'react'
import Busqueda from './Busqueda';
import Producto from './Producto';

export default function Productos() {
  const [search, setSearch] = useState(false);

  const handlerScroll = ()=>{
    var windowHeight = window.innerHeight || document.documentElement.clientHeight;
  
  // Obtener la posición actual del desplazamiento vertical
  var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  
  // Calcular el porcentaje de desplazamiento
  var porcentajeDesplazamiento = (scrollPosition / (document.documentElement.scrollHeight - windowHeight)) * 100;
  
  // Comprobar si el porcentaje de desplazamiento alcanza cierto valor
  if (porcentajeDesplazamiento >= 16) setSearch(true);
   else if(porcentajeDesplazamiento <16)setSearch(false); 
  }

  useEffect(() => {

    document.addEventListener('scroll',handlerScroll);
    return () => {
      document.removeEventListener('scroll',handlerScroll);
    }
  }, [])
  
  return (
    <>
    <Busqueda changeSearch={search}/>
    <Producto/>
    <Producto/>
    <Producto/>
    <Producto/>
    <Producto/>
    <Producto/>
    <Producto/>
    <Producto/>
    <Producto/>
    <Producto/>
    <Producto/>
    <Producto/>
    <Producto/>
    <Producto/>
    <Producto/>
    <p style={{marginBottom:"25vh"}}></p>
    </>
  )
}
