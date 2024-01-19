import React from 'react'
import "./Topico.css"

const Topico = ({className, titulo, texto}) => {
  return (
    <div className={className}>
        <h3>{titulo}</h3>
        <div className='texto-explicativo'>{texto}</div>
    </div>
    
  )
}

export default Topico