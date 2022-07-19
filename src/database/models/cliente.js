module.exports = (sequelize, DataTypes) => {
  const Cliente = sequelize.define('Cliente', {
    codCliente: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: DataTypes.STRING,
    cpf: DataTypes.INTEGER,
    saldo: DataTypes.INTEGER,
    contaSaque: DataTypes.INTEGER,
    bancoSaque: DataTypes.STRING,
  }, {
    timestamps: false,
    modelName: 'Cliente',
  });

  return Cliente;
};
