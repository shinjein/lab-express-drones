// Iteration #1
const mongoose = require('mongoose');
const Drone = require('../models/Drone.model');
const DB_NAME = 'express-drones-dev';

mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const drones = [
    { 
      name: 'chopper',
      propellers: 3,
      maxSpeed: 12
    },
    {
      name: 'fast_guy',
      propellers: 4,
      maxSpeed: 15
    },
    {
      name: 'slug69',
      propellers: 2,
      maxSpeed: 10
    }
];

Drone.create(drones)
  .then(dronesFromDB => {
    console.log(`Created ${dronesFromDB.length} drones`);
    // Once created, close the DB connection
    mongoose.connection.close();
  })
  .catch(err => console.log(`An error occurred while creating books from the DB: ${err}`));