import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Sobre from './pages/Sobre/Sobre'
import Depoimentos from './pages/Depoimentos/Depoimentos'
import Contato from './pages/Contato/Contato'
import Footer from './components/Footer/Footer'

function App() { 
  return (
    <div className='App'>
        <Navbar />

        <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Sobre />} />
            <Route path="/statements" element={<Depoimentos />} />
            <Route path="/contact" element={<Contato />} />

        </Routes>

        <Footer/>

    </div>
  )
}

export default App

/*TODO 
padronizar espaçamento entre as sections
trabalhar na responsividade pro meu tamanho de tela
arrumar pra qdo o botão leva p outra página levar para o início
arrumar os cards (responsividade)
padronizar as aspas
padronizar a declaração da função
conferir onde tem um overflow bagunçando o frame
*/