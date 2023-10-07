// database.js
const admin = require('firebase-admin');
const mongoose = require('mongoose');

// Replace <your-mongodb-uri> with your MongoDB URI
const mongoURI = 'mongodb://localhost:27017/NASA-SPACE-APPS'; // Include the database name

// Connect to MongoDB
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

module.exports = mongoose;
