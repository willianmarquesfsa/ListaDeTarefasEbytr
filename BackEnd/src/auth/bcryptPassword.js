const { compareSync } = require('bcryptjs');
const { Users } = require('../models');

const bcryptPassword = async (req, res, next) => {
  const { body: { password, email } } = req;
  try {
    if (password === undefined) {
      res.status(400).json({ message: '"password" is required' });
    } else {
      const passwordDB = await Users.findOne({ where: { email } });
      req.passwordDB = passwordDB;
      const compaPosEncrip = compareSync(password, passwordDB.dataValues.password);
      if (!compaPosEncrip) throw new Error();
      next();
    }
  } catch (err) {
    res.status(401).json({ message: 'Incorrect email or password' });
  }
};

module.exports = bcryptPassword;
