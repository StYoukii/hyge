const express = require('express');
const router = express.Router();
const User = require('../models/userModel');

/**
 * GET : renvoie la liste de tous les utilisateurs
 */
router.get('/', function(req, res) {

  console.log('Nouvelle requête reçue en GET');

  // Création d'un nouvel utilisateur
  let promise = User.find();

  promise.then(function (usersList) {
    res.json(usersList);
  });

});

/**
 * POST : enregistre un nouvel utilisateur
 */
router.post('/', function(req, res) {

  console.log('Nouvelle requête reçue en POST');

  // Création d'un nouvel utilisateur
  let user = new User({
    firstName : req.body.firstName,
    lastName : req.body.lastName,
    gender : req.body.gender,
    email : req.body.email,
    password : req.body.password, //TODO AM : à changer??
    profilePhoto : req.body.profilePhoto,
    birthDate : new Date(req.body.birthDate),
    city : req.body.city,
    phoneNumber : req.body.phoneNumber,
  });

  console.log('Enregistrement d\'un nouvel utilisateur : ' + JSON.stringify(user));

  user.save(function (err) {
    if (err) {
      console.log('Erreur lors de l\'enregistrement en base : ');
      console.log(err);
    }
  });


  res.json(user);
});

module.exports = router;
