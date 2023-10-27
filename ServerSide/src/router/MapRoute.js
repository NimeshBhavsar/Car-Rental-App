const express = require('express');
const axios = require('axios');
const router = express.Router();

const apiKey = '5b3ce3597851110001cf62487da09599a40c4ce8b07deb5be7925e79';

router.get('/route/:origin/:destination', async (req, res) => {
  const { origin, destination } = req.params;
  try {
    const response = await axios.get(`https://api.openrouteservice.org/v2/directions/driving-car?api_key=${apiKey}&start=${origin}&end=${destination}`);
    res.json(response.data);
    console.log(response)
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
