const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
// Import data for seed
const data = require('./data');
// Import model for Present
const Present = require('../models/Present');
// DB URL
const MONGO_URL = 'mongodb://localhost:27017/dear-santa';

mongoose.connect(MONGO_URL)
  .then(response => console.log(`Connected to the database ${response.connection.name}`))
  .then(() => {
    // Clean database
    return Present.deleteMany();
  })
  .then(() => {
    return Present.insertMany(data);
  })
  .then((insertedItems => {
    insertedItems.forEach(present => console.log(present));
  }))
  .catch(err => console.error(err));