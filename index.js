const express = require('express');
const axios = require('axios');

const server = express();

server.get('/users', async function (req, res) {
    const response = await axios.get('https://cdn2.thecatapi.com/images/d9j.jpg');
    const catpictures = response.data;

    res.json(catpictures);
});

server.listen(3000, () => {
 console.log('Sevidor está OK!')
});