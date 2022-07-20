module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('CustodiaAtivos', {
      codAtivo: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Ativos',
          key: 'codAtivo',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true,
      },
      codCliente: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Clientes',
          key: 'codCliente',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true,
      },
      qtdAtivo: {
        type: Sequelize.INTEGER,
      },
      valorCompra: {
        type: Sequelize.INTEGER,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('CustodiaAtivos');
  },
};
