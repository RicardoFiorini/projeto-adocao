// backend/routes/petRoutes.js
const express = require('express');
const router = express.Router();
const petController = require('../controllers/petController');

// Rota para buscar todos os pets
router.get('/', petController.getAllPets);

// Rota para buscar um pet específico por ID
router.get('/:id', petController.getPetById);

module.exports = router;