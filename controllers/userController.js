const User = require("../models/user");

module.exports = {
  async getUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {}
  },
  async getUser(req, res) {
    console.log("GET USER!", req.params.userId)
    try {
      const user = await User.findOne({ _id: req.params.userId }).select("-__v");

      if (!user) {
        res.status(404).json({
          message: "No User ID Found",
        });
      }

      res.json(user);
    } catch (error) {
        res.json({ error: error.message });
    }
  },
  async createUser(req, res) {
    console.log(req.body)
    // try {
      const user = await User.create(req.body);
      res.json({
        message: "User Created",
        thought: user,
      });
    // } catch (error) {}
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
  async deleteUser(req, res) {
    try {
      const user = await User.findOneAndDelete(
        { _id: req.params.userId })
        
        if (!user){
            res.status(404).json({ message: 'No user with that ID' })
        }
        
        ;
    } catch (error) {
        console.log(err)
    }
  },
};






// /api/users/:userId/friends/:friendId

// POST to add a new friend to a user's friend list

// DELETE to remove a friend from a user's friend list