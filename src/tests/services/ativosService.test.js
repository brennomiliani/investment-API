/* eslint-disable no-undef */
const sinon = require('sinon');
const { expect } = require('chai');
const { CustodiaAtivo, Ativo } = require('../../database/models');
const ativosService = require('../../services/ativosService');
const {
  ativo,
  getByClientData,
  modelClientData,
  modelAtivos,
  modelCustodiaAtivos,
  getAllAssetsAndQuantityData,
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

  describe('finding ativo with a certain codAtivo', () => {
    before(() => {
      sinon.stub(Ativo, 'findOne').resolves(ativo);
    });

    after(() => {
      Ativo.findOne.restore();
    });

    it('expect to return an object of the ativo', async () => {
      const stock = await ativosService.getByAssets({ codAtivo: 1 });
      expect(stock).to.be.an('object');
      expect(stock).to.be.equal(stock);
    });
  });

  describe('finding all ativos and its quantities', () => {
    before(() => {
      sinon.stub(Ativo, 'findAll').resolves(modelAtivos);
      sinon.stub(CustodiaAtivo, 'findAll').resolves(modelCustodiaAtivos);
    });

    after(() => {
      Ativo.findAll.restore();
      CustodiaAtivo.findAll.restore();
    });

    it('expect to return an array of all ativos its quantities', async () => {
      const ativos = await ativosService.getAllAssetsAndQuantity();
      expect(ativos).to.be.an('array');
      expect(ativos).to.be.deep.equal(getAllAssetsAndQuantityData);
    });
  });
});
