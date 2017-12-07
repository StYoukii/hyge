const MessageEventSchema = require('../schemas/eventSchema');
const mongoose = require('../config/mongodb.js');

// Création du modèle
let MessageEventModel = mongoose.model('MessageEvent', MessageEventSchema);

module.exports = MessageEventModel;
