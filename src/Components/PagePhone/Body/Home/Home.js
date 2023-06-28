import React, { useEffect } from 'react'
import './Home.css';
import carrusel1 from '../../../../assets/carruselHome1.jpg';
import carrusel2 from '../../../../assets/carruselHome2.jpg';
import carrusel3 from '../../../../assets/carruselHome3.jpg';
import carrusel4 from '../../../../assets/carruselHome4.jpg';
import carrusel5 from '../../../../assets/carruselHome5.jpg';
import calidadImage from '../../../../assets/calidadImage.jpg';
import precioImage from '../../../../assets/precioImage.jpg';
import { BsFillSquareFill } from 'react-icons/bs';
import { AiOutlineDollar, AiOutlineUser, AiTwotoneShop } from 'react-icons/ai';
import { BiUserVoice } from 'react-icons/bi';
import { CiDeliveryTruck } from 'react-icons/ci';
let touch  = 0; 
let initialTouchX = 0;
let contadorInterval = 0;
let intervaloCarrusel;
let contadorTimeout = 0;
let contadorCuality = 0;
let contadorPrices = 0;
export default function Home() {
  let image1 = document.querySelector('.carruselHomePhone1');
  let image2 = document.querySelector('.carruselHomePhone2');
  let image3 = document.querySelector('.carruselHomePhone3');
  let image4 = document.querySelector('.carruselHomePhone4');
  let image5 = document.querySelector('.carruselHomePhone5');
  let carrusel = document.querySelector('.carruselImagePhone');
  let statePhoneImage1 = document.querySelector('#statePhone1')||document.querySelector('#statePhoneActive');
  let statePhoneImage2 = document.querySelector('#statePhone2')||document.querySelector('#statePhoneActive');
  let statePhoneImage3 = document.querySelector('#statePhone3')||document.querySelector('#statePhoneActive');
  let statePhoneImage4 = document.querySelector('#statePhone4')||document.querySelector('#statePhoneActive');
  let statePhoneImage5 = document.querySelector('#statePhone5')||document.querySelector('#statePhoneActive');
  let cualityAdd = document.querySelector('.excelentCualityPhone');
  let pricesAdd = document.querySelector('.pricesAccesibilityPhone');
  let atentionAdd = document.querySelector('.atentionCualityPhone');
  let cualityInformation = document.querySelector('.exampleCualityInformationPhone');
  let cualityImage = document.querySelector('.exampleCualityImagePhone');
  let pricesInformation = document.querySelector('.examplePricesInformationPhone');
  let pricesImage = document.querySelector('.examplePricesImagePhone');
  let cualityComplete = document.querySelector(".cualityPhoneComplete");
  let pricesComplete = document.querySelector(".pricesPhoneComplete");
  let atentionComplete = document.querySelector(".atentionPhoneComplete");
  let finalComplete = document.querySelector(".finalPhone");

  const handlerStart = (e)=>{
    clearInterval(intervaloCarrusel);
    contadorTimeout = 0;
    touch = e.touches[0];
    initialTouchX = touch.clientX;
    setTimeout(()=>{
      if (contadorTimeout === 0) {
        contadorTimeout = 1;
        intervaloCarrusel = setInterval(()=>{
          intervalMove();
        },4000);
      }
    
    },5000);
  }
  const handlerMove = (e)=>{
    let currentTouchX;
    let deltaX;

   if (e.srcElement.classList.contains("carruselHomePhone1")) {
      touch = e.touches[0];
      currentTouchX = touch.clientX;
      deltaX = currentTouchX - initialTouchX; 
     
      if (deltaX<-100) {
        if (image1.classList.contains("activo2")) {
            image1.classList.remove("activo2");
          
        }
        else{
          image1.classList.remove("activo");
        }
       statePhoneImage1.id = "statePhone1"
       statePhoneImage2.id = "statePhoneActive"
       image2.classList.add("activo");
      }
      else if(deltaX>100){
        if (image1.classList.contains("activo2")) {
          image1.classList.remove("activo2");
        
      }
      else{
        image1.classList.remove("activo");
      }
        statePhoneImage1.id = "statePhone1"
        statePhoneImage5.id = "statePhoneActive"
        image5.classList.add("activo2");
      }
   }
   else if(e.srcElement.classList.contains("carruselHomePhone2")){
    touch = e.touches[0];
      currentTouchX = touch.clientX;
      deltaX = currentTouchX - initialTouchX; 
     
      if (deltaX<-100) {
        if (image2.classList.contains("activo2")) {
            image2.classList.remove("activo2");
          
        }
        else{
          image2.classList.remove("activo");
        }
       statePhoneImage2.id = "statePhone2"
       statePhoneImage3.id = "statePhoneActive"
       image3.classList.add("activo");
      }
      else if(deltaX>100){
        if (image2.classList.contains("activo2")) {
          image2.classList.remove("activo2");
        
      }
      else{
        image2.classList.remove("activo");
      }
      statePhoneImage2.id = "statePhone2";
       statePhoneImage1.id = "statePhoneActive"
        image1.classList.add("activo2");
      }
   }
   else if(e.srcElement.classList.contains("carruselHomePhone3")){
    touch = e.touches[0];
    currentTouchX = touch.clientX;
    deltaX = currentTouchX - initialTouchX; 
   
    if (deltaX<-100) {
      if (image3.classList.contains("activo2")) {
          image3.classList.remove("activo2");
      }
      else{
        image3.classList.remove("activo");
      }
      statePhoneImage3.id = "statePhone3"
      statePhoneImage4.id = "statePhoneActive"
     image4.classList.add("activo");
    }
    else if(deltaX>100){
      if (image3.classList.contains("activo2")) {
        image3.classList.remove("activo2");
      
    }
    else{
      image3.classList.remove("activo");
    }
    statePhoneImage3.id = "statePhone3"
      statePhoneImage2.id = "statePhoneActive"
      image2.classList.add("activo2");
    }
   }
   else if(e.srcElement.classList.contains("carruselHomePhone4")){
    touch = e.touches[0];
      currentTouchX = touch.clientX;
      deltaX = currentTouchX - initialTouchX; 
     
      if (deltaX<-100) {
        if (image4.classList.contains("activo2")) {
            image4.classList.remove("activo2");
          
        }
        else{
          image4.classList.remove("activo");
        }
        statePhoneImage4.id = "statePhone4"
      statePhoneImage5.id = "statePhoneActive" 
       image5.classList.add("activo");
      }
      else if(deltaX>100){
        if (image4.classList.contains("activo2")) {
          image4.classList.remove("activo2");
        
      }
      else{
        image4.classList.remove("activo");
      }
      statePhoneImage4.id = "statePhone4"
      statePhoneImage3.id = "statePhoneActive"
        image3.classList.add("activo2");
      }
   }
   else if(e.srcElement.classList.contains("carruselHomePhone5")){
    touch = e.touches[0];
      currentTouchX = touch.clientX;
      deltaX = currentTouchX - initialTouchX; 
     
      if (deltaX<-100) {
        if (image5.classList.contains("activo2")) {
            image5.classList.remove("activo2");
          
        }
        else{
          image5.classList.remove("activo");
        }
        statePhoneImage5.id = "statePhone5"
       statePhoneImage1.id = "statePhoneActive"
       image1.classList.add("activo");
      }
      else if(deltaX>100){
        if (image5.classList.contains("activo2")) {
          image5.classList.remove("activo2");
        
      }
      else{
        image5.classList.remove("activo");
      }
      statePhoneImage5.id = "statePhone5"

       statePhoneImage4.id = "statePhoneActive"
        image4.classList.add("activo2");
      }
     
  }
}
  const intervalMove = ()=>{
  contadorInterval ++;
   if (contadorInterval === 1) {
        if (image1.classList.contains("activo2")) {
            image1.classList.remove("activo2");      
        }
        else{
          image1.classList.remove("activo");
        }
       statePhoneImage1.id = "statePhone1"
       statePhoneImage2.id = "statePhoneActive"
       image2.classList.add("activo"); 
   }
   if (contadorInterval === 2) {
    if (image2.classList.contains("activo2")) {
        image2.classList.remove("activo2");      
    }
    else{
      image2.classList.remove("activo");
    }
   statePhoneImage2.id = "statePhone1"
   statePhoneImage3.id = "statePhoneActive"
   image3.classList.add("activo"); 
  }

  if (contadorInterval === 3) {
    if (image3.classList.contains("activo2")) {
        image3.classList.remove("activo2");      
    }
    else{
      image3.classList.remove("activo");
    }
   statePhoneImage3.id = "statePhone1"
   statePhoneImage4.id = "statePhoneActive"
   image4.classList.add("activo"); 
}  

if (contadorInterval === 4) {
  if (image4.classList.contains("activo2")) {
      image4.classList.remove("activo2");      
  }
  else{
    image4.classList.remove("activo");
  }
 statePhoneImage4.id = "statePhone1"
 statePhoneImage5.id = "statePhoneActive"
 image5.classList.add("activo"); 
}

if (contadorInterval === 5) {
  if (image5.classList.contains("activo2")) {
      image5.classList.remove("activo2");      
  }
  else{
    image5.classList.remove("activo");
  }
 statePhoneImage5.id = "statePhone1"
 statePhoneImage1.id = "statePhoneActive"
 image1.classList.add("activo"); 
 contadorInterval = 0;
}

  }
  const handlerScroll = ()=>{
    console.log(window.scrollY);
    if (window.scrollY>100) {
      cualityAdd.classList.add("animationVisibleAdd");
    }
    if (window.scrollY>540) {
      pricesAdd.classList.add("animationVisibleAdd");
    }
    if (window.scrollY>950) {
      atentionAdd.classList.add("animationVisibleAdd");
    }
    if (window.scrollY>1380) {
      cualityComplete.classList.add("activePhoneComplete");
    }
    if (window.scrollY>2100) {
      pricesComplete.classList.add("activePhoneComplete");
    }
    if (window.scrollY>2920) {
      atentionComplete.classList.add("activePhoneComplete");
    }
    if (window.scrollY>4000) {
      finalComplete.classList.add("activePhoneComplete");
    }
  }
  const handlerClickCuality = () =>{
    contadorCuality++;
    if (contadorCuality===1) {
      cualityInformation.classList.replace('cualityInformationPhone','cualityInformationPhone2');
      cualityImage.classList.replace('cualityImagePhone','cualityImagePhone2');
    
    }
    if(contadorCuality ===2){
      contadorCuality = 0;
      cualityInformation.classList.replace('cualityInformationPhone2','cualityInformationPhone');
      cualityImage.classList.replace('cualityImagePhone2','cualityImagePhone');
    }
   
  }
  const handlerClickPrices = () =>{
    contadorPrices++;
    if (contadorPrices===1) {
      pricesInformation.classList.replace('pricesInformationPhone','pricesInformationPhone2');
      pricesImage.classList.replace('pricesImagePhone','pricesImagePhone2');
    }
    if(contadorPrices ===2){
      contadorPrices = 0;
      pricesInformation.classList.replace('pricesInformationPhone2','pricesInformationPhone');
      pricesImage.classList.replace('pricesImagePhone2','pricesImagePhone');
    }
  }

  useEffect(() => {

    image1 = document.querySelector('.carruselHomePhone1');
    image2 = document.querySelector('.carruselHomePhone2');
    image3 = document.querySelector('.carruselHomePhone3');
    image4 = document.querySelector('.carruselHomePhone4');
    image5 = document.querySelector('.carruselHomePhone5');
    carrusel = document.querySelector('.carruselImagePhone');
    cualityAdd = document.querySelector('.excelentCualityPhone');
    pricesAdd = document.querySelector('.pricesAccesibilityPhone');
    atentionAdd = document.querySelector('.atentionCualityPhone');
    statePhoneImage1 = document.querySelector('#statePhone1')||document.querySelector('#statePhoneActive');
    statePhoneImage2 = document.querySelector('#statePhone2')||document.querySelector('#statePhoneActive');
    statePhoneImage3 = document.querySelector('#statePhone3')||document.querySelector('#statePhoneActive');
    statePhoneImage4 = document.querySelector('#statePhone4')||document.querySelector('#statePhoneActive');
    statePhoneImage5 = document.querySelector('#statePhone5')||document.querySelector('#statePhoneActive');
    cualityInformation = document.querySelector('.exampleCualityInformationPhone');
    cualityImage = document.querySelector('.exampleCualityImagePhone');
    pricesInformation = document.querySelector('.examplePricesInformationPhone');
    pricesImage = document.querySelector('.examplePricesImagePhone');
    cualityComplete = document.querySelector(".cualityPhoneComplete");
    pricesComplete = document.querySelector(".pricesPhoneComplete");
    atentionComplete = document.querySelector(".atentionPhoneComplete");
    finalComplete = document.querySelector(".finalPhone");

    intervaloCarrusel = setInterval(()=>{
      intervalMove();
    },4000);
    carrusel.addEventListener('touchstart',handlerStart);
    carrusel.addEventListener('touchmove',handlerMove);
    document.addEventListener('scroll',handlerScroll);
    return () => {
      carrusel.removeEventListener('touchstart',handlerStart);
      carrusel.removeEventListener('touchmove',handlerMove);
      document.removeEventListener('scroll',handlerScroll);
      clearInterval(intervaloCarrusel);
    }
  }, [])

  
  return (
    <div>
      <div className='carruselImagePhone'>
      <img src={carrusel1} alt='carrusel1Image' className='carruselHomePhone1 activo'/>
      <img src={carrusel2} alt='carrusel1Image' className='carruselHomePhone2'/>
      <img src={carrusel3} alt='carrusel1Image' className='carruselHomePhone3'/>
      <img src={carrusel4} alt='carrusel1Image' className='carruselHomePhone4'/>
      <img src={carrusel5} alt='carrusel1Image' className='carruselHomePhone5'/>
      </div>
      <div className='infoCarruselPhone'>
        <div className='carruselStatePhone'>
        <BsFillSquareFill id='statePhoneActive'/>
        <BsFillSquareFill id='statePhone2'/>
        <BsFillSquareFill id='statePhone3'/>
        <BsFillSquareFill id='statePhone4'/>
        <BsFillSquareFill id='statePhone5'/>
        </div>
        <hr/>
        <h1>La Mejor Calidad-Precio y Trato Amable Que Usted Se Merece</h1>
        <button>Comenzar Ahora</button>
      </div>

      <div className='excelentCualityPhone'>
      <button></button>
      <h2>Excelente Calidad</h2>
      <p>Contamos con una calidad excelente para nuestros clientes , pues nuestros clientes siempre son primero</p>
      <AiTwotoneShop className='cualityPhone'/>
      </div>

      <div className='pricesAccesibilityPhone'>
      <button></button>
      <h2>Precios Accesibles</h2>
      <p>Contamos con una calidad excelente para nuestros clientes , pues nuestros clientes siempre son primero</p>
      <AiOutlineDollar className='dollarPhone'/>
      </div>

      <div className='atentionCualityPhone'>
      <button></button>
      <h2>Atencion Calida</h2>
      <p>Contamos con una calidad excelente para nuestros clientes , pues nuestros clientes siempre son primero</p>
      <BiUserVoice className='userPhone userPhone1'/>
       <AiOutlineUser className='userPhone'/>
      </div>



      <div className='cualityPhoneComplete'>
        <div className='wavePhone1'>
          <svg viewBox="0 0 500 150" preserveAspectRatio="none">
            <path d="M-13.82,43.08 C149.99,201.58 350.52,-49.08 513.30,82.88 L500.00,150.00 L0.00,150.00 Z"></path>
          </svg>
        </div>

        <div className='exampleCualityImagePhone cualityImagePhone'>
          <img src={calidadImage} alt="Calidad"/>
          <button onClick={handlerClickCuality}></button>
        </div>

        <div className='exampleCualityInformationPhone cualityInformationPhone'>
          <img src={carrusel3} alt="Calidad"/>
          <button onClick={handlerClickCuality}></button>     
        </div>
        <h2>Calidad Que Usted Merece</h2>
      <p>La calidad de nuestros productos es god y Line 204:16:  Assignments to the 'buttonNext' variable from inside React Hook useEffect will be lost after each render. To preserve the value over time, store it in a useRef Hook and keep the mutable value in the '.current' property. Otherwise, you can move this variable directly inside useEffect      react-hooks/exhaustive-deps
      Line 205:20</p>
      </div>




      <div className='pricesPhoneComplete'>
        <div className='wavePhone2'>
          <svg viewBox="0 0 500 150" preserveAspectRatio="none">
            <path d="M-13.82,43.08 C149.99,201.58 350.52,-49.08 513.30,82.88 L500.00,150.00 L0.00,150.00 Z"></path>
          </svg>
        </div>
        <div className='examplePricesImagePhone pricesImagePhone'>
          <img src={precioImage} alt="Precio"/>
          <button onClick={handlerClickPrices}></button>
        </div>
        <div className='examplePricesInformationPhone pricesInformationPhone'>
          <img src={carrusel4} alt="Precio"/>
          <button onClick={handlerClickPrices}></button>
        </div>
        <h2>Precio Accesible Para Todos</h2>
      <p>El precio de nuestros productos es god y Line 204:16:  Assignments to the 'buttonNext' variable from inside React Hook useEffect will be lost after each render. To preserve the value over time, store it in a useRef Hook and keep the mutable value in the '.current' property. Otherwise, you can move this variable directly inside useEffect      react-hooks/exhaustive-deps
      Line 205:20:</p>
      </div>


      <div className='atentionPhoneComplete'>
        <div className='wavePhone3'>
          <svg viewBox="0 0 500 150" preserveAspectRatio="none">
            <path d="M-13.82,43.08 C149.99,201.58 350.52,-49.08 513.30,82.88 L500.00,150.00 L0.00,150.00 Z"></path>
          </svg>
        </div>
        <div className='carruselAtentionPhoneComplete'>
          <div className='carruselImagesPhone'></div>
        </div>
        <h2>Atentos A Nuestros Clientes</h2>
        <p>La atencion a nuestros clientes es god y Line 204:16:  Assignments to the 'buttonNext' variable from inside React Hook useEffect will be lost after each render. To preserve the value over time, store it in a useRef Hook and keep the mutable value in the '.current' property. Otherwise, you can move this variable directly inside useEffect      react-hooks/exhaustive-deps
        Line 205:20</p>
      </div>

      
    <div className='finalPhone'>
      <h2>Unete Y Pide Ahora</h2>
      <div className='iconPhone'><CiDeliveryTruck/></div>
      <button>Regístrate</button>
    </div>

    </div>
  )
}
