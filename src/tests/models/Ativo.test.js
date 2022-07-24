const {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists,
} = require('sequelize-test-helpers');
const Ativo = require('../../database/models/ativo');

describe('test model Ativo', () => {
  describe('Ativo model name and properties', () => {
    const Model = Ativo(sequelize, dataTypes);
    const instance = new Model();
    checkModelName(Model)('Ativo');
    context('properties', () => {
      ['codAtivo', 'qtdAtivo', 'preco', 'nome'].forEach(checkPropertyExists(instance));
    });
  });
});
