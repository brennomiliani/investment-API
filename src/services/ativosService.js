const { CustodiaAtivo } = require('../database/models');

const getByClient = async ({ codCliente }) => {
  const cliente = await CustodiaAtivo.findAll({ where: { codCliente } });
  return cliente;
};

const getByAssets = async ({ codAtivo }) => {
  const ativo = await CustodiaAtivo.findAll({ where: { codAtivo } });
  return ativo;
};

module.exports = {
  getByClient,
  getByAssets,
};
