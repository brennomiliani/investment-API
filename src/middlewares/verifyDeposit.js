const {
  ReasonPhrases,
  StatusCodes,
  getReasonPhrase,
  getStatusCode,
} = require('http-status-codes');

const Joi = require('joi');
const HttpException = require('../shared/httpExeption');

const depositSchema = Joi.object({
  codCliente: Joi.number().required(),
  valor: Joi.number().min(1).required(),
});
module.exports = (req, res, next) => {
  const { error } = depositSchema.validate(req.body);
  if (error) throw new HttpException(400, error.message);
  next();
};
