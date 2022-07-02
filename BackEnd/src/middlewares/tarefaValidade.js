const tarefaPostValidade = (req, res, next) => {
  const { body: { name, status, dataDaSolicitacao } } = req;
  if (name === undefined) {
    res.status(400).json({ message: '"name" is required' });
  } else if (status === undefined) {
    res.status(400).json({ message: '"status" is required' });
  } else if (dataDaSolicitacao === undefined) {
    res.status(400).json({ message: '"dataDaSolicitacao" is required' });
  } else { next(); }
};

module.exports = tarefaPostValidade;
