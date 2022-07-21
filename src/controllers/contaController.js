const {
  ReasonPhrases,
  StatusCodes,
  getReasonPhrase,
  getStatusCode,
} = require('http-status-codes');
const contaService = require('../services/contaService');

const saque = async (req, res) => {
  const novoSaldo = await contaService.saqueOuDeposito(req.body, 'saque');
  res.status(StatusCodes.OK).json({ novoSaldo });
};

const deposito = async (req, res) => {
  const novoSaldo = await contaService.saqueOuDeposito(req.body, 'deposito');
  res.status(StatusCodes.OK).json({ novoSaldo });
};

const getCliente = async (req, res) => {
  const { codCliente, saldo } = await contaService.getCliente(req.params);
  res.status(StatusCodes.OK).json({ codCliente, saldo });
};

module.exports = {
  saque,
  deposito,
  getCliente,
};
