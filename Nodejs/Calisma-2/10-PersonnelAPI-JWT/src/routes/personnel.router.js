"use strict"
/* ------------------------------------------------------
    Express - Personel API
------------------------------------------------------ */
const router = require('express').Router();
/* ------------------------------------------------------ */

const personnel = require('../controllers/personnel.controller');

// URL: /personnel

// Login & Logout
router.post('/login', personnel.login);
router.get('/logout', personnel.logout);

router.route('/')
    .get(personnel.list)
    .post(personnel.create);

router.route('/:id')
    .get(personnel.read)
    .put(personnel.update)
    .delete(personnel.delete);

/* ------------------------------------------------------ */
module.exports = router;
