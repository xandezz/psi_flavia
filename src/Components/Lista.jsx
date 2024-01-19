import React from 'react'
import "./Lista.css"

const Lista = ({lista}) => {
  return (
    <ul className='lista'>
        {lista.map((item) => (
            <li className='item'>{item}</li>
          ))}
    </ul>
  )
}

export default Lista