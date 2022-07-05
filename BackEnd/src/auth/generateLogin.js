const jwt = require('jsonwebtoken');
require('dotenv').config();

const secret = process.env.SECRETE;
const JwtConfig = { expiresIn: '7d', algorithm: 'HS256' };

module.exports = async (req, res) => {
  const { body: { password, email } } = req;
  const token = jwt.sign({ data: { email, password } }, secret, JwtConfig);
  res.status(200).json({ token });
};
