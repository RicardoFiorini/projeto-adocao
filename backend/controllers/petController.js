// backend/controllers/petController.js
const Pet = require('../models/petModel');

exports.getAllPets = (req, res) => {
  try {
    const pets = Pet.findAll();
    res.status(200).json(pets);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao buscar pets.' });
  }
};

exports.getPetById = (req, res) => {
  try {
    const pet = Pet.findById(req.params.id);
    if (pet) {
      res.status(200).json(pet);
    } else {
      res.status(404).json({ message: 'Pet não encontrado.' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Erro ao buscar pet.' });
  }
};