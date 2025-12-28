import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Sobre from './pages/Sobre/Sobre'
import Depoimentos from './pages/Depoimentos/Depoimentos'
import Contato from './pages/Contato/Contato'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Benefits from './components/Benefits/Benefits'

function App() {
  return (
    <div className='App'>
        <Navbar />

        <Hero />

        <Benefits />

        <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Sobre />} />
            <Route path="/statements" element={<Depoimentos />} />
            <Route path="/contact" element={<Contato />} />

        </Routes>

        <Footer />

    </div>
  )
}

export default App
