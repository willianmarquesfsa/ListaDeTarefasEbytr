module.exports = (sequelize, DataTypes) => {
  const Tarefas = sequelize.define('Tarefas', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
    describe: DataTypes.STRING,
    status: DataTypes.STRING,
    dataDaSolicitacao: DataTypes.DATE,
  }, {
    timestamps: false,
    tableName: 'Tarefas',
  });

  return Tarefas;
};
