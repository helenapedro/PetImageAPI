const express = require('express');
const axios = require('axios');

const router = express.Router();

const usedDogImages = [];
const usedCatImages = [];

// Endpoint para obter uma foto aleatória de um cachorro
router.get('/getdog', async (req, res) => {
  try {
    const response = await axios.get('https://dog.ceo/api/breeds/image/random');
    const imageUrl = response.data.message;

    // Verifica se a imagem já foi usada nesta sessão
    if (usedDogImages.includes(imageUrl)) {
      return res.status(500).json({ error: 'Imagem de cachorro repetida nesta sessão' });
    }

    usedDogImages.push(imageUrl);
    res.send(`<img src="${imageUrl}"/>`);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao obter imagem de cachorro' });
  }
});

// Endpoint para obter uma foto aleatória de um gato
router.get('/getcat', async (req, res) => {
  try {
    const response = await axios.get('https://api.thecatapi.com/v1/images/search');
    const imageUrl = response.data[0].url;

    // Verifica se a imagem já foi usada nesta sessão
    if (usedCatImages.includes(imageUrl)) {
      return res.status(500).json({ error: 'Imagem de gato repetida nesta sessão' });
    }

    usedCatImages.push(imageUrl);
    res.send(`<img src="${imageUrl}"/>`);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error to get the Cat Image' });
  }
});

module.exports = router;
