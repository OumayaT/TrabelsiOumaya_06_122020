const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const session = require('cookie-session');




const sauceRoutes = require('./routes/sauce');
const userRoutes = require('./routes/user');


require('dotenv').config();


mongoose.connect(process.env.DB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

const app = express();





const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,  // 15 minutes 
  max: 100  // limite chaque IP à 100 requêtes par windowMs 
});

app.use(limiter);

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization, Content-Disposition');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  res.setHeader('Content-Security-Policy', "default-src 'self'");
  next();
});

const expiryDate = new Date(Date.now() + 3600000); // 1 heure (60 * 60 * 1000)
app.use(session({
  name: 'session',
  secret: process.env.SEC_SES,
  cookie: {
    secure: true,
    httpOnly: true,
    domain: 'http://localhost:3000',
    expires: expiryDate
  }
}));

app.use(bodyParser.json());
app.use(helmet());


//rendre les images accessibles publiquement pour toutes les requêtes vers la route /images

app.use('/image', express.static(path.join(__dirname, 'image')));

app.use('/api/sauces', sauceRoutes);
app.use('/api/auth', userRoutes);


module.exports = app;