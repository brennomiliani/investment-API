const express = require('express');
const { comprar, vender } = require('../controllers/investimentosController');

const investimentosRoutes = express.Router();

// todos os endpoints abaixo contem /investimentos antes
investimentosRoutes.post('/comprar', comprar);
investimentosRoutes.post('/vender', vender);

module.exports = investimentosRoutes;
