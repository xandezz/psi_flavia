import React from 'react'
import "./Home.css"
import Topico from '../Components/Topico'
import Lista from '../Components/Lista'
import Carrossel from '../Components/Carrossel'
import Card from '../Components/Card'
import CaixaDePergunta from '../Components/CaixaDePergunta'

const Home = () => {

  const servicos =
    [
      { id: 1, servico: "Terapia online" },
      { id: 2, servico: "Psicoterapia individual" },
      { id: 3, servico: "Orientação profissional" },
      { id: 4, servico: "Palestras e Workshops" }
    ]

  return (
    <div className='home'>
        <img className="foto-capa" src="capa.jpeg" alt="Foto da psicologa Flávia Luiza" />
      <Topico
        className={"topico"}
        classNameTitulo={"topico-quemSouEu"}
        titulo={'Quem sou eu?'}
        texto={
          <div className='quemsoueu'>
            <div className='container-QuemSouEu'>
              <img src="foto.png" alt="Foto da Psicologa Flávia Luiza" className='foto-psiflavia' />
              <div className='texto-QuemSouEu'>
                <p>
                  Me chamo Flávia Luiza, tenho 23 anos, sou Psicóloga clínica com o trabalho baseado na Terapia Cognitivo Comportamental (TCC). Meu objetivo é colaborar ativamente com você,  para entender, desafiar e modificar padrões disfuncionais com o papel de guia e facilitador e juntos iremos desenvolver estratégias práticas de enfrentamento e metas realistas. Promovendo assim, mudanças positivas e melhorando o bem-estar emocional.
                </p>
                <p>Atendimento voltado para adolescentes e adultos de forma online.</p>

                <p>Durante minha trajetória profissional, enfrentei desafios acadêmicos, pude ter ricas experiências no manejo de situações relacionadas à ansiedade, fui suporte em processos de luto, promovi reflexões sobre a importância de uma rede de apoio e autoconhecimento e trabalhei diretamente com indivíduos diagnosticados com autismo e TDAH.</p>

                <p>Iremos trabalhar juntos para entender os problemas, encontrar maneiras práticas de resolvê-los e criar habilidades para saber lidar com situações dificeis.</p>
              </div>
            </div>
          </div>
        } />
      
        <Topico
          className={'topico'}
          classNameTitulo={'topico-TCC'}
          titulo={'Como a TCC pode te ajudar?'}
          texto={<div className='texto-TCC'>
            <p>A Terapia Cognitivo Comportamental (TCC) é uma abordagem terapêutica colaborativa que visa promover mudanças positivas na vida do cliente ao explorar a interação entre pensamentos, emoções e comportamentos. No ambiente terapêutico, o terapeuta trabalha em conjunto com o cliente para identificar crenças automáticas negativas e distorções cognitivas que podem estar contribuindo para dificuldades emocionais. </p>
            <p>Ao desafiar esses padrões de pensamentos disfuncionais, a TCC busca criar perspectivas mais equilibradas e realistas. Isso envolve questionar a validade de pensamentos automáticos negativos e substituí-los por pensamentos mais construtivos. Essa reestruturação cognitiva é fundamental para alterar a forma como o cliente percebe e interpreta eventos. </p>
            <p>Além de abordar pensamentos, a TCC valoriza estratégias comportamentais, promovendo hábitos saudáveis e ajustes nas reações. Essa abordagem abrangente, integrando aspectos cognitivos e comportamentais, é eficaz no tratamento de ansiedade, depressão, estresse e muitas outras condições psicológicas, garantindo melhorias duradouras na saúde mental.</p>
          </div>}
        />
        <Carrossel
          url={'http://localhost:5173/public/doencas.json'}
          titulo={'Questões trabalhadas'}
          componente={<Card />}
          tamanhoDoCard={720}
          classe={'carrossel-card'}
          classNameTitulo={"topico-questoesTrabalhadas"}
          classNameContainer={"container-carrossel-card"}
        />
      
      <div className="faixa">
        <p style={{ color: "#ffffff" }}>AGENDAR MINHA CONSULTA</p>
      </div>

      <Topico
        className={"servicos"}
        classNameTitulo={"titulo-servicos"}
        titulo={'Serviços oferecidos'}
        texto={<Lista lista={servicos} />}
      />

      <Topico
        className={"topico"}
        classNameTitulo={"titulo-terapia"}
        titulo={'Tudo sobre a terapia'}
        texto={'Terapia baseada na abordagem Terapia Cognitivo Comportamental (TCC), com o intuito de ser acessível a todos, nossas sessões serão de forma online, com duração de 50 minutos, uma vez por semana! Essa jornada terapêutica não apenas é necessária para enfrentar desafios emocionais imediatos, mas também oferece um caminho para o desenvolvimento de habilidades duradouras, promovendo uma melhoria significativa na saúde mental e emocional!'}
      />
      <Carrossel
        url={'http://localhost:5173/public/perguntas.json'}
        titulo={'Duvidas frequentes'}
        componente={<CaixaDePergunta />}
        tamanhoDoCard={660}
        classe={'carrossel-caixaDePergunta'}
        classNameTitulo={"titulo-duvidas"}
        classNameContainer={'container-carrossel-duvidas'}
      />
      <div className="faixa">
        <p style={{ color: "#ffffff" }}>AGENDAR MINHA CONSULTA</p>
      </div>
    </div>
  )
}

export default Home