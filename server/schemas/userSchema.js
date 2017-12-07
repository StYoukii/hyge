const mongoose = require('../config/mongodb.js');

// Définition du schéma
let UserSchema = mongoose.Schema( {
  id : String, //TODO générer,
  username : String,
  firstName : String,
  lastName : String,
  gender : String,
  email : String,
  password : String, //TODO AM : à changer??
  profilePhoto : String,
  birthDate : Date,
  city : String,
  phoneNumber : String,
  participationRate: Number,
  friendsList : [String] // liste des identifiants des amis
});

module.exports = UserSchema;
