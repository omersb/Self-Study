"use strict"
/* ------------------------------------------------------
    Express - Personel API
------------------------------------------------------ */

const express = require('express');
const app = express();

/* ------------------------------------------------------ */

require('dotenv').config();
const PORT = process.env.PORT || 8000;

// asyncErrors to errorHandler
require('express-async-errors');

/* ------------------------------------------------------ */
// Connect to DB
const {dbConnection} = require('./src/configs/dbConnection');
dbConnection();

/* ------------------------------------------------------ */
// Middleware

// Accept JSON
app.use(express.json());

// SessionsCookies
app.use(require('cookie-session')({secret: process.env.SECRET_KEY}))

// res.getModelList():
app.use(require('./src/middlewares/findSearchSortPage'));

// Authenticated Control
app.use(require('./src/middlewares/authenticated'));


/* ------------------------------------------------------ */
// Routes

// HomePath
app.all('/', (req, res) => {
    res.send({
        error: false, message: "Welcome to Personnel API", isLogin: req.isLogin, user: req.user,
    });
});

// Departments
app.use('/auth', require('./src/routes/auth.router'));
app.use('/departments', require('./src/routes/department.router'));
app.use('/personnels', require('./src/routes/personnel.router'));


/* ------------------------------------------------------ */
/* ------------------------------------------------------ */
/* ------------------------------------------------------ */
// errorHandler
app.use(require('./src/middlewares/errorHandler'));

// Run Server
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));

/* ------------------------------------------------------ */
// Syncrınization
// require('./src/helpers/sync')();