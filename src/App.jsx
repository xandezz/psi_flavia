import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Portifolio from './Pages/Portifolio'
import Perguntas from './Pages/Perguntas'
import Contato from './Pages/Contato'
import Footer from './Components/Footer'

function App() {
  return (
    <div>
      <Home />
      <Footer />
    </div>

  )
}

export default App
