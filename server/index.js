// server/index.js

const express = require("express");
const path = require('path');
require('dotenv').config()

const PORT = process.env.PORT || 3001;

const app = express();

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

// api calls
app.get("/api", (req, res) => {
  res.json({ message: `I shouldn't be showing you this ${process.env.MY_SECRET_FAKE_API_KEY}` });
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});