const User = require('../models/user');

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
    try {
     const dbUserData = await User.create(req.body);
     res.json(dbUserData);
    } catch (err) {
     console.log(err);
     res.status(500).json(err);
    }
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
  async addFriend(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $addToSet: { friends: req.params.friendId } },
        { runValidators: true, new: true }
      );

      if (!user) {
        return res
          .status(404)
          .json({ message: "No user found with that ID :(" });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async deleteFriend(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $pull: { friends: req.params.friendId } },
        { runValidators: true, new: true }
      );

      if (!user) {
        return res
          .status(404)
          .json({ message: "No user found with that ID :(" });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};


