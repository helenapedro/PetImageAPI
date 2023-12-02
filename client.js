const axios = require('axios');

const baseURL = 'http://localhost:3000/api';
const token = 'seu_token_jwt_aqui';

// Obter Imagem de Cachorro
axios.get(`${baseURL}/getdog`, { headers: { Authorization: token } })
  .then(response => console.log('Imagem de Cachorro:', response.data))
  .catch(error => console.error('Erro ao obter imagem de cachorro:', error.response.data));

// Obter Imagem de Gato
axios.get(`${baseURL}/getcat`, { headers: { Authorization: token } })
  .then(response => console.log('Imagem de Gato:', response.data))
  .catch(error => console.error('Erro ao obter imagem de gato:', error.response.data));
