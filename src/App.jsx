import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Portifolio from './Pages/Portifolio'
import Perguntas from './Pages/Perguntas'
import Contato from './Pages/Contato'
import Footer from './Components/Footer'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/portifolio' element={<Portifolio />} />
        <Route path='/perguntas-frequentes' element={<Perguntas />} />
        <Route path='/contato' element={<Contato />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
