const getByAssetsData = {
  codAtivo: 1,
  qtdAtivo: 10000,
  preco: 100,
  nome: 'XPBR31',
};

const getClienteData = {
  codCliente: 1,
  nome: 'Paulo',
  cpf: '77075104020',
  saldo: 500000,
  contaSaque: '123456-7',
  bancoSaque: 'itau',
};

const getByClientAndAssetsData = {
  codAtivo: 1,
  codCliente: 1,
  qtdAtivo: 200,
  valorCompra: 100,
};

module.exports = {
  getByAssetsData,
  getClienteData,
  getByClientAndAssetsData,
};
