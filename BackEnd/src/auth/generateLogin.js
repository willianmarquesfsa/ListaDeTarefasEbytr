const jwt = require('jsonwebtoken');

const secret = 'colocarenv';
const JwtConfig = { expiresIn: '7d', algorithm: 'HS256' };

module.exports = async (req, res) => {
  const { body: { password, email }, passwordDB: { dataValues: name } } = req;
  const token = jwt.sign({ data: { email, password } }, secret, JwtConfig);
  res.status(200).json({ name: name.name, token });
};
