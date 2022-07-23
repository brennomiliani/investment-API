const ativo = {
  codAtivo: 1,
  qtdAtivo: 10000,
  preco: 100,
  nome: 'XPBR31',
};

const allAtivos = [
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

const getByClientData = [
  {
    codCliente: 1,
    codAtivo: 1,
    qtdeAtivo: 100,
    valor: 98.87,
  },
  {
    codCliente: 1,
    codAtivo: 2,
    qtdeAtivo: 100,
    valor: 34.66,
  },
];

module.exports = {
  ativo,
  allAtivos,
  getByClientData,
};
