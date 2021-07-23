SO PEKOCKO

Présentation et instructions

Présentation
Le site SO PEKOCKO est un site d'avis culinaires où les utilisateurs peuvent partager des fiches concernant des sauces selon un modèle précis, incluant la possibilité de "liker" ou "disliker" les sauces.

Objectif: permettre à l'internaute de s'inscrire sur le site et de pouvoir:

- consulter toutes les sauces enregistrées,
- créer des sauces,
- modifier les sauces qu'il a créé,
- supprimer les sauces qu'il a crée,
- liker ou disliker les sauces enregistrées sur le site.
Instructions pour le lancement: partie Frontend et partie Backend
Partie frontend
Précision: il faut installer node-sass à part.

Avec un terminal, aller dans le dossier "frontend" puis:

- taper: "npm install",
- puis: "npm start",
- enfin: dans votre navigateur se rendre à l'adresse: http://localhost:4200 
Partie backend
Avec un terminal, aller dans le dossier backend, puis:

Avant d'accéder à l'application, vous devrez créer un fichier .env dans le répertoire racine ( backend).
Dans ce nouveau fichier, ajoutez des variables spécifiques à l'environnement sur les nouvelles lignes sous la forme NAME=VALUE, comme ci-dessous :

    DB_URI='your MongoDB id'
    SEC_SES ='La liste des clés à utiliser pour signer et vérifier les valeurs des cookies ou une chaîne qui sera utilisée comme clé unique si elle keys n'est pas fournie'
    TOKEN_SECRET = clé secrète de chiffrement 

 puis, toujours dans le terminal ouvert dans le dossier backend:    
        -taper: "npm install",
        -puis: "nodemon server",
        -le serveur écoute sur le port: http://localhost:3000
        
Arrivé à ce point, vous pouvez utiliser les fonctionnalités du site.

ps: le travail présenté ici a été réalisé pour la partie backend. Pour la partie frontend, l'adresse du code original est la suivante:

https://github.com/OpenClassrooms-Student-Center/dwj-projet6

Cette partie frontend originale a été incluse dans ce repository ci-présent dans un souci de praticité, pour ne pas avoir 2 repositories à cloner ainsi que quelques manipulatons additionnelles.
