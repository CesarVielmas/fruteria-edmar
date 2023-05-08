import React, { useState } from 'react'
import styled from 'styled-components'
import {FaApple, FaAppleAlt} from 'react-icons/fa'
import Detalles from './Detalles';
import {MdLocalOffer} from 'react-icons/md';

export default function Producto({id}) {
const [cuantity, setCuantity] = useState(0);
const [details,setDetails] = useState(false);
const [viewDetails,setViewDetails] = useState(false);
const [promotion,setPromotion] = useState(false);

  const clickDetails = ()=>setViewDetails(true);
  const closeDetails = ()=>setViewDetails(false);

  const addButton = () => setCuantity(cuantity+1);
  const deleteButton = () =>{
    if (cuantity===0) return "";
    else setCuantity(cuantity-1);
  };

  document.addEventListener("mouseover",(e)=>{
    if(e.target.id.includes("Products"+id)) setDetails(true);
    else setDetails(false);
  })
  
    const ButtonsAddDelete = styled.div`
    position: relative;
    top: 6%;
    width: 48%;
    font-size: 60px;
    text-align: center;
    color: green;
    `;
    const CardProduct = styled.div`
     display: inline-block;
     position: relative;
     left: 10%;
     border: thin solid white;
     border-radius: 40px;
     width: 270px;
     height: 310px;
     background-image: linear-gradient(#ffffff,#65e282);
     padding: 25px;
     margin-left: 65.5px;
     margin-bottom: 40px;
     margin-top: 40px;
     :hover{
      box-shadow: 2px 4px 11px #838b81;
     }
    `;
    const ButtonView = styled.button`
      position: absolute;
      top: 70%;
      right: 13%;
      background-image: linear-gradient(#07660d,#55d558);
      width: 120px;
      height: 35px;
      border-radius: 70px;
      margin-right: 40%;
      color: white;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      font-size: 16px;
      border: none;
      :hover{
        cursor:pointer;
        background-image: linear-gradient(#55d558,#07660d);
      }
    `;
    const PromotionOffer = styled.div`
    position: absolute;
    height: 22%;
    width: 30%;
    top: -8%;
    left: 75.4%;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 710%;
    color:#123622 ;
    background-color: transparent;
    transform: rotateZ(-75deg);
    `;
    const PromotionOfferText = styled.p`
    position: absolute;
    width: 70%;
    height: 80%;
    font-size: 15px;
    top: 32%;
    z-index: 3;
    color: #ff0028;
    left: 17%;
    font-weight: bold;
    padding-left: 6px;
    padding-top: 10px;
    transform: rotateZ(40deg);
    text-align: center;
    `;
    const DescriptionProduct = styled.p`
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 14.3px;
    color:#20603c;
    position: absolute;
    right:50% ;
    top: 22%;
    height: 45%;
    width: 49%;
    
    `;


    const TitleProduct = styled.h2`
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 25px;
    font-weight: 800;
    text-align: center;
    position: relative;
    margin-bottom: 20px;
    color: #4b7b4b;
    `;

    const ImgProduct = styled.img`
    position: relative;
    height: 60%;
    width: 55%;
    border-radius: 40px;
    left: 50%;
    `;
  //Filtro
  const Filter = styled.p`
  position: absolute;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 15px;
  font-weight: 900;
  width:110px;
  height: 22px;
  border-radius: 70px;
  text-align: center;
  left: 56%;
  `;
  
  //Contador
    const AddingProduct = styled(Filter)`
      font-size: 18px;
      top: 45%;
      left: 45%;
      border: none;
      width: auto;
      height: auto;
      box-shadow: none;
      color:#2f5e2f;
     background-color:transparent;
    `;
  //Precios
  const FilterPriceGrand = styled(Filter)`     
    top: 74.6%;
    color: #8b2406;
    border: thin solid #e7903c;
    box-shadow: 1px 2px 4px #945d24;
    background-color: #e7903c;
    `;

    const FilterPriceMinor = styled(Filter)`
    top: 74.6%;
    color:#1e421e;
    border: thin solid #48bb2d;
    box-shadow: 1px 2px 4px #134e41;
    background-color: #48bb2d;
    `;
  //Temporadas del año
    const FilterSeasonInvierno = styled(Filter)`
    top:83%;
    color:#007faa;
    border: thin solid #97fff5;
    box-shadow: 1px 2px 4px #007faa;
    background-color: #97fff5;
    `;
    const FilterSeasonOtonio = styled(Filter)`
    top:83%;
    color:#1a2309;
    border: thin solid #b65a13;
    box-shadow: 1px 2px 4px #134e41;
    background-color: #b65a13;
    `;
    const FilterSeasonPrimavera = styled(Filter)`
    top:83%;
    color: #871a1a;
    border: thin solid #ff6922;
    box-shadow: 1px 2px 4px #134e41;
    background-color: #ff6922;
    `;
    const FilterSeasonVerano = styled(Filter)`
    top:83%;
    color:#123622 ;
    border: thin solid #f73302;
    box-shadow: 1px 2px 4px #552118;
    background-color: #f73302;
    `;
  //Producto en existencia
    const FilterCuantityOut = styled(Filter)`
    top:91.4%;
    color: white;
    border: thin solid red;
    box-shadow: 1px 2px 4px #134e41;
    background-color: red;
    `;
    const FilterCuantityOn = styled(Filter)`
    top:91.4%;
    color: green;
    border: thin solid #2ddb00;
    box-shadow: 1px 2px 4px #436e43;
    background-color: #2ddb00;
    `;
  return (
    <>
    {
      (viewDetails)
      ?<Detalles closeDetails={closeDetails} oferta={promotion}/>
      :""
    }
   <CardProduct id={"Products"+id}>
    {
      (promotion)
      ?<PromotionOffer><MdLocalOffer id={"Products"+id}/><PromotionOfferText id={"Products"+id}>Promocion !2x<span style={{color:"green"}}>$150</span>!</PromotionOfferText></PromotionOffer>
      :""
    }
    <TitleProduct id={"Products"+id}>Platano Macho</TitleProduct>
    <ImgProduct src='https://imgs.search.brave.com/Bl-2TCwmTfAboaLyu_tqP8DZiMAHX5K4t6YNognud7k/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzY5LzRi/LzhlLzY5NGI4ZWZl/NjFjMTMwZDcxZmI5/YmZhNDE3OTUyZDUz/LmpwZw' alt='Platano Macho' id={"Products"+id}/>
    <DescriptionProduct id={"Products"+id}>Platano macho originario de veracruz , tiene un gran y apetitoso sabor que por otro lado esta muy dulce y maduro para el uso publico el cual es una ventaja de humildad el hecho</DescriptionProduct>
    {
      (details)
      ?<ButtonView id={"Products"+id} onClick={clickDetails}>Mas Detalles</ButtonView>
      :""
    }
    <ButtonsAddDelete>
    <FaAppleAlt className='addCart' onClick={addButton}/>
    <a onClick={addButton} className='addCartButton'>+</a>
    <AddingProduct>{cuantity}</AddingProduct>
    <FaApple className='deleteCart' onClick={deleteButton}/>
    <a onClick={deleteButton} className= 'deleteCartButton'>-</a>
    </ButtonsAddDelete>

    
    {
      (48>50)
      ?<FilterPriceGrand id={"Products"+id}>20.56</FilterPriceGrand>
      :<FilterPriceMinor id={"Products"+id}>20.56</FilterPriceMinor>
    }
    
    {
      ("primavera" ==="primavera")
      ?<FilterSeasonPrimavera id={"Products"+id}>Primavera</FilterSeasonPrimavera>
      :("primavera" === "verano")
      ?<FilterSeasonVerano id={"Products"+id}>Verano</FilterSeasonVerano>
      :("primavera" === "otoño")
      ?<FilterSeasonOtonio id={"Products"+id}>Otoño</FilterSeasonOtonio>
      :<FilterSeasonInvierno id={"Products"+id}>Invierno</FilterSeasonInvierno>
    }
    
    {
      (0===0)
      ?<FilterCuantityOut id={"Products"+id}>Agotado</FilterCuantityOut>
      :<FilterCuantityOn id={"Products"+id}>Disponible</FilterCuantityOn>
    }

   </CardProduct>
   </>
  )
}
