const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  isSubscriber: {
    type: Boolean,
    required: true
  },
  readyToBrew: Boolean,
  equipment: Object,
  recipes: Object,
  shoppingList: Array
});

module.exports = mongoose.model('User', UserSchema);