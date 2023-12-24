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
// Session Cookies
// https://www.npmjs.com/package/cookie-session
// npm i cookie-session

const session = require('cookie-session');

app.use(session({
    name: 'cookie',  // defult name is 'session'
    secret: process.env.SECRET_KEY || 'secret_keys_for_cookies',
    // maxAge: 1000 * 60 * 60 * 24  // 24 hours
}));

/* ------------------------------------------------------ */

app.use(express.json());

// Database Connection
require('./src/dbConnection');

// Routes
app.use('/user', require('./src/routes/userRoute'));
app.use('/blog', require('./src/routes/blogRoute'));


/* ------------------------------------------------------ */
// Synchronizations
// require('./src/sync')();

app.use(require('./src/errorHandler'));
app.listen(PORT, () => console.log("Runnng: http://127.0.0.1:" + PORT));
