import 'dotenv/config';
import express from 'express';
// import { promises as fs } from 'fs';
import cors from 'cors';
//Route Import.
import policy from './src/routes/policy.js';
import field from './src/routes/field.js';
import dbConnect from './src/middleware/dbConnect.js';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());
//Connect to MongoDB.
dbConnect();

app.use('/api/policy', policy);
app.use('/api/field', field);

app.use('/', (req, res, next) => {
  res.status(200).send('<h1>Server Health Ok.</h1>');
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
