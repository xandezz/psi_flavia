import React from 'react'
import "./Card.css"
const Card = ({ titulo, descricao }) => {
  return (
    <div className="card">
      <div className="titulo-card">
        <h1>{titulo}</h1>
      </div>
      <div className="descricao-card">
        <p>{descricao}</p>
      </div>
    </div>
  )
}

export default Card


