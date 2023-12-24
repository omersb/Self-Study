"use strict"

/* ------------------------------------------------------
    ExpressJS - Blog Project with Mongoose
------------------------------------------------------ */

/*
* npm init -y
* npm i express dotenv express-async-errors
* npm i mongoose
*/

const express = require('express');
const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------ */

app.use(express.json());

// Database Connection
require('./src/dbConnection');

// Routes
app.use('/blog', require('./src/routes/blogRoute'));


/* ------------------------------------------------------ */
// Synchronizations
// require('./src/sync')();

app.use(require('./src/errorHandler'));
app.listen(PORT, () => console.log("Runnng: http://127.0.0.1:" + PORT));
