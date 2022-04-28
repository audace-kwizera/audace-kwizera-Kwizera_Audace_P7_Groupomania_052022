/** Appel de express */
const express = require('express');
/** Importation de .env*/
require("dotenv").config();
/** Installation de app express */
const app = express();
/** Création du port serveur */
const port = 3000;
/** Appel de mysql */
const mysql = require('mysql');



app.get('/', (req, res) => res.send('Hello  World'));

app.post('/', (req, res) => res.send('Hello Post World'));

app.all('/ping', (req, res) => res.send(+newDate()));

app.listen(port, () => console.log(`Èxemple App listening on port ${port}!`));