const express = require('express');
const { saque } = require('../controllers/contaController');

const contaRoutes = express.Router();

contaRoutes.get('/saque', saque);

module.exports = contaRoutes;
