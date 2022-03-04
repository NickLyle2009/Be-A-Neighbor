const { Schema, Types } = require('mongoose');

const assignmentSchema = new Schema(
  {
    assignmentId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    BabyFurnitue: {
      type: String,
      required: true,
      descrtiption: va50,
      minlength: 4,
      default: 'Unnamed assignment',
    },