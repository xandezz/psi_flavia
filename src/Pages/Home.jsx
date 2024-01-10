import React from 'react'
import "./Home.css"

const Home = () => {
  return (
    <div className='home'>
      <div className='principal'>
        <img className="foto-PSIFlavia" src="foto-PSIFlávia.jpeg" alt="Foto da psicologa Flávia Luiza" />
        <div className='informacoes'>
          <span></span>
          <div>
            <h1 className='nome'>Psicologa Flávia Luiza</h1>
            <p className='crp'>CRP 17/7097</p>
          </div>
          <h3 className='descricao'>Formada em psicologia em 2022, tenho como base a TCC, estou fazendo pós na abordagem, tenho uma bagagem de experiência na área da psicoterapia! Ajudo adolescente e adultos com suas ansiedades, anseios, medos e tudo o que acaba tirando a paz!</h3>
        </div>
      </div>
    </div>
  )
}

export default Home