"use strict"
/* ------------------------------------------------------
    ExpressJS - Routing
------------------------------------------------------ */

const express = require('express');
const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------ */
//? "Router" is special app for URL control in ExpressJS

// app.get('/', (req, res) => { res.send({message: "Home Page"}) });
// app.get('/about', (req, res) => { res.send({message: "About Page"}) });
// app.get('/user/:userId', (req, res) => { res.send({message: "User Page"}) });

// const router = express.Router();
// router.get('/', (req, res) => {
//     res.send({message: "Home Page"})
// });
// router.get('/about', (req, res) => {
//     res.send({message: "About Page"})
// });
// router.get('/user/:userId', (req, res) => {
//     res.send({message: "User Page"})
// });
// app.use(router);

// const router = require("./routes");
// app.use(router);

app.use(require("./routes"));


/* ------------------------------------------------------ */
app.listen(PORT, () => console.log("Runnng: http://127.0.0.1:" + PORT));