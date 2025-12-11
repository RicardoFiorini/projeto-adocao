// frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import PetDetailsPage from './pages/PetDetailsPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Rota da Página Inicial */}
        <Route path="/" element={<HomePage />} />
        
        {/* Rota da Página de Detalhes (Ex: /pet/1) */}
        <Route path="/pet/:id" element={<PetDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;