const UserSchema = require('../schemas/userSchema');
const mongoose = require('../config/mongodb.js');

// Création du modèle
let UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;
