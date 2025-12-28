import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Sobre from './pages/Sobre/Sobre'
import Depoimentos from './pages/Depoimentos/Depoimentos'
import Contato from './pages/Contato/Contato'

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

    </div>
  )
}

export default App
