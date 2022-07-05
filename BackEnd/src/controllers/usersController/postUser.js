const { hash } = require('bcryptjs');
const { Users } = require('../../models');

const postUser = async (req, res, next) => {
  const { body: { name, email, password } } = req;
  try {
    const passwordHash = await hash(password, 1);
    const user = await Users.upsert({ name, email, password: passwordHash });
    if (!user) throw Error;
    else {
      next();
    }
  } catch (err) {
    res
      .status(400)
      .json({ message: err });
  }
};

module.exports = postUser;
