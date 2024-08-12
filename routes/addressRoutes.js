const express = require('express');
const router = express.Router();
const Address = require('../models/Address');

// Create address
router.post('/', async (req, res) => {
  try {
    const address = new Address(req.body);
    await address.save();
    res.status(201).json(address);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all addresses
router.get('/', async (req, res) => {
  try {
    const addresses = await Address.find();
    res.json(addresses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get one address
router.get('/:id', async (req, res) => {
  try {
    const address = await Address.findById(req.params.id);
    if (!address) return res.status(404).json({ message: 'Address not found' });
    res.json(address);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update address
router.put('/:id', async (req, res) => {
  try {
    const address = await Address.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!address) return res.status(404).json({ message: 'Address not found' });
    res.json(address);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete address
router.delete('/:id', async (req, res) => {
  try {
    const address = await Address.findByIdAndDelete(req.params.id);
    if (!address) return res.status(404).json({ message: 'Address not found' });
    res.json({ message: 'Address deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
