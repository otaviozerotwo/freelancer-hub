const mongoose = require('mongoose');
require('dotenv').config();

async function main() {
  // const mongoURI = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOSTNAME}/${process.env.MONGO_DATABASE}?retryWrites=true&w=majority`;
  const mongoURI = `mongodb+srv://user_admin:KIxlJhA81MPZcCzw@cluster0.uztjm.mongodb.net/freelancer_hub?retryWrites=true&w=majority`;

  try {
    await mongoose.connect(mongoURI);

    console.log('Connection to mongo successful!');
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = main;