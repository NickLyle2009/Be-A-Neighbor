const { Post, User } = require('../models');

const postController = {
  getPosts(req, res) {
    Post.find()
      .sort({ createdAt: -1 })
      .then((dbPostData) => {
        res.json(dbPostData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  getSinglePost(req, res) {
    Post.findOne({ _id: req.params.postId })
      .then((dbPostData) => {
        if (!dbPostData) {
          return res.status(404).json({ message: 'No post with this id!' });
        }
        res.json(dbPostData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  createPost(req, res) {
    Post.create(req.body)
      .then((dbPostData) => {
        return User.findOneAndUpdate(
          { _id: req.body.userId },
          { $push: { posts: dbPostData._id } },
          { new: true }
        );
      })
      .then((dbUserData) => {
        if (!dbUserData) {
          return res.status(404).json({ message: 'Post created but no user with this id!' });
        }

        res.json({ message: 'Post successfully created!' });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  updatePost(req, res) {
    Post.findOneAndUpdate({ _id: req.params.postId }, { $set: req.body }, { runValidators: true, new: true })
      .then((dbPostData) => {
        if (!dbPostData) {
          return res.status(404).json({ message: 'No post with this id!' });
        }
        res.json(dbPostData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  deletePost(req, res) {
    Post.findOneAndRemove({ _id: req.params.postId })
      .then((dbPostData) => {
        if (!dbPostData) {
          return res.status(404).json({ message: 'No post with this id!' });
        }

        return User.findOneAndUpdate(
          { posts: req.params.postId },
          { $pull: { posts: req.params.postId } },
          { new: true }
        );
      })
      .then((dbUserData) => {
        if (!dbUserData) {
          return res.status(404).json({ message: 'Post created but no user with this id!' });
        }
        res.json({ message: 'Post successfully deleted!' });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  addReply(req, res) {
    Post.findOneAndUpdate(
      { _id: req.params.postId },
      { $addToSet: { reply: req.body } },
      { runValidators: true, new: true }
    )
      .then((dbPostData) => {
        if (!dbPostData) {
          return res.status(404).json({ message: 'No post with this id!' });
        }
        res.json(dbPostData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  removeReply(req, res) {
    Post.findOneAndUpdate(
      { _id: req.params.postId },
      { $pull: { reply: { replyId: req.params.replyId } } },
      { runValidators: true, new: true }
    )
      .then((dbPostData) => {
        if (!dbPostData) {
          return res.status(404).json({ message: 'No post with this id!' });
        }
        res.json(dbPostData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
};

module.exports = postController;
