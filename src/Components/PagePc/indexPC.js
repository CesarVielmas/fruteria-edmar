import React from 'react'
import HeaderPage from './Header/Header'
import BodyPage from './Body/Body'
import FooterPage from './Footer/Footer'
import { useState } from 'react'
import IndexSesion from './Sesion/indexSesion'

export default function IndexPC() {
  const [login, setLogin] = useState(true);
 const handlerLoginEnter= ()=>setLogin(true);
 const handlerLoginOut = () => setLogin(false);
  return (
    <>
    {
      login
      ?<IndexSesion changeToHome ={handlerLoginOut}/>
      :<><HeaderPage changeToSesion ={handlerLoginEnter}/><BodyPage changeToSesion ={handlerLoginEnter}/><FooterPage/></>
    }
    
    </>

     )
}
