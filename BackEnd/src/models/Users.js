module.exports = (sequelize, DataTypes) => {
  const Tarefas = sequelize.define('Users', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {
    timestamps: false,
    tableName: 'Users',
  });

  return Tarefas;
};
