const { verify } = require('jsonwebtoken');
const { Users } = require('../models');

const secret = 'colocarenv';
const loginValidate = async (req, res, next) => {
  const token = req.headers.authorization;
  try {
    if (!token) throw new Error();
    const { data: { email } } = verify(token, secret);
    const user = await Users.findOne({ where: { email } });
    if (!user) throw new Error();
    next();
  } catch (err) {
    res.status(402).json({ message: 'Token not found' });
  }
};

module.exports = loginValidate;
