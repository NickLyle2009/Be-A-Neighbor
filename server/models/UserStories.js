const mongoose = require('mongoose');

const UserStories = new Schema({
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