const express = require('express');
const { saque, deposito, getCliente } = require('../controllers/contaController');
const verifyTransaction = require('../middlewares/verifyTransaction');

const contaRoutes = express.Router();

/**
 * @swagger
 * tags:
 *  name: Conta
 *  description: Endpoints de utilização da conta
 */

/**
 * @swagger
 *  components:
 *    schemas:
 *      Transaction:
 *        type: object
 *        required:
 *          - codCliente
 *          - valor
 *        properties:
 *          codCliente:
 *            type: integer
 *          valor:
 *            type: float
 *        example:
 *          codCliente: 1
 *          valor: 1000
 *      TransactionResponse:
 *        type: object
 *        required:
 *          - novoSaldo
 *        properties:
 *          novoSaldo:
 *            type: float
 *        example:
 *          novoSaldo: 2000
 *      getClientResponse:
 *        type: object
 *        required:
 *          - codCliente
 *          - saldo
 *        properties:
 *          codCliente:
 *            type: integer
 *          saldo:
 *            type: float
 *        example:
 *          codCliente: 1
 *          saldo: 2000
 */

/**
 * @swagger
 *  /conta/saque:
 *    post:
 *      tags: [Conta]
 *      description: Endpoint realiza saque da conta do cliente
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/Transaction'
 *      responses:
 *        200:
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                $ref: '#/components/schemas/TransactionResponse'
 */
// todos os endpoints abaixo contem /conta antes
contaRoutes.post('/saque', verifyTransaction, saque);

/**
 * @swagger
 *  /conta/deposito:
 *    post:
 *      tags: [Conta]
 *      description: Endpoint realiza deposito da conta do cliente
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/Transaction'
 *      responses:
 *        200:
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                $ref: '#/components/schemas/TransactionResponse'
 */
contaRoutes.post('/deposito', verifyTransaction, deposito);

/**
 * @swagger
 *  /conta/{codCliente}:
 *    get:
 *      tags: [Conta]
 *      description: Endpoint retorna o codCliente com o seu respectivo saldo
 *      parameters:
 *        - in: path
 *          name: codCliente
 *          type: integer
 *          required: true
 *      responses:
 *        200:
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                $ref: '#/components/schemas/getClientResponse'
 */
contaRoutes.get('/:codCliente', getCliente);

module.exports = contaRoutes;
