const mongoose = require('mongoose');

const PropertySchema = new mongoose.Schema({
  name: String,
  noOfAcres: Number,
  pricePerAcre: Number,
  price: Number,
  closingDate: Date,
  documentsURL: String,
  googleMapLocation: String,
  googleEarthLocation: String,
  remainingAcres: Number,
  potentialPricePerAcres: Number,
  longitude: String,
  latitude: String,
  entityId: { type: mongoose.Schema.Types.ObjectId, ref: 'Entity' },
  addressId: { type: mongoose.Schema.Types.ObjectId, ref: 'Address' }
}, {
  timestamps: true
});

module.exports = mongoose.model('Property', PropertySchema);
