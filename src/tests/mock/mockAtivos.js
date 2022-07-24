const ativo = {
  codAtivo: 1,
  qtdAtivo: 10000,
  preco: 100,
  nome: 'XPBR31',
};

const getByClientData = [
  {
    codCliente: 1,
    codAtivo: 1,
    qtdAtivo: 100,
    valor: 98.87,
  },
  {
    codCliente: 1,
    codAtivo: 2,
    qtdAtivo: 100,
    valor: 34.66,
  },
];

const modelClientData = [
  {
    codAtivo: 1,
    codCliente: 1,
    qtdAtivo: 100,
    valorCompra: 98.87,
  },
  {
    codAtivo: 2,
    codCliente: 1,
    qtdAtivo: 100,
    valorCompra: 34.66,
  },
];

const getAllAssetsAndQuantityData = [
  {
    codAtivo: 1,
    preco: 98.87,
    codBolsa: 'XPBR31',
    qtdInvestida: 600,
  },
  {
    codAtivo: 2,
    preco: 34.66,
    codBolsa: 'BBAS3',
    qtdInvestida: 100,
  },
  {
    codAtivo: 3,
    preco: 31.67,
    codBolsa: 'PETR4',
    qtdInvestida: 1000,
  },
];

const modelAtivos = [
  { codAtivo: 1, preco: 98.87, nome: 'XPBR31' },
  { codAtivo: 2, preco: 34.66, nome: 'BBAS3' },
  { codAtivo: 3, preco: 31.67, nome: 'PETR4' },
];

const modelCustodiaAtivos = [
  {
    codAtivo: 1, codCliente: 1, qtdAtivo: 100, valorCompra: 98.87,
  },
  {
    codAtivo: 1, codCliente: 2, qtdAtivo: 500, valorCompra: 94.86,
  },
  {
    codAtivo: 2, codCliente: 1, qtdAtivo: 100, valorCompra: 34.66,
  },
  {
    codAtivo: 3, codCliente: 3, qtdAtivo: 1000, valorCompra: 31.55,
  },
];

module.exports = {
  ativo,
  getByClientData,
  modelClientData,
  modelAtivos,
  modelCustodiaAtivos,
  getAllAssetsAndQuantityData,
};
