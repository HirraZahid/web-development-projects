// server.js

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Mock user data (replace with your actual user data structure)
let users = [
    { id: 1, email: 'user1@example.com', password: 'password1', name: 'User One' },
    { id: 2, email: 'user2@example.com', password: 'password2', name: 'User Two' }
];

// Route to handle login POST request
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    // Find user by email and password
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        // Return user details and a token (dummy token for demonstration)
        res.json({ user: { id: user.id, email: user.email, name: user.name }, token: 'dummy_token' });
    } else {
        // Return error message for failed login attempt
        res.status(401).json({ error: 'Invalid credentials' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Mock API Server is running on http://localhost:${PORT}`);
});
