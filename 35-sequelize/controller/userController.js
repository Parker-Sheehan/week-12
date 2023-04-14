const { User } = require("../util/models");

module.exports = {
  register: async (req, res) => {
    try {
      await User.create(req.body);
      res.status(200).send("Created! :)");
    } catch (err) {
      res.status(400).send("OOPSIE-DAISIE");
    }
  },
};
