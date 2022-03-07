const mongoose = require("mongoose");
const User = require("./User");
const { Schema, model } = mongoose;

const postSchema = new Schema({
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
});

const Post = model('Post', postSchema);

module.exports = Post;