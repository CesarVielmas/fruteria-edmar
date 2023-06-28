import React from 'react'
import './Contacto.css';
import phoneImage from '../../../../assets/phoneImageFrut.png';
export default function Contacto() {
  return (
    <>
    <div className='needHelpPhone'>
      <h2>¿Necesita Ayuda?</h2>
      <p>Nosotros queremos darte la mejor atencion a toda costa y por ello le damos este servicio para que pueda darno su sugerencia , si tiene algun problema o alguna inquietud con nostros , mejoraremos y trataremos de ser lo mas parciales respecto a cualquier duda o problema , porfavor si requiere atencion llene el formulario y diganos su problema</p>
      <button>Necesito Ayuda</button>
      <img src={phoneImage} alt='phoneImage'/>
    </div>
    
    <div className='mostImportantPhone'>
      <div className='imageImportantPhone'></div>
      <h2>Usted Importa</h2>
      <p>Nuestra prioridad principal es poder cumplir todas sus expectativa,por ello capacitamos a nuaestros diferentes empleados para darle un trato que usted se merece y ademas de brindarle un servicio de calidad</p>
    </div>



    <div className='formImportantPhone'>
      <h2>Cuentenos Su Problema</h2>
      <p>Porfavor cuentenos su duda o problema nos interesa para poder seguir mejorando nuestro servicio para usted</p>

      <div className='nameFormPhone'>
        <label>Nombre</label>
        <input type='text' placeholder='Ingrese su nombre...'/>
      </div>

      <div className='emailFormPhone'>
        <label>Correo</label>
        <input type='email' placeholder='Ingrese su correo...'/>
      </div>

      <div className='typeFormPhone'>
        <label>Tipo De Ayuda o Problema</label>
        <div className='typeFlexPhone'>
          <div>
            <label htmlFor='productosPhone'>Productos</label>
            <input type='radio' id='productosPhone' name='selectedType'/>
          </div>

          <div>
            <label htmlFor='serviciosPhone'>Servicio</label>
            <input type='radio' id='serviciosPhone' name='selectedType'/>
          </div>

          <div>
            <label htmlFor='envioPhone'>Envio</label>
            <input type='radio' id='envioPhone' name='selectedType'/>
          </div>

          <div>
            <label htmlFor='otrosPhone'>Otro</label>
            <input type='radio' id='otrosPhone' name='selectedType'/>
          </div>

        </div>
      </div>

      <div className='asuntFormPhone'>
        <label>Asunto</label>
        <input type='text' placeholder='¿Que Problema Tuvo?' />
      </div>
      <button>Enviar</button>
    </div>




    </>

  )
}
