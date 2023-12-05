"use strict"

/* -----------------------------------------------
    ExpressJS
----------------------------------------------- */

/*
* npm init -y
* npm -i express dotenv
*/

/* ExpressJs Start */
const express = require('express');
const app = express();


/* ENV */
require('dotenv').config();
const HOST = process.env.HOST || 'http://localhost';
const PORT = process.env.PORT || 8000;
// console.log(`Server running at ${HOST}:${PORT}`);

/* ------------------------------------------------------ */

app.get('/', (request, response) => {
    response.send('Hello World')
})


/* ------------------------------------------------------ */

app.listen(PORT, HOST,() => console.log(`Server running at http://${HOST}:${PORT}`))

/* ------------------------------------------------------ */


