import express from 'express';
import {
  ReasonPhrases,
  StatusCodes,
  getReasonPhrase,
  getStatusCode,
} from 'http-status-codes';

const contaRoutes = express.Router();

contaRoutes.get('/saque', (req, res) => {
  res.status(StatusCodes.OK).send(ReasonPhrases.OK);
});

export default contaRoutes;
