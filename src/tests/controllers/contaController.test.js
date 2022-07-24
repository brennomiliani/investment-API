const sinon = require('sinon');
const { expect } = require('chai');
const contaService = require('../../services/contaService');
const contaController = require('../../controllers/contaController');
const { getClienteData, getClienteControllerData } = require('../mock/mockClientes');

describe('testing controller layer for conta', () => {
  describe('testing GET /conta/:codCliente', () => {
    const response = {};
    const request = {};

    before(() => {
      request.body = {};
      request.params = {
        codCliente: 1,
      };

      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();

      sinon.stub(contaService, 'getCliente').resolves(getClienteData);
    });

    after(() => {
      contaService.getCliente.restore();
    });

    it('expect to return status 200 and the data for the codCliente', async () => {
      await contaController.getCliente(request, response);
      expect(response.status.calledWith(200)).to.be.equal(true);
      expect(response.json.calledWith(getClienteControllerData)).to.be.equal(true);
    });
  });

  describe('testing POST /conta/saque', () => {
    const response = {};
    const request = {};

    before(() => {
      request.body = {
        codCliente: 1,
        valor: 1000,
      };
      request.params = {};

      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();

      sinon.stub(contaService, 'saqueOuDeposito').resolves(4000);
    });

    after(() => {
      contaService.saqueOuDeposito.restore();
    });

    it('expect to return status 200 and the new saldo for the client', async () => {
      await contaController.saque(request, response);
      expect(response.status.calledWith(200)).to.be.equal(true);
      expect(response.json.calledWith({ novoSaldo: 4000 })).to.be.equal(true);
    });
  });

  describe('testing POST /conta/deposito', () => {
    const response = {};
    const request = {};

    before(() => {
      request.body = {
        codCliente: 1,
        valor: 1000,
      };
      request.params = {};

      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();

      sinon.stub(contaService, 'saqueOuDeposito').resolves(4000);
    });

    after(() => {
      contaService.saqueOuDeposito.restore();
    });

    it('expect to return status 200 and the new saldo for the client', async () => {
      await contaController.saque(request, response);
      expect(response.status.calledWith(200)).to.be.equal(true);
      expect(response.json.calledWith({ novoSaldo: 4000 })).to.be.equal(true);
    });
  });
});
