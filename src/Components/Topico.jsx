import React from 'react'
import "./Topico.css"

const Topico = ({className, titulo, texto}) => {
  return (
    <div className={className}>
        <div className='titulo-topico' data-aos="fade-down" data-aos-duration="800">{titulo}</div>
        <div className='texto-explicativo' data-aos="fade-up" data-aos-duration="800">{texto}</div>
    </div>
    
  )
}

export default Topico