const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');
<<<<<<< HEAD
=======
const postSchema = require('./Post')
const { model, Schema } = mongoose;
>>>>>>> 9aa2c8d70327b51e24f3f40a42cd56d8290293b6
const bcrypt = require('bcrypt');


const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 5
  },
<<<<<<< HEAD
  Posts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Post',
    },
  ],
=======
  userPosts:[{
    type: Schema.Types.ObjectId,
    ref: 'Post'
    //required: true
  }]
>>>>>>> 9aa2c8d70327b51e24f3f40a42cd56d8290293b6
});

userSchema.pre('save', async function(next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});

userSchema.methods.isCorrectPassword = async function(password) {
  return await bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;
