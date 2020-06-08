const express = require('express');
const connectDB = require('./config/db');

// Creating the server
const app = express();

// Connecting Database
connectDB();

// Using body parser middleware
app.use(express.json({ extended: false }));

// Initializing the port
const port = process.env.NODE_ENV || 5000;

// Defining routes
app.use('/logs', require('./routes/logs'));
app.use('/techs', require('./routes/techs'));

//Starting the server
app.listen(port, () => console.log(`Server started on port ${port}...`));
