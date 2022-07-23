/* eslint-disable no-undef */
const sinon = require('sinon');
const { expect } = require('chai');
const ativosService = require('../../services/ativosService');
const ativosController = require('../../controllers/ativosController');
const { ativo, getByClientData, allAtivos } = require('../mock/models/mockAtivos');

describe('testing controller layer for ativos', () => {
  describe('testing GET /ativos/cliente/:codCliente', () => {
    const response = {};
    const request = {};

    before(() => {
      request.body = {};
      request.params = {
        codCliente: 1,
      };

      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();

      sinon.stub(ativosService, 'getByClient').resolves(getByClientData);
    });

    after(() => {
      ativosService.getByClient.restore();
    });

    it('expect to return status 200 and the data for the codCliente', async () => {
      await ativosController.getByClient(request, response);
      expect(response.status.calledWith(200)).to.be.equal(true);
      expect(response.json.calledWith(getByClientData)).to.be.equal(true);
    });
  });

  describe('testing GET /ativos/:codAtivo', () => {
    const response = {};
    const request = {};

    before(() => {
      request.body = {};
      request.params = {
        codAtivo: 1,
      };

      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();

      sinon.stub(ativosService, 'getByAssets').resolves(ativo);
    });

    after(() => {
      ativosService.getByAssets.restore();
    });

    it('expect to return status 200 and the data for the codAtivo', async () => {
      await ativosController.getByAssets(request, response);
      expect(response.status.calledWith(200)).to.be.equal(true);
      expect(response.json.calledWith(ativo)).to.be.equal(true);
    });
  });

  describe('testing GET /ativos', () => {
    const response = {};
    const request = {};

    before(() => {
      request.body = {};
      request.params = {};

      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();

      sinon.stub(ativosService, 'getAllAssetsAndQuantity').resolves(allAtivos);
    });

    after(() => {
      ativosService.getAllAssetsAndQuantity.restore();
    });

    it('expect to return status 200 and the data for the codAtivo', async () => {
      await ativosController.getAllAssetsAndQuantity(request, response);
      expect(response.status.calledWith(200)).to.be.equal(true);
      expect(response.json.calledWith(allAtivos)).to.be.equal(true);
    });
  });
});
