const User = require("../models/user");

module.exports = {
  async getUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {}
  },
  async getUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.thoughtId }).select("-__v");

      if (!user) {
        res.status(404).json({
          message: "No Thought ID Found",
        });
      }

      res.json(user);
    } catch (error) {}
  },
  async createUser(req, res) {
    try {
      const user = await User.create(req.body);
      res.json({
        message: "User Created",
        thought: user,
      });
    } catch (error) {}
  },
  async updateUser(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body },
        { runValidators: true, new: true }
      );
    } catch (eror) {}
  },
};


//Add Delete



// /api/users/:userId/friends/:friendId

// POST to add a new friend to a user's friend list

// DELETE to remove a friend from a user's friend list