const Thought = require("../models/thought");

module.exports = {
  async getThoughts(req, res) {
    try {
      const thoughts = await Thought.find();
      res.json(thoughts);
    } catch (error) {}
  },
  async getThought(req, res) {
    try {
      const thought = await Thought.findOne({ _id: req.params.thoughtId }).select("-__v");

      if (!thought) {
        res.status(404).json({
          message: "No Thought ID Found",
        });
      }

      res.json(thought);
    } catch (error) {}
  },
  async createThought(req, res) {
    try {
      const thought = await Thought.create(req.body);
      res.json({
        message: "Thought Created",
        thought: thought,
      });
    } catch (error) {}
  },
  async updateThought(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set: req.body },
        { runValidators: true, new: true }
      );
    } catch (eror) {}
  },
};
