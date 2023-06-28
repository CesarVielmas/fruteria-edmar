import React from 'react'
import HeaderPage from './Header/Header'
import BodyPage from './Body/Body'
import FooterPage from './Footer/Footer'
import { useState } from 'react'
import IndexSesion from './Sesion/indexSesion'
import Acount from './Acount/Acount'

export default function IndexPC() {
  const [login, setLogin] = useState(true);
  const [acount, setAcount] = useState(false);
 const handlerLoginEnter= ()=>setLogin(true);
 const handlerLoginOut = () => setLogin(false);
 const handlerAcountEnter = ()=> setAcount(true);
 const handlerAcountOut = ()=> setAcount(false);
  return (
    <>
    {
      login
      ?<IndexSesion changeToHome ={handlerLoginOut}/>
      :(acount)
      ?<Acount changeToHome={handlerAcountOut}/>
      :<><HeaderPage changeToSesion ={handlerLoginEnter} changeToAcount={handlerAcountEnter}/><BodyPage changeToSesion ={handlerLoginEnter}/><FooterPage/></>
    }
    
    </>

     )
}
