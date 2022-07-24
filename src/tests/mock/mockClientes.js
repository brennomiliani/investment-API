const clientes = [
  {
    codCliente: 1,
    nome: 'João',
    cpf: '77075104020',
    saldo: 5000,
    contaSaque: '123456-7',
    bancoSaque: 'itau',
  },
  {
    codCliente: 2,
    nome: 'Aparecida',
    cpf: '32264335041',
    saldo: 7000,
    contaSaque: '765432-3',
    bancoSaque: 'banco do brasil',
  },
  {
    codCliente: 3,
    nome: 'Maria',
    cpf: '35665704008',
    saldo: 9000,
    contaSaque: '526378-4',
    bancoSaque: 'santander',
  },
];

const getClienteData = {
  codCliente: 1,
  nome: 'João',
  cpf: '77075104020',
  saldo: 5000,
  contaSaque: '123456-7',
  bancoSaque: 'itau',
};

module.exports = {
  clientes,
  getClienteData,
};
