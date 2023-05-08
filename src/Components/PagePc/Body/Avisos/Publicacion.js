import React, { useState } from 'react'
import { AiFillLike } from 'react-icons/ai'
import pinia from '../../../../assets/carrusel2.jpg'
export default function Publicacion() {
  const [likes, setLikes] = useState(false);

  const handlerLike = () =>{
    if (likes) setLikes(false);
    else setLikes(true);
  }

  return (
    <div className='publication'>
    <button className='buttonLike'><AiFillLike className={likes?'likeActive':'like'} onClick={handlerLike}/></button>
    <h1>Fruteria EDMAR Cerrara</h1>
    <img src={pinia} alt='foto cerrado'/>
    <p>Debido a fiestas patrias se cerrara y no se podra asistir a ustedes con los mejores productos de calidad hasta su mesa , por lo cual disculpe las molestias y esperamos que sea de su agrado el servicio posterior a esto</p>
    </div>
  )
}
