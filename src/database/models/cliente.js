module.exports = (sequelize, DataTypes) => {
  const Cliente = sequelize.define('Cliente', {
    codCliente: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: DataTypes.STRING,
    cpf: DataTypes.STRING,
    saldo: DataTypes.FLOAT,
    contaSaque: DataTypes.STRING,
    bancoSaque: DataTypes.STRING,
  }, {
    timestamps: false,
    modelName: 'Cliente',
  });

  return Cliente;
};
