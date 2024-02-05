import "./CaixaDePergunta.css"

const CaixaDePergunta = ({titulo, descricao}) => {
  return (
    <div className="container-CaixaDePergunta">
        <div className="pergunta">{titulo}</div>
        <div className="resposta">{descricao}</div>
    </div>
  )
}

export default CaixaDePergunta