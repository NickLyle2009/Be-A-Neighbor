const { AuthenticationError } = require('apollo-server-express');
const { User, Post } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('posts').populate({
        path: 'posts',
        populate: 'comments'
      }).populate()
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('posts');
    },
    userStories: async(parent, {}) => {
      const params = username ? { username } : {};
      return UserStory.find().populate('users')

    },
    userStory: async (parent, { userStoryId }) => {
      return UserStory.findOne({ _id: userStoryId}).populate('posts');
    },
    posts: async (parent, {}) => {
      const params = username ? { username } : {};
      return Post.find(params).sort({ createdAt: -1 });
    },
    post: async (parent, { postId }) => {
      return Post.findOne({ _id: postId });
    },

    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('posts');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);
      console.log("in resolvers.js", user)
      return { token, user };
    },
<<<<<<< HEAD
    addPost: async (parent, { postText }, context) => {
      if (context.user) {
=======
    addPost: async (parent, { postDescription, postType, }, context) => {
      console.log(context)
      // if (context.user) {
>>>>>>> 9aa2c8d70327b51e24f3f40a42cd56d8290293b6
        const post = await Post.create({
          postDescription,
          postType,
          postAuthor: context.user.username,
        });

        await User.findOneAndUpdate(
<<<<<<< HEAD
          { _id: context.user._id },
          { $addToSet: { posts: post._id } }
=======
        { _id: context.user._id },
          { $addToSet: { posts: post._id }
         },
>>>>>>> 9aa2c8d70327b51e24f3f40a42cd56d8290293b6
        );

        return post;
      // }
      // throw new AuthenticationError('You need to be logged in!');
    },
    addComment: async (parent, { postId, commentText }, context) => {
<<<<<<< HEAD
      if (context.user) {
        return post.findOneAndUpdate(
=======
      if (context.user.username) {
        return Post.findOneAndUpdate(
>>>>>>> 9aa2c8d70327b51e24f3f40a42cd56d8290293b6
          { _id: postId },
          {
            $addToSet: {
              comments: { commentText, commentAuthor: context.user.username },
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    removePost: async (parent, { PostId }, context) => {
      if (context.user) {
        const Post = await Post.findOneAndDelete({
          _id: postId,
          postAuthor: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { posts: Post._id } }
        );

        return Post;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    removeComment: async (parent, { postId, commentId }, context) => {
      if (context.user) {
        return Post.findOneAndUpdate(
          { _id: postId },
          {
            $pull: {
              comments: {
                _id: commentId,
                commentAuthor: context.user.username,
              },
            },
          },
          { new: true }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
};

module.exports = resolvers;
