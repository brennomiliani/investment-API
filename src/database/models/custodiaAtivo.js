module.exports = (sequelize, DataTypes) => {
  const CustodiaAtivo = sequelize.define('CustodiaAtivo', {
    codAtivo: { type: DataTypes.INTEGER, primaryKey: true },
    codCliente: { type: DataTypes.INTEGER, primaryKey: true },
    qtdAtivo: DataTypes.INTEGER,
    valor: DataTypes.INTEGER,
  }, {
    timestamps: false,
    modelName: 'CustodiaAtivo',
  });

  CustodiaAtivo.associate = (models) => {
    models.Cliente.belongsToMany(models.Ativo, {
      as: 'ativos',
      through: CustodiaAtivo,
      foreignKey: 'codAtivo',
      otherKey: 'codCliente',
    });
    models.Ativo.belongsToMany(models.Cliente, {
      as: 'clientes',
      through: CustodiaAtivo,
      foreignKey: 'codCliente',
      otherKey: 'codAtivo',
    });
  };

  return CustodiaAtivo;
};
