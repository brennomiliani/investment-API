module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert(
      'CustodiaAtivos',
      [
        {
          codCliente: 1,
          codAtivo: 1,
          qtdAtivo: 100,
          valorCompra: 98.87,
        },
        {
          codCliente: 1,
          codAtivo: 2,
          qtdAtivo: 100,
          valorCompra: 34.66,
        },
        {
          codCliente: 2,
          codAtivo: 1,
          qtdAtivo: 500,
          valorCompra: 94.86,
        },
        {
          codCliente: 3,
          codAtivo: 3,
          qtdAtivo: 1000,
          valorCompra: 31.55,
        },
      ],
      { timestamps: false },
    );
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('CustodiaAtivos', null, {});
  },
};
