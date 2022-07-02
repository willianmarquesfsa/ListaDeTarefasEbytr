const tarefaIdRequire = (req, res, next) => {
  const { id } = req.params;
  if (id === undefined) {
    res.status(400).json({ message: '"id" is required' });
  } else { next(); }
};

module.exports = tarefaIdRequire;
