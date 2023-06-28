import React, { useState } from 'react'
import { AiFillLike } from 'react-icons/ai'
import avisoImg from '../../../../assets/carrusel2.jpg';

export default function Publicacion() {
  const [like, setLike] = useState(false)
  const handlerLike = () => {
    if (like)setLike(false);
    else setLike(true);
  };
  
  return (
    <>
        <div className='publicacionPhone'>
            <h2>Fruteria EDMAR Cerrara</h2>
            <img src={avisoImg} alt='imgCierre' />
            <p>Debido a fiestas patrias se cerrara y no se podra asistir a ustedes con los mejores productos de calidad hasta su mesa , por lo cual disculpe las molestias y esperamos que sea de su agrado el servicio posterior a esto</p>
            <button className='buttonLikePhone'><AiFillLike className={like?'likePhone':'notLikePhone'} onClick={handlerLike}/></button>
        </div>
    </>
  )
}
