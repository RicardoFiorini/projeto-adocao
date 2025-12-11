// backend/models/petModel.js

// Agora usamos URLs estáticas e de alta qualidade do Pexels.
// Isso garante que as imagens NUNCA quebrarão.
const pets = [
  {
    id: 1,
    nome: 'Rex',
    especie: 'Cachorro',
    raca: 'Vira-lata',
    idade: 2,
    genero: 'Macho',
    tamanho: 'Médio',
    descricao: 'Um companheiro leal e brincalhão, adora correr no parque.',
    // URL Pexels para Vira-lata
    fotoUrl: 'https://images.pexels.com/photos/1124002/pexels-photo-1124002.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
  },
  {
    id: 2,
    nome: 'Mimi',
    especie: 'Gato',
    raca: 'Siamês',
    idade: 1,
    genero: 'Fêmea',
    tamanho: 'Pequeno',
    descricao: 'Uma gatinha calma e carinhosa, perfeita para um apartamento.',
    // URL Pexels para Siamês
    fotoUrl: 'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
  },
  {
    id: 3,
    nome: 'Thor',
    especie: 'Cachorro',
    raca: 'Golden Retriever',
    idade: 3,
    genero: 'Macho',
    tamanho: 'Grande',
    descricao: 'Muito dócil e ótimo com crianças. Precisa de espaço para brincar.',
    // URL Pexels para Golden Retriever
    fotoUrl: 'https://images.pexels.com/photos/59523/pexels-photo-59523.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
  },
  {
    id: 4,
    nome: 'Luna',
    especie: 'Gato',
    raca: 'Persa',
    idade: 5,
    genero: 'Fêmea',
    tamanho: 'Médio',
    descricao: 'Uma gata majestosa que adora um bom sofá e carinho.',
    // URL Pexels para Gato Persa
    fotoUrl: 'https://images.pexels.com/photos/156934/pexels-photo-156934.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
  }
];

// Funções que simulam o acesso ao "banco de dados"
// IMPORTANTE: Removemos a lógica do '&sig=' pois agora temos links fixos.
module.exports = {
  findAll: () => {
    // Agora apenas retornamos a lista, sem modificar as URLs
    return pets;
  },

  findById: (id) => {
    // Apenas encontramos e retornamos o pet
    return pets.find(pet => pet.id === parseInt(id));
  }
};