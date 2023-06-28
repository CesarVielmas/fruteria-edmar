import React, { useState } from 'react'
import styled from 'styled-components'
import {FaApple, FaAppleAlt} from 'react-icons/fa'
import Detalles from './DetallesAcount';

export default function ProductsAdd({id}) {
const [cuantityAcount, setcuantityAcount] = useState(1);
const [details,setDetails] = useState(false);
const [viewDetails,setViewDetails] = useState(false);
const [promotion,setPromotion] = useState(true);

  const clickDetails = ()=>setViewDetails(true);
  const closeDetails = ()=>setViewDetails(false);

  const addButton = () => setcuantityAcount(cuantityAcount+1);
  const deleteButton = () =>{
    if (cuantityAcount===0) return "";
    else setcuantityAcount(cuantityAcount-1);
  };

  document.addEventListener("mouseover",(e)=>{
    if(e.target.id.includes("Products"+id)) setDetails(true);
    else setDetails(false);
  })
  
    const ButtonsAddDeleteAcount = styled.div`
    position: relative;
    top: 0%;
    width: 100%;
    font-size: 60px;
    text-align: center;
    color: red;
    margin-top: 20%;
    `;
    const CardProductAcount = styled.div`
     display: inline-block;
     position: relative;
     border-radius: 25px;
     width: 260px;
     height: 480px;
     padding: 25px;
     margin-left: 20px;
     margin-bottom: 40px;
     margin-top: 7%;
     overflow:hidden;
     box-shadow: 0px 0px 10px -6px black;
     
    `;
    const ButtonViewAcount = styled.button`
      position: absolute;
      top: 70%;
      right: -8%;
      background-color: #4b7b4b;
      width: 120px;
      height: 35px;
      border-radius: 10px;
      margin-right: 40%;
      color: white;
      box-shadow: 0px 3px 8px 0px gray;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      font-size: 16px;
      border: none;
      font-weight: 300;
      :hover{
        cursor:pointer;
      }
    `;
    const PromotionOfferAcount = styled.div`
    position: absolute;
    height: 35px;
    width: 110%;
    top: 13%;
    left: -5%;
    background-color: white;
    box-shadow: 0px 0px 10px -6px black;
    border-radius: 30px;
    `;
    const PromotionOfferTextAcount = styled.p`
    position: absolute;
    width: 70%;
    height: 80%;
    font-size: 18px;
    top: 20%;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: #ff0028;
    left: 10%;
    font-weight: 600;
    padding-left: 10px;
    overflow: visible;
    text-align: center;
    `;


    const TitleProductAcount = styled.h2`
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 25px;
    font-weight: 600;
    text-align: center;
    position: relative;
    margin-bottom: 20px;
    color: white;
    border-radius: 10px;
    height: 50px;
    padding-top: 30px;
    width: 125%;
    left: -12.5%;
    top:-8.5%;
    background-color: #4b7b4b;
      
      `;

    const ImgProductAcount = styled.img`
    position: relative;
    height: 47%;
    width: 85%;
    border-radius: 20px;
    box-shadow: 0px 3px 10px -2px black;
    left: 8%;
    top: 1%;
    `;
  //Filtro
  const FilterAcount = styled.p`
  position: absolute;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 15px;
  font-weight: 600;
  width:140px;
  height: 22px;
  border-radius: 5px;
  text-align: center;
  left: 52%;
  `;
  
  //Contador
    const AddingProductAcount = styled(FilterAcount)`
      font-size: 18px;
      top: 35%;
      left: 45%;
      border: none;
      width: auto;
      height: auto;
      box-shadow: none;
      color:#2f5e2f;
     background-color:transparent;
    `;
 
  return (
    <>
    {
      (cuantityAcount<1)
      ?""
      :<>
      {
        (viewDetails)
        ?<Detalles closeDetails={closeDetails} oferta={promotion}/>
        :""
      }
     <CardProductAcount id={"Products"+id}>
      {
        (promotion)
        ?<PromotionOfferAcount><PromotionOfferTextAcount id={"Products"+id}>Promocion !2x<span style={{color:"green"}}>$150</span>!</PromotionOfferTextAcount></PromotionOfferAcount>
        :""
      }
      <TitleProductAcount id={"Products"+id}>Platano Macho</TitleProductAcount>
      <ImgProductAcount src='https://imgs.search.brave.com/Bl-2TCwmTfAboaLyu_tqP8DZiMAHX5K4t6YNognud7k/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzY5LzRi/LzhlLzY5NGI4ZWZl/NjFjMTMwZDcxZmI5/YmZhNDE3OTUyZDUz/LmpwZw' alt='Platano Macho' id={"Products"+id}/>
      {
        (details)
        ?<ButtonViewAcount id={"Products"+id} onClick={clickDetails}>Mas Detalles</ButtonViewAcount>
        :""
      }
      <ButtonsAddDeleteAcount>
      <FaAppleAlt className='addCartAcount' onClick={addButton}/>
      <a onClick={addButton} className='addCartButtonAcount'>+</a>
      <AddingProductAcount>{cuantityAcount}</AddingProductAcount>
      <FaApple className='deleteCartAcount' onClick={deleteButton}/>
      <a onClick={deleteButton} className= 'deleteCartButtonAcount'>-</a>
      </ButtonsAddDeleteAcount>
      <p className='totalAcount'>Total:{cuantityAcount * 20.56}</p>
     </CardProductAcount>
     
     </>
    }
    </>
  )
}
