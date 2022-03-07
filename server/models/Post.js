const mongoose = require("mongoose");
const User = require("./User");
const { Schema, model } = mongoose;

const postSchema = new Schema({
<<<<<<< HEAD
    postText: {
        type: String,
        required: 'You need to leave a thought!',
        minlength: 1,
        maxlength: 100,
        trim: true,
    },

    postAuthor: {
        type: String,
        required: true,
        trim: true,
    },
    
    requestType:{
        type: String,
        required: true,
        trim: true,
    },

    createdAt: {
        type: Date,
            default: Date.now
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
            default: Date.now
          },
        },
    ],
=======
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
>>>>>>> 9aa2c8d70327b51e24f3f40a42cd56d8290293b6
});

const Post = model('Post', postSchema);

module.exports = Post;