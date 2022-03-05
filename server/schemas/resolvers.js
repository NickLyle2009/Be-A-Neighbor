const { AuthenticationError } = require('apollo-server-express');
const { User, Post, UserStory } = require('../models');
const { signToken } = require('../utils/auth');


const resolvers = {
    Query: {
        users: async () => {
        return await User.find({})
      },
      posts: async () => {
        return await Post.find({});
      },
      userstories: async () => {
        return await UserStory.find({});
      }
    }
  };
  
  module.exports = resolvers;