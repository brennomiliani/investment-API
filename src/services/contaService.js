const { Cliente } = require('../database/models');

const getCliente = async ({ codCliente }) => {
  const cliente = await Cliente.findOne({ where: { codCliente } });
  return cliente;
};

const saqueOuDeposito = async ({ codCliente, valor }, type) => {
  const { saldo } = await getCliente({ codCliente });
  let newSaldo = 0;

  if (type === 'deposito') newSaldo = saldo + valor;
  if (type === 'saque') newSaldo = saldo - valor;

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
