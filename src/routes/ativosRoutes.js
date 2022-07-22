const express = require('express');
const { getByClient, getByAssets, getAllAssetsAndQuantity } = require('../controllers/ativosController');

const ativosRoutes = express.Router();

// todos os endpoints abaixo contem /ativos antes
ativosRoutes.get('/cliente/:codCliente', getByClient);
ativosRoutes.get('/:codAtivo', getByAssets);
ativosRoutes.get('/', getAllAssetsAndQuantity);

module.exports = ativosRoutes;
