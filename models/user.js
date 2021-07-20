// Importer mongoose
const mongoose = require('mongoose');
require('mongoose-type-email');

// Package pour vérifié que l'email n'est pas déjà enregistré
const uniqueValidator = require('mongoose-unique-validator');


// Structure du schéma user
/*
const userSchema = mongoose.Schema({
    email : {type: String, required: true, unique: true},
    password : {type: String, required: true}
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('user', userSchema);*/

const userSchema = mongoose.Schema({
    // L'email doit être unique
    email: {
      type: String,
      unique: true,
      required: [true, "Veuillez entrer votre adresse email"],
      match: [/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, "Veuillez entrer une adresse email correcte"]
    },
    // enregistrement du mot de pass
    password: {
      type: String,
      required: [true, "Veuillez choisir un mot de passe"]
    }
  });
  
  // Plugin pour garantir un email unique
  // On applique ce validateur au schéma avant d'en faire un modèle et on appelle la méthode plugin et on lui passe uniqueValidator
  userSchema.plugin(uniqueValidator);
  
 
  
  // On exporte ce schéma sous forme de modèle : le modèle s'appellera user et on lui passe le shéma de données
  module.exports = mongoose.model('User', userSchema);