const { AuthenticationError } = require('apollo-server-express');
const { User, Post } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
        Query: {
          users: async () => {
            return User.find().populate('posts');
          },
          user: async (parent, { username }) => {
            return User.findOne({ username }).populate('posts');
          },
          posts: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Post.find(params).sort({ createdAt: -1 });
          },
          posts: async (parent, { postId }) => {
            return Post.findOne({ _id: postId });
          },
          me: async (parent, args, context) => {
            if (context.user) {
              return User.findOne({ _id: context.user._id }).populate('posts');
            }
            throw new AuthenticationError('You need to be logged in!');
          },
        },
    }
  module.exports = resolvers;
