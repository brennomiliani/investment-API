const { CustodiaAtivo, Ativo } = require('../database/models');

const getByClient = async ({ codCliente }) => {
  const client = await CustodiaAtivo.findAll({ where: { codCliente } });
  const result = client.map((custodia) => ({
    codCliente: custodia.codCliente,
    codAtivo: custodia.codAtivo,
    qtdeAtivo: custodia.qtdAtivo,
    valor: custodia.valorCompra,
  }));
  return result;
};

const getByAssets = async ({ codAtivo }) => {
  const stock = await Ativo.findOne({ where: { codAtivo } });
  return stock;
};

const getAllAssetsAndQuantity = async () => {
  const stocks = await Ativo.findAll({
    attributes: { exclude: ['qtdAtivo'] },
  });
  const assets = await CustodiaAtivo.findAll();
  const response = stocks.map((stock) => {
    const sumAssets = assets.reduce((prev, { codAtivo, qtdAtivo }) => {
      if (codAtivo === stock.codAtivo) return prev + qtdAtivo;
      return prev;
    }, 0);
    return {
      codAtivo: stock.codAtivo,
      preco: stock.preco,
      codBolsa: stock.nome,
      qtdInvestida: sumAssets,
    };
  });
  return response;
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
  getAllAssetsAndQuantity,
  getByClientAndAssets,
  updateAssets,
};
