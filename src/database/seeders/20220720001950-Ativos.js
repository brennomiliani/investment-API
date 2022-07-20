module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Ativos',
      [{
        codAtivo: 1,
        qtdAtivo: 10000,
        nome: 'XPBR31',
        preco: 98.87,
      },
      {
        codAtivo: 2,
        qtdAtivo: 10000,
        nome: 'BBAS3',
        preco: 34.66,
      },
      {
        codAtivo: 3,
        qtdAtivo: 10000,
        nome: 'PETR4',
        preco: 31.67,
      },
      ],
      { timestamps: false },
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Ativos', null, {});
  },
};
