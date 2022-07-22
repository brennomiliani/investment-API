const express = require('express');
const { saque, deposito, getCliente } = require('../controllers/contaController');
const verifyDeposit = require('../middlewares/verifyDeposit');

const contaRoutes = express.Router();

// todos os endpoints abaixo contem /conta antes
contaRoutes.post('/saque', saque);
contaRoutes.post('/deposito', verifyDeposit, deposito);
contaRoutes.get('/:codCliente', getCliente);

module.exports = contaRoutes;
