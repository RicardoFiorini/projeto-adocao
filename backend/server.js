// backend/server.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const petRoutes = require('./routes/petRoutes');

// Carrega variáveis de ambiente do .env
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors()); // Habilita o CORS para todas as rotas
app.use(express.json()); // Para o Express entender JSON

// Rotas da API
app.use('/api/pets', petRoutes);

// Rota principal
app.get('/', (req, res) => {
  res.send('API do Sistema de Adoção de Animais');
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});