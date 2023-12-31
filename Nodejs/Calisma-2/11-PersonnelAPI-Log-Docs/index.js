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

// Logging
// npm i morgan
// https://expressjs.com/en/resources/middleware/morgan.html
const morgan = require('morgan');
// console.log(morgan)
// app.use(morgan('tiny')); // tiny sadece istek bilgilerini gösterir
// app.use(morgan('combined'));  // combined bütün bilgileri gösterir
// app.use(morgan('IP:remote-addr TIME:[:date[clf]] REQ:":method :url HTTP/:http-version" RES::status :res[content-length] APP:":user-agent"'));

// Write Logs to File
// const fs = require('node:fs');
// app.use(morgan('combined', {stream: fs.createWriteStream('./access.log', {flags: 'a'})}));

// Write Logs to File - day by day
const fs = require('node:fs');
const now = new Date();
const today = now.toISOString().split('T')[0];
app.use(morgan('combined', {stream: fs.createWriteStream(`./logs/${today}.log`, {flags: 'a'})}));

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