const express = require('express');
const router = express.Router();
const Property = require('../models/Property');
const Entity = require('../models/Entity');

// Create property
router.post('/', async (req, res) => {
  try {
    const property = new Property(req.body);
    await property.save();
    
    // Update the associated entity
    if (property.entityId) {
      await Entity.findByIdAndUpdate(property.entityId, { $push: { properties: property._id } });
    }
    
    res.status(201).json(property);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all properties
router.get('/', async (req, res) => {
  try {
    const properties = await Property.find().populate('entityId').populate('addressId');
    res.json(properties);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get one property
router.get('/:id', async (req, res) => {
  try {
    const property = await Property.findById(req.params.id).populate('entityId').populate('addressId');
    if (!property) return res.status(404).json({ message: 'Property not found' });
    res.json(property);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update property
router.put('/:id', async (req, res) => {
  try {
    const property = await Property.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!property) return res.status(404).json({ message: 'Property not found' });
    res.json(property);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete property
router.delete('/:id', async (req, res) => {
  try {
    const property = await Property.findByIdAndDelete(req.params.id);
    if (!property) return res.status(404).json({ message: 'Property not found' });
    
    // Remove property reference from the associated entity
    if (property.entityId) {
      await Entity.findByIdAndUpdate(property.entityId, { $pull: { properties: property._id } });
    }
    
    res.json({ message: 'Property deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
