const mongoose = require('mongoose');

const AddressSchema = new mongoose.Schema({
  street1: String,
  street2: String,
  city: String,
  zipCode: String,
  state: String
}, {
  timestamps: true
});

module.exports = mongoose.model('Address', AddressSchema);
