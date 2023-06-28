import React from 'react'
import './Home.css';
import carrusel1 from '../../../../assets/carruselHome1.jpg';
import carrusel2 from '../../../../assets/carruselHome2.jpg';
import carrusel3 from '../../../../assets/carruselHome3.jpg';
import carrusel4 from '../../../../assets/carruselHome4.jpg';
import carrusel5 from '../../../../assets/carruselHome5.jpg';
import calidadImage from '../../../../assets/calidadImage.jpg';
import precioImage from '../../../../assets/precioImage.jpg';
import {AiFillBackward,AiFillForward,AiTwotoneShop,AiOutlineDollar,AiOutlineUser} from 'react-icons/ai';
import {BiUserVoice} from'react-icons/bi';
import {CiDeliveryTruck} from 'react-icons/ci'
import { useEffect } from 'react';
import { useState } from 'react';

let contador = 0;
let carruselInterval = 0;
let contadorCuality = 0;
let contadorPrices = 0;
export default function Home({changeToSesion}) {
  const [buttons, setButtons] = useState(false);
  let image1 = document.querySelector('.carruselHome1');
  let image2 = document.querySelector('.carruselHome2');
  let image3 = document.querySelector('.carruselHome3');
  let image4 = document.querySelector('.carruselHome4');
  let image5 = document.querySelector('.carruselHome5');
  let button1 = document.querySelector('.button1');
  let button2 = document.querySelector('.button2');
  let button3 = document.querySelector('.button3');
  let buttonNext = document.querySelector('.next');
  let buttonPrevious = document.querySelector('.previous');
  let cuality = document.querySelector('.part2Cuality');
  let prices = document.querySelector('.part3Prices');
  let atention = document.querySelector('.part4Atention');
  let cualityInformation = document.querySelector('.exampleCualityInformation');
  let cualityImage = document.querySelector('.exampleCualityImage');
  let pricesInformation = document.querySelector('.examplePricesInformation');
  let pricesImage = document.querySelector('.examplePricesImage');
  let final = document.querySelector('.final');

  
  const handlerNext = ()=>{
    contador++;

    if (contador===1) {
      image1.setAttribute('src',carrusel4);
      image2.setAttribute('src',carrusel1);
      image3.setAttribute('src',carrusel2);
      image4.setAttribute('src',carrusel5);
      image5.setAttribute('src',carrusel3);
    }
    else if (contador===2) {
      image1.setAttribute('src',carrusel5);
      image2.setAttribute('src',carrusel4);
      image3.setAttribute('src',carrusel1);
      image4.setAttribute('src',carrusel3);
      image5.setAttribute('src',carrusel2);
    }
    else if (contador===3) {
      image1.setAttribute('src',carrusel3);
      image2.setAttribute('src',carrusel5);
      image3.setAttribute('src',carrusel4);
      image4.setAttribute('src',carrusel2);
      image5.setAttribute('src',carrusel1);
    }
    else if (contador===4) {
      image1.setAttribute('src',carrusel2);
      image2.setAttribute('src',carrusel3);
      image3.setAttribute('src',carrusel5);
      image4.setAttribute('src',carrusel1);
      image5.setAttribute('src',carrusel4);
    }
    if (contador===-4) {
      image1.setAttribute('src',carrusel4);
      image2.setAttribute('src',carrusel1);
      image3.setAttribute('src',carrusel2);
      image4.setAttribute('src',carrusel5);
      image5.setAttribute('src',carrusel3);
    }
    else if (contador===-3) {
      image1.setAttribute('src',carrusel5);
      image2.setAttribute('src',carrusel4);
      image3.setAttribute('src',carrusel1);
      image4.setAttribute('src',carrusel3);
      image5.setAttribute('src',carrusel2);
    }
    else if (contador===-2) {
      image1.setAttribute('src',carrusel3);
      image2.setAttribute('src',carrusel5);
      image3.setAttribute('src',carrusel4);
      image4.setAttribute('src',carrusel2);
      image5.setAttribute('src',carrusel1);
    }
    else if (contador===-1) {
      image1.setAttribute('src',carrusel2);
      image2.setAttribute('src',carrusel3);
      image3.setAttribute('src',carrusel5);
      image4.setAttribute('src',carrusel1);
      image5.setAttribute('src',carrusel4);
    }
    else if (contador>4||contador===0) {
      contador = 0;
      image1.setAttribute('src',carrusel1);
      image2.setAttribute('src',carrusel2);
      image3.setAttribute('src',carrusel3);
      image4.setAttribute('src',carrusel4);
      image5.setAttribute('src',carrusel5);
    }
  }
  const handlerPrevious = ()=>{
    contador--;
    console.log(contador);
    if (contador===1) {
      image1.setAttribute('src',carrusel4);
      image2.setAttribute('src',carrusel1);
      image3.setAttribute('src',carrusel2);
      image4.setAttribute('src',carrusel5);
      image5.setAttribute('src',carrusel3);
    }
    else if (contador===2) {
      image1.setAttribute('src',carrusel5);
      image2.setAttribute('src',carrusel4);
      image3.setAttribute('src',carrusel1);
      image4.setAttribute('src',carrusel3);
      image5.setAttribute('src',carrusel2);
    }
    else if (contador===3) {
      image1.setAttribute('src',carrusel3);
      image2.setAttribute('src',carrusel5);
      image3.setAttribute('src',carrusel4);
      image4.setAttribute('src',carrusel2);
      image5.setAttribute('src',carrusel1);
    }
    else if (contador===4) {
      image1.setAttribute('src',carrusel2);
      image2.setAttribute('src',carrusel3);
      image3.setAttribute('src',carrusel5);
      image4.setAttribute('src',carrusel1);
      image5.setAttribute('src',carrusel4);
    }
    if (contador===-4) {
      image1.setAttribute('src',carrusel4);
      image2.setAttribute('src',carrusel1);
      image3.setAttribute('src',carrusel2);
      image4.setAttribute('src',carrusel5);
      image5.setAttribute('src',carrusel3);
    }
    else if (contador===-3) {
      image1.setAttribute('src',carrusel5);
      image2.setAttribute('src',carrusel4);
      image3.setAttribute('src',carrusel1);
      image4.setAttribute('src',carrusel3);
      image5.setAttribute('src',carrusel2);
    }
    else if (contador===-2) {
      image1.setAttribute('src',carrusel3);
      image2.setAttribute('src',carrusel5);
      image3.setAttribute('src',carrusel4);
      image4.setAttribute('src',carrusel2);
      image5.setAttribute('src',carrusel1);
    }
    else if (contador===-1) {
      image1.setAttribute('src',carrusel2);
      image2.setAttribute('src',carrusel3);
      image3.setAttribute('src',carrusel5);
      image4.setAttribute('src',carrusel1);
      image5.setAttribute('src',carrusel4);
    }
    else if (contador<-4||contador===0) {
      contador = 0;
      image1.setAttribute('src',carrusel1);
      image2.setAttribute('src',carrusel2);
      image3.setAttribute('src',carrusel3);
      image4.setAttribute('src',carrusel4);
      image5.setAttribute('src',carrusel5);
    }
   
  }

  const handlerOver = (e)=>{
    if (e.target === image1|| e.target===image2||e.target ===image3 ||e.target === image4 ||e.target ===image5||e.target.getAttribute('d')!== null||e.target === buttonNext||e.target===buttonPrevious||e.target.getAttribute('stroke')!==null) {
      setButtons(true)
      image1.classList.remove('animationCarrusel');
      clearInterval(carruselInterval);
      carruselInterval = 0;
    }
    else {
      setButtons(false);
      image1.classList.add('animationCarrusel')
      if (carruselInterval===0) {
        carruselInterval = setInterval(()=>{
          handlerNext();
        },[3000])
      }
     
    }
  }
  const handlerScroll = () =>{
    if (window.scrollY>99) {
      button1.classList.add('animationEnter');
      button2.classList.add('animationEnter');
      button3.classList.add('animationEnter');
    }
    if (window.scrollY>1160) {
      cuality.classList.add('animationEnter');
    }
    if (window.scrollY>2100) {
      prices.classList.add('animationEnter')
    }
    if (window.scrollY>3325) {
      atention.classList.add('animationEnter');
    }
    if (window.scrollY>4410) {
      final.classList.add('animationEnter');
    }
  }
  const handlerClickCuality = () =>{
    contadorCuality++;
    if (contadorCuality===1) {
      cualityInformation.classList.replace('cualityInformation','cualityInformation2');
      cualityImage.classList.replace('cualityImage','cualityImage2');
    
    }
    if(contadorCuality ===2){
      contadorCuality = 0;
      cualityInformation.classList.replace('cualityInformation2','cualityInformation');
      cualityImage.classList.replace('cualityImage2','cualityImage');
    }
   
  }
  const handlerClickPrices = () =>{
    contadorPrices++;
    if (contadorPrices===1) {
      pricesInformation.classList.replace('pricesInformation','pricesInformation2');
      pricesImage.classList.replace('pricesImage','pricesImage2');
    }
    if(contadorPrices ===2){
      contadorPrices = 0;
      pricesInformation.classList.replace('pricesInformation2','pricesInformation');
      pricesImage.classList.replace('pricesImage2','pricesImage');
    }
  }
  useEffect(() => {
  image1 = document.querySelector('.carruselHome1');
  image2 = document.querySelector('.carruselHome2');
  image3 = document.querySelector('.carruselHome3');
  image4 = document.querySelector('.carruselHome4');
  image5 = document.querySelector('.carruselHome5');
  button1 = document.querySelector('.button1');
  button2 = document.querySelector('.button2');
  button3 = document.querySelector('.button3');
  buttonNext = document.querySelector('.next');
  buttonPrevious = document.querySelector('.previous');
  cuality = document.querySelector('.part2Cuality');
  prices = document.querySelector('.part3Prices');
  atention = document.querySelector('.part4Atention');
  final = document.querySelector('.final');
  cualityInformation = document.querySelector('.exampleCualityInformation');
  cualityImage = document.querySelector('.exampleCualityImage');
  pricesInformation = document.querySelector('.examplePricesInformation');
  pricesImage = document.querySelector('.examplePricesImage');

  document.addEventListener('mouseover',handlerOver);
  document.addEventListener('scroll',handlerScroll)
    return () => {
      document.removeEventListener('mouseover',handlerOver);
      document.removeEventListener('scroll',handlerScroll);
    }
  }, [contadorCuality,contadorPrices]);
  
  return (
    <div className='home'>
    <div className='carruselContent'>
    <h1>La Mejor Calidad-Precio y Trato Amable Que Usted Se Merece</h1>
      <img src={carrusel1} alt='carrusel1' className='carruselHome1'/>
      <img src={carrusel2} alt='carrusel2' className='carruselHome2'/>
      <img src={carrusel3} alt='carrusel3' className='carruselHome3'/>
      <img src={carrusel4} alt='carrusel4' className='carruselHome4'/>
      <img src={carrusel5} alt='carrusel5' className='carruselHome5'/>
      {
        (buttons)
        ?<><button className='next' onClick={handlerPrevious}><AiFillBackward/></button>
        <button className='previous' onClick={handlerNext}><AiFillForward/></button></>
        :""
      }
      <button className='buttonCarrusel' onClick={changeToSesion}>Comenzar Ahora</button>
    </div>
    <hr className='hrCarrusel'/>

    <div className='part1Buttons'>
      <div className='button1'>
        <button></button>
        <h2>Excelente Calidad</h2>
        <p>Contamos con una calidad excelente para nuestros clientes , pues nuestros clientes siempre son primero</p>
        <AiTwotoneShop className='cuality'/>
      </div>
      <div className='button2'>
      <button></button>
        <h2>Precios Accesibles</h2>
        <p>Contamos con una calidad excelente para nuestros clientes , pues nuestros clientes siempre son primero</p>
        <AiOutlineDollar className='dollar'/>
      </div>
      <div className='button3'>
      <button></button>
        <h2>Atencion Calida</h2>
        <p>Contamos con una calidad excelente para nuestros clientes , pues nuestros clientes siempre son primero</p>
       <BiUserVoice className='user'/>
       <AiOutlineUser className='user'/> 
      </div>
    </div>

    <div className='part2Cuality'>
      <div class="wave">
        <svg viewBox="0 0 500 150" preserveAspectRatio="none">
          <path d="M-13.82,43.08 C149.99,201.58 350.52,-49.08 513.30,82.88 L500.00,150.00 L0.00,150.00 Z"></path>
        </svg>
      </div>
      
      <div className='exampleCualityImage cualityImage'>
      <img src={calidadImage} alt="Calidad"/>
      <button onClick={handlerClickCuality}></button>
      </div>

      <div className='exampleCualityInformation cualityInformation'>
      <img src={carrusel3} alt="Calidad"/>
      <button onClick={handlerClickCuality}></button>
      
      </div>
      <h2>Calidad Que Usted Merece</h2>
      <p>La calidad de nuestros productos es god y Line 204:16:  Assignments to the 'buttonNext' variable from inside React Hook useEffect will be lost after each render. To preserve the value over time, store it in a useRef Hook and keep the mutable value in the '.current' property. Otherwise, you can move this variable directly inside useEffect      react-hooks/exhaustive-deps
      Line 205:20:  Assignments to the 'buttonPrevious' variable from inside React Hook useEffect will be lost  after each render. To preserve the value over time, store it in a useRef Hook and keep the mutable value   in the '.current' property. Otherwise, you can move
      this variable directly inside useEffect  react-hooks/exhaustive-deps </p>
    </div>

    <div className='part3Prices'>
      <div class="wave2">
        <svg viewBox="0 0 500 150" preserveAspectRatio="none">
          <path d="M-13.82,43.08 C149.99,201.58 350.52,-49.08 513.30,82.88 L500.00,150.00 L0.00,150.00 Z"></path>
        </svg>
      </div>

      <div className='examplePricesImage pricesImage'>
      <img src={precioImage} alt="Precio"/>
      <button onClick={handlerClickPrices}></button>
      </div>
      <div className='examplePricesInformation pricesInformation'>
      <img src={carrusel4} alt="Precio"/>
      <button onClick={handlerClickPrices}></button>
      </div>
      <h2>Precio Accesible Para Todos</h2>
      <p>El precio de nuestros productos es god y Line 204:16:  Assignments to the 'buttonNext' variable from inside React Hook useEffect will be lost after each render. To preserve the value over time, store it in a useRef Hook and keep the mutable value in the '.current' property. Otherwise, you can move this variable directly inside useEffect      react-hooks/exhaustive-deps
      Line 205:20:  Assignments to the 'buttonPrevious' variable from inside React Hook useEffect will be lost  after each render. To preserve the value over time, store it in a useRef Hook and keep the mutable value   in the '.current' property. Otherwise, you can move
      this variable directly inside useEffect  react-hooks/exhaustive-deps </p>
    </div>

    <div className='part4Atention'>
      <div className='wave3Background'></div>
      <div class="wave3">
        <svg viewBox="0 0 500 150" preserveAspectRatio="none">
          <path d="M-13.82,43.08 C149.99,201.58 350.52,-49.08 513.30,82.88 L500.00,150.00 L0.00,150.00 Z"></path>
        </svg>
      </div>
      <div className='wave4Background'></div>
      <div class="wave4">
        <svg viewBox="0 0 500 150" preserveAspectRatio="none">
          <path d="M-13.82,43.08 C149.99,201.58 350.52,-49.08 513.30,82.88 L500.00,150.00 L0.00,150.00 Z"></path>
        </svg>
      </div>
      <div className='atentionCarrusel'></div>
      <h2>Atentos A Nuestros Clientes</h2>
      <p>La atencion a nuestros clientes es god y Line 204:16:  Assignments to the 'buttonNext' variable from inside React Hook useEffect will be lost after each render. To preserve the value over time, store it in a useRef Hook and keep the mutable value in the '.current' property. Otherwise, you can move this variable directly inside useEffect      react-hooks/exhaustive-deps
      Line 205:20:  Assignments to the 'buttonPrevious' variable from inside React Hook useEffect will be lost  after each render. To preserve the value over time, store it in a useRef Hook and keep the mutable value   in the '.current' property. Otherwise, you can move
      this variable directly inside useEffect  react-hooks/exhaustive-deps </p>
    </div>

    <div className='final'>
      <h2>Unete Y Pide Ahora</h2>
      <div className='icon'><CiDeliveryTruck/></div>
      <button onClick={changeToSesion}>Registrarme</button>
    </div>

    </div>
  )
}
