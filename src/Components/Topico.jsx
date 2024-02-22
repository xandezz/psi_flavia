import React from 'react'
import "./Topico.css"

const Topico = ({ className, titulo, texto, classNameTitulo }) => {
  return (
    <article className={className}>
      <h3 className={`titulo-topico ${classNameTitulo}`} data-aos="fade-down" data-aos-duration="800">{titulo}</h3>
      <div className='texto-explicativo' data-aos="fade-up" data-aos-duration="800">{texto}</div>
    </article>
  )
}

export default Topico