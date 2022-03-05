const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserStorySchema = new Schema({
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
      message: {
          type: String,
          required: true
      }
})

const UserStory = mongoose.model('UserStory', UserStorySchema);

module.exports = UserStory;
