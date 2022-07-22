const express = require('express');
const { saque, deposito, getCliente } = require('../controllers/contaController');
const verifyTransaction = require('../middlewares/verifyDeposit');

const contaRoutes = express.Router();

// todos os endpoints abaixo contem /conta antes
contaRoutes.post('/saque', verifyTransaction, saque);
contaRoutes.post('/deposito', verifyTransaction, deposito);
contaRoutes.get('/:codCliente', getCliente);

module.exports = contaRoutes;
