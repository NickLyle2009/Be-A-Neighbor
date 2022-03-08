const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  getMe,
  createUser,
  deletePost,
  login,
} = require('../../controllers/user-controller');

const { authMiddleware } = require('../../utils/auth');

router.route('/').post(createUser).put(authMiddleware);

router.route('/').get(getUsers);

router.route('/user/:userId').get(getSingleUser);

router.route('/login').post(login);

router.route('/me').get(authMiddleware, getMe);

router.route('/posts').delete(authMiddleware, deletePost);


module.exports = router;
