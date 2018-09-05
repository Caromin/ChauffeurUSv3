const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  }
});

const User = mongoose.model("User", UserSchema);
