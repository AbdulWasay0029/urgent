const express = require('express');
const path = require('path');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'register.html'));
});

// POST
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  res.send(`Welcome ${username}`);
});

app.post('/register', (req, res) => {
  const { username, password } = req.body;
  res.send(`Registered ${username}`);
});

app.listen(3000, () => {
  console.log("Server running");
});