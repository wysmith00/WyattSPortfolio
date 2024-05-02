import express from 'express';
import bodyParser from 'body-parser';
import { connectDB, Contact } from './database.js';

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.static('public')); // Serve static files
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to database
connectDB();

// Routes
app.post('/submit-form', (req, res) => {
    const { name, email, phone } = req.body;
    const newContact = new Contact({ name, email, phone });

    newContact.save((err) => {
        if (err) {
            console.error('Error saving contact information:', err);
            res.status(500).send('Error saving contact information.');
        } else {
            res.status(200).send('Contact information saved successfully!');
        }
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
