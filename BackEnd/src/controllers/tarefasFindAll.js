const { Tarefas } = require('../models');

module.exports = async (req, res) => {
  try {
    const tarefas = await Tarefas.findAll();

    if (!tarefas) throw Error;
    else {
      res.status(201).json({ Lista: tarefas });
    }
  } catch (err) {
    res
      .status(400)
      .json({ message: err });
  }
};
