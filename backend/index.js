const express = require('express');
var cors = require('cors');

require('dotenv').config();

const dbConfig = require('./config/dbConfig'); // Assuming this handles DB connections

const app = express();

const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const adminRoutes = require('./routes/adminRoutes');

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/product', productRoutes);
app.use('/admin', adminRoutes);

// Default route to check if server is running
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Export the app for Vercel to handle
module.exports = app;
