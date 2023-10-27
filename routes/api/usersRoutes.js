const router = require('express').Router();
const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  DeleteUser,
  // addFriend,
  // removeFriend,
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
  .delete(DeleteUser);


  //TODO: Finish this in Controller
// /api/users/:userId/friends/:friendId
// router.route('/:userId/friends/:friendId')
//   .post(addFriend)
//   .delete(removeFriend);

module.exports = router;