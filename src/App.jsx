import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Sobre from './pages/Sobre/Sobre';
import Depoimentos from './pages/Depoimentos/Depoimentos';
import Contato from './pages/Contato/Contato';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

function App() {
	return (
		<div className='App'>
			<Navbar />

			<ScrollToTop />

			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<Sobre />} />
				<Route path='/statements' element={<Depoimentos />} />
				<Route path='/contact' element={<Contato />} />
			</Routes>

			<Footer />
		</div>
	);
}

export default App;

/*TODO 
benefits: verificar margem direita na tela maior
benefits: responsividade do por que escolher a blossom (aumentar pra telas maiores)
cta: arrumar a left margin na responsividade
cta: fazer a responsividade do celular
cta: arrumar hover
hero: centralizar o texto no botão 
navbar: fazer o menu fechar qdo eu scrolo (ou fixar ele)
services: ajustar tamanho dos cards certinho
depoimentos: arrumar tamanho dos cards p responsividade
services: centralizar as setinhas
geral:
padronizar espaçamento entre as sections
trabalhar na responsividade pro meu tamanho de tela
arrumar os cards (responsividade)
padronizar as aspas
padronizar a declaração da função
conferir onde tem um overflow bagunçando o frame
*/
