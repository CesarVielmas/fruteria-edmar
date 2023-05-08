import React, { useState } from 'react'
import styled from 'styled-components';
// -99% icono , boton -91%, nube, -21%
const regexName = /^(?![\p{P}\p{S}])[A-Za-zÀ-ÖØ-öø-ÿ]+(?:\s[A-Za-zÀ-ÖØ-öø-ÿ]+)*(?<![\p{P}\p{S}])$/u;
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const regexProblem = /^.{0,500}$/;

export default function Formulario() {
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [type, setType] = useState("");
   const [problem, setProblem] = useState("");
    
  const handlerChecked = (e) =>{
    setType(e.target.value);
  }

  const handlerChange = (e)=>{
    if (e.target.id ==='nombre') setName(e.target.value);
    if (e.target.id ==='correo') setEmail(e.target.value);
    if (e.target.id ==='asunto') setProblem(e.target.value);
  }
  const Error = styled.p`
    position: absolute;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: red;
    top: 16%;
    left:-11.9%;
    width: 92.6%;
    z-index: -1;
    height: 25px;
    text-align: center;
    padding-top: 40px;
    border-radius: 20px;
  `;
  const Confirm = styled(Error)`
    background-color: green;
    
  `;
  const ConfirmEmail = styled(Confirm)`
   top: 28%;

  `;
  const ErrorEmail = styled(Error)`
  top: 28%;
  
 `;
 const ConfirmAsunt = styled(Confirm)`
 top: 73%;
 height: 30px;
 left:-13.4%;
  padding-top: 85px;
`;
const ErrorAsunt = styled(Error)`
top: 73%;
 height: 30px;
 left:-13.4%;
  padding-top: 85px;
`;
  return (
    <div className='form'>
      <div className='formComplete'>
        <h2>Cuentenos Su Problema</h2>
        <p>Porfavor cuentenos su duda o problema nos interesa para poder seguir mejorando nuestro servicio para usted</p>

        <label id='nombre'>Nombre</label>
        <input type='text' value={name} placeholder='Ingrese Su Nombre' id='nombre' onChange={handlerChange}/>
        {
          (name ==="")
          ?""
          :(regexName.test(name))
          ?<Confirm className='confirm'>Nombre Valido</Confirm>
          :<Error className='error'>Nombre Invalido</Error>
        }
        <label id='correo'>Correo</label>
        <input type='text' value={email} placeholder='Ingrese Su Correo' id='correo' onChange={handlerChange}/>
        {
          (email ==="")
          ?""
          :(regexEmail.test(email))
          ?<ConfirmEmail className='confirm'>Correo Valido</ConfirmEmail>
          :<ErrorEmail className='error'>Correo Invalido</ErrorEmail>
        }
        <label className='typeProblem'>Tipo De Ayuda o Problema</label>

        <div className='problem'>
        <label htmlFor='fruta'>Productos</label>
        <input type='radio' className='problem1' value='¿Que Problema o Duda Tuvo Con La Fruta?...' id='fruta' name='selectType' onChange={handlerChecked}/>
        </div>
    
        <div className='problem'>
        <label htmlFor='servicio'>Servicio</label>
        <input type='radio' className='problem2' value='¿Que Problema o Duda Tuvo Con El Servicio?...' id='servicio' name='selectType' onChange={handlerChecked}/>
        </div>

        <div className='problem'>
        <label htmlFor='envio'>Envio</label>
        <input type='radio' className='problem3' value='¿Que Problema o Duda Tuvo Con La Entrega?...' id='envio' name='selectType' onChange={handlerChecked}/>
        </div>

        <div className='problem'>
        <label htmlFor='otro'>Otro</label>
        <input type='radio' className='problem4' value='Cuentenos Aqui Su Problema o Duda...' id='otro' name='selectType' onChange={handlerChecked}/>
        </div>

        <label className='asunt' id='asunto'>Asunto</label>
        <input type='text' value={problem} placeholder={type} className='textAsunt' id='asunto' onChange={handlerChange}/>
        {
          (problem ==="")
          ?""
          :(regexProblem.test(problem))
          ?<ConfirmAsunt className='confirm'>Asunto Valido</ConfirmAsunt>
          :<ErrorAsunt className='error'>Asunto Demasiado Largo</ErrorAsunt>
        }
        {
          (regexName.test(name) && regexEmail.test(email) && regexProblem.test(problem)&&type!=="")
          ?<button className='buttonConfirm'>Enviar</button>
          :<button className='buttonError' disabled>Enviar</button>
        }
      </div>
    </div>
  )
}
