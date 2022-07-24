const sinon = require('sinon');
const { expect } = require('chai');
const investimentosService = require('../../services/investimentosService');
const investimentosController = require('../../controllers/investimentosController');
const { comprarServiceResp } = require('../mock/mockInvestimentos');

describe('testing controller layer for investimentos', () => {
  describe('testing POST /investimentos/comprar', () => {
    const response = {};
    const request = {};

    before(() => {
      request.body = {};
      request.params = {
        codCliente: 1,
        codAtivo: 1,
        qtdAtivo: 100,
      };

      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();

      sinon.stub(investimentosService, 'comprar').resolves(comprarServiceResp);
    });

    after(() => {
      investimentosService.comprar.restore();
    });

    it('expect to return status 200 and a message if it was bought', async () => {
      await investimentosController.comprar(request, response);
      expect(response.status.calledWith(200)).to.be.equal(true);
      expect(response.json.calledWith({ message: comprarServiceResp.message })).to.be.equal(true);
    });
  });

  describe('testing POST /investimentos/vender', () => {
    const response = {};
    const request = {};

    before(() => {
      request.body = {};
      request.params = {
        codCliente: 1,
        codAtivo: 1,
        qtdAtivo: 100,
      };

      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();

      sinon.stub(investimentosService, 'vender').resolves(comprarServiceResp);
    });

    after(() => {
      investimentosService.vender.restore();
    });

    it('expect to return status 200 and a message if it was sold', async () => {
      await investimentosController.vender(request, response);
      expect(response.status.calledWith(200)).to.be.equal(true);
      expect(response.json.calledWith({ message: comprarServiceResp.message })).to.be.equal(true);
    });
  });
});
