const mongoose = require("mongoose");
const User = require("./User");
const { Schema } = mongoose;

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
    get: (timestamp) => dateFormat(timestamp)
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
        get: (timestamp) => dateFormat(timestamp),
      },
    },
  ],
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
