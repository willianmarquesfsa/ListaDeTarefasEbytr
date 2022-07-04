const { Users } = require('../../models');

module.exports = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await Users.findOne({ where: { id } });

    if (!user) throw Error;
    else {
      res.status(201).json({ user });
    }
  } catch (err) {
    res
      .status(400)
      .json({ message: err });
  }
};
