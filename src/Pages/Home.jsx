import React from 'react'
import "./Home.css"

const Home = () => {
  return (
    <div className='home'>
      <div className='principal'>
        <img className="foto-PSIFlavia" src="logopsi.png" alt="Foto da psicologa Flávia Luiza" />
        <div>
          <span></span>
          <div>
            <h1 className='nome'>Flávia Luiza</h1>
            <p className='crp'>CRP 17/7097</p>
          </div>
          <h2 className='descricao'>Psicóloga com atuação em terapia cognitiva comportamental(TCC)</h2>
          <h3>Atendimento para adolescentes e adultos consultas online</h3>
        </div>
      </div>
      <div className='pergunta-tcc'>
        <h3 >Como a TCC pode te ajudar?</h3>
        <p className='texto-explicativo'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, neque!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, neque!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, neque!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, neque!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, neque!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, neque!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, neque!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, neque!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, neque!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, neque!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, neque!</p>
      </div>
      <p>Carrossel de doenças</p>
      <div className="faixa">
        <p style={{color: "#ffffff"}}>AGENDAR MINHA CONSULTA</p>
      </div>
      <div className="apresentacao">
        <h3>Quem sou eu?</h3>
      </div>
    </div>
  )
}

export default Home