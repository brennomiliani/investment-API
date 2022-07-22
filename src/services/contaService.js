const { Cliente } = require('../database/models');
const HttpException = require('../shared/httpExeption');

const getCliente = async ({ codCliente }) => {
  const cliente = await Cliente.findOne({ where: { codCliente } });
  return cliente;
};

const saqueOuDeposito = async ({ codCliente, valor }, type) => {
  const cliente = await getCliente({ codCliente });
  if (!cliente) throw new HttpException(400, 'Usuário não existe');
  const { saldo } = cliente;
  let newSaldo = 0;

  if (type === 'deposito') newSaldo = saldo + valor;
  if (type === 'saque') {
    if (saldo < valor) throw new HttpException(400, 'saldo insuficiente');
    newSaldo = saldo - valor;
  }
  await Cliente.update({ saldo: newSaldo }, {
    where: {
      codCliente,
    },
  });
  return newSaldo;
};

module.exports = {
  saqueOuDeposito,
  getCliente,
};
