import React from 'react'
import './DetallesAcount.css';
import { BsFillJournalBookmarkFill } from 'react-icons/bs'
import { MdLocalOffer } from 'react-icons/md';
export default function Detalles({closeDetails,oferta}) {
  return (
    <div className='detailsProductsAcount'>
      {
        (oferta)
        ?<div className='promotionAcount'><MdLocalOffer/><p className='promotionTextAcount'>Promocion <br/>!2x<span style={{color:"green"}}>$150</span>!<span style={{color:"white"}}><br/>Valido Hasta <br/>16 De Abril</span></p> 
        </div>
        :""
      }
        <div className='detailsAcount'>
        <button onClick={closeDetails} className='buttonCloseAcount'>X</button>
        <h1 className='detailTitleAcount'>Platano Macho</h1>
        <img src='https://imgs.search.brave.com/Bl-2TCwmTfAboaLyu_tqP8DZiMAHX5K4t6YNognud7k/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzY5LzRi/LzhlLzY5NGI4ZWZl/NjFjMTMwZDcxZmI5/YmZhNDE3OTUyZDUz/LmpwZw' alt='imagen detallada' className='detailImageAcount'/>
        <p className = 'detailPriceAcount'>Precio: $20.56 kg</p>
        <p className= 'detailSeasonAcount'>Temporada Del Platano Macho: Invierno</p>
        <p className='detailDescriptionAcount'>El plátano macho es una variedad de plátano que se utiliza principalmente en la cocina como un ingrediente versátil. A diferencia del plátano dulce que comemos como una fruta, el plátano macho es más grande, tiene una piel gruesa y es mucho más firme que el plátano dulce.

        El plátano macho es conocido por su sabor neutro y su textura almidonada. Debido a que no es tan dulce como el plátano dulce, se utiliza principalmente en platos salados y se cocina de diversas maneras. Por ejemplo, se puede cocinar al horno, freír o hervir, y luego se puede utilizar para hacer puré o cortarlo en pedazos para usar en guisos, sopas, platos de arroz o como acompañamiento de carnes.

        Además de su uso en la cocina, el plátano macho también es rico en nutrientes. Contiene vitaminas C y B6, fibra, potasio y otros minerales esenciales.</p>
        
        <button className = 'detailAddAcount'>Añadir 1 kg Al Carrito</button>
        <button className='detailWikiAcount'>Mas Sobre El Platano Macho</button>
        <button className='recetasAcount'><BsFillJournalBookmarkFill/> <p className='detailIconAcount'>Recetas</p></button>

        </div>
    </div>
  )
}