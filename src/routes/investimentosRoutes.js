const express = require('express');
const { comprar, vender } = require('../controllers/investimentosController');

const investimentosRoutes = express.Router();

/**
 * @swagger
 * tags:
 *  name: Investimentos
 *  description: Endpoints para compra e venda de investimentos
 */

/**
 * @swagger
 *  components:
 *    schemas:
 *      comprarOuVender:
 *        type: object
 *        required:
 *          - codCliente
 *          - codAtivo
 *          - qtdAtivo
 *        properties:
 *          codCliente:
 *            type: integer
 *          codAtivo:
 *            type: integer
 *          qtdAtivo:
 *            type: integer
 *        example:
 *          codCliente: 1
 *          codAtivo: 1
 *          qtdAtivo: 100
 *      messageCompra:
 *        type: object
 *        required:
 *          - message
 *        properties:
 *          message:
 *            type: string
 *        example:
 *          message: Compra realizada!
 *      messageVenda:
 *        type: object
 *        required:
 *          - message
 *        properties:
 *          message:
 *            type: string
 *        example:
 *          message: Venda realizada!
 */

/**
 * @swagger
 *  /investimentos/comprar:
 *    post:
 *      tags: [Investimentos]
 *      description: Endpoint para o cliente comprar algum ativo
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/comprarOuVender'
 *      responses:
 *        200:
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                $ref: '#/components/schemas/messageCompra'
 */
// todos os endpoints abaixo contem /investimentos antes
investimentosRoutes.post('/comprar', comprar);

/**
 * @swagger
 *  /investimentos/vender:
 *    post:
 *      tags: [Investimentos]
 *      description: Endpoint para o cliente comprar algum ativo
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/comprarOuVender'
 *      responses:
 *        200:
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                $ref: '#/components/schemas/messageVenda'
 */
investimentosRoutes.post('/vender', vender);

module.exports = investimentosRoutes;
