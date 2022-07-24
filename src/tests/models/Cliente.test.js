const {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists,
} = require('sequelize-test-helpers');
const Cliente = require('../../database/models/cliente');

describe('test model Cliente', () => {
  describe('Cliente model name and properties', () => {
    const Model = Cliente(sequelize, dataTypes);
    const instance = new Model();
    checkModelName(Model)('Cliente');
    const properties = ['codCliente', 'nome', 'cpf', 'saldo', 'contaSaque', 'bancoSaque'];
    context('properties', () => {
      properties.forEach(checkPropertyExists(instance));
    });
  });
});
