const express = require('express');
const router = express.Router();
const multer = require('multer');
const Court = require('../models/Court');
const { courtSchema } = require('../validation/schemas');

const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 2 * 1024 * 1024
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed'), false);
    }
  }
});

router.get('/', async (req, res) => {
  try {
    const courts = await Court.find();
    const courtsWithId = courts.map(court => ({
      ...court.toObject(),
      id: court._id.toString()
    }));
    res.json(courtsWithId);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/', upload.single('picture'), async (req, res) => {
  try {
    const courtData = { ...req.body };
    
    if (req.file) {
      const base64Image = req.file.buffer.toString('base64');
      const imageDataUrl = `data:${req.file.mimetype};base64,${base64Image}`;
      courtData.picture = imageDataUrl;
    }

    const { error, value } = courtSchema.validate(courtData);
    if (error) {
      return res.status(400).json({ 
        error: 'Validation failed', 
        details: error.details.map(d => d.message) 
      });
    }

    const court = new Court(value);
    const savedCourt = await court.save();
    const courtWithId = {
      ...savedCourt.toObject(),
      id: savedCourt._id.toString()
    };
    res.status(201).json(courtWithId);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/:id', upload.single('picture'), async (req, res) => {
  try {
    const courtData = { ...req.body };
    
    if (req.file) {
      const base64Image = req.file.buffer.toString('base64');
      const imageDataUrl = `data:${req.file.mimetype};base64,${base64Image}`;
      courtData.picture = imageDataUrl;
    }

    const { error, value } = courtSchema.validate(courtData);
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

    const courtWithId = {
      ...court.toObject(),
      id: court._id.toString()
    };
    res.json(courtWithId);
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

