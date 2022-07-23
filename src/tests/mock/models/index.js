const Ativos = require('./Ativos.json');

const mockCreate = (Instance, data) => {
  if (!data) {
    return;
  }

  const newData = data;
  if (Instance[0].codAtivo) {
    newData.codAtivo = Date.now();
  }
  Instance.push(newData);
  return newData;
};

const Ativo = {
  create: async (data) => mockCreate(Ativos, data),
  findAll: async () => Ativos,
};

module.exports = {
  Ativo,
};
