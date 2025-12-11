// frontend/src/components/PetCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import './PetCard.css'; // Criaremos este CSS em seguida

const PetCard = ({ pet }) => {
  return (
    <div className="pet-card">
      <img src={pet.fotoUrl} alt={pet.nome} className="pet-card-img" />
      <div className="pet-card-body">
        <h3 className="pet-card-title">{pet.nome}</h3>
        <p className="pet-card-text">{pet.especie} - {pet.raca}</p>
        <Link to={`/pet/${pet.id}`} className="pet-card-btn">
          Ver Detalhes
        </Link>
      </div>
    </div>
  );
};

export default PetCard;