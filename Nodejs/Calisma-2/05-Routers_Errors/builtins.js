"use strict"
/* ------------------------------------------------------
    ExpressJS - Builtın Middleware
------------------------------------------------------ */


const express = require('express');
const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------ */

//* Data Receiving
//? Read json data
app.use(express.json());

//? recaive sent-data wwith req.body
app.all('/', (req, res) => {
    res.send({
        received: true,
        body: req.body,

    })
})

// Call static files from real-path
app.use('/img', express.static('./public/images'));

/* ------------------------------------------------------ */
app.listen(PORT, () => console.log("Runnng: http://127.0.0.1:" + PORT));