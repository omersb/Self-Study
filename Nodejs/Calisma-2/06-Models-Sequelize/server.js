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
// app.all('/', (req, res) => {
//     res.send("Welcome to Todo App");
// })

/* ------------------------------------------------------ */
//* TodoModel moved to todo.model.js

app.use(require('./todo.router'));


/* ------------------------------------------------------ */

const errorHandler = (err, req, res, next) => {
    const errorStatusCode = res.errorStatusCode ?? 500;
    console.log('errorHandler Çalıştı')
    res.status(errorStatusCode).send({
        error: true, message: err.message, cause: err.cause, body: req.body,
    })
}
app.use(errorHandler);

/* ------------------------------------------------------ */
app.listen(PORT, () => console.log("Runnng: http://127.0.0.1:" + PORT));