const mongoose = require('mongoose');
require('dotenv').config();

async function main() {
  const mongoURI = `mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DATABASE}`;

  try {
    await mongoose.connect(
      mongoURI
    );

    console.log('Connection to mongo successful!');
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = main;