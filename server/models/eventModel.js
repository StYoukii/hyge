const EventSchema = require('../schemas/eventSchema');
const mongoose = require('../config/mongodb.js');

// Création du modèle
let EventModel = mongoose.model('Event', EventSchema);

module.exports = EventModel;
