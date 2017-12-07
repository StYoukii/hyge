const PlaceSchema = require('../schemas/placeSchema');
const mongoose = require('../config/mongodb.js');

// Création du modèle
let PlaceModel = mongoose.model('Place', PlaceSchema);

module.exports = PlaceModel;
