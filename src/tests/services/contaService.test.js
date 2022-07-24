const sinon = require('sinon');
const { expect } = require('chai');
const { Cliente } = require('../../database/models');
const contaService = require('../../services/contaService');
const {
  clientes,
  getClienteData,
} = require('../mock/mockClientes');

describe('testing service layer for conta', () => {
  describe('testing getCliente function', () => {
    before(() => {
      sinon.stub(Cliente, 'findOne').resolves(getClienteData);
    });

    after(() => {
      Cliente.findOne.restore();
    });

    it('expect to return an object of all ativos the client owns', async () => {
      const client = await contaService.getCliente({ codCliente: 1 });
      expect(client).to.be.an('object');
      expect(client).to.be.deep.equal(getClienteData);
    });
  });

  describe('testing saqueOuDeposito function', () => {
    before(() => {
      sinon.stub(Cliente, 'findOne').resolves(getClienteData);
      sinon.stub(Cliente, 'update').resolves();
    });

    after(() => {
      Cliente.findOne.restore();
      Cliente.update.restore();
    });

    it('testing when it receive "saque" as type', async () => {
      const saldo = await contaService.saqueOuDeposito({ codCliente: 1, valor: 1000 }, 'saque');
      expect(saldo).to.be.an('number');
      expect(saldo).to.be.deep.equal(4000);
    });
    it('testing when it receive "deposito" as type', async () => {
      const saldo = await contaService.saqueOuDeposito({ codCliente: 1, valor: 1000 }, 'deposito');
      expect(saldo).to.be.an('number');
      expect(saldo).to.be.deep.equal(6000);
    });
  });
});
