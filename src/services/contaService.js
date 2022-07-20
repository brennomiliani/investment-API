const { Cliente } = require('../database/models');

const saque = async ({ codCliente, valor }) => {
  const cliente = await Cliente.findOne({ where: { codCliente } });
  console.log(cliente);

  const newValor = 50;

  await Cliente.update({ saldo: newValor }, {
    where: {
      codCliente,
    },
  });

  return newValor;
};

module.exports = {
  saque,
};
