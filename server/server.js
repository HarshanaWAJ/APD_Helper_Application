require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser")
const authRoutes = require('./Routes/authRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection setup
const mongoURI = process.env.MONGODB_URL;

if (!mongoURI) {
    console.error('MongoDB URI is missing in the .env file');
    process.exit(1); // Exit if the URI is missing
}

// Connect to MongoDB Atlas
mongoose.connect(mongoURI);

// Connection event listeners
mongoose.connection.on('connected', () => {
    console.log('Database Connection Established!');
});

mongoose.connection.on('error', (err) => {
    console.error('Mongoose connection error:', err);
});

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected from the database');
});

// Routes
app.use('/api/auth', authRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});