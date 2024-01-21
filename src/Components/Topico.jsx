import React from 'react'
import "./Topico.css"

const Topico = ({className, titulo, texto}) => {
  return (
    <div className={className}>
        <div className='titulo-topico'>{titulo}</div>
        <div className='texto-explicativo'>{texto}</div>
    </div>
    
  )
}

export default Topico