const mongoose = require('mongoose');

async function main() {
  try {
    await mongoose.connect(
      'mongodb://root:root@127.0.0.1:27017/freelancer_hub'
    );

    console.log('Connection to mongo successful!')
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = main;