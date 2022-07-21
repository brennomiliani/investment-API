const express = require('express');
const contaRoutes = require('./contaRoutes');
const { Cliente } = require('../database/models');

const routes = express.Router();

routes.use('/conta', contaRoutes);

module.exports = routes;
