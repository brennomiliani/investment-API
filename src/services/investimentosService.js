const {
  ReasonPhrases,
  StatusCodes,
  getReasonPhrase,
  getStatusCode,
} = require('http-status-codes');
const { Cliente, CustodiaAtivo } = require('../database/models');
const precoMedio = require('../utils/precoMedio');
const { getByAssets, getByClientAndAssets, updateAssets } = require('./ativosService');
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
    // faz o preco médio da carteira
    const newQtd = clientAssets.qtdAtivo + qtdAtivo;
    const montanteEmCarteira = clientAssets.qtdAtivo * clientAssets.valorCompra;
    const valorCompra = stock.preco * qtdAtivo;
    const preco = precoMedio(montanteEmCarteira, valorCompra, newQtd);
    await CustodiaAtivo.update({
      qtdAtivo: newQtd, valorCompra: preco,
    }, { where: { codCliente, codAtivo } });
  }
  if (!clientAssets) {
    await CustodiaAtivo.create({
      codCliente, codAtivo, qtdAtivo, valorCompra: stock.preco,
    });
  }

  // atualiza qtdAtivo na tabela de ativos
  await updateAssets(codAtivo, qtdAtivo, 'compra');

  return { status: StatusCodes.OK, message: 'Compra realizada!' };
};

const vender = async ({ codCliente, codAtivo, qtdAtivo }) => {
  // verifica se a quantidade a ser vendida é maior que a quantidade na carteira
  const clientAssets = await getByClientAndAssets({ codCliente, codAtivo });
  if (!clientAssets) return { status: StatusCodes.BAD_REQUEST, message: 'CodAtivo inválido' };
  if (qtdAtivo > clientAssets.qtdAtivo) return { status: StatusCodes.BAD_REQUEST, message: 'Quantidade indisponível para venda' };

  const [{ saldo }, { preco }] = await Promise.all([
    await getCliente({ codCliente }),
    await getByAssets({ codAtivo }),
  ]);
  const newSaldo = saldo + preco * qtdAtivo;

  // atualiza saldo do cliente
  await Cliente.update({ saldo: newSaldo }, {
    where: {
      codCliente,
    },
  });

  // subtrai da custodia do ativo para o cliente
  const newQtd = clientAssets.qtdAtivo - qtdAtivo;
  await CustodiaAtivo.update({
    qtdAtivo: newQtd,
  }, { where: { codCliente, codAtivo } });

  await updateAssets(codAtivo, qtdAtivo, 'venda');

  return { status: StatusCodes.OK, message: 'Venda realizada!' };
};

module.exports = {
  comprar,
  vender,
};
