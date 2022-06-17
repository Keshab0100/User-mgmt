const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: false,
  },
  mobile: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('userdb', userSchema)