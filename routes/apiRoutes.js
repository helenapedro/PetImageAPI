const express = require('express');
const axios = require('axios');

const router = express.Router();

const usedDogImages = [];
const usedCatImages = [];

// Endpoint to get a random image of a cat 
router.get('/getdog', async (req, res) => {
  try {
    const response = await axios.get('https://dog.ceo/api/breeds/image/random');
    const imageUrl = response.data.message;

    // Verifies if the image was used in this session 
    if (usedDogImages.includes(imageUrl)) {
      return res.status(500).json({ error: 'Dog image repeated in this session' });
    }

    usedDogImages.push(imageUrl);
    res.send(`<img src="${imageUrl}"/>`);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error getting dog image' });
  }
});

// Endpoint to get a random image of a cat
router.get('/getcat', async (req, res) => {
  try {
    const response = await axios.get('https://api.thecatapi.com/v1/images/search');
    const imageUrl = response.data[0].url;

    // Verifies if the image was used in this session 
    if (usedCatImages.includes(imageUrl)) {
      return res.status(500).json({ error: 'Cat image repeated in this session' });
    }

    usedCatImages.push(imageUrl);
    res.send(`<img src="${imageUrl}"/>`);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error getting cat image' });
  }
});

module.exports = router;
