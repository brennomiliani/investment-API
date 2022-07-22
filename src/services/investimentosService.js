const {
  ReasonPhrases,
  StatusCodes,
  getReasonPhrase,
  getStatusCode,
} = require('http-status-codes');
const { Cliente, Ativo, CustodiaAtivo } = require('../database/models');
const { getByAssets, getByClientAndAssets } = require('./ativosService');
const { getCliente } = require('./contaService');

const comprar = async ({ codCliente, codAtivo, qtdAtivo }) => {
  // verifica se o ativo existe e se a corretora tem a quantidade disponível
  const stock = await getByAssets({ codAtivo });
  if (!stock) return { status: StatusCodes.BAD_REQUEST, message: 'CodAtivo inválido' };
  if (qtdAtivo > stock.qtdAtivo) return { status: StatusCodes.BAD_REQUEST, message: 'Quantidade indisponível para compra' };

  // verifica se cliente tem saldo suficiente para a compra
  const { saldo } = await getCliente({ codCliente });
  const newSaldo = saldo - stock.preco * qtdAtivo;
  if (newSaldo < 0) return { status: StatusCodes.BAD_REQUEST, message: 'Saldo insuficiente para compra' };

  // atualiza saldo do cliente
  await Cliente.update({ saldo: newSaldo }, {
    where: {
      codCliente,
    },
  });

  // cria ou adiciona a custodia do ativo para o cliente
  const clientAssets = await getByClientAndAssets({ codCliente, codAtivo });
  if (clientAssets) {
    const newQtd = clientAssets.qtdAtivo + qtdAtivo;
    await CustodiaAtivo.update({
      codCliente, codAtivo, qtdAtivo: newQtd, valorCompra: stock.preco,
    }, { where: { codCliente, codAtivo } });
  }
  if (!clientAssets) {
    await CustodiaAtivo.create({
      codCliente, codAtivo, qtdAtivo, valorCompra: stock.preco,
    });
  }

  return { status: StatusCodes.OK, message: 'Compra realizada!' };
};

const vender = async ({ codCliente }) => {
  const cliente = await Cliente.findOne({ where: { codCliente } });
  return cliente;
};

module.exports = {
  comprar,
  vender,
};
