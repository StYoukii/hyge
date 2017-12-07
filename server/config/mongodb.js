const mongoose = require('mongoose');


// Connexion à la base Mongo en local
mongoose.connect('mongodb://localhost:27017/hyge');


const gererErreurConnexion = function() {
  console.error('Impossible de se connecter à la base de données local');
};

const loggerConnexionOK = function() {
  console.log('Connexion à la base OK');
};

mongoose.connection
// Gestion des erreurs
  .on('error', gererErreurConnexion)
  // Callback connexion OK
  .on('open', loggerConnexionOK);

// Gestion de la connexion
module.exports = mongoose;
