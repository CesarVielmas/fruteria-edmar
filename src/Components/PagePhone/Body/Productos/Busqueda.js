import React, { useState } from 'react'
import { AiFillSliders, AiOutlineSearch } from 'react-icons/ai'
import './Busqueda.css';
import Opciones from './Opciones';

export default function Busqueda({changeSearch}) {
const [filter, setFilter] = useState(false);
const handlerClick = () =>{
    if (filter) setFilter(false);
    else setFilter(true);
};

  return (
    <>
    {
        filter
        ?<div className={changeSearch?'filterTypePhone2':'filterTypePhone1'}>
            <Opciones/>
            <button onClick={handlerClick}>Listo</button>
        </div>
        :<div className={changeSearch?'busquedaBarPhone2':'busquedaBarPhone1'}>
        <div className='searchBarPhone'>
            <label htmlFor='inputSearchPhone'><AiOutlineSearch/></label>
            <input type='text' placeholder='Busque su producto' id='inputSearchPhone'/>
            <button><AiFillSliders onClick={handlerClick}/></button>
        </div>

        <div className='typeBarPhone'>
            <div>
                <label htmlFor='frutasTypePhone'>Frutas</label>
                <input type='radio' name='typeBarPhone' id='frutasTypePhone' />
            </div>
            <div>
                <label htmlFor='verdurasTypePhone'>Verduras</label>
                <input type='radio' name='typeBarPhone' id='verdurasTypePhone' />
            </div>
            <div>
                <label htmlFor='abarrotesTypePhone'>Abarrotes</label>
                <input type='radio' name='typeBarPhone' id='abarrotesTypePhone'/>
            </div>        
        </div>
     </div>
    }
    
    </>
  )
}
