const {
  ReasonPhrases,
  StatusCodes,
  getReasonPhrase,
  getStatusCode,
} = require('http-status-codes');
const contaService = require('../services/contaService');

const saque = async (req, res) => {
  const newValor = await contaService.saque(req.body);
  res.status(StatusCodes.OK).json({ newValor });
};

module.exports = {
  saque,
};
