const { Tarefas } = require('../../models');

module.exports = async (req, res) => {
  const { body } = req;
  try {
    const tarefas = await Tarefas.upsert(body);
    if (!tarefas) throw Error;
    else {
      res.status(201).json({ tarefaAdicionada: tarefas[0].dataValues });
    }
  } catch (err) {
    res
      .status(400)
      .json({ message: err });
  }
};
