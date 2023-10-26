const router = require('express').Router();
const {
  getThoughts,
  getThought,
  createThought,
  updateThought,
//   deleteThought,
//   createReaction,
//   deleteReaction,
} = require('../controllers/thought-controller');

//TODO: Delte and Recations

// /api/thoughts
router.route('/')
  .get(getThoughts)
  .post(createThought);

// /api/thoughts/:thoughtId
router.route('/:thoughtId')
  .get(getThought)
  .put(updateThought)
//   .delete(deleteThought);

// /api/thoughts/:thoughtId/reactions
// router.route('/:thoughtId/reactions')
//   .post(createReaction)
//   .delete(deleteReaction);

module.exports = router;
