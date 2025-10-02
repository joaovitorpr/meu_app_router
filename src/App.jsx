// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';  // Importando o componente Menu
import Home from './pages/Home';  // Página Home
import Sobre from './pages/Sobre';  // Página Sobre
import Contato from './pages/Contato';  // Página Contato
import Erro from './pages/Erro';
import Donate from './pages/Donate';
import Footer from './components/Footer';

function App() {
  return (
    <Router> 
      <div className="min-h-screen bg-gray-50">
        <Menu />
        <div className="max-w-4xl mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} /> 
            <Route path="/contato" element={<Contato />} />
            <Route path="/erro" element={<Erro/>}/>
            <Route path="/donate" element={<Donate/>}/>
          </Routes>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;