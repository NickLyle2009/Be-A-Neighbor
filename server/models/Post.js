const mongoose = require("mongoose");
const User = require("./User");
const { Schema, model } = mongoose;

const postSchema = new Schema({
  postAuthor: {
    type: String,
  },
  requestType: {
    type: Boolean,
    required: false,
  },
  postDescription: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  comments: [
    {
      commentText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
      },
      commentAuthor: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});

const Post = model('Post', postSchema);

module.exports = Post;