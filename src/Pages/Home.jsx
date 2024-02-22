import React from 'react'
import "./Home.css"
import Topico from '../Components/Topico'
import Lista from '../Components/Lista'
import Carrossel from '../Components/Carrossel'
import Card from '../Components/Card'
import CaixaDePergunta from '../Components/CaixaDePergunta'
import Capa from '../Components/Capa'
import QuemSouEu from '../Components/QuemSouEu'

const Home = () => {

  const servicos =
    [
      { id: 1, servico: "Terapia online" },
      { id: 2, servico: "Psicoterapia individual" },
      { id: 3, servico: "Orientação profissional" },
      { id: 4, servico: "Palestras e Workshops" }
    ]
  const doencas =
    [
      {
        id: "1",
        titulo: "Ansiedade",
        texto: "A ansiedade é algo natural de nós seres humanos. Porém em excesso se torna preocupante, quando nos incapacita em algumas questões da vida e em alguns casos acaba afetando a maneira como se vive! "
      },
      {
        id: "2",
        titulo: "Luto",
        texto: "A morte é um evento inevitável na vida de todos nós e lidar com a perda de um ente querido pode ser uma experiência extremamente difícil. A dor do luto pode ser muito intensa, mas com o tempo, ela tende a diminuir. Por mais que algumas pessoas fiquem presas no luto, entender que o LUTO é algo para se passar, não para estar é essencial!"
      },
      {
        id: "3",
        titulo: "Timidez e Insegurança",
        texto: "A morte é um evento inevitável na vida de todos nós e lidar com a perda de um ente querido pode ser uma experiência extremamente difícil. A dor do luto pode ser muito intensa, mas com o tempo, ela tende a diminuir. Por mais que algumas pessoas fiquem presas no luto, entender que o LUTO é algo para se passar, não para estar é essencial!"
      },
      {
        id: "4",
        titulo: "Relacionamentos",
        texto: "Desafios como problemas de comunicação, conflitos frequentes e a ausência de intimidade ou confiança podem afetar significativamente os laços interpessoais, seja no âmbito conjugal ou familiar. Esses obstáculos demandam atenção e esforço para fortalecer os vínculos e promover relações saudáveis."
      },
      {
        id: "5",
        titulo: "Ataques de Pânico",
        texto: "Crises de ansiedade, medo, traumas, sentimento de culpa, são reações do corpo em relação a um evento que aconteceu, ou a angústia do que irá acontecer! O ataque de pânico acontece de repente, nos deixam incapacitantes e paralisa, nos fazendo evitar situações necessárias para que não traga desconforto."
      },

    ]
  const duvidas =
    [
      {
        id: "1",
        titulo: "Quanto tempo dura cada sessão?",
        texto: "Cada sessão dura exatamente 50 minutos!"
      },
      {
        id: "2",
        titulo: "Quanto tempo dura o tratamento psicológico?",
        texto: "A duração do tratamento psicoterápico varia conforme o paciente e seus problemas. Não é possível prever o tempo exato para resultados. Quando a alta se torna viável, as sessões reduzem gradualmente até o encerramento da terapia."
      },
      {
        id: "3",
        titulo: "Qual o valor da sessão?",
        texto: "Os custos relacionados à psicoterapia serão discutidos e definidos antes do início do tratamento, em uma conversa direta com o profissional responsável. Se precisar de mais informações ou esclarecimentos, sinta-se à vontade para entrar em contato."
      },
      {
        id: "4",
        titulo: "Quais são os benefícios da terapia?",
        texto: "A terapia pode ajudar a melhorar o bem-estar emocional, lidar com desafios, promover autoconhecimento e desenvolver estratégias para enfrentar problemas."
      },
      {
        id: "5",
        titulo: "Com que frequência devo ter sessões de terapia?",
        texto: "A frequência varia, mas é comum ter sessões semanais inicialmente. Conforme progredir, a frequência pode diminuir."
      },
      {
        id: "6",
        titulo: "Como posso saber se a terapia está funcionando para mim?",
        texto: "Observe mudanças positivas em seu bem-estar emocional, relações e habilidades de enfrentamento. Comunique-se abertamente com seu terapeuta sobre seu progresso."
      }
    ]

  return (
    <div className='home'>
      <Capa />
      <Topico
        className={"topico"}
        classNameTitulo={"topico-quemSouEu"}
        titulo={'Quem sou eu'}
        texto={<QuemSouEu />} />

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
        data={doencas}
        titulo={'Questões trabalhadas'}
        componente={<Card />}
        classe={'carrossel-card'}
        classNameTitulo={"topico-questoesTrabalhadas"}
        classNameContainer={"container-carrossel-card"}
        classNameConteudo={"conteudo-carrossel-questoes"}
        classNameFolhasDireita={"folhas-direita-questoes"}
        classNameFolhasEsquerda={"folhas-esquerda-questoes"}
      />

      <div className="faixa">
        <a href="https://wa.me/5584994931379?text=Ol%C3%A1%2C+gostaria+de+marcar+uma+consulta+com+a+Psic%C3%B3loga+Fl%C3%A1via+Luiza%21" target='_blank' style={{ color: "#ffffff" }}>AGENDAR MINHA CONSULTA</a>
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
        data={duvidas}
        titulo={'Duvidas frequentes'}
        componente={<CaixaDePergunta />}
        classe={'carrossel-caixaDePergunta'}
        classNameTitulo={"titulo-duvidas"}
        classNameContainer={'container-carrossel-duvidas'}
        classNameConteudo={"conteudo-carrossel-duvidas"}
        classNameFolhasDireita={"folhas-direita-duvidas"}
        classNameFolhasEsquerda={"folhas-esquerda-duvidas"}
      />
      <div className="faixa">
      <a href="https://wa.me/5584994931379?text=Ol%C3%A1%2C+gostaria+de+marcar+uma+consulta+com+a+Psic%C3%B3loga+Fl%C3%A1via+Luiza%21" target="_blank"style={{ color: "#ffffff" } }>AGENDAR MINHA CONSULTA</a>
      </div>
    </div>
  )
}

export default Home