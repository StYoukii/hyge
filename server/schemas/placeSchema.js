const mongoose = require('../config/mongodb.js');

// Définition du schéma
let PlaceSchema = mongoose.Schema( {
  city : String,
  address : String, //TODO AM : à voir
  longitude : Number,
  latitude : Number
});

module.exports = PlaceSchema;
