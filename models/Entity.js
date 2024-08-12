const mongoose = require('mongoose');
const EntitySchema = new mongoose.Schema({
  name: String,
  contactEmail: String,
  totalEquity: Number,
  totalShare: Number,
  managingMember1: Number,
  managingMember2: Number,
  isChildEntity: String,
  formationDate: Date,
  isPersonalEntity: String,
  willOwnProperty: String,
  hasSubscriptionAgreement: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Entity', EntitySchema);
