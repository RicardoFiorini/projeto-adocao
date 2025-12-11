// frontend/src/pages/PetDetailsPage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api';
import './PetDetailsPage.css'; // Criaremos este CSS

const PetDetailsPage = () => {
  const [pet, setPet] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams(); // Pega o 'id' da URL

  useEffect(() => {
    const fetchPet = async () => {
      try {
        const response = await api.get(`/pets/${id}`); // Chama http://localhost:5000/api/pets/:id
        setPet(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar detalhes do pet:", error);
        setLoading(false);
      }
    };

    fetchPet();
  }, [id]); // Rode sempre que o 'id' mudar

  if (loading) {
    return <div className="container"><p>Carregando...</p></div>;
  }

  if (!pet) {
    return <div className="container"><p>Pet não encontrado.</p></div>;
  }

  return (
    <div className="container">
      <div className="pet-details-card">
        <img src={pet.fotoUrl} alt={pet.nome} className="pet-details-img" />
        <div className="pet-details-info">
          <h1>{pet.nome}</h1>
          <p><strong>Espécie:</strong> {pet.especie}</p>
          <p><strong>Raça:</strong> {pet.raca}</p>
          <p><strong>Idade:</strong> {pet.idade} anos</p>
          <p><strong>Gênero:</strong> {pet.genero}</p>
          <p><strong>Tamanho:</strong> {pet.tamanho}</p>
          <p className="pet-details-desc">{pet.descricao}</p>
          <button className="adopt-btn">Quero Adotar!</button>
        </div>
      </div>
    </div>
  );
};

export default PetDetailsPage;