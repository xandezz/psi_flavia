import React from 'react'
import "./Carrossel.css"
import Card from './Card'
import { useRef } from 'react';

const Carrossel = ({card}) => {
  const carrossel = useRef(null);

  const handleClickEsquerdo = (e) => {
    e.preventDefault();
    console.log(carrossel.current.offsetWidth);
    carrossel.current.scrollLeft -= 650
    
  }
  const handleClickDireito = (e) => {
    e.preventDefault();
    console.log(carrossel.current.offsetWidth);
    carrossel.current.scrollLeft += 650
  }

  
  return (

    <div className='carrossel'>
      <h1 className='titulo-topico'>Questões trabalhadas</h1>
      <div className='conteudo-carrossel' ref={carrossel}>
      {card}
        
      </div>
      <div className="buttons">
        <button onClick={handleClickEsquerdo}><img src="seta.png" alt="Seta para esquerda" /></button>
        <button onClick={handleClickDireito}><img src="seta.png" alt="Seta para direita" /></button>
      </div>
    </div>
  )
}

export default Carrossel