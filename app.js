require('dotenv').config();
const express = require('express');
const cors = require('cors');
const policy = require('./src/routes/policy.js');
const dbConnect = require('./src/middleware/dbConnect.js');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());
// Connect to MongoDB.
dbConnect();

app.use('/api/policy', policy);

app.get('/', (req, res) => {
  res.send('<h1>Welcome to My App</h1>');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});