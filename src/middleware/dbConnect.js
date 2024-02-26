require('dotenv').config();
const mongoose = require('mongoose');

async function dbConnect() {
  try {
    await connectToDatabase();
    console.log('Database Connected Successfully');
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}

const connectToDatabase = () => {
  return mongoose.connect(process.env.DATABASE_URL, {
    autoIndex: true,
  });
};

module.exports = dbConnect;