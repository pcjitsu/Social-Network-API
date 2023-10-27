const router = require('express').Router();
const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require('../../controllers/userController');

//TODO::Friends and Delete

// /api/users
router.route('/')
  .get(getUsers)
  .post(createUser);

// /api/users/:userId
router.route('/:userId')
  .get(getUser)
  .put(updateUser)
  .delete(deleteUser);


  //TODO: Finish this in Controller
// /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId')
  .post(addFriend)
  .delete(deleteFriend);

module.exports = router;