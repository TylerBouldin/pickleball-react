const express = require('express');
const router = express.Router();
const Court = require('../models/Court');
const { courtSchema } = require('../validation/schemas');

router.get('/', async (req, res) => {
  try {
    const courts = await Court.find();
    res.json(courts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const { error, value } = courtSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ 
        error: 'Validation failed', 
        details: error.details.map(d => d.message) 
      });
    }

    const court = new Court(value);
    const savedCourt = await court.save();
    res.status(201).json(savedCourt);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { error, value } = courtSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ 
        error: 'Validation failed', 
        details: error.details.map(d => d.message) 
      });
    }

    const court = await Court.findByIdAndUpdate(
      req.params.id,
      value,
      { new: true, runValidators: true }
    );

    if (!court) {
      return res.status(404).json({ error: 'Court not found' });
    }

    res.json(court);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const court = await Court.findByIdAndDelete(req.params.id);
    
    if (!court) {
      return res.status(404).json({ error: 'Court not found' });
    }

    res.status(200).json({ message: 'Court deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

