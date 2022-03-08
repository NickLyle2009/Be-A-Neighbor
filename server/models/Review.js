const { Schema, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat')
const reviewSchema = new Schema(
  {
    reviewId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId()
    },
    reviewText: {
      type: String,
      required: true,
      maxlength: 500
    },
    username: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    }
  },
  {
    toJSON: {
      getters: true
    },
    id: false
  }
);

module.exports = reviewSchema;
