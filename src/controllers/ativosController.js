const {
  ReasonPhrases,
  StatusCodes,
  getReasonPhrase,
  getStatusCode,
} = require('http-status-codes');
const ativosService = require('../services/ativosService');
const HttpException = require('../shared/httpException');

const getByClient = async (req, res) => {
  const clientStocks = await ativosService.getByClient(req.params);
  if (clientStocks.length === 0) throw new HttpException(404, 'Ativos não encontrados para o cliente ou cliente não encontrado');
  res.status(StatusCodes.OK).json(clientStocks);
};

const getByAssets = async (req, res) => {
  const stocks = await ativosService.getByAssets(req.params);
  if (!stocks) throw new HttpException(404, 'Ativo não encontrado');
  res.status(StatusCodes.OK).json(stocks);
};

const getAllAssetsAndQuantity = async (req, res) => {
  const stocks = await ativosService.getAllAssetsAndQuantity();
  res.status(StatusCodes.OK).json(stocks);
};

module.exports = {
  getByClient,
  getByAssets,
  getAllAssetsAndQuantity,
};
