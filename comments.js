// Create web server
// Create a new Express application
const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Array to store comments
const comments = [];

// Get all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Create a new comment
app.post('/comments', (req, res) => {
  const comment = req.body;
  comments.push(comment);
  res.json(comment);
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});