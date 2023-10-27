const Thought = require("../models/thought");

module.exports = {
  async getThoughts(req, res) {
    try {
      const thoughts = await Thought.find();
      res.json(thoughts);
    } catch (error) {console.log(err);
      res.status(500).json(err);}
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
    } catch (error) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  async updateThought(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set: req.body },
        { runValidators: true, new: true }
      );
    } catch (error) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // async deleteThought(req, res) {
  //   try {
  //     const thought = await Thought.findOneAndDelete(
  //       { _id: req.params.userId })
        
  //       if (!thought){
  //           res.status(404).json({ message: 'No Thought with that ID' })
  //       }
        
  //       ;
  //   } catch (error) {
  //       console.log(err)
  //   }
  // }
};


//Add Delete