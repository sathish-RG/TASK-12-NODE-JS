const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  otp: { type: String },
  otpExpiry: { type: Date },
});

module.exports = mongoose.model('User', UserSchema);
