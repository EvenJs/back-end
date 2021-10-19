const mongoose = require('mongoose');

const connectToDB = () => {

  if (!process.env.DB_URL) {
    console.log('connection string not defined');
    process.exit(1);
  }
  const connectionString = process.env.DB_URL;
  const db = mongoose.connection;

  db.on('connected', () => {
    console.log(`DB conneted, ${connectionString}`);
  });
  db.on('error', (error) => {
    console.error(error.message);
    process.exit(1);
  })

  return mongoose.connect(connectionString);
};

module.exports = connectToDB;