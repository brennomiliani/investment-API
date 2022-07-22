const Joi = require('joi');
const HttpException = require('../shared/httpExeption');

const transactionSchema = Joi.object({
  codCliente: Joi.number().required(),
  valor: Joi.number().min(1).required(),
});
module.exports = (req, res, next) => {
  const { error } = transactionSchema.validate(req.body);
  if (error) throw new HttpException(400, error.message);
  next();
};
