const express = require('express');
const router = express.Router();
const Event = require('../models/eventModel');
const Place = require('../models/placeModel');


/**
 * GET : renvoie la liste de tous les évènements
 */
router.get('/', function(req, res) {

  console.log('Nouvelle requête reçue en GET');

  // Création d'un nouvel utilisateur
  let promise = Event.find();

  promise.then(function (eventsList) {
    console.log('Nombre événements trouvés : ' + eventsList.length);
    res.json(eventsList);
  });

});

/**
 * POST : enregistre un nouvel événement
 */
router.post('/', function(req, res) {

  console.log('Nouvelle requête reçue en POST');

  // Création d'un nouvel évènement
  let event = new Event({
    organizer : req.body.organizer,
    title : req.body.title,
    description : req.body.description,
    date : new Date(req.body.date),
    time : req.body.time, //TODO AM : à valider
    place : new Place({ //TODO AM : à finir

    }),
    maxAvailableSlots : req.body.maxAvailableSlots,
    confirmedParticipants : [], //TODO AM : à voir comment gérer les invitations?
    invitedUsers : [],
    discussion : []
  });

  console.log('Enregistrement d\'un nouvel évènement : ' + JSON.stringify(event));

  event.save(function (err) {
    if (err) {
      console.log('Erreur lors de l\'enregistrement en base : ');
      console.log(err);
    }
  });


  res.json(event);
});

module.exports = router;
