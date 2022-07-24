module.exports = (sequelize, DataTypes) => {
  const Ativo = sequelize.define('Ativo', {
    codAtivo: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    qtdAtivo: DataTypes.INTEGER,
    preco: DataTypes.DECIMAL,
    nome: DataTypes.STRING,
  }, {
    timestamps: false,
    modelName: 'Ativo',
  });
  return Ativo;
};
