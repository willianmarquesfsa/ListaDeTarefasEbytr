const { Tarefas } = require('../models');

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const tarefas = await Tarefas.destroy({ where: { id } });
    if (!tarefas) throw Error;
    else {
      res.status(201).json({ Mensagem: `Tarefa com o id ${id} foi excluida` });
    }
  } catch (err) {
    res
      .status(400)
      .json({ message: err });
  }
};
