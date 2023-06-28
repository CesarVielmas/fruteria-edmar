import React from 'react'
import './Detalles.css';
import { BsFillJournalBookmarkFill } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';
export default function Detalles({exitDetalles}) {
  return (
    <div className='detallesPhoneView'>
      <div className='detallesPhone'>
        <button className='buttonClosePhone' onClick={exitDetalles}><AiOutlineClose/></button>
        <h2>Platano Macho</h2>
        <div className='detallesAditionalPhone'>
          <img src='https://imgs.search.brave.com/Bl-2TCwmTfAboaLyu_tqP8DZiMAHX5K4t6YNognud7k/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzY5LzRi/LzhlLzY5NGI4ZWZl/NjFjMTMwZDcxZmI5/YmZhNDE3OTUyZDUz/LmpwZw' alt='producto imagen'/>
          <p>Precio: $20.56 kg</p>
          <p>Temporada Del Platano Macho:Invierno</p>
          <p>!Promocion 2x<span style={{color:"green"}}>$150</span>!</p>
          <p className='textPhone'>El plátano macho es una variedad de plátano que se utiliza principalmente en la cocina como un ingrediente versátil. A diferencia del plátano dulce que comemos como una fruta, el plátano macho es más grande, tiene una piel gruesa y es mucho más firme que el plátano dulce. El plátano macho es conocido por su sabor neutro y su textura almidonada. Debido a que no es tan dulce como el plátano dulce, se utiliza principalmente en platos salados y se cocina de diversas maneras. Por ejemplo, se puede cocinar al horno, freír o hervir, y luego se puede utilizar para hacer puré o cortarlo en pedazos para usar en guisos, sopas, platos de arroz o como acompañamiento de carnes. Además de su uso en la cocina, el plátano macho también es rico en nutrientes. Contiene vitaminas C y B6, fibra, potasio y otros minerales esenciales.</p>
        </div>
        <button className='buttonAddCartPhone'>Añadir 1 kg Al Carrito</button>
        <button className='buttonWikiPhone'>Mas Sobre El Platano Macho</button>
        <button className='buttonRecetasPhone'><BsFillJournalBookmarkFill/><p style={{fontSize:"3.5vw"}}>Recetas</p></button>
      </div>
    </div>
  )
}
