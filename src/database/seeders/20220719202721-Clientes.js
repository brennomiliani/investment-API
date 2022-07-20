module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Clientes',
      [{
        codCliente: 1,
        nome: 'José',
        cpf: '77075104020',
        saldo: 2000,
        contaSaque: '123456-7',
        bancoSaque: 'itau',
      },
      {
        codCliente: 2,
        nome: 'Paulo',
        cpf: '32264335041',
        saldo: 1500,
        contaSaque: '765432-1',
        bancoSaque: 'banco do brasil',
      },
      {
        codCliente: 3,
        nome: 'Maria',
        cpf: '35665704008',
        saldo: 3000,
        contaSaque: '526378-0',
        bancoSaque: 'santander',
      },
      ],
      { timestamps: false },
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Clientes', null, {});
  },
};
