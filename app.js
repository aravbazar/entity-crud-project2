const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
app.use(express.json());
const entityRoutes = require('./routes/entityRoutes');
app.use('/api/entities', entityRoutes);
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Error connecting to MongoDB:', error));
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
module.exports = app;
