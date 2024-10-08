const express = require('express');
const { MongoClient } = require('mongodb');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;

// Replace this with your MongoDB Atlas URI
const uri = 'mongodb+srv://KhushiSharma:Khushi4433@khushi2415.mj1rt.mongodb.net/?retryWrites=true&w=majority&appName=khushi2415';

let db;

// Connect to MongoDB Atlas
MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
    if (err) throw err;
    db = client.db('doubthub'); // Use your database name
    console.log('Connected to MongoDB Atlas');
});

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Route to handle user registration
app.post('/register', (req, res) => {
    const { name, email, password, role } = req.body;

    // Insert user data into the database
    db.collection('users').insertOne({ name, email, password, role }, (err, result) => {
        if (err) {
            res.status(500).send('Error registering user');
        } else {
            res.status(200).send('User registered successfully');
        }
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
