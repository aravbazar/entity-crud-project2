const express = require('express');
const router = express.Router();
const Entity = require('../models/Entity');

// Create
router.post('/', async (req, res) => {
  try {
    const entity = new Entity(req.body);
    await entity.save();
    res.status(201).json(entity);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Read (all)
router.get('/', async (req, res) => {
  try {
    const entities = await Entity.find();
    res.json(entities);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Read (one)
router.get('/:id', async (req, res) => {
  try {
    const entity = await Entity.findById(req.params.id);
    if (!entity) return res.status(404).json({ message: 'Entity not found' });
    res.json(entity);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update
router.put('/:id', async (req, res) => {
  try {
    const entity = await Entity.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!entity) return res.status(404).json({ message: 'Entity not found' });
    res.json(entity);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete
router.delete('/:id', async (req, res) => {
  try {
    const entity = await Entity.findByIdAndDelete(req.params.id);
    if (!entity) return res.status(404).json({ message: 'Entity not found' });
    res.json({ message: 'Entity deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
