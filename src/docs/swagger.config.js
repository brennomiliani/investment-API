const swaggerConfig = {
  definition: {
    openapi: '3.0.1',
    info: {
      title: 'API compra e venda de ativos',
      description: 'API para para que clientes de uma corretora possam fazer suas compras e vendas de ativos.',
      version: '1.0',
    },
    servers: [{
      url: 'http://localhost:3000',
      description: 'local server',
    }],
  },
  apis: ['./src/routes/contaRoutes.js', './src/routes/ativosRoutes.js', './src/routes/investimentosRoutes.js'],
};

module.exports = swaggerConfig;
