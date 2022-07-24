const sinon = require('sinon');
const { expect } = require('chai');
const { CustodiaAtivo, Cliente, Ativo } = require('../../database/models');
const investimentosService = require('../../services/investimentosService');
const { getByAssetsData, getClienteData, getByClientAndAssetsData } = require('../mock/mockInvestimentos');

describe.only('testing service layer for investimentos', () => {
  describe('testing function comprar', () => {
    before(() => {
      sinon.stub(Ativo, 'findOne').resolves(getByAssetsData);
      sinon.stub(Ativo, 'update').resolves();
      sinon.stub(Cliente, 'findOne').resolves(getClienteData);
      sinon.stub(Cliente, 'update').resolves();
      sinon.stub(CustodiaAtivo, 'findOne').resolves(null);
      sinon.stub(CustodiaAtivo, 'create').resolves();
    });

    after(() => {
      Ativo.findOne.restore();
      Ativo.update.restore();
      Cliente.findOne.restore();
      Cliente.update.restore();
      CustodiaAtivo.findOne.restore();
      CustodiaAtivo.create.restore();
    });

    it('test when everything goes ok', async () => {
      const body = { codCliente: 1, codAtivo: 1, qtdAtivo: 50 };
      const client = await investimentosService.comprar(body);
      expect(client).to.be.an('object');
      expect(client).to.be.deep.equal({ status: 200, message: 'Compra realizada!' });
    });
    it('test when the broker does not have enough stocks', async () => {
      const body = { codCliente: 1, codAtivo: 1, qtdAtivo: 15000 };
      const client = await investimentosService.comprar(body);
      expect(client).to.be.an('object');
      expect(client).to.be.deep.equal({ status: 400, message: 'Quantidade indisponível para compra' });
    });
  });

  describe.only('testing function vender', () => {
    before(() => {
      sinon.stub(Ativo, 'findOne').resolves(getByAssetsData);
      sinon.stub(Ativo, 'update').resolves();
      sinon.stub(Cliente, 'findOne').resolves(getClienteData);
      sinon.stub(Cliente, 'update').resolves();
      sinon.stub(CustodiaAtivo, 'findOne').resolves(getByClientAndAssetsData);
      sinon.stub(CustodiaAtivo, 'create').resolves();
    });

    after(() => {
      Ativo.findOne.restore();
      Ativo.update.restore();
      Cliente.findOne.restore();
      Cliente.update.restore();
      CustodiaAtivo.findOne.restore();
      CustodiaAtivo.create.restore();
    });

    it('test when everything goes ok', async () => {
      const body = { codCliente: 1, codAtivo: 1, qtdAtivo: 50 };
      const client = await investimentosService.vender(body);
      expect(client).to.be.an('object');
      expect(client).to.be.deep.equal({ status: 200, message: 'Venda realizada!' });
    });
    it('test when the cliente does not have enough stocks to sell', async () => {
      const body = { codCliente: 1, codAtivo: 1, qtdAtivo: 15000 };
      const client = await investimentosService.vender(body);
      expect(client).to.be.an('object');
      expect(client).to.be.deep.equal({ status: 400, message: 'Quantidade indisponível para venda' });
    });
  });
});
