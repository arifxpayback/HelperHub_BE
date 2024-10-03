const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const servantRoutes = require('./routes/servantRoutes');

dotenv.config();

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB Connected'))
.catch((error) => console.log(`MongoDB connection error: ${error.message}`));

// Routes
app.use('/api/servants', servantRoutes);

// Basic route for testing
app.get('/', (req, res) => {
    res.send('Servant Management System API');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
