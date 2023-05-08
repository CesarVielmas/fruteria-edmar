import React,{useEffect } from 'react'
import cloud1 from '../../../../assets/cloud1.svg';
import waveInformation from '../../../../assets/waveInformation.svg';
import { MdConnectWithoutContact } from 'react-icons/md';

let cloud = document.querySelector("#cloud");
let button = document.querySelector("#button");
let icon = document.querySelector("#icon");

export default function Informacion() {
   

    const handlerHover = (e) =>{
       
        if(e.target.id === "cloud" || e.target.id.includes("icon") === true || e.target.id === "button"||(e.target.tagName === "path" && e.target.getAttribute("d").includes("M11") === true))
        {
           
            document.querySelector(".buttonCloud")?.classList?.add("animationOutButton");
            icon?.classList?.add("animationOutIcon");
            document.querySelector(".cloudInformation")?.classList?.add("animationOutCloud");
        }
        else{
        
            document.querySelector("#cloud")?.classList?.remove("animationOutCloud");
            document.querySelector("#button")?.classList?.remove("animationOutButton");
            icon?.classList?.remove("animationOutIcon");
        }
    }
    useEffect(() => {
        if (cloud !== null && button!==null && icon!== null) {
            window.addEventListener('mouseover',handlerHover);
            return () => {
                window.removeEventListener('mouseover', handlerHover);
              }; 
        }
        else{
            cloud = document.querySelector("#cloud");
            button = document.querySelector("#button");
            icon = document.querySelector("#icon");
        }

      }, [cloud,button,icon]);

  return (
    <>
    <div className='information'>
        <h1>¿Necesitas Ayuda?</h1>
        <p>Nosotros queremos darte la mejor atencion a toda costa y por ello le damos este servicio para que pueda darno su sugerencia , si tiene algun problema o alguna inquietud con nostros , mejoraremos y trataremos de ser lo mas parciales respecto a cualquier duda o problema , porfavor si requiere atencion llene el formulario y diganos su problema</p>
        <img src={cloud1} alt='nube' className='cloudInformation'  id='cloud'/>

        <MdConnectWithoutContact className='iconContact'  id='icon'/>

        <button className='buttonCloud' id='button'>Necesito Ayuda</button>
    </div>
    <img  className='waveInformation' src={waveInformation} alt='wave'/>
    </>
  )
}
