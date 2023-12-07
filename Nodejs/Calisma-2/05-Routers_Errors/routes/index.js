"use strict"
/* ------------------------------------------------------
    ExpressJS - Routing
------------------------------------------------------ */

// const express = require("express");
// const router = express.Router();
// kısa kullanımı:
const router = require("express").Router();
router.get('/', (req, res) => {
    res.send({message: "Home Page"})
});
router.get('/about', (req, res) => {
    res.send({message: "About Page"})
});
router.get('/user/:userId', (req, res) => {
    res.send({message: "User Page"})
});

module.exports = router;