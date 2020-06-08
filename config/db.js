const mongoose = require('mongoose');

const db = 'CONFIDENTIAL';

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    });
    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err.messgage);
    process.exit(1);
  }
};

module.exports = connectDB;
