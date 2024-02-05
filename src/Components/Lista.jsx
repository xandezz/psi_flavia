import React from 'react'
import "./Lista.css"

const Lista = ({lista}) => {
  return (
    <ul className='lista'>
        {lista.map((item) => (
            <li key= {item.id}className='item'>{item.servico}</li>
          ))}
    </ul>
  )
}

export default Lista