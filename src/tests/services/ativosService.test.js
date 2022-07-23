/* eslint-disable no-undef */
const sinon = require('sinon');
const { expect } = require('chai');
const { CustodiaAtivo, Ativo } = require('../../database/models');
const ativosService = require('../../services/ativosService');
const {
  ativo, getByClientData, modelClientData, allAtivos,
} = require('../mock/mockAtivos');

describe('testing service layer for ativos', () => {
  describe('finding ativos for a client with an codCliente', () => {
    before(() => {
      sinon.stub(CustodiaAtivo, 'findAll').resolves(modelClientData);
    });

    after(() => {
      CustodiaAtivo.findAll.restore();
    });

    it('expect to return an array of all ativos the client owns', async () => {
      const client = await ativosService.getByClient({ codCliente: 1 });
      expect(client).to.be.an('array');
      expect(client).to.be.deep.equal(getByClientData);
    });
  });
});
