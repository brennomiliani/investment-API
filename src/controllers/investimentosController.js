const investimentosService = require('../services/investimentosService');

const comprar = async (req, res) => {
  const { status, message } = await investimentosService.comprar(req.body);
  res.status(status).json({ message });
};

const vender = async (req, res) => {
  const { status, message } = await investimentosService.vender(req.body);
  res.status(status).json({ message });
};

module.exports = {
  comprar,
  vender,
};
