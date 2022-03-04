const mongoose = require('mongoose');
const { Schema } = mongoose;
const userStories = new Schema


({
 user: {
    type: String,
    required:true
    },

comments: {
    type: String
    }
})
const userStories = model('User', userStoriesSchema);

module.exports = userStories;

   