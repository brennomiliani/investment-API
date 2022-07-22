const { CustodiaAtivo, Ativo } = require('../database/models');

const getByClient = async ({ codCliente }) => {
  const client = await CustodiaAtivo.findAll({ where: { codCliente } });
  return client;
};

const getByAssets = async ({ codAtivo }) => {
  const stock = await Ativo.findOne({ where: { codAtivo } });
  return stock;
};

const getByClientAndAssets = async ({ codCliente, codAtivo }) => {
  const [clientAssets] = await CustodiaAtivo.findAll({ where: { codCliente, codAtivo } });
  return clientAssets;
};

const updateAssets = async (codAtivo, qtdAlter, type) => {
  const { qtdAtivo } = await getByAssets({ codAtivo });
  let newQtd;
  if (type === 'compra') newQtd = qtdAtivo - qtdAlter;
  if (type === 'venda') newQtd = qtdAtivo + qtdAlter;

  await Ativo.update({ qtdAtivo: newQtd }, {
    where: {
      codAtivo,
    },
  });
};

module.exports = {
  getByClient,
  getByAssets,
  getByClientAndAssets,
  updateAssets,
};
