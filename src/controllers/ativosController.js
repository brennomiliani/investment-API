const {
  ReasonPhrases,
  StatusCodes,
  getReasonPhrase,
  getStatusCode,
} = require('http-status-codes');
const ativosService = require('../services/ativosService');

const getByClient = async (req, res) => {
  const clientStocks = await ativosService.getByClient(req.params);
  res.status(StatusCodes.OK).json(clientStocks);
};

const getByAssets = (req, res) => {

};

module.exports = {
  getByClient,
  getByAssets,
};
