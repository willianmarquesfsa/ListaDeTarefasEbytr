const { Tarefas } = require('../../models');

module.exports = async (req, res) => {
  const { body } = req;
  const { id } = req.params;
  try {
    const tarefas = await Tarefas.update({ body }, { where: { id } });
    if (!tarefas) throw Error;
    else {
      res.status(201).json({ Mensagem: `Tarefa com o id ${id} foi atualizada` });
    }
  } catch (err) {
    res
      .status(400)
      .json({ message: err });
  }
};
