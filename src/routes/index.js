const express = require('express');
const contaRoutes = require('./contaRoutes');
const ativosRoutes = require('./ativosRoutes');
const investimentosRoutes = require('./investimentosRoutes');
const { Cliente } = require('../database/models');

const routes = express.Router();

routes.use('/conta', contaRoutes);
routes.use('/ativos', ativosRoutes);
routes.use('/investimentos', investimentosRoutes);

module.exports = routes;
