import React from 'react'
import "./Home.css"
import Topico from '../Components/Topico'
import Lista from '../Components/Lista'
import Carrossel from '../Components/Carrossel'
import Card from '../Components/Card'

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
            <p className='nome'>Flávia Luiza</p>
            <p className='crp'>CRP 17/7097</p>
          </div>
          <p className='descricao'>Psicóloga com atuação em terapia cognitiva comportamental(TCC)</p>
          <p className='descricao-2'>Atendimento para adolescentes e adultos consultas online</p>
        </div>
      </div>
      <Topico 
        className={'pergunta'}
        titulo={'Como a TCC pode te ajudar?'} 
        texto={'A Terapia Cognitivo-Comportamental (TCC) oferece uma abordagem pragmática e eficaz para ajudar indivíduos a enfrentar desafios emocionais e comportamentais. Ao identificar padrões de pensamento negativos, a TCC capacita os clientes a desafiá-los e substituí-los por pensamentos mais realistas. Além disso, a terapia concentra-se na modificação de comportamentos disfuncionais, no desenvolvimento de habilidades de enfrentamento e na promoção da autorreflexão. Estabelecer metas específicas, melhorar a regulação emocional e prevenir recaídas são aspectos-chave, destacando a natureza colaborativa entre terapeuta e cliente. A TCC visa não apenas tratar problemas presentes, mas também equipar os indivíduos com ferramentas duradouras para a gestão eficaz de desafios futuros.'} 
      />
      <Carrossel card={
      <Card titulo={"Ansiedade1"} descricao={"A ansiedade é algo natural de nós seres humanos. Porém em excesso se torna preocupante, quando nos incapacita em algumas questões da vida e em alguns casos acaba afetando a maneira como se vive!"} />}
      />
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