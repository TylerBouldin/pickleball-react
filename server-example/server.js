require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const courtsRoutes = require('./routes/courts');
const groupsRoutes = require('./routes/groups');
const productsRoutes = require('./routes/products');

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use('/api/courts', courtsRoutes);
app.use('/api/groups', groupsRoutes);
app.use('/api/products', productsRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

