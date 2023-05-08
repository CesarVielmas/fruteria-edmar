import React from 'react'
import './Busqueda.css';
import { AiOutlineSearch } from 'react-icons/ai'
export default function Busqueda() {
  return (
    <>
    <div className='navSearch'>
      <label htmlFor='inputSearch' className='lupa'><AiOutlineSearch/></label>
    <input type='text' placeholder='Busque su producto' className='searchNav' id='inputSearch'/>

    <div className='frut'>
    <label htmlFor='frutas' className='selectedTypeLabel'>Frutas</label>
    <input type='radio' value='Frutas' id='frutas' name='selectType'/>
    </div>
    
    <div className='vegetables'>
    <label htmlFor='verduras' className='selectedTypeLabel'>Verduras</label>
    <input type='radio' value='Verduras' id='verduras' name='selectType'/>
    </div>

    <div className='groceries'>
    <label htmlFor='abarrotes' className='selectedTypeLabel'>Abarrotes</label>
    <input type='radio' value='Abarrotes' id='abarrotes' name='selectType'/>
    </div>

    </div>
    </>
  )
}
