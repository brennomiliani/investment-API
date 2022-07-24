const express = require('express');
const { getByClient, getByAssets, getAllAssetsAndQuantity } = require('../controllers/ativosController');

const ativosRoutes = express.Router();

/**
 * @swagger
 * tags:
 *  name: Ativos
 *  description: Endpoints de utilização e visualização de ativos
 */

/**
 * @swagger
 *  components:
 *    schemas:
 *      ativosCliente:
 *        type: object
 *        required:
 *          - codCliente
 *          - codAtivo
 *          - qtdAtivo
 *          - valor
 *        properties:
 *          codCliente:
 *            type: integer
 *          codAtivo:
 *            type: integer
 *          qtdAtivo:
 *            type: integer
 *          valor:
 *            type: float
 *        example:
 *          codCliente: 1
 *          codAtivo: 1
 *          qtdAtivo: 50
 *          valor: 99.87
 *      ativo:
 *        type: object
 *        required:
 *          - codAtivo
 *          - qtdAtivo
 *          - preco
 *          - nome
 *        properties:
 *          codAtivo:
 *            type: integer
 *          qtdAtivo:
 *            type: integer
 *          preco:
 *            type: float
 *          nome:
 *            type: string
 *        example:
 *          codAtivo: 1
 *          qtdAtivo: 50
 *          preco: 99.87
 *          nome: XPBR31
 *      listaAtivos:
 *        type: object
 *        required:
 *          - codAtivo
 *          - preco
 *          - codBolsa
 *          - qtdInvestida
 *        properties:
 *          codAtivo:
 *            type: integer
 *          preco:
 *            type: float
 *          codBolsa:
 *            type: string
 *          qtdInvestida:
 *            type: integer
 *        example:
 *          codAtivo: 1
 *          preco: 99.87
 *          codBolsa: XPBR31
 *          qtdInvestida: 5000
 */

/**
 * @swagger
 *  /ativos/cliente/{codCliente}:
 *    get:
 *      tags: [Ativos]
 *      description: Endpoint retorna todos os ativos que são de um certo cliente
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
 *                type: array
 *                $ref: '#/components/schemas/ativosCliente'
 */
// todos os endpoints abaixo contem /ativos antes
ativosRoutes.get('/cliente/:codCliente', getByClient);

/**
 * @swagger
 *  /ativos/{codAtivo}:
 *    get:
 *      tags: [Ativos]
 *      description: Endpoint retorna informações de um ativo
 *      parameters:
 *        - in: path
 *          name: codAtivo
 *          type: integer
 *          required: true
 *      responses:
 *        200:
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                $ref: '#/components/schemas/ativo'
 */
ativosRoutes.get('/:codAtivo', getByAssets);

/**
 * @swagger
 *  /ativos:
 *    get:
 *      tags: [Ativos]
 *      description: Endpoint lista todos os ativos com suas quantidades investidas
 *      responses:
 *        200:
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                $ref: '#/components/schemas/listaAtivos'
 */
ativosRoutes.get('/', getAllAssetsAndQuantity);

module.exports = ativosRoutes;
