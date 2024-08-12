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
  properties: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Property' }]
}, {
  timestamps: true
});

module.exports = mongoose.model('Entity', EntitySchema);
