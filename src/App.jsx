import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Sobre from './pages/Sobre/Sobre'
import Depoimentos from './pages/Depoimentos/Depoimentos'
import Contato from './pages/Contato/Contato'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import CardBenefits from './components/CardBenefits/CardBenefits'
import { LuFlower2 } from "react-icons/lu";

function App() {
  return (
    <div className='App'>
        <Navbar />

        <Hero />

        <CardBenefits 
            icon={LuFlower2} 
            iconColor="#5d4294"
            iconSize={60}
            title="Fresh Flowers" 
            description="Fresh flowers brighten spaces, bringing nature's beauty indoors."
            bgColor="#F9EFFF" 
        />

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
