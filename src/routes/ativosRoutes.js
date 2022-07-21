const express = require('express');
const { getByClient, getByAssets } = require('../controllers/ativosController');

const ativosRoutes = express.Router();

// todos os endpoints abaixo contem /ativos antes
ativosRoutes.get('/cliente/:codCliente', getByClient);
ativosRoutes.get('/:codAtivo', getByAssets);

module.exports = ativosRoutes;
