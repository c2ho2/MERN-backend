const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = Schema({
  name: {
    type: String,
  },
  age: {
    type: Number,
  }
})

module.exports = mongoose.model('User', UserSchema)