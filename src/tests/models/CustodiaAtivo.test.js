const {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists,
} = require('sequelize-test-helpers');
const CustodiaAtivo = require('../../database/models/custodiaAtivo');

describe('test model CustodiaAtivo', () => {
  describe('CustodiaAtivo model name and properties', () => {
    const Model = CustodiaAtivo(sequelize, dataTypes);
    const instance = new Model();
    checkModelName(Model)('CustodiaAtivo');
    const properties = ['codAtivo', 'codCliente', 'qtdAtivo', 'valorCompra'];
    context('properties', () => {
      properties.forEach(checkPropertyExists(instance));
    });
  });
});
