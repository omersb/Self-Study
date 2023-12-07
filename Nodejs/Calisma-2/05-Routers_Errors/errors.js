"use strict"
/* ------------------------------------------------------
    ExpressJS - error management
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





/* ------------------------------------------------------ */
app.listen(PORT, () => console.log("Runnng: http://127.0.0.1:" + PORT));