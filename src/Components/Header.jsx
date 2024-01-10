import { Link } from "react-router-dom"
import "./Header.css"

const Header = () => {
  return (
    <div className="header">
      <ul className="navbar">
        
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/portifolio">Portifolio</Link></li>
        <li><Link to="/perguntas-frequentes">Perguntas Frequentes</Link></li>
        <li><Link to="/contato">Contato</Link></li>
      </ul>
    </div>
  )
}

export default Header