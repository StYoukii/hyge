const mongoose = require('../config/mongodb.js');
const UserSchema = require('./userSchema');

// Définition du schéma
let MessageEventSchema = mongoose.Schema( {
  author :UserSchema,
  content : String,
  date : Date,
  time : String //TODO AM : à valider
});

module.exports = MessageEventSchema;
