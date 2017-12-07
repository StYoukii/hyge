const mongoose = require('../config/mongodb.js');
const UserSchema = require('./userSchema');
const PlaceSchema = require('./placeSchema');
const MessageEvent = require('./messageEventSchema');

// Définition du schéma
let EventSchema = mongoose.Schema( {
  organizer : UserSchema,
  type : String,
  title : String,
  description : String,
  date : Date,
  time : String, //TODO AM : à valider
  place : PlaceSchema,
  maxAvailableSlots : Number,
  confirmedParticipants : [UserSchema], //TODO AM : à voir comment gérer les invitations?
  invitedUsers : [UserSchema],
  eventsMessages : [MessageEvent]
});

module.exports = EventSchema;
