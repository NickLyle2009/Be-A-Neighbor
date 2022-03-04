const mongoose = require('mongoose');

const { Schema } = mongoose;

const postSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    donationCategory: {
        type: String,
        required: false
    }
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
