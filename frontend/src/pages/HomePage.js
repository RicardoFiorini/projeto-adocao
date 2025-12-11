// frontend/src/pages/HomePage.js
import React, { useState, useEffect } from 'react';
import PetCard from '../components/PetCard';
import api from '../api';
import './HomePage.css'; // Criaremos este CSS

const HomePage = () => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Função para buscar os pets da nossa API
    const fetchPets = async () => {
      try {
        const response = await api.get('/pets'); // Chama http://localhost:5000/api/pets
        setPets(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar pets:", error);
        setLoading(false);
      }
    };

    fetchPets();
  }, []); // O array vazio [] faz com que o useEffect rode apenas uma vez

  if (loading) {
    return <div className="container"><p>Carregando pets...</p></div>;
  }

  return (
    <div className="container">
      <h1 className="home-title">Encontre seu novo amigo</h1>
      <div className="pet-list">
        {pets.map(pet => (
          <PetCard key={pet.id} pet={pet} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;