const mongoose = require('mongoose');

let UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  passwordAgain: {
    type: String,
  },
});

let UserModel = mongoose.model('UserModel', UserSchema);

module.exports = UserModel;
