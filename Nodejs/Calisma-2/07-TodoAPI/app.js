"use strict"

/* ------------------------------------------------------
    ExpressJS - TODOprofect with Sequelize
------------------------------------------------------ */

/*
* npm init -y
* npm i express dotenv
* npm i express-async-handler
*/

const express = require('express');
const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------ */

// Accept json data:
app.use(express.json());

// Router
app.use(require('./app/routes/todo'));

// Catch Errors
app.use(require('./app/errorHandler'))

/* ------------------------------------------------------ */
app.listen(PORT, () => console.log("Runnng: http://127.0.0.1:" + PORT));