const router = require('express').Router();
const {
  getPosts,
  getSinglePost,
  createPost,
  deletePost,
  addReply,
  removeReply,
} = require('../../controllers/post-controller');

const { authMiddleware } = require('../../utils/auth');

router.route('/').get(getPosts).post(createPost);

router.route('/:postId').get(getSinglePost).delete(deletePost);

router.route('/:postId/replies').post(addReply);

router.route('/:postId/replies/:replyId').delete(authMiddleware, removeReply);

module.exports = router;
