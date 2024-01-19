import React from 'react'
import "./Home.css"
import Topico from '../Components/Topico'
import Lista from '../Components/Lista'

const Home = () => {

  const servicos = 
  [
    "Terapia online",
    "Psicoterapia individual",
    "Orientação profissional",
    "Palestras e Workshops"
  ]

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
      <Topico 
        className={'pergunta'}
        titulo={'Como a TCC pode te ajudar'} 
        texto={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, neque!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, neque!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, neque!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, neque!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, neque!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, neque!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, neque!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, neque!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, neque!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, neque!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, neque!'} 
      />
      <p>Carrossel de doenças</p>
      <div className="faixa">
        <p style={{color: "#ffffff"}}>AGENDAR MINHA CONSULTA</p>
      </div>
      <Topico 
        className={"pergunta"}
        titulo={'Quem sou eu?'} 
        texto={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, neque!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, neque!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, neque!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, neque!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, neque!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, neque!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, neque!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, neque!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, neque!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, neque!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,'} />
      <Topico
        className={"servicos"}
        titulo={'Serviços oferecidos'} 
        texto={<Lista lista={servicos}/>} 
      />
      <Topico 
        className={"pergunta"}
        titulo={'Minhas especialidades'} 
        texto={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, neque!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, neque!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, neque!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, neque!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, neque!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, neque!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, neque!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, neque!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, neque!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, neque!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,'} 
      />
      <Topico 
        className={"pergunta"}
        titulo={'Tudo sobre a terapia'} 
        texto={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, neque!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, neque!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, neque!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, neque!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, neque!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, neque!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, neque!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, neque!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, neque!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, neque!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,'} 
      />
      <Topico 
        className={"pergunta"}
        titulo={'Duvidas frequentes'} 
        texto={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, neque!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, neque!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, neque!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, neque!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, neque!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, neque!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, neque!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, neque!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, neque!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, neque!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,'} 
      />
      <Topico 
        className={'pergunta'}
        titulo={'Dias de atendimento'} 
        texto={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, neque!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, neque!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, neque!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, neque!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, neque!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, neque!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, neque!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, neque!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, neque!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, neque!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,'} 
      />
      <p>Agendar minha consulta</p>
    </div>
  )
}

export default Home