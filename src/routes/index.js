const express = require('express');
const contaRoutes = require('./contaRoutes');
const ativosRoutes = require('./ativosRoutes');
const { Cliente } = require('../database/models');

const routes = express.Router();

routes.use('/conta', contaRoutes);
routes.use('/ativos', ativosRoutes);

module.exports = routes;
