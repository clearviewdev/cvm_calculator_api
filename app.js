import 'dotenv/config';
import express from 'express';
// import { promises as fs } from 'fs';
import cors from 'cors';
//Route Import.
import policy from './src/routes/policy.js';
import dbConnect from './src/middleware/dbConnect.js';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());
//Connect to MongoDB.
dbConnect();

app.use('/api/policy', policy);

app.get('/', (req, res) => {
  res.send('<h1>Welcome to My App</h1>');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
