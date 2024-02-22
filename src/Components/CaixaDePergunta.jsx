import "./CaixaDePergunta.css"

const CaixaDePergunta = ({ titulo, descricao }) => {
  return (
    <div className="container-CaixaDePergunta">
      <h1 className="pergunta">{titulo}</h1>
      <div className="resposta">{descricao}</div>
    </div>
  )
}

export default CaixaDePergunta