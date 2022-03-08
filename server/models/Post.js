const { Schema, model } = require('mongoose');
const replySchema = require('./Reply');

const postSchema = new Schema(
  {
    postTitle: {
      type: String,
      required: "Don't leave blank",
      minlength: 1,
      maxlength: 20
    },
    postText: {
      type: String,
      required: "Don't leave blank",
      minlength: 1,
      maxlength: 100
    },
    createdAt: {
      type: Date,
      default: Date.now,
      // get: timestamp => dateFormat(timestamp)
    },
    username: {
      type: String,
      required: false
    },
    zipcode: {
      type: Number,
      minlength: 5,
      maxlength: 5
    },
    category: {
      type: [String],
    },
    reply: [replySchema],
  },
  {
    toJSON: {
      getters: true
    },
    id: false
  }
);

postSchema.virtual('replyCount').get(function() {
  return this.reply.length;
});

const Post = model('Post', postSchema);

module.exports = Post;
